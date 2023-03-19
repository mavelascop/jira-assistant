import moment from "moment";
import { inject } from "../../services/injector-service";
import { filterDaysWithoutWorklog, generateUserDayWiseData, getEpicDetails, getUserWiseWorklog, getWeekHeader } from "./userdaywise/utils_group";
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

            const result = await generateWorklogReportForDateRange(moment(fromDate).startOf('day'),
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

async function generateWorklogReportForDateRange(fromDate, toDate, state) {
    const { $session: { CurrentUser: { name, epicNameField } } } = inject('SessionService');
    const issues = await getIssuesWithWorklogFor(fromDate, toDate, state, epicNameField?.id);
    if (!issues.length) {
        return;
    }

    const epicDetails = await getEpicDetails(issues, epicNameField?.id);

    const { userListMode, userGroups: savedGroups, reportUserGrp } = state;
    const useGroups = userListMode === '2' && reportUserGrp === '1';
    if (!useGroups && reportUserGrp !== '1') {
        const { groupByFunc, getGroupName } = getGroupingFunction(reportUserGrp, epicNameField?.id, epicDetails);

        const flatWorklogs = [];
        const flatWorklogsGroupedByTicketNo = [];
        const groupReport = issues.groupBy(groupByFunc)
            .map(({ values }) => ({ issues: values, grpName: getGroupName(values) })) // Create object with group names
            .sortBy(({ grpName }) => grpName) // Sort with group names
            .reduce((obj, { grpName, issues }) => {
                const {
                    flatWorklogs: flatData,
                    groupReport: { dates, groupedData: g },
                    flatWorklogsGroupedByTicketNo : flatData2
                } = formGroupedWorklogs(issues, fromDate, toDate, name?.toLowerCase(), state, useGroups && savedGroups, epicDetails, obj.dates, grpName);

                obj.dates = dates;

                // If custom group does not have any worklog, don't include it in report
                if (!g.grandTotal) {
                    return obj;
                }

                flatWorklogs.addRange(flatData);
                flatWorklogsGroupedByTicketNo.addRange(flatData2);

                // Add the item in the grouplist to our array of groups
                const [grp] = g;
                grp.name = grpName;
                delete grp.isDummy;
                const { groupedData } = obj;
                groupedData.push(grp);

                // Sumup other extended properties in array
                groupedData.grandTotal = (groupedData.grandTotal || 0) + (g.grandTotal || 0);
                groupedData.grandTotalCost = (groupedData.grandTotalCost || 0) + (g.grandTotalCost || 0);
                groupedData.total = sumAndMergeObjectProps(groupedData.total, g.total);
                groupedData.totalCost = sumAndMergeObjectProps(groupedData.totalCost, g.totalCost);

                return obj;
            }, { groupedData: [] });

        // As multiple groups are executed seperately, filtering logic is added here
        groupReport.dates = filterDaysWithoutWorklog(state.daysToHide, groupReport.dates);
        groupReport.weeks = getWeekHeader(groupReport.dates);

        return { flatWorklogs, groupReport, flatWorklogsGroupedByTicketNo };
    } else {
        return formGroupedWorklogs(issues, fromDate, toDate, name?.toLowerCase(), state, useGroups && savedGroups, epicDetails);
    }
}

function getGroupingFunction(reportUserGrp, epicNameField, epicDetails) {
    if (reportUserGrp === '3') { // group by issuetype
        return {
            getGroupName: (issues) => {
                const { name } = issues[0].fields.issuetype;
                return name;
            },
            groupByFunc: issue => issue.fields.issuetype.id
        };
    } else if (reportUserGrp === '4' && epicNameField) { // group by epic
        return {
            getGroupName: (issues) => {
                const epic = issues[0].fields[epicNameField];
                const summary = epic && epicDetails?.[epic]?.fields.summary;
                const display = summary ? `${epic} - ${summary}` : epic;

                return display || '<Issues without epic>';
            },
            groupByFunc: issue => issue.fields[epicNameField]
        };
    } else { // group by project
        return {
            getGroupName: (issues) => {
                const { name, key } = issues[0].fields.project;
                return `${name} (${key})`;
            },
            groupByFunc: issue => issue.fields.project.key
        };
    }
}

function sumAndMergeObjectProps(obj1, obj2) {
    if (!obj1) {
        return obj2;
    } else if (!obj2) {
        return obj1;
    } else {
        const newObj = { ...obj1 };
        Object.keys(obj2).forEach(k => {
            newObj[k] = (newObj[k] || 0) + (obj2[k] || 0);
        });
        return newObj;
    }
}

function formGroupedWorklogs(issues, fromDate, toDate, name, state, userGroups, epicDetails, dates, grpName) {
    const { userwiseLog, userwiseLogArr } = getUserWiseWorklog(issues, fromDate, toDate, name, state, epicDetails);
    if (!userGroups) {
        userGroups = [createGroupObjectWithUsers(userwiseLogArr, grpName)];
    }

    const settings = {
        fromDate: fromDate.toDate(),
        toDate: toDate.toDate(),
        timeZone: state.timeZone,
        dates,
        daysToHide: !dates ? state.daysToHide : null
    };

    const groupReport = generateUserDayWiseData(userwiseLog, userGroups, settings, state);
    const flatWorklogs = generateFlatWorklogData(userwiseLog, userGroups);
    const flatWorklogsGroupedByTicketNo = generateFlatWorklogDataGroupedByTicketNo(userwiseLog, userGroups);
    
    return { groupReport, flatWorklogs, flatWorklogsGroupedByTicketNo };
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

async function getIssuesWithWorklogFor(fromDate, toDate, state, epicNameField) {
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
        throw Error('Either userlist or project is required for generating worklog report');
    }

    const authorJQL = userList ? `worklogAuthor in ("${userList.join('","')}")` : '';
    const projectJQL = projectKeys ? `project in ("${projectKeys.join('","')}")` : '';
    const settJQL = (authorJQL || projectJQL) ? `(${authorJQL}${(authorJQL && projectJQL) ? ' OR ' : ''}${projectJQL}) AND ` : '';

    const dateJQL = `(worklogDate >= '${fromDate.clone().add(-1, 'days').format("YYYY-MM-DD")}' and worklogDate < '${toDate.clone().add(1, 'days').format("YYYY-MM-DD")}') `;
    const jql = `${settJQL}${dateJQL}${additionalJQL}`;

    return await svc.$jira.searchTickets(jql, fieldsToFetch, 0, { worklogStartDate: fromDate.toDate(), worklogEndDate: toDate.toDate() });
}