import {
    CommentsDisplay, DateDisplay, IssueDisplay, IssueLinkDisplay,
    ItemDisplay, ProgressDisplay, ProjectDisplay, TagsDisplay,
    TicketDisplay, TimeSpentDisplay, TimeTrackDisplay,
    UnknownItemDisplay, UserDisplay
} from "../../../display-controls";
import { resolve } from "../../../services/injector-service";
import { execAst, parseCustExpr } from "../../../common/jsExec";

export async function loadReportData(query, utils) {
    if (!query) { return {}; }

    const $jira = resolve('JiraService');
    const dataFields = query.fields.map((f) => f.field);
    const data = await $jira.searchTickets(query.jql, dataFields);

    console.log("jql", query.jql);
    console.log("dataFields", dataFields);
    console.log("CustomReport data", data);

    if (dataFields.includes("subtasks")) {
        const subtaskIds = [];
        data.forEach(
            elem => elem.fields.subtasks.forEach(
                subtask => subtaskIds.push(subtask.key)
            )
        );

        console.log("subtaskIds", subtaskIds.length);

        if (subtaskIds && subtaskIds.length > 0) {
            const subtasksMap = new Map();
            let subtasksData = [];
            const subtaskDataFields = [ ...dataFields ];
            subtaskDataFields.filter(e => e !== "subtasks");
            subtaskDataFields.push("worklog");
            subtaskDataFields.push("parent");

            let it = 0;
            do {
                const subtaskIdsPartial = subtaskIds.slice(it, it+10);

                const subtasksJql = `key in ('${subtaskIdsPartial.join("', '")}')`;
                const subtasksPartialData = await $jira.searchTickets(subtasksJql, subtaskDataFields);

                subtasksData = subtasksData.concat(subtasksPartialData);

                it = it +10;
            } while (subtaskIds.length > it);

            subtasksData.forEach(
                elem => {
                    if (subtasksMap.has(elem.fields.parent.key)) {
                        subtasksMap.set(elem.fields.parent.key, 
                            subtasksMap.get(elem.fields.parent.key).concat(subtaskArrayToStr(elem))
                        );
                    }
                    else {
                        subtasksMap.set( elem.fields.parent.key, subtaskArrayToStr(elem) );
                    }
                }
            );
            
            console.log(subtasksMap);

            data.forEach(
                elem => elem.fields.subtasks = subtasksMap.get(elem.key)
            );

        }

        console.log("CustomReport data2", data);

    }

    const ref = { utils };
    const columnList = query.fields.filter(f => !f.hide).map(processDisplayField.bind(ref));

    ref.fieldWithExpr = columnList.filter(f => !!f.ast);

    const reportData = data.map(processIssue.bind(ref));

    console.log("CustomReport data3", reportData);
    console.log("ref", ref);

    if (ref.hasWorklogs) {
        const usrObj = ref.usersObj;
        const userFields = Object.keys(usrObj).map(u => {
            const usr = usrObj[u];

            return {
                field: u, displayText: usr.displayName, type: 'seconds',
                groupText: 'Log Work', allowGrouping: false,
                viewComponent: TimeSpentDisplay,
                props: {}
            };
        });

        userFields.push({
            field: 'totalWorklog', displayText: 'Total Log Work', type: 'seconds',
            groupText: 'Log Work', allowGrouping: false,
            viewComponent: TimeSpentDisplay,
            props: {}
        });

        const wlIndex = columnList.findIndex(({ field }) => field === 'worklog');

        columnList.splice(wlIndex, 1, ...userFields);
    }

    const newState = { isLoading: false, reportData, columnList, settings: query.settings };

    return newState;
}

function subtaskArrayToStr(elem) {
    console.log(elem);
    let lastUpdate = "";
    if (elem.fields.worklog.worklogs.length > 0) {
        lastUpdate = elem.fields.worklog.worklogs.reduce(function(a, b) {
                return a.updated > b.updated? a.updated : b.updated;
        });
    }
    
    return `${elem.fields.parent.key}#${elem.key}#${elem.fields.issuetype.name}#${elem.fields.status.name}#${elem.fields.customfield_15307}#${lastUpdate};`;
}

function processDisplayField(curCol) {
    const { id, field, name, header = name, type, isArray, expr } = curCol;
    const props = {};

    const col = {
        id, field, displayText: header,
        type, props,
        allowSorting: !isArray,
        allowGrouping: field !== 'summary' && field !== 'description'
    };

    if (expr) {
        col.ast = parseCustExpr(expr);
        col.exprField = field;
        col.field = id;
        col.viewComponent = UnknownItemDisplay;
    }
    else {
        col.viewComponent = getViewComponent(field === 'issuekey' ? 'issuekey' : type, col, isArray);
    }

    if (!col.allowSorting) {
        col.allowGrouping = false;
    }

    if (col.allowGrouping) {
        setGroupOptions(col);
    }

    return col;
}

