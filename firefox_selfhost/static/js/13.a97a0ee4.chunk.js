"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[13,536],{7154:(e,t,s)=>{s.d(t,{T2:()=>l,ZP:()=>a});var i=s(6666),r=s(1404),o=s.n(r),n=s(4711);class a{constructor(){const e=new(o().Workbook);e.created=new Date,e.creator="Jira Assistant",e.lastModifiedBy="Jira Assistant",this.document=e}addTable(e){e=i(e);const t=this.normalizeSheetName(e.attr("export-sheet-name"));console.log("Exporting ",t),this.worksheet=this.document.addWorksheet(t),this.sheetOptions={mergeCells:[],width:{},styles:[],rowsToRemove:[],rowsToHide:[]},this.curRowNum=1;const s=e.find("> thead:not([exportignore]) > tr:not([exportignore])");this.prepareData(s),console.log("header rows",s.length);const r=e.find("> tbody:not([exportignore]) > tr:not([exportignore])");this.prepareData(r),console.log("bodyRows rows",r.length),this.worksheet.views=[{state:"frozen",xSplit:0,ySplit:s.length}],this.sheetOptions.mergeCells.forEach((e=>this.worksheet.mergeCells(e)));const o=this.sheetOptions.width;Object.keys(o).forEach((e=>{const t=this.worksheet.getColumn(e),s=parseFloat(o[e])/7.178;t.width=s})),this.sheetOptions.styles.forEach((e=>{const t=this.worksheet.getCell(e.key),s=e.style,i={};"left"!==s.textAlign&&(i.horizontal=s.textAlign),"left"!==s.verticalAlign&&(i.vertical=s.verticalAlign),t.alignment=i;const r=s.fontWeight||"";t.style.font={size:this.getFontSize(s.fontSize),bold:r.indexOf("bold")>-1||r>=550}})),this.sheetOptions.rowsToHide.forEach((e=>this.worksheet.getRow(e).hidden=!0)),this.sheetOptions.rowsToRemove.orderByDescending().forEach((e=>this.worksheet.spliceRows(e,1))),this.worksheet=null,this.sheetOptions=null,this.curRowNum=null}normalizeSheetName(e){return e?e.replace(/\[/g,"(").replace(/\]/g,")").replace(/:/g,"-").replace(/[?/\\]/g,""):e}trim(e){return e.replace(/^\s+|\s+$/gm,"")}getFontSize(e){return e?e.endsWith("px")?.75*parseInt(e.replace("px",""),10):e.endsWith("pt")?parseInt(e.replace("pt",""),10):e.endsWith("em")?.0833333*parseInt(e.replace("em",""),10):void 0:e}rgbaToHex(e){if(!e)return e;const t=e.substring(e.indexOf("(")).split(","),s=parseInt(this.trim(t[0].substring(1)),10),i=parseInt(this.trim(t[1]),10),r=parseInt(this.trim(t[2]),10);t[3]=t[3]||"1)";const o=parseFloat(this.trim(t[3].substring(0,t[3].length-1))).toFixed(2);return this.fixSize(s.toString(16))+this.fixSize(i.toString(16))+this.fixSize(r.toString(16))+this.fixSize((255*o).toString(16).substring(0,2))}fixSize(e){return 1===e.length?`0${e}`:e}prepareData(e){const t=this.worksheet,s=[];e.each(((e,r)=>{r=i(r);const o=this.getColArray(r,s);if(o){t.addRow(o).commit(),this.curRowNum++}}))}getColArray(e,t){const s=e.find("> th, > td"),r=[],o=!!e.attr("exportignore");return o&&this.sheetOptions.rowsToRemove.push(this.curRowNum),e.attr("exporthidden")&&this.sheetOptions.rowsToHide.push(this.curRowNum),s.each(((e,s)=>{for(;t[r.length]>0;)t[r.length]=t[r.length]-1,r[r.length]=null;let n=(s=i(s)).attr("exportValue");if(n||(n=s.text()),n&&!o){n=n.trim();switch(s.attr("exportType")){case"int":n=function(e){if(!e)return e;const t=parseInt(e,10);return isNaN(t)?e:t}(n);break;case"float":case"number":n=function(e){if(!e)return e;const t=parseFloat(e);return isNaN(t)?e:t}(n);break;case"date":n=h(n,!0);break;case"datetime":n=h(n,!1)}}r[r.length]=n;let a=s.attr("colspan")||1;const l=(s.attr("rowspan")||1)-1;l&&(t[r.length-1]=l);const c=this.numToChar(r.length),d=this.curRowNum;if(a>1||l>0){const e=this.numToChar(r.length+(a-1)),t=this.curRowNum+l;this.sheetOptions.mergeCells.push(`${c+d}:${e}${t}`)}if(!o){if(!a||a<2){const e=s.width();e>20&&(this.sheetOptions.width[c]=e)}this.sheetOptions.styles.push({key:c+d,style:window.getComputedStyle(s.get(0),null)})}for(;a>1;)a-=1,r[r.length]=null,l&&(t[r.length-1]=l)})),r}export(e){this.document.xlsx.writeBuffer().then((t=>{!function(e,t){const s=new FileReader;s.onload=function(i){(0,n.FA)(s.result,e.type,t)},s.readAsBinaryString(e)}(new Blob([t],{type:"application/octet-stream"}),`${e}.xlsx`)}))}charToNum(e){for(let t=0,s=1;t<s;t++,s++)e==this.numToChar(t)&&(s=t)}numToChar(e){const t=(e-1)%26,s=this.chr(65+t),i=parseInt((e-1)/26,10);return i>0?this.numToChar(i)+s:s}chr(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e))):String.fromCharCode(e)}}const l={XLSX:"XLSX",CSV:"CSV",PDF:"PDF"};function h(e,t){if(!e)return e;const s=new Date(e);return isNaN(s.getTime())?e:s}},536:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var i=s(7313),r=s(1329),o=s(816),n=s.n(o),a=s(5991),l=s(6444),h=s(9422),c=s(4711),d=s(6417);class p extends i.PureComponent{constructor(e){super(e),this.timeZoneChanged=e=>{const{user:t}=this.props;t.timeZone=e,this.setState({timeZone:e})},this.costChanged=e=>{const{user:t}=this.props;t.costPerHour=e||0,this.setState({costPerHour:e})},this.onRemove=()=>{this.props.onRemove(this.props.index)};const{user:{timeZone:t,costPerHour:s=0}}=e;this.state={timeZone:t||"",costPerHour:s}}render(){const{timeZoneChanged:e,costChanged:t,onRemove:s,props:{user:i,userTimezones:r}}=this,o=!1!==i.active;return(0,d.jsxs)("tr",{title:!o&&"User is inactive",children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"group-user",children:[(0,d.jsx)("img",{src:i.avatarUrls["32x32"]||i.avatarUrls["48x48"],alt:"",height:32,width:32,className:"pull-left"}),(0,d.jsx)("a",{href:i.self,target:"_blank",rel:"noopener noreferrer",className:o?"link":"link strike-out",children:i.displayName})]})}),(0,d.jsx)("td",{children:i.emailAddress}),(0,d.jsx)("td",{children:(0,c.vW)(i)}),(0,d.jsx)("td",{children:(0,d.jsx)(h.jL,{dataset:r,value:i.timeZone,displayField:"label",valueField:"value",onChange:e,className:"width-perc-100",filter:!0})}),(0,d.jsx)("td",{children:(0,d.jsx)(h.zC,{value:i.costPerHour,onChange:t,keyfilter:"num"})}),(0,d.jsx)("td",{children:(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-times",onClick:s,style:{marginTop:0}})})]})}}const u=p;class g extends i.PureComponent{constructor(e){super(e),this.setEditMode=e=>this.setState({editMode:e,groupName:this.props.group.name}),this.beginEdit=()=>this.setEditMode(!0),this.endEdit=()=>this.setEditMode(!1),this.setGroupName=e=>this.setState({groupName:e}),this.updateGroupName=()=>{const{props:{group:e,hasGroupWithName:t}}=this;let{groupName:s}=this.state;s=s.trim(),t(s,e)?this.$message.warning(`The group with the name '${s}' already exists!`,"Group already exists"):(this.props.group.name=s,this.endEdit())},(0,a.f3)(this,"MessageService"),this.state={editMode:!1}}render(){const{endEdit:e,setGroupName:t,updateGroupName:s,state:{editMode:i,groupName:r},props:{group:o}}=this;let{beginEdit:n}=this;return o.isJiraGroup&&(n=void 0),i?(0,d.jsxs)("div",{className:"ui-inputgroup",children:[(0,d.jsx)(h.zC,{value:r,maxLength:40,onChange:t}),(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-check",onClick:s}),(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-undo",onClick:e})]}):(0,d.jsxs)("div",{onClick:n,children:[(0,d.jsxs)("span",{style:{fontWeight:600,fontSize:17},children:[o.name," "]}),"(",o.users.length," users) ",!o.isJiraGroup&&(0,d.jsx)("i",{className:"fa fa-edit"})]})}}const m=g;class f extends i.PureComponent{constructor(e){super(e),this.usersSelected=e=>this.setState({selectedUsers:e,users:this.props.group.users}),this.clearSelection=()=>this.usersSelected([]),this.searchUsers=e=>this.$jira.searchUsers(e),this.removeUser=e=>{const{group:t}=this.props;let{users:s}=t;s.splice(e,1),s=[...s],t.users=s,this.setState({users:s})},this.usernameEntered=e=>{let{selectedUsers:t}=this.state;t&&e&&!t.some((t=>(0,c.vW)(t,!0)===e.toLowerCase()))&&this.$jira.getUserDetails(e).then((e=>{t=[...t],t.push(e),this.setState({selectedUsers:t})}),(()=>{}))},this.onRemove=()=>{this.props.onRemove(this.props.index)},this.setTimezone=e=>{this.props.group.timeZone=e,this.setState({timeZone:e})},(0,a.f3)(this,"JiraService");const{group:{users:t=[],timeZone:s}}=e;this.state={selectedUsers:[],users:t,timeZone:s||""}}addUsersToGroup(){const{props:{group:e},state:{selectedUsers:t}}=this,{users:s}=e,i=s.map((e=>(0,c.vW)(e,!0)));t.removeAll((e=>i.indexOf((0,c.vW)(e,!0))>-1)),t.forEach((e=>{const{accountId:t,avatarUrls:i,displayName:r,emailAddress:o,timeZone:n,locale:a,name:l}=e;s.push({accountId:t,avatarUrls:i,displayName:r,emailAddress:o,timeZone:n,locale:a,name:l})})),e.users=s.orderBy((e=>e.displayName)),this.clearSelection()}render(){const{onRemove:e,setTimezone:t,props:{group:s,groupTimezones:i,userTimezones:r,hasGroupWithName:o},state:{selectedUsers:n,users:a,timeZone:l}}=this;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(m,{group:s,hasGroupWithName:o})}),!s.isJiraGroup&&(0,d.jsxs)("td",{colSpan:2,children:[(0,d.jsx)(h.Qc,{value:n,onChange:this.usersSelected,displayField:"displayName",multiple:!0,minLength:2,forceselection:!0,placeholder:"Add one or more users",onCustomValue:this.usernameEntered,dataset:this.searchUsers,style:{width:"80%"}}),(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-close",onClick:this.clearSelection}),(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-user-plus",onClick:()=>this.addUsersToGroup(s)})]}),!!s.isJiraGroup&&(0,d.jsx)("td",{colSpan:2,children:"(Users pulled from Jira)"}),(0,d.jsx)("td",{children:(0,d.jsx)(h.jL,{dataset:i,displayField:"label",valueField:"value",value:l||"",onChange:t,className:"width-perc-100",filter:!0})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-trash",label:s.isJiraGroup?"Remove Group":"Delete group",onClick:e})})]}),(!a||0===a.length)&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:5,children:"No users were available under this group"})}),a&&a.map(((e,t)=>(0,d.jsx)(u,{user:e,index:t,userTimezones:r,onRemove:this.removeUser},(0,c.vW)(e))))]})}}const x=f;class v extends i.PureComponent{constructor(e){super(e),this.addNewGroup=()=>{this.props.addNewGroup(this.state.groupName,this.state.isJiraGroup&&this.state.groupId)&&this.endAdd()},this.setGroupName=e=>this.setState({groupName:e}),this.setAddMode=e=>this.setState({editMode:e,groupName:""}),this.beginAdd=()=>this.setAddMode(!0),this.endAdd=()=>this.setAddMode(!1),this.toggleJiraGroup=e=>this.setState({isJiraGroup:e,groupId:null,groupName:""}),this.searchGroups=e=>this.$jira.searchGroups(e),this.groupSelected=e=>{const{groupId:t,name:s}=e||{};t&&this.setState({groupId:t,groupName:s})},(0,a.f3)(this,"JiraService"),this.state={}}render(){const{endAdd:e,addNewGroup:t,setGroupName:s,toggleJiraGroup:i,props:{isPlugged:r,saveGroups:o,onDone:n},state:{editMode:a,groupName:l,isJiraGroup:c}}=this;return(0,d.jsx)("tfoot",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:6,children:(0,d.jsxs)("div",{style:{height:30,paddingTop:4},children:[(0,d.jsxs)("div",{className:"pull-left",children:[(0,d.jsx)("div",{className:"ui-inputgroup",hidden:a,children:(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-plus",label:"Add group",onClick:this.beginAdd})}),(0,d.jsxs)("div",{className:"ui-inputgroup",hidden:!a,children:[(0,d.jsx)(h.XZ,{checked:c,onChange:i,label:"Add Jira Group"}),c?(0,d.jsx)(h.Qc,{value:l,onChange:this.groupSelected,displayField:"name",multiple:!1,minLength:2,forceselection:!0,placeholder:"Select Jira Group",dataset:this.searchGroups,style:{width:"185px"}}):(0,d.jsx)(h.zC,{value:l,onChange:s,maxLength:40,placeholder:"Name of new group",onKey_Enter:t}),(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-check",disabled:!l,onClick:t}),(0,d.jsx)(h.zx,{type:"danger",icon:"fa fa-close",onClick:e})]})]}),(0,d.jsxs)("div",{className:"pull-right",children:[r&&(0,d.jsx)("span",{children:"Note: To permanently save the changes, go to Settings -> User groups from menu."}),!r&&(0,d.jsx)(h.zx,{type:"success",icon:"fa fa-save",label:"Save Changes",onClick:o}),r&&(0,d.jsx)(h.zx,{icon:"fa fa-save",label:"Done",onClick:n})]})]})})})})}}const S=v;var j=s(5863),w=s(9970);class C extends i.PureComponent{constructor(e){super(e),this.loadGroups=async()=>{const e=await this.$usergroup.getUserGroups();this.setState({groups:e})},this.addNewGroup=async(e,t)=>{var s;if(!(e=null===(s=e)||void 0===s?void 0:s.trim()))return;const{groups:i}=this.state;if(this.hasGroupWithName(e))return this.$message.warning(`The group with the name '${e}' already exists!`,"Group already exists"),!1;{const s={name:e,timeZone:"",users:[],isJiraGroup:!!t,id:t};return s.isJiraGroup?await this.$usergroup.fillJiraGroupMembers([s]):(delete s.isJiraGroup,delete s.id),this.setState({groups:i.concat(s)}),!0}},this.hasGroupWithName=(e,t)=>(e=e.toLowerCase(),this.state.groups.some((s=>s.name.toLowerCase()===e&&s!==t))),this.deleteGroup=e=>{let{groups:t}=this.state;t.splice(e,1),t=[...t],this.setState({groups:t})},this.saveGroups=()=>{this.setState({saveInProg:!0}),this.$usergroup.saveUserGroups(this.state.groups).then((e=>{this.setState({saveInProg:!1}),this.$analytics.trackEvent("User groups saved",l.Jk.UserActions),this.$message.success("Changes saved successfully!","Group saved")}))},this.done=()=>{this.props.onDone&&(this.$analytics.trackEvent("User groups modified",l.Jk.UserActions),this.props.onDone(this.state.groups))},this.exportGroups=async()=>{try{const e=await this.$backup.exportBackup({[this.$session.userId]:{groups:!0}}),t=(0,w.$k)(e),s=`JA_Groups_${(new Date).format("yyyyMMdd")}.jab`;(0,c.FA)(t,"jab",s),this.$analytics.trackEvent("Groups exported",l.Jk.UserActions)}catch(e){this.$message.error(e.message)}},(0,a.f3)(this,"SessionService","MessageService","UserGroupService","JiraService","AnalyticsService","BackupService");const{groups:t}=e,s=n().tz.names().map((e=>({label:e,value:e})));this.groupTimezones=[{label:"My local time zone",value:""}].union([s]),this.userTimezones=[{label:"My local time zone",value:""},{label:"Use group's time zone",value:"GRP_TZ"}].union([s]),this.state={groups:t},t||this.loadGroups()}render(){const{userTimezones:e,props:{isPlugged:t},state:{groups:s}}=this;return(0,d.jsxs)(r.TT,{dataset:s,children:[(0,d.jsxs)("caption",{children:["User groups",(0,d.jsxs)("div",{className:"pull-right",children:[(0,d.jsx)(h.zx,{icon:"fa fa-download",title:"Click to export groups list",onClick:this.exportGroups}),(0,d.jsx)(j.Z,{children:e=>(0,d.jsx)(h.zx,{icon:"fa fa-upload",title:"Click to import groups list",onClick:e,onImport:this.loadGroups})})]})]}),(0,d.jsx)(r.Et,{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{minWidth:215},children:"Group / User Name"}),(0,d.jsx)("th",{children:"User Email"}),(0,d.jsx)("th",{children:"User Login"}),(0,d.jsx)("th",{children:"Timezone"}),(0,d.jsx)("th",{children:"Cost per hour"}),(0,d.jsx)("th",{style:{width:150},children:"Options"})]})}),(0,d.jsx)(r.XP,{children:(t,s)=>(0,d.jsx)(x,{group:t,index:s,hasGroupWithName:this.hasGroupWithName,groupTimezones:this.groupTimezones,userTimezones:e,onRemove:this.deleteGroup},t.name)}),(0,d.jsx)(r.ch,{span:5,children:"No groups available"}),(0,d.jsx)(S,{isPlugged:t,saveGroups:this.saveGroups,onDone:this.done,addNewGroup:this.addNewGroup})]})}}const b=C},4902:(e,t,s)=>{s.d(t,{Z:()=>a});s(7313);var i=s(1783),r=s(536),o=s(6417);class n extends i.Z{constructor(e){super(e,"Add users"),this.style={width:"90vw"},this.className="no-padding"}render(){return super.renderBase((0,o.jsx)(r.default,{isPlugged:!0,groups:this.props.groups,onDone:this.onHide}))}}const a=n},4918:(e,t,s)=>{s.d(t,{Xk:()=>m.X,ZP:()=>w,jn:()=>S});var i=s(7313),r=s(8915),o=s(8041),n=s(9168),a=s(6123),l=s.n(a),h=s(747),c=s(6666),d=s(8398),p=(s(8695),s(7154)),u=s(4711);class g{export(){this.format&&"XLSX"===this.format.toUpperCase()?this.exportToXlsx():this.format&&this.format===p.T2.PDF?this.exportToPDF():this.exportToCsv()}exportToXlsx(){const e=c(this.element),t=new p.ZP(p.T2.XLSX);e.find("table.exportable").each(((e,s)=>t.addTable(s))),t.export(this.fileName)}exportToCsv(){let e=c(this.element);e.is("table")||(e=e.find("table.exportable")),this.exportTable(e,e.attr("export-sheet-name")||this.fileName||"download")}exportToPDF(){const e=c(this.element).find("table.exportable:first-child"),t=e.attr("export-sheet-name")||this.fileName||"download",s=new d.default({orientation:"landscape",unit:"in",format:"a3"});s.autoTable({html:e.get(0)}),s.save(`${t}.pdf`)}exportTable(e,t){const s=[];let i=null;function r(e,t){const s=[];e.each(((e,i)=>{c(i).children("th,td").each(((i,r)=>{r=c(r);let o=s[e];for(o||(o=s[e]=[]);null!=o[i];)i++;const n=t[i];n&&n.noExport||(t[i]={noExport:r.is("[no-export]")||r.is(":hidden")&&!r.is("[force-export]")}),o[i]=function(e){const t={encode:!0,trim:!0};let s=e.attr("export-option");s=s&&s.length>10?c.extend(t,JSON.parse(s)):t;const i=e.find("[export-data]:first");let r=(e.attr("export-data")||i.attr("export-data")||i.text()||e.text()).replace(/\r?\n|\r/g," ");return s.trim&&(r=r.trim()),r.indexOf('"')>=0&&(r=r.replace(/"/g,'""')),s.encode&&r.indexOf(",")>=0&&(r=`"${r}"`),r}(r);let a=parseInt(r.attr("colspan"));for(;a>1;)o[i+a-1]="",a--;let l=parseInt(r.attr("rowspan"));for(;l>1;){let t=s[e+l-1];t||(t=s[e+l-1]=[]),t[i]="",l--}}))}));let i="";for(let o=0;o<s.length;o++){let e="";const n=s[o];for(let s=0;s<n.length;s++){var r;null!==(r=t[s])&&void 0!==r&&r.noExport||(e+=`,${n[s]||""}`)}i+=`${e.substring(1).replace(/\r?\n|\r/g," ")}\r\n`}return i}i="string"===typeof e?r(c(`#${e} thead:not([no-export]) tr:not([no-export]):visible`),s)+r(c(`#${e} tbody:visible tr:not([no-export]):visible`),s):r(e.find("thead:not([no-export]) tr:not([no-export]):visible"),s)+r(e.find("tbody:visible tr:not([no-export]):visible"),s),(0,u.ut)(i,t)}}var m=s(551),f=s(5991),x=s(6444),v=s(6417);const S=new o.EventEmitter;class j extends i.PureComponent{constructor(e,t,s){super(e),this.eventReceived=e=>this.executeEvent(e),this.toggleFullScreen=()=>{let{isFullScreen:e}=this.state;e=!e,this.$analytics.trackEvent("Toggle full screen",x.Jk.GadgetActions,this.title,e),e?document.body.classList.add("fs-layout"):document.body.classList.remove("fs-layout"),this.columnResizeMode=e?"fit":"expand",this.setState({isFullScreen:e})},this.addWorklogOn=e=>{this.addWorklog({ticketNo:e})},this.removeGadget=()=>{this.$analytics.trackEvent("Gadget removed",x.Jk.GadgetActions,this.title),this.performAction(m.X.RemoveGadget)},this.exportData=e=>{const t=new g;t.fileName=this.title,t.format=e||this.exportFormat,t.element=this.el,this.$analytics.trackEvent("Export data",x.Jk.GadgetActions,t.format),t.export()},this.showGadgetGontextMenu=e=>(0,h.showContextMenu)(e,this.getContextMenu()),this.getHeader=()=>{const{title:e,subTitle:t,isGadget:s,props:{draggableHandle:i}}=this,r="gadget-header"+(i?" movable":"");return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{ref:i,className:r,onContextMenu:s?this.showGadgetGontextMenu:null,onDoubleClick:this.toggleFullScreen,children:[(0,v.jsx)("i",{className:`fa ${this.iconClass}`})," ",e," ",t&&(0,v.jsxs)("span",{children:[" - ",t]}),(0,v.jsxs)("div",{className:"pull-right",children:[this.renderCustomActions&&this.renderCustomActions(s),!this.hideRefresh&&this.getRefreshButton(),!this.hideMenu&&(0,v.jsx)(n.Z,{icon:"fa fa-wrench",onClick:e=>(0,h.showContextMenu)(e,this.getContextMenu())})]})]}),(0,v.jsx)("div",{className:"clearfix"})]})},this.setRef=e=>{this.el=e;const{dropProps:{dropConnector:t}={}}=this.props;t&&t(e)},(0,f.f3)(this,"AnalyticsService"),this.title=t,this.iconClass=s,this.isGadget=!1!==e.isGadget,this.settings=e.settings||{fullWidth:!1,fullHeight:!1};const{fullWidth:i=!1,fullHeight:r=!1}=this.settings;this.state={fullWidth:i,fullHeight:r}}getContextMenu(){const{isFullScreen:e,fullWidth:t,fullHeight:s}=this.state,i=this.isGadget?[{separator:!0},{label:"Full width",icon:`fa fa-${t?"check-":""}circle fs-16 margin-r-5`,command:()=>this.setSizeOptions(!t,s)},{label:"Full height",icon:`fa fa-${s?"check-":""}circle fs-16 margin-r-5`,command:()=>this.setSizeOptions(t,!s)},{separator:!0},{label:"Remove",icon:"fa fa-remove",command:()=>this.removeGadget()}]:[],r=[];return this.hideExport||(r.push({separator:!0}),this.hideCSVExport||r.push({label:"Export to CSV",icon:"fa fa-file-text-o",disabled:!this.exportData,command:()=>this.exportData(p.T2.CSV)}),this.hideXLSXExport||r.push({label:"Export to Excel",icon:"fa fa-file-excel-o",disabled:!this.exportData,command:()=>this.exportData(p.T2.XLSX)}),this.hidePDFExport||r.push({label:"Export to PDF",icon:"fa fa-file-pdf-o",disabled:!this.exportData,command:()=>this.exportData(p.T2.PDF)})),[{label:"Toggle full screen",icon:"fa fa-"+(e?"compress":"expand"),command:()=>this.toggleFullScreen()},...r,...i]}componentDidMount(){this.isGadget&&(S.on("change",this.eventReceived),this.$analytics.trackEvent("Gadget loaded",x.Jk.GadgetActions,this.title)),this._isMounted=!0}componentWillUnmount(){S.off("change",this.eventReceived)}setSizeOptions(e,t){const{settings:s}=this;s.fullWidth=e,s.fullHeight=t,this.setState({fullWidth:e,fullHeight:t}),this.saveSettings()}UNSAFE_componentWillReceiveProps(e){if(this.settings!==e.settings){this.settings=e.settings||{};const{fullWidth:t,fullHeight:s}=this.settings;this.setState({fullWidth:t,fullHeight:s})}}performAction(e,t){const{onAction:s}=this.props;s&&s({type:e,data:t},this.props.model,this.props.index)}addWorklog(e){this.performAction(m.X.AddWorklog,e)}editWorklog(e){this.performAction(m.X.AddWorklog,{id:e})}saveSettings(){this.performAction(m.X.SettingsChanged,this.settings)}executeEvent(e){}getFullScreenButton(){if(this.isGadget)return null;const{state:{isFullScreen:e}}=this;return(0,v.jsx)(n.Z,{icon:e?"fa fa-compress":"fa fa-expand",onClick:this.toggleFullScreen,title:"Toggle full screen"})}getRefreshButton(e){const{disableRefresh:t,isLoading:s}=this.state;return(0,v.jsx)(n.Z,{icon:"fa fa-refresh",disabled:t||s,onClick:e||this.refreshData,title:"Refresh data"})}renderBase(e){const{fullWidth:t,fullHeight:s,isLoading:i,isFullScreen:o}=this.state,{isGadget:n,props:{tabLayout:a}}=this;if(a)return(0,v.jsxs)(v.Fragment,{children:[e,this.renderFooter&&this.renderFooter()]});const h=t||!n,c=s||!n,d=l()("gadget",this.className,{docked:!n,"full-width":h&&!o,"full-height":c&&!o,"half-width":!h&&!o,"half-height":!c&&!o,"full-screen":o});return(0,v.jsxs)("div",{ref:this.setRef,className:d,children:[i&&(0,v.jsx)("div",{className:"data-loader",children:(0,v.jsx)("i",{className:"fa fa-refresh fa-spin"})}),(0,v.jsxs)(r.Panel,{header:this.getHeader(),children:[e,this.renderFooter&&this.renderFooter()]})]})}render(){return(0,v.jsx)("div",{ref:this.setRef,className:"gadget half-width half-height",children:(0,v.jsx)(r.Panel,{header:"Gadget Unavailable",children:(0,v.jsx)("div",{className:"pad-22",children:"This section contains an un-known gadget. Please report about this issue to have it fixed!"})})})}}const w=j},5863:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(7313),r=s(9970),o=s(4616),n=s(6417);const a="Selected file is invalid or is corrupted. Unable to load the file!";class l extends i.PureComponent{constructor(e){super(e),this.setFileSelector=e=>this.fileSelector=e,this.chooseFileForImport=e=>this.fileSelector.click(),this.fileSelected=()=>{const e=this.fileSelector,t=e.files[0];if(t){if(!t.name.endsWith(".jab"))return this.$message.warning("Unknown file selected to import. Select a valid Jira Assist Backup (*.jab) file"),void(e.value="");const s=new FileReader;s.readAsText(t,"UTF-8"),s.onload=async e=>{const t=e.target.result;let s;try{const e=(0,r.Pe)(t);s=!0;const i=await this.$backup.importBackup(null===e||void 0===e?void 0:e.value,void 0,this.props.cleanImport);console.log("Import logs:",i),this.props.onImport&&this.props.onImport(),this.$message.success("Settings imported successfully. Check console logs for more details.")}catch(i){console.error("Backup import failed",i),s?this.$message.error(i.message):this.$message.error(a)}},s.onerror=e=>{this.$message.error(a)}}else this.$message.warning("Import operation cancelled");e.value=""},(0,o.f3)(this,"BackupService","MessageService"),this.state={}}render(){return(0,n.jsxs)(n.Fragment,{children:[this.props.children(this.chooseFileForImport),(0,n.jsx)("input",{ref:this.setFileSelector,type:"file",className:"hide",accept:".jab",onChange:this.fileSelected})]})}}const h=l}}]);