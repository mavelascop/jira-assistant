import moment from 'moment';
import { inject } from "../../services/injector-service";
import { getSettingsObj } from "./datastore";
import { generateRangeReport } from "./range-report";

export function setStateValue(setState) {
    return function (value) { setState(value); };
}

export function getSettingsToStore(_, getState) {
    return function (opts) { return getSettingsObj(getState(), opts); };
}

export function groupsChanged(setState) {
    return function (userGroups) {
        if (userGroups && Array.isArray(userGroups)) {
            setState({ userGroups });
        }
    };
}

export function addWorklog(setState) {
    const { $session: { CurrentUser: { maxHours } } } = inject('SessionService');
    const maxSecsPerDay = (maxHours || 8) * 60 * 60;

    return function (user, ticketNo, dateStarted, logged) {
        let timeSpent = (maxSecsPerDay || 0) - (logged || 0);
        if (timeSpent < 60) {
            timeSpent = "01:00";
        }

        if (moment(dateStarted).isSame(moment(), 'day')) {
            dateStarted = new Date();
        }

        setState({ showWorklogPopup: true, worklogItem: { ticketNo, dateStarted, timeSpent } });
    };
}

export function worklogAdded(setState) {
    return function () {
        setState({ showWorklogPopup: false, worklogItem: null });
    };
}

export function hideWorklog(setState) {
    return function () {
        setState({ showWorklogPopup: false, worklogItem: null });
    };
}

export function fetchData(setState, getState) {
    return async function () {
        await generateRangeReport(setState, getState)();
    };
}

export function convertSecs(_, getState) {
    const { $utils: { convertSecs: cs } } = inject('UtilsService');

    return (val) => {
        if (!val && val !== 0) {
            return val;
        }

        return cs(val, { format: getState('logFormat') === "1" });
    };
}

export function flatGridSettingsChanged(setState) {
    return function (flatTableSettings) { setState({ flatTableSettings }); };
}

export function getColumnSettings(_, getState) {
    const formatSecs = convertSecs(_, getState);
    const { $userutils: { formatDateTime } } = inject('UserUtilsService');

    return function (formatTicket) {
        const { userListMode, timeframeType } = getState();
        const includeGroup = userListMode === '2';
        const includeSprint = timeframeType === '1';
        const timeFormat = getState('logFormat') === '1' ? 'string' : 'number';

        //displayFormat: null, sortValueFun: null, groupValueFunc: null
        //, allowSorting: true, allowGrouping: true
        return [
            includeGroup && { field: "groupName", displayText: "Group Name", type: "string" },
            includeSprint && { field: "sprintName", displayText: "Sprint Name", type: "string" },
            { field: "projectName", displayText: "Project Name", type: "string" },
            { field: "issueType", displayText: "Issue Type", type: "string" },
            { field: "epicDisplay", displayText: "Epic", type: "string", format: (text, row) => formatTicket(text, row.epicUrl) },
            { field: "parent", displayText: "Parent", type: "string", format: (text, row) => formatTicket(text, row.parentUrl) },
            { field: "parentType", displayText: "Parent Type", type: "string" },
            { field: "ticketNo", displayText: "Ticket No", type: "string", format: (text, row) => formatTicket(text, row.ticketUrl) },
            { field: "statusName", displayText: "Status", type: "string" },
            { field: "summary", displayText: "Summary", type: "string" },
            { field: "logTime", displayText: "Log Date & Time", type: "datetime", format: (val) => formatDateTime(val) },
            { field: "logCreated", displayText: "Worklog Created", type: "datetime", format: (val) => formatDateTime(val) },
            { field: "logUpdated", displayText: "Worklog Updated", type: "datetime", format: (val) => formatDateTime(val) },
            { field: "userDisplay", displayText: "Log user", type: "string" },
            { field: "assignee", displayText: "Assignee", type: "string" },
            { field: "reporter", displayText: "Reporter", type: "string" },
            { field: "timeSpent", displayText: "Hr. Spent", type: timeFormat, format: formatSecs },
            { field: "originalestimate", displayText: "Ori. Estm.", type: timeFormat, format: formatSecs },
            { field: "totalLogged", displayText: "Total Worklogs", type: timeFormat, format: formatSecs },
            { field: "remainingestimate", displayText: "Rem. Estm.", type: timeFormat, format: formatSecs },
            { field: "estVariance", displayText: "Estm. Variance", type: 'string', format: (value) => (value > 0 ? "+" : "") + formatSecs(value) },
            { field: "comment", displayText: "Comment" },
        ].filter(Boolean);
    };
}

export function getColumnSettingsBonifications(_, getState) {
    const formatSecs = convertSecs(_, getState);
    const { $userutils: { formatDateTime } } = inject('UserUtilsService');

    return function (formatResume) {
        const timeFormat = getState('logFormat') === '1' ? 'string' : 'number';
        const dateFormat = 'MM/yyyy';

        //displayFormat: null, sortValueFun: null, groupValueFunc: null
        //, allowSorting: true, allowGrouping: true
        return [
            { field: "projectName", displayText: "Proyecto", type: "string" },
            { field: "parentType", displayText: "Parent Issue Type", type: "string" },
            { field: "summary", displayText: "Resumen", type: "string", format: (text, row) => formatResume(text, row.ticketNo, row.ticketUrl) },
            { field: "userDisplay", displayText: "Responsable", type: "string" },
            { field: "timeSpent", displayText: "Total horas incurridas", type: timeFormat, format: formatSecs },
            { field: "logTime", displayText: "Actualizada", type: "datetime", format: (val) => formatDateTime(val, dateFormat) }
        ].filter(Boolean);
    };
}