function setGroupOptions(curCol) {
    const options = [
        { type: 'check', label: 'Issue count', prop: 'showGroupCount', value: true },
        { separator: true }
    ];

    switch (curCol.type) {
        default: return;
        case 'issuetype':
        case 'status':
        case 'priority':
        case 'resolution':
            options.splice(1, 1);
            break;
        case 'string':
            options.push({ type: 'radio', label: 'Show value', prop: 'valueType', value: 'value', default: true });
            options.push({ type: 'radio', label: 'Show count', prop: 'valueType', value: 'count' });
            options.push({ type: 'radio', label: 'Distinct count', prop: 'valueType', value: 'distinct' });
            break;
        case 'user':
            options[1] = { type: 'check', label: 'Show Image', prop: 'showImage' };
            options.push({ separator: true });
            options.push({ type: 'radio', label: 'Show name', prop: 'valueType', value: 'name', default: true });
            options.push({ type: 'radio', label: 'Show email id', prop: 'valueType', value: 'email' });
            options.push({ type: 'radio', label: 'Show both', prop: 'valueType', value: 'both' });
            break;
        case 'project':
            options.push({ type: 'radio', label: 'Show name', prop: 'valueType', value: 'name' });
            options.push({ type: 'radio', label: 'Show key', prop: 'valueType', value: 'key', default: true });
            options.push({ type: 'radio', label: 'Show both', prop: 'valueType', value: 'both' });
            break;
        case 'parent':
            options[1] = { type: 'check', label: 'Show status', prop: 'showStatus', default: true };
            options.push({ separator: true });
            options.push({ type: 'radio', label: 'Show key', prop: 'valueType', value: 'key', default: true });
            options.push({ type: 'radio', label: 'Show summary', prop: 'valueType', value: 'summary' });
            options.push({ type: 'radio', label: 'Show both', prop: 'valueType', value: 'both' });
            break;
        case 'date':
        case 'datetime':
            options.push({ type: 'radio', label: 'Friendly date', prop: 'funcType', value: 'friendly' });
            options.push({ type: 'radio', label: 'Group by year', prop: 'funcType', value: 'yyyy' });
            options.push({ type: 'radio', label: 'Group by month', prop: 'funcType', value: 'MMMM' });
            options.push({ type: 'radio', label: 'Group by both', prop: 'funcType', value: 'yyyy-MM (MMMM)', default: true }); // Default format set inside groupableGrid as well
            options.push({ type: 'radio', label: 'Group by date', prop: 'funcType', value: 'yyyy-MM-dd' });
            break;
        case 'number':
        case 'seconds':
            options.push({ type: 'radio', label: 'Group by field', prop: 'funcType', value: '', default: true });
            options.push({ type: 'radio', label: 'Sum of field', prop: 'funcType', value: 'sum' });
            options.push({ type: 'radio', label: 'Avg of field', prop: 'funcType', value: 'avg' });
            options.push({ type: 'radio', label: 'Count having value', prop: 'funcType', value: 'count' });
            break;
    }

    curCol.groupOptions = options;
}

function processIssue(issue) {
    const fields = issue.fields;
    fields.issuekey = issue.key;
    fields.id = issue.id;

    processWorklogs.call(this, fields);
    processComments(fields);
    processExpressions.call(this, fields);
    return fields;
}

function processComments(fields) {
    if (!fields.comment) { return; }

    fields.comment = fields.comment.comments;
}

function processWorklogs(fields) {
    if (!fields.worklog) { return; }

    fields.worklog = fields.worklog.worklogs;

    if (!fields.worklog.length) {
        delete fields.worklog;
        return;
    }

    this.hasWorklogs = true;

    const users = this.usersObj || {};
    this.usersObj = users;

    for (const worklog of fields.worklog) {
        const { author, timeSpentSeconds } = worklog;

        const { accountId, emailAddress } = author;
        const uid = emailAddress || accountId;

        if (!users[uid]) {
            users[uid] = author;
        }

        fields[uid] = (fields[uid] || 0) + timeSpentSeconds;
        fields['totalWorklog'] = (fields['totalWorklog'] || 0) + timeSpentSeconds;
    }
}

