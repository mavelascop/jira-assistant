import { GadgetActionType } from './_constants';
import Calendar from './Calendar/Calendar';
import StatusWiseTimeSpentGadget from './StatusWiseTimeSpent/StatusWiseTimeSpentGadget';
import DateWiseWorklog from './DateWiseWorklog';
import WorklogGadget from './WorklogGadget/WorklogGadget';
import WorklogReport from './WorklogReport/WorklogReport';
import WorklogBarChartGadget from './WorklogBarChartGadget';
import MyBookmarks from './MyBookmarks';
import MyOpenTickets from './MyOpenTickets';
import MyReports from './MyReports';
import PendingWorklog from './PendingWorklog';
import TicketWiseWorklog from './TicketWiseWorklog';
import IssueReport from './IssueReport/IssueReport';


export { GadgetActionType, Calendar, DateWiseWorklog, WorklogGadget, WorklogReport, WorklogBarChartGadget, MyBookmarks, MyOpenTickets, MyReports, PendingWorklog, TicketWiseWorklog, StatusWiseTimeSpentGadget, IssueReport };

export const GadgetList = [
    { id: 'myOpenTickets', icon: 'fa-eye', name: 'My Open Tickets', details: 'Contains the list of open tickets assigned to you' },
    { id: 'myBookmarks', icon: 'fa-bookmark', name: 'Bookmarks', details: 'List of bookmarked tickets' },
    { id: 'dateWiseWorklog', icon: 'fa-list-alt', name: 'Logged Work - [Daywise]', details: 'List of worklog\'s grouped by date' },
    { id: 'worklogBarChart', icon: 'fa-bar-chart', name: 'Worklog Bar Chart', details: 'Worklogs represented as a stacked bar chart' },
    { id: 'teamWorklogReport', icon: 'fa-bar-chart', name: 'Team Daywise Worklog', details: 'Worklogs represented for individual users on daily basis as table' },
    { id: 'pendingWorklog', icon: 'fa-clock-o', name: 'Worklog - [Pending Upload]', details: 'Worklog\'s still pending for upload' },
    { id: 'ticketWiseWorklog', icon: 'fa-list-alt', name: 'Logged Work - [Ticketwise]', details: 'List of worklog\'s grouped by ticket' },
    { id: 'myFilters', icon: 'fa-filter', name: 'My Reports', details: 'List of custom & advanced report built / imported by you' },
    { id: 'agendaDay', icon: 'fa-calendar', name: 'Current day calendar', details: 'Display calendar for current date with worklog and meetings' },
    { id: 'agendaWeek', icon: 'fa-calendar', name: 'Current week calendar', details: 'Display calendar for current week with worklog and meetings' },
    { id: 'listDay', icon: 'fa-calendar', name: 'Current day worklog List', details: 'Display calendar as listview for current date with worklog and meetings' },
    { id: 'listWeek', icon: 'fa-calendar', name: 'Current week worklog list', details: 'Display calendar as listview for current week with worklog and meetings' },
    { id: 'listMonth', icon: 'fa-calendar', name: 'Current month worklog list', details: 'Display calendar as listview for current month with worklog and meetings' },
    { id: 'sWiseTSpent', icon: 'fa-list-alt', name: 'Status Wise Time Spent', details: 'Provides summary of time spent on each ticket on individual status' },
    { id: 'issueReport', icon: 'fa-table', name: 'Issue Report', details: 'Issue Report for QA' }
];