import moment from "moment";
import { inject } from "../../services/injector-service";
import { getUserWiseWorklog } from "../WorklogReport/userdaywise/utils_group";
import { generateFlatWorklogData, getFieldsToFetch, getProjectKeys, getUniqueUsersFromGroup, generateFlatWorklogDataGroupedByTicketNo } from "./utils";

export function generateRangeReport(setState, getState) {
    return async function () {
        const newState = { loadingData: false };
        try {
            setState({ loadingData: true, errorTitle: '', errorMessage: '' });

            const { dateRange: { fromDate, toDate } } = getState();
            if (!fromDate || !toDate) {
                return null;
            }

            const result = await generateIssueReportForDateRange(moment(fromDate).startOf('day'),
                moment(toDate).endOf('day'), getState());

            if (!result) {
                const { $message } = inject('MessageService');
                $message.warning('No worklog information returned matching your filters', 'No data available');
                return;
            }

            const { groupReport, flatWorklogs, flatWorklogsGroupedByTicketNo } = result;

            newState.groupReport = groupReport;
            newState.flatWorklogs = flatWorklogs;
            newState.flatWorklogsGroupedByTicketNo = flatWorklogsGroupedByTicketNo;

            newState.reportLoaded = true;
        } catch (err) {
            console.error('Error pulling range report:', err);
            const { $message } = inject('MessageService');

            const errorMessage = err.message || err.error?.errorMessages?.[0] || 'Unknown error. Check the console for more details';
            const errorTitle = err.message ? 'Worklog report' : 'Unknown error';
            setState({ errorTitle, errorMessage });
            $message.error(errorMessage, errorTitle);
        } finally {
            setState(newState);
        }
    };
}

async function generateIssueReportForDateRange(fromDate, toDate, state) {
    const { $session: { CurrentUser: { name, epicNameField } } } = inject('SessionService');
    const issues = await getIssuesFor(fromDate, toDate, state, epicNameField?.id);
    if (!issues.length) {
        return;
    }

    const { userListMode, userGroups: savedGroups, reportUserGrp } = state;
    const useGroups = userListMode === '2' && reportUserGrp === '1';

    return formGroupedWorklogs(issues, fromDate, toDate, name?.toLowerCase(), state, useGroups && savedGroups);

}

function formGroupedWorklogs(issues, fromDate, toDate, name, state, userGroups, grpName) {
    const { userwiseLog, userwiseLogArr } = getUserWiseWorklog(issues, fromDate, toDate, name, state);
    if (!userGroups) {
        userGroups = [createGroupObjectWithUsers(userwiseLogArr, grpName)];
    }

    const flatWorklogs = generateFlatWorklogData(userwiseLog, userGroups);
    const flatWorklogsGroupedByTicketNo = generateFlatWorklogDataGroupedByTicketNo(userwiseLog, userGroups);
    
    return { flatWorklogs, flatWorklogsGroupedByTicketNo };
}

// Set as empty as it would look odd in chart headers
const noGroupName = '';
function createGroupObjectWithUsers(users, name) {
    const result = users.reduce((obj, u) => {
        obj.totalHours += (u.totalHours || 0);
        obj.totalCost += (u.totalCost || 0);
        return obj;
    }, { totalHours: 0, totalCost: 0 });

    return { isDummy: true, name: name || noGroupName, users, ...result };
}

async function getIssuesFor(fromDate, toDate, state, epicNameField) {
    const svc = inject('JiraService');

    const { fieldsToFetch, additionalJQL } = getFieldsToFetch(state, epicNameField, {
        projects: getProjectKeys(state, true),
        users: getUniqueUsersFromGroup(state, true)
    });

    const userList = getUniqueUsersFromGroup(state);
    const projectKeys = getProjectKeys(state);

    // When we receive empty array, it means user has configured to use these values
    // So when items are missing, do not pull any issues
    if (userList?.length === 0 || projectKeys?.length === 0) {
        throw Error('Either userlist or project is required for generating issue report');
    }

    const authorJQL = userList ? `assignee in ("${userList.join('","')}")` : '';
    const projectJQL = projectKeys ? `project in ("${projectKeys.join('","')}")` : '';
    const settJQL = (authorJQL || projectJQL) ? `(${authorJQL}${(authorJQL && projectJQL) ? ' OR ' : ''}${projectJQL}) AND ` : '';

    const dateJQL = `(created >= '${fromDate.clone().add(-1, 'days').format("YYYY-MM-DD")}' and created < '${toDate.clone().add(1, 'days').format("YYYY-MM-DD")}') `;
    const jql = `${settJQL}${dateJQL}${additionalJQL}`;

    const result = await svc.$jira.searchTickets(jql, fieldsToFetch, 0);
    console.log("query", result);
    console.log("user", userList);
    return result;
}