function processExpressions(fields) {
    if (!this.fieldWithExpr.length) { return; }

    for (const f of this.fieldWithExpr) {
        if (typeof f.ast === 'string') {
            fields[f.id] = f.ast;
            continue;
        }

        try {
            fields[f.id] = executeAst(f.ast, fields[f.exprField], {
                Fields: fields,
                Utils: this.utils
            });
        } catch (err) {
            fields[f.id] = `Error: ${err?.message || err}`;
        }
    }
}

function executeAst(ast, thisArg, moreProps) {
    const val = execAst(ast,
        {
            'this': thisArg,
            ...moreProps,
            JSON,
            parseInt,
            parseFloat,
            isNaN,
            Math,
            Number,
            Date,
            func: dynFunction.bind(this, moreProps)
        });

    return postProcessExprOutput(val);
}

function dynFunction(moreProps, expr, args, addlProps) {
    if (!expr) {
        throw Error('No expression is passed to func. First argument should be an expression');
    }

    if (args && !Array.isArray(args)) {
        throw Error('Second argument should be an array of argument names used in expression');
    }

    if (addlProps && typeof addlProps !== 'object') {
        throw Error('Third argument should be an object containing all the variables from current scope to be available for expression');
    }

    const ast = parseCustExpr(expr);
    addlProps = { ...moreProps, ...addlProps };

    return function () {
        let props = arguments;
        props = args.reduce((all, cur, idx) => {
            all[cur] = props[idx];
            return all;
        }, addlProps);

        return executeAst(ast, this, props);
    };
}

function postProcessExprOutput(val) {
    if (val instanceof Date) {
        return this.utils.formatDateTime(val);
    } else if (typeof val === 'object' && !Array.isArray(val)) {
        const keys = Object.keys(val);
        // Check if the returned object is a react component
        if (keys.includes('type') && keys.includes('key') && keys.includes('props')) {
            return val;
        } else {
            return JSON.stringify(val);
        }
    }

    return val;
}

// eslint-disable-next-line complexity
function getViewComponent(fieldType, col, isArray) {
    const { props } = col;

    switch (fieldType) {
        case 'issuekey': return TicketDisplay;
        case 'epicLink':
            props.hideContext = true;
            return TicketDisplay;
        case 'project':
            col.fieldKey = `${col.field}.name`;
            return ProjectDisplay;
        case 'user':
            col.fieldKey = `${col.field}.displayName`;
            return UserDisplay;
        case 'comment':
            col.allowSorting = false;
            return CommentsDisplay;
        case 'issuelinks': return IssueLinkDisplay;
        case 'seconds': return TimeSpentDisplay;
        case 'workratio':
            props.converter = function (val) { return val === -1 ? null : val; };
            return TimeSpentDisplay;
        case 'timetracking': return TimeTrackDisplay;
        case 'parent':
            col.fieldKey = `${col.field}.key`;
            return IssueDisplay;
        case 'progress':
        case 'aggregateprogress':
            col.fieldKey = `${col.field}.percent`;
            return ProgressDisplay;
        case 'sprint': return TagsDisplay;
        case 'attachment':
            props.hrefProp = 'content';
            props.iconClass = 'fa-paperclip';
            props.tagProp = 'filename';
            return TagsDisplay;
        case 'component':
            props.titleProp = 'description';
            return TagsDisplay;
        case 'version':
            props.titleProp = 'releaseDate';
            return TagsDisplay;
        case 'option':
            col.fieldKey = `${col.field}.value`;
            props.tagProp = 'value';
            return TagsDisplay;
        case 'votes':
            col.fieldKey = `${col.field}.votes`;
            props.tagProp = 'votes';
            props.hideZero = true;
            return TagsDisplay;
        case 'watches':
            col.fieldKey = `${col.field}.watchCount`;
            props.tagProp = 'watchCount';
            props.hideZero = true;
            return TagsDisplay;
        case 'date':
        case 'datetime':
            return DateDisplay;
        case 'issuetype':
        case 'status':
        case 'priority':
        case 'resolution':
            col.fieldKey = `${col.field}.name`;
            return ItemDisplay;
        case 'epicStatus':
            props.textField = 'value';
            props.iconField = '';
            col.fieldKey = `${col.field}.value`;
            return ItemDisplay;
        case 'string':
            if (!isArray) { return null; }

            props.tagProp = '';

            return TagsDisplay;
        case 'number': return UnknownItemDisplay;
        default:
            col.allowSorting = false;
            col.allowGrouping = false;
            return UnknownItemDisplay;
    }
}