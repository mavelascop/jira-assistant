"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[290],{8939:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(7313);var o=s(6614),r=s(1499),l=s(4616),a=s(8933),i=s(4711),n=s(794),c=s(6417);const d="Will Import",g="Error",h="Excluded",u="ticketNo",m="startDate",k="timespent",p="comment",x={ticketno:u,ticket:u,issuekey:u,issue:u,key:u,id:u,startdate:m,started:m,logdate:m,loggeddate:m,worklogdate:m,date:m,timespent:k,timespentseconds:k,seconds:k,hoursspent:k,time:k,spent:k,comment:p,comments:p,description:p,details:p};class j extends r.Z{constructor(e){super(e,"Worklog","fa fa-clock-o"),this.transformHeader=e=>x[e.replace(/ /g,"").toLowerCase()]||null,this.importWorklogs=()=>{const{autoUpload:e,worklogData:t}=this.state,s=t.filter((e=>e.selected));if(e)this.uploadSelectedWorklogs(s);else{const e=s.map((e=>{e.selected=!1,e.disabled=!0;const{ticketNo:t,startDate:s,timespent:o,comment:r}=e,l=Math.floor(o/3600),a=Math.floor(o%3600/60),i={ticketNo:t,dateStarted:s,timeSpent:`${l.pad(2)}:${a.pad(2)}`,description:r};return this.$worklog.saveWorklog(i).then((t=>{e.id=t.id,e.status="Imported. Not Uploaded"}),(t=>{e.status=g,e.error=t}))}));Promise.all(e).then((()=>{this.$message.info("Worklog import completed. Upload it to Jira from Calendar or Worklog gadget."),this.setState({worklogData:[...t],selectedCount:""})}))}},this.toggleAllRows=()=>{let{selectAll:e,worklogData:t}=this.state;if(!t)return;e=!e;const s=e?d:h;t=[...t],t.forEach((t=>{t.disabled||(t.selected=e,t.status=s)})),this.setState({selectAll:e,worklogData:t,selectedCount:this.getSelectedLogs(t).length||""})},this.getSelectedLogs=e=>(e||this.state.worklogData).filter((e=>e.selected)),this.toggleAutoUpload=e=>this.setState({autoUpload:e}),this.toggleSelection=(e,t)=>{let{worklogData:s}=this.state;s=[...s],e.selected=!e.selected,e.status=e.selected?d:h,this.setState({worklogData:s,selectedCount:this.getSelectedLogs(s).length||""})},this.downloadTemplate=()=>{const e=(new Date).format("dd-MMM-yyyy HH:mm:ss"),t=["Ticket No,Start Date,Timespent,Comment",`JA-1001,${e},1w 2d 3h 4m,Logs 59 hours and 4 mins`,`JA-1001,${e},1d 1h,Logs 9 hours`,`JA-1002,${e},12.5,Logs 12 hours and 30 mins`,`JA-1003,${e},14:4,Logs 14 hours and 40 mins`,`JA-1003,${e},8,Logs 8 hours`];(0,i.ut)(t.join("\n"),"sample_worklog")},this.clearWorklogs=()=>{this.$q.reset(),this.setState({isLoading:!1,selectedCount:"",worklogData:null,ticketSummary:{},selectAll:!1})},(0,l.f3)(this,"UtilsService","UserUtilsService","TicketService","QueueService","WorklogService","SessionService","MessageService"),this.maxHrsToLog=this.$session.CurrentUser.maxHours;const t=this.$session.CurrentUser.autoUpload||!1;this.state={autoUpload:t,ticketSummary:{},selectedCount:""},this.$q.on("completed",(()=>{this.$message.info("Worklog upload completed"),this.setState({isLoading:!1,selectedCount:""})}))}processData(e){const t=e.map((e=>{let{ticketNo:t="",startDate:s="",timespent:o="",comment:r=""}=e;t=t.trim(),s=s.trim(),o=o.trim(),r=r.trim();let l=!0,a=!1,n=d,c="";const g=e=>{l=!1,a=!0,n="Invalid",c?c+=`;${e}`:c=e};if(t||g("Ticket No is required"),s){const e=this.$utils.convertDate(s);e instanceof Date?s=e:g("Log Date is invalid")}else g("Log Date is required");if(o){const e=(0,i.ZQ)(o);e>0?o=e:g("Timespent is invalid")}else g("Timespent is required");return{selected:l,disabled:a,status:n,error:c,ticketNo:t,startDate:s,timespent:o,comment:r}})),s=this.getSelectedLogs(t),o=s.map((e=>e.ticketNo)).distinct();this.$ticket.getTicketDetails(o,!0).then((e=>{const t=e.reduce(((e,t)=>{const{key:s,fields:{summary:o,assignee:r,issuetype:{iconUrl:l,name:a}={}}}=t,{displayName:i}=r||{};return e[s]={summary:o,assignee:i,issueTypeIcon:l,issueType:a},e}),{});this.setState({ticketSummary:t})}));const r=o.reduce(((e,t)=>(e[t]={summary:"Loading..."},e)),{});this.setState({worklogData:t,ticketSummary:r,selectAll:!0,selectedCount:s.length||""})}uploadSelectedWorklogs(e){e.groupBy((e=>e.ticketNo)).forEach((e=>{this.$q.add((()=>{const t=e.values;return 1===t.length?this.uploadWorklog(t[0]):t.reduce((async(e,t)=>(await e,this.uploadWorklog(t))),Promise.resolve())}))})),this.$q.start()}uploadWorklog(e){const{ticketNo:t,startDate:s,timespent:o,comment:r}=e;e.status="Uploading...",this.setState((e=>{let{worklogData:t}=e;return{worklogData:[...t]}}));return this.$worklog.upload(t,s,1e3*o,r).then((t=>{e.disabled=!0,e.selected=!1,e.status="Uploaded",e.worklogId=t.id,this.setState((e=>{let{worklogData:t}=e;return{worklogData:[...t]}}))}),(t=>{const{message:s,response:o,status:r,error:{errors:l,errorMessages:a}={}}=t;e.disabled=!0,e.selected=!1,e.status=g;const i=l&&Object.keys(l);return s?e.error=s:null!==i&&void 0!==i&&i.length?e.error=i.reduce(((e,t)=>{const s=l[t];return e?`${e}; ${s}`:s}),""):null!==a&&void 0!==a&&a.length?e.error=a.reduce(((e,t)=>e?`${e}; ${t}`:t),""):(null===o||void 0===o?void 0:o.length)>5&&o.length<=100?e.error=o:r&&(e.error=`Status Code: ${r}`),this.setState((e=>{let{worklogData:t}=e;return{worklogData:[...t]}})),Promise.resolve()}))}formatTimespent(e){return"number"===typeof e?this.$utils.formatSecs(e):e}renderFooter(){const{state:{autoUpload:e,isLoading:t,selectedCount:s}}=this;return(0,c.jsxs)("div",{className:"pnl-footer",children:[(0,c.jsx)("div",{className:"pull-left",children:(0,c.jsx)(a.XZ,{checked:e,label:"Directly upload worklog to Jira",disabled:t,onChange:this.toggleAutoUpload})}),(0,c.jsxs)("div",{className:"pull-right",children:[(0,c.jsx)(a.zx,{type:"info",icon:"fa fa-list",label:"Clear",disabled:t,onClick:this.clearWorklogs}),(0,c.jsx)(a.zx,{type:"success",icon:e?"fa fa-upload":"fa fa-floppy-o",disabled:t||!(s>0),label:e?`Upload ${s} worklogs`:`Import ${s} worklogs`,onClick:this.importWorklogs})]})]})}getWorklogLink(e){const{ticketNo:t,worklogId:s,status:o}=e;return(0,c.jsx)(n.Z,{className:"link",href:this.$userutils.getWorklogUrl(t,s),children:o})}render(){const{worklogData:e,ticketSummary:t,selectAll:s}=this.state;return super.renderBase((0,c.jsx)("div",{className:"import-worklog",children:(0,c.jsxs)(o.TT,{dataset:e,className:"worklog-table",children:[(0,c.jsx)(o.Et,{children:(0,c.jsxs)(o.lE,{children:[(0,c.jsx)(o.sg,{children:(0,c.jsx)(a.XZ,{checked:s,onChange:this.toggleAllRows})}),(0,c.jsx)(o.sg,{sortBy:"ticketNo",children:"Ticket No"}),(0,c.jsx)(o.sg,{children:"Issue Type"}),(0,c.jsx)(o.sg,{children:"Summary"}),(0,c.jsx)(o.sg,{sortBy:"startDate",children:"Log Date"}),(0,c.jsx)(o.sg,{sortBy:"timespent",children:"Timespent"}),(0,c.jsx)(o.sg,{children:"Comment"}),(0,c.jsx)(o.sg,{children:"Assignee"}),(0,c.jsx)(o.sg,{sortBy:"status",children:"Status"})]})}),(0,c.jsx)(o.XP,{children:(e,s)=>{const o=t[e.ticketNo]||null,r=o||{summary:"Unavailable"};return(0,c.jsxs)("tr",{className:e.error?"row-error":"",children:[(0,c.jsx)("td",{children:(0,c.jsx)(a.XZ,{checked:e.selected,disabled:e.disabled,onChange:()=>this.toggleSelection(e,s)})}),o&&(0,c.jsx)("td",{children:this.getTicketLink(e.ticketNo)}),!o&&(0,c.jsx)("td",{children:e.ticketNo}),(0,c.jsxs)("td",{children:[r.issueTypeIcon&&(0,c.jsx)("img",{src:r.issueTypeIcon,alt:""})," ",r.issueType]}),(0,c.jsx)("td",{children:r.summary}),(0,c.jsx)("td",{children:this.formatDate(e.startDate)}),(0,c.jsx)("td",{children:this.formatTimespent(e.timespent)}),(0,c.jsx)("td",{children:e.comment}),(0,c.jsx)("td",{children:r.assignee}),e.worklogId&&(0,c.jsx)("td",{title:"Worklog uploaded successfully",children:this.getWorklogLink(e)}),!e.worklogId&&(0,c.jsxs)("td",{title:e.error,children:[e.error&&(0,c.jsx)("span",{className:"fa fa-exclamation-triangle msg-error"})," ",e.status]})]},s)}}),(0,c.jsxs)(o.ch,{span:9,children:["Upload the list of worklogs by clicking the ( ",(0,c.jsx)("span",{className:"fa fa-upload"})," ) icon in top right corner. Click ",(0,c.jsx)("span",{className:"link",onClick:this.downloadTemplate,children:"here"})," to download a sample template."]})]})}))}}const f=j}}]);