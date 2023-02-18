"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[30],{7154:(e,t,s)=>{s.d(t,{T2:()=>l,ZP:()=>n});var i=s(6666),r=s(1404),o=s.n(r),a=s(2805);class n{constructor(){const e=new(o().Workbook);e.created=new Date,e.creator="Jira Assistant",e.lastModifiedBy="Jira Assistant",this.document=e}addTable(e){e=i(e);const t=this.normalizeSheetName(e.attr("export-sheet-name"));console.log("Exporting ",t),this.worksheet=this.document.addWorksheet(t),this.sheetOptions={mergeCells:[],width:{},styles:[],rowsToRemove:[],rowsToHide:[]},this.curRowNum=1;const s=e.find("> thead:not([exportignore]) > tr:not([exportignore])");this.prepareData(s),console.log("header rows",s.length);const r=e.find("> tbody:not([exportignore]) > tr:not([exportignore])");this.prepareData(r),console.log("bodyRows rows",r.length),this.worksheet.views=[{state:"frozen",xSplit:0,ySplit:s.length}],this.sheetOptions.mergeCells.forEach((e=>this.worksheet.mergeCells(e)));const o=this.sheetOptions.width;Object.keys(o).forEach((e=>{const t=this.worksheet.getColumn(e),s=parseFloat(o[e])/7.178;t.width=s})),this.sheetOptions.styles.forEach((e=>{const t=this.worksheet.getCell(e.key),s=e.style,i={};"left"!==s.textAlign&&(i.horizontal=s.textAlign),"left"!==s.verticalAlign&&(i.vertical=s.verticalAlign),t.alignment=i;const r=s.fontWeight||"";t.style.font={size:this.getFontSize(s.fontSize),bold:r.indexOf("bold")>-1||r>=550}})),this.sheetOptions.rowsToHide.forEach((e=>this.worksheet.getRow(e).hidden=!0)),this.sheetOptions.rowsToRemove.orderByDescending().forEach((e=>this.worksheet.spliceRows(e,1))),this.worksheet=null,this.sheetOptions=null,this.curRowNum=null}normalizeSheetName(e){return e?e.replace(/\[/g,"(").replace(/\]/g,")").replace(/:/g,"-").replace(/[?/\\]/g,""):e}trim(e){return e.replace(/^\s+|\s+$/gm,"")}getFontSize(e){return e?e.endsWith("px")?.75*parseInt(e.replace("px",""),10):e.endsWith("pt")?parseInt(e.replace("pt",""),10):e.endsWith("em")?.0833333*parseInt(e.replace("em",""),10):void 0:e}rgbaToHex(e){if(!e)return e;const t=e.substring(e.indexOf("(")).split(","),s=parseInt(this.trim(t[0].substring(1)),10),i=parseInt(this.trim(t[1]),10),r=parseInt(this.trim(t[2]),10);t[3]=t[3]||"1)";const o=parseFloat(this.trim(t[3].substring(0,t[3].length-1))).toFixed(2);return this.fixSize(s.toString(16))+this.fixSize(i.toString(16))+this.fixSize(r.toString(16))+this.fixSize((255*o).toString(16).substring(0,2))}fixSize(e){return 1===e.length?`0${e}`:e}prepareData(e){const t=this.worksheet,s=[];e.each(((e,r)=>{r=i(r);const o=this.getColArray(r,s);if(o){t.addRow(o).commit(),this.curRowNum++}}))}getColArray(e,t){const s=e.find("> th, > td"),r=[],o=!!e.attr("exportignore");return o&&this.sheetOptions.rowsToRemove.push(this.curRowNum),e.attr("exporthidden")&&this.sheetOptions.rowsToHide.push(this.curRowNum),s.each(((e,s)=>{for(;t[r.length]>0;)t[r.length]=t[r.length]-1,r[r.length]=null;let a=(s=i(s)).attr("exportValue");if(a||(a=s.text()),a&&!o){a=a.trim();switch(s.attr("exportType")){case"int":a=function(e){if(!e)return e;const t=parseInt(e,10);return isNaN(t)?e:t}(a);break;case"float":case"number":a=function(e){if(!e)return e;const t=parseFloat(e);return isNaN(t)?e:t}(a);break;case"date":a=d(a,!0);break;case"datetime":a=d(a,!1)}}r[r.length]=a;let n=s.attr("colspan")||1;const l=(s.attr("rowspan")||1)-1;l&&(t[r.length-1]=l);const h=this.numToChar(r.length),c=this.curRowNum;if(n>1||l>0){const e=this.numToChar(r.length+(n-1)),t=this.curRowNum+l;this.sheetOptions.mergeCells.push(`${h+c}:${e}${t}`)}if(!o){if(!n||n<2){const e=s.width();e>20&&(this.sheetOptions.width[h]=e)}this.sheetOptions.styles.push({key:h+c,style:window.getComputedStyle(s.get(0),null)})}for(;n>1;)n-=1,r[r.length]=null,l&&(t[r.length-1]=l)})),r}export(e){this.document.xlsx.writeBuffer().then((t=>{!function(e,t){const s=new FileReader;s.onload=function(i){(0,a.FA)(s.result,e.type,t)},s.readAsBinaryString(e)}(new Blob([t],{type:"application/octet-stream"}),`${e}.xlsx`)}))}charToNum(e){for(let t=0,s=1;t<s;t++,s++)e==this.numToChar(t)&&(s=t)}numToChar(e){const t=(e-1)%26,s=this.chr(65+t),i=parseInt((e-1)/26,10);return i>0?this.numToChar(i)+s:s}chr(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e))):String.fromCharCode(e)}}const l={XLSX:"XLSX",CSV:"CSV",PDF:"PDF"};function d(e,t){if(!e)return e;const s=new Date(e);return isNaN(s.getTime())?e:s}},9110:(e,t,s)=>{s.d(t,{Z:()=>n});s(7313);var i=s(3840),r=s(8933),o=s(6417);class a extends i.Z{constructor(e){super(e,"Save Report As"),this.nameChanged=e=>this.setState({newQueryName:e}),this.copyChanged=e=>this.setState({copyQuery:e}),this.done=()=>{const{newQueryName:e,copyQuery:t}=this.state;this.props.onChange(e,t)},this.style={width:"350px"},this.state={showDialog:!0,newQueryName:e.queryName||"",copyQuery:!1}}getFooter(){const{state:{newQueryName:e}}=this;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.zx,{type:"secondary",label:"Cancel",onClick:this.onHide}),(0,o.jsx)(r.zx,{type:"primary",icon:"fa fa-floppy-o",label:"Save",disabled:!e||e.length<3,onClick:this.done})]})}render(){const{props:{allowCopy:e},state:{newQueryName:t,copyQuery:s}}=this;return super.renderBase((0,o.jsxs)("div",{className:"pad-15",children:[(0,o.jsx)("label",{children:"Report Name"}),(0,o.jsx)("div",{children:(0,o.jsx)(r.zC,{value:t,onChange:this.nameChanged,style:{width:"100%"}})}),e&&(0,o.jsx)("div",{children:(0,o.jsx)(r.XZ,{checked:s,onChange:this.copyChanged,label:"Save as new report"})})]}))}}const n=a},9311:(e,t,s)=>{s.d(t,{Xk:()=>m.X,ZP:()=>C,jn:()=>w});var i=s(7313),r=s(8915),o=s(2328),a=s(8041),n=s(9885),l=s(6123),d=s.n(l),h=s(1485),c=s(6666),p=s(5508),u=(s(8695),s(7154)),g=s(2805);class f{export(){this.format&&"XLSX"===this.format.toUpperCase()?this.exportToXlsx():this.format&&this.format===u.T2.PDF?this.exportToPDF():this.exportToCsv()}exportToXlsx(){const e=c(this.element),t=new u.ZP(u.T2.XLSX);e.find("table.exportable").each(((e,s)=>t.addTable(s))),t.export(this.fileName)}exportToCsv(){let e=c(this.element);e.is("table")||(e=e.find("table.exportable")),this.exportTable(e,e.attr("export-sheet-name")||this.fileName||"download")}exportToPDF(){const e=c(this.element).find("table.exportable:first-child"),t=e.attr("export-sheet-name")||this.fileName||"download",s=new p.default({orientation:"landscape",unit:"in",format:"a3"});s.autoTable({html:e.get(0)}),s.save(`${t}.pdf`)}exportTable(e,t){const s=[];let i=null;function r(e,t){const s=[];e.each(((e,i)=>{c(i).children("th,td").each(((i,r)=>{r=c(r);let o=s[e];for(o||(o=s[e]=[]);null!=o[i];)i++;const a=t[i];a&&a.noExport||(t[i]={noExport:r.is("[no-export]")||r.is(":hidden")&&!r.is("[force-export]")}),o[i]=function(e){const t={encode:!0,trim:!0};let s=e.attr("export-option");s=s&&s.length>10?{...t,...JSON.parse(s)}:t;const i=e.find("[export-data]:first");let r=(e.attr("export-data")||i.attr("export-data")||i.text()||e.text()).replace(/\r?\n|\r/g," ");return s.trim&&(r=r.trim()),r.indexOf('"')>=0&&(r=r.replace(/"/g,'""')),s.encode&&r.indexOf(",")>=0&&(r=`"${r}"`),r}(r);let n=parseInt(r.attr("colspan"));for(;n>1;)o[i+n-1]="",n--;let l=parseInt(r.attr("rowspan"));for(;l>1;){let t=s[e+l-1];t||(t=s[e+l-1]=[]),t[i]="",l--}}))}));let i="";for(let o=0;o<s.length;o++){let e="";const a=s[o];for(let s=0;s<a.length;s++){var r;null!==(r=t[s])&&void 0!==r&&r.noExport||(e+=`,${a[s]||""}`)}i+=`${e.substring(1).replace(/\r?\n|\r/g," ")}\r\n`}return i}i="string"===typeof e?r(c(`#${e} thead:not([no-export]) tr:not([no-export]):visible`),s)+r(c(`#${e} tbody:visible tr:not([no-export]):visible`),s):r(e.find("thead:not([no-export]) tr:not([no-export]):visible"),s)+r(e.find("tbody:visible tr:not([no-export]):visible"),s),(0,g.ut)(i,t)}}var m=s(551),y=s(7174),x=s(6444),v=s(9149),b=s(6417);const w=new a.EventEmitter;let S=0;class j extends i.PureComponent{constructor(e,t,s){super(e),this.eventReceived=e=>this.executeEvent(e),this.toggleFullScreen=()=>{let{isFullScreen:e}=this.state;e=!e,this.$analytics.trackEvent("Toggle full screen",x.Jk.GadgetActions,this.title,e),e?document.body.classList.add("fs-layout"):document.body.classList.remove("fs-layout"),this.columnResizeMode=e?"fit":"expand",this.setState({isFullScreen:e})},this.addWorklogOn=e=>{this.addWorklog({ticketNo:e})},this.removeGadget=()=>{this.$analytics.trackEvent("Gadget removed",x.Jk.GadgetActions,this.title),this.performAction(m.X.RemoveGadget)},this.setLoader=e=>this.setState({isLoading:e}),this.exportData=e=>{const t=new f;t.fileName=this.title,t.format=e||this.exportFormat,t.element=this.el,this.$analytics.trackEvent("Export data",x.Jk.GadgetActions,t.format),t.export()},this.showGadgetGontextMenu=e=>(0,h.pT)(e,this.getContextMenu()),this.getHeader=()=>{const{title:e,subTitle:t,isGadget:s,props:{draggableHandle:i}}=this,r="gadget-header"+(i?" movable":"");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{ref:i,className:r,onContextMenu:s?this.showGadgetGontextMenu:null,onDoubleClick:this.toggleFullScreen,children:[(0,b.jsx)("i",{className:`fa ${this.iconClass}`})," ",e," ",t&&(0,b.jsxs)("span",{children:[" - ",t]}),(0,b.jsxs)("div",{className:"pull-right",children:[this.getTooltipElement(),this.renderCustomActions&&this.renderCustomActions(s),!this.hideRefresh&&this.getRefreshButton(),!this.hideMenu&&(0,b.jsx)(n.Z,{icon:"fa fa-wrench",onClick:e=>(0,h.pT)(e,this.getContextMenu())})]})]}),(0,b.jsx)("div",{className:"clearfix"})]})},this.setRef=e=>{this.el=e;const{dropProps:{dropConnector:t}={}}=this.props;t&&t(e)},(0,y.f3)(this,"AnalyticsService"),this.instanceId=++S,this.title=t,this.iconClass=s,this.isGadget=!1!==e.isGadget,this.settings=e.settings||{fullWidth:!1,fullHeight:!1};const{fullWidth:i=!1,fullHeight:r=!1}=this.settings;this.state={fullWidth:i,fullHeight:r}}getContextMenu(){const{isFullScreen:e,fullWidth:t,fullHeight:s}=this.state,i=this.isGadget?[{separator:!0},{label:"Full width",icon:`fa fa-${t?"check-":""}circle fs-16 margin-r-5`,command:()=>this.setSizeOptions(!t,s)},{label:"Full height",icon:`fa fa-${s?"check-":""}circle fs-16 margin-r-5`,command:()=>this.setSizeOptions(t,!s)},{separator:!0},{label:"Remove",icon:"fa fa-remove",command:()=>this.removeGadget()}]:[],r=[];return this.hideExport||(r.push({separator:!0}),this.hideCSVExport||r.push({label:"Export to CSV",icon:"fa fa-file-text-o",disabled:!this.exportData,command:()=>this.exportData(u.T2.CSV)}),this.hideXLSXExport||r.push({label:"Export to Excel",icon:"fa fa-file-excel-o",disabled:!this.exportData,command:()=>this.exportData(u.T2.XLSX)}),this.hidePDFExport||r.push({label:"Export to PDF",icon:"fa fa-file-pdf-o",disabled:!this.exportData,command:()=>this.exportData(u.T2.PDF)})),[{label:"Toggle full screen",icon:"fa fa-"+(e?"compress":"expand"),command:()=>this.toggleFullScreen()},...r,...i]}componentDidMount(){this.isGadget&&(w.on("change",this.eventReceived),this.$analytics.trackEvent("Gadget loaded",x.Jk.GadgetActions,this.title)),this._isMounted=!0}componentWillUnmount(){w.off("change",this.eventReceived)}setSizeOptions(e,t){const{settings:s}=this;s.fullWidth=e,s.fullHeight=t,this.setState({fullWidth:e,fullHeight:t}),this.saveSettings()}UNSAFE_componentWillReceiveProps(e){if(this.settings!==e.settings){this.settings=e.settings||{};const{fullWidth:t,fullHeight:s}=this.settings;this.setState({fullWidth:t,fullHeight:s})}}performAction(e,t){const{onAction:s}=this.props;s&&s({type:e,data:t},this.props.model,this.props.index)}addWorklog(e){this.performAction(m.X.AddWorklog,e)}editWorklog(e){this.performAction(m.X.AddWorklog,{id:e})}saveSettings(){this.performAction(m.X.SettingsChanged,this.settings)}executeEvent(e){}getFullScreenButton(){if(this.isGadget)return null;const{state:{isFullScreen:e}}=this;return(0,b.jsx)(n.Z,{icon:e?"fa fa-compress":"fa fa-expand",onClick:this.toggleFullScreen,title:"Toggle full screen"})}getRefreshButton(e){const{disableRefresh:t,isLoading:s}=this.state;return(0,b.jsx)(n.Z,{icon:"fa fa-refresh",disabled:t||s,onClick:e||this.refreshData,title:"Refresh data"})}getTooltipElement(){return this.getHint?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.u,{target:`.icon-hint-${this.instanceId}`,children:this.getHint()}),(0,b.jsx)("i",{className:`fa fa-info-circle icon-hint icon-hint-${this.instanceId}`,"data-pr-position":"bottom"})]}):null}renderBase(e){const{fullWidth:t,fullHeight:s,isLoading:i,isFullScreen:o}=this.state,{isGadget:a,props:{tabLayout:n,gadgetType:l}}=this;if(n)return(0,b.jsxs)(b.Fragment,{children:[e,this.renderFooter&&this.renderFooter()]});const h=t||!a,c=s||!a,p=d()("gadget",this.className,{docked:!a,"full-width":h&&!o,"full-height":c&&!o,"half-width":!h&&!o,"half-height":!c&&!o,"full-screen":o});return(0,b.jsxs)("div",{ref:this.setRef,className:p,"data-test-id":l,children:[i&&(0,b.jsx)("div",{className:"data-loader",children:(0,b.jsx)("i",{className:"fa fa-refresh fa-spin"})}),(0,b.jsxs)(r.Panel,{header:this.getHeader(),children:[e,this.renderFooter&&this.renderFooter()]})]})}render(){return(0,b.jsx)("div",{ref:this.setRef,className:"gadget half-width half-height",children:(0,b.jsx)(r.Panel,{header:"Gadget Unavailable",children:(0,b.jsxs)("div",{className:"pad-22",children:["This section contains an un-known gadget.",v.RX&&"You could have added a new Gadget from Web version which is not yet available in extension. ",v.RX&&"If not, please report about this issue to have it fixed!",!v.RX&&"Please report about this issue to have it fixed!"]})})})}}const C=j},1583:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var i=s(7313),r=s(4616),o=s(2371),a=s(1732),n=s(6014);class l extends i.PureComponent{render(){const{isDragging:e,dragHandle:t,children:s,item:i}=this.props;return"function"===typeof s?s(i,{dragHandle:t,isDragging:e}):t(s)}}const d={beginDrag:e=>e};const h=(0,n.E)((e=>e.itemType),d,(function(e,t){return{dragHandle:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),monitor:t}}))(l);var c=s(990);class p extends i.PureComponent{render(){const{children:e,dropConnector:t}=this.props;return"function"===typeof e?e({dropConnector:t}):t(e)}}const u={canDrop(e,t,s){if(!t.didDrop())return!0},drop(e,t,s){if(t.didDrop())return;const i=t.getItem(),{index:r,item:o,onRemove:a}=i;a&&a(o,r,e);const{onDrop:n}=e;n&&n(o,i,e)}};const g=(0,c.G)((e=>e.accepts),u,(function(e,t){return{dropConnector:e.dropTarget(),isOver:t.isOver(),isOverCurrent:t.isOver({shallow:!0}),canDrop:t.canDrop(),monitor:t}}))(p);var f=s(6417);let m=0;class y extends i.PureComponent{constructor(e){super(e),this.handleRemove=(e,t,s)=>{if(s.containerId===this.containerId)return;const{items:i,onChange:r}=this.props,o=[...i];o.splice(t,1),r(o)},this.handleDrop=(e,t,s)=>{const{items:i,onChange:r}=this.props,o=[...i],a=t.containerId===this.containerId,n=s.index;let l=e;a&&([l]=o.splice(t.index,1)),n>=o.length?o.push(l):o.splice(n,0,l),r(o)},this.containerId=++m}render(){const{items:e,itemTemplate:t,itemType:s,itemTypePropName:i,accepts:r=[s]}=this.props;let{placeholder:o,itemPlaceholder:a}=this.props;if(a&&(a=(0,f.jsx)(g,{containerId:this.containerId,index:e.length,accepts:r,onDrop:this.handleDrop,children:a},"addItemPlaceholder")),!e.length)return o=o&&(0,f.jsx)(g,{containerId:this.containerId,index:e.length,accepts:r,onDrop:this.handleDrop,children:o},"emptyItemPlaceholder"),o||a||null;const n=e.map(((e,o)=>(0,f.jsx)(g,{containerId:this.containerId,index:o,accepts:r,onDrop:this.handleDrop,children:r=>(0,f.jsx)(h,{index:o,containerId:this.containerId,itemType:e[i]||s,item:e,onRemove:this.handleRemove,children:(e,s)=>t(e,o,s,r)})},o)));return a?[n,a]:n}}const x=y;var v=s(6614),b=s(8933);class w extends i.PureComponent{constructor(){super(),this.displayFieldAdded=e=>{e&&!e.items&&this.props.onChange(e,this.jiraFields[e])},(0,r.f3)(this,"JiraService","MessageService","AnalyticsService"),this.state={fields:[]},this.loadCustomFields()}async loadCustomFields(){const e=await this.$jira.getCustomFields(),t={};this.jiraFields=t;let s=[],i=[];for(const r of e)r.label=r.name+(r.name.toLowerCase()!==r.id.toLowerCase()?` (${r.id})`:""),r.value=r.id,t[r.id]=r,r.custom?i.push(r):s.push(r);s=s.orderBy((e=>e.name)),i=i.orderBy((e=>e.name)),this.setState({fields:[{label:"Basic Fields",items:s},{label:"Custom Fields",items:i}]})}render(){const{fields:e}=this.state;return(0,f.jsxs)(b.jL,{dataset:e,value:"",style:{width:"100%"},placeholder:"Choose a column to add to the list",group:!0,displayField:"name",valueField:"id",dataKey:"id",filterPlaceholder:"Type the field name to filter",onChange:this.displayFieldAdded,children:[e=>(0,f.jsx)("span",{children:e.name}),e=>(0,f.jsx)("strong",{children:e.label})]})}}const S=w;var j=s(714);function C(e,t){const s={};switch(e){case"user":case"parent":case"thumbnail":case"statusCategory":case"project":case"resolution":case"issuetype":case"watches":case"priority":case"status":case"progress":case"timetracking":case"votes":s.knownObj=!0;case"string":case"date":case"datetime":case"issuerestriction":case"option":s.type=e;break;default:s.type=t}return s}var k=s(6552);class T extends i.PureComponent{constructor(){super(...arguments),this.state={expression:""},this.fieldAdded=(e,t)=>{const{fields:s,onChange:i}=this.props;i(s.concat(function(e){const{id:t,name:s,custom:i,schema:{system:r,items:o,custom:a,type:n=(i?"(Unsupported)":t)}={}}=e,l={id:j.hb.generate(),field:t,name:s,custom:i,type:n};if("issuekey"===t)return l.type="string",l;switch(n){case"comments-page":case"securitylevel":l.knownObj=!0,l.type=r;break;case"number":switch(r){case"timeoriginalestimate":case"aggregatetimespent":case"aggregatetimeoriginalestimate":case"timespent":case"timeestimate":case"aggregatetimeestimate":l.type="seconds";break;case"workratio":l.type=r;break;default:l.type=n}break;case"array":if(l.isArray=!0,e.custom)if("numeric"===o)l.type=o;else if("json"===o&&(null===a||void 0===a?void 0:a.indexOf("sprint"))>-1)l.type="sprint";else{const{type:e,knownObj:t}=C(o,a);l.type=e,l.knownObj=t}else switch(r){case"versions":case"fixVersions":case"attachment":case"components":case"issuelinks":case"subtasks":l.knownObj=!0,l.type=o||r;break;case"worklog":l.type=o||r,l.isArray=!1;break;case"labels":l.type=o||r;break;default:l.type=JSON.stringify(e)}break;default:const{type:t,knownObj:s}=C(n,null);t?(l.type=t,l.knownObj=s):(null===a||void 0===a?void 0:a.indexOf("epic-link"))>-1?l.type="epicLink":i&&(l.type=a)}return l}(t)))},this.removeField=e=>{const{fields:t,onChange:s}=this.props;s(t.filter(((t,s)=>s!==e)))},this.headerChanged=(e,t)=>{let{fields:s}=this.props;s=[...s];let i=s[t];i={...i},s[t]=i,i.header=e,this.props.onChange(s)},this.editExpression=e=>{let{fields:t}=this.props,s=t[e];const i=s.expr||"";this.setState({expression:i}),k.Z.alert((0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.zC,{className:"expr-editor",multiline:!0,placeholder:"Provide JavaScript expression (e.g. this.name or this - Fields.timespent + Fields.aggregatetimespent)",value:i,onChange:e=>this.setState({expression:e})}),(0,f.jsx)("span",{children:'Provide JavaScript expression to print a value. You can use "this" to refer to the current field and "Fields" variable to refer to the object containing all the fields.'})]}),"Edit Expression",{width:"600px"}).then((()=>{const{expression:i}=this.state;(i||"")!==(s.expr||"")&&(s={...s},s.expr=this.state.expression,s.expr||delete s.expr,t=[...t],t[e]=s,this.props.onChange(t))}))},this.toggleDisplay=(e,t)=>{let{fields:s}=this.props;s=[...s],s[e]={...s[e],hide:t},this.props.onChange(s)},this.getControls=(e,t,s,i)=>(0,f.jsx)(D,{dragHandle:s.dragHandle,dropConnector:i.dropConnector,field:e,index:t,onRemove:this.removeField,editExpression:this.editExpression,updateHeader:this.headerChanged,toggleDisplay:this.toggleDisplay},t)}render(){const{fields:e,onChange:t}=this.props;return(0,f.jsxs)(v.TT,{className:"display-fields",children:[(0,f.jsx)(v.Et,{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"#"}),(0,f.jsx)("th",{children:"Jira Field"}),(0,f.jsx)("th",{children:"Type"}),(0,f.jsx)("th",{children:"Hide"}),(0,f.jsx)("th",{children:"Header Text"}),(0,f.jsx)("th",{children:"Use Expr."}),(0,f.jsx)("th",{children:"Remove"})]})}),(0,f.jsx)("tbody",{children:(0,f.jsx)(x,{items:e,itemType:"field",accepts:["field"],onChange:t,itemTemplate:this.getControls})}),(0,f.jsx)("tfoot",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"data-center",children:e.length+1}),(0,f.jsx)("td",{children:(0,f.jsx)(S,{onChange:this.fieldAdded})}),(0,f.jsx)("td",{colSpan:"5",children:"Note: Select the column from the list to add it as output"})]})})]})}}class D extends i.PureComponent{constructor(e){super(e),this.remove=()=>this.props.onRemove(this.props.index),this.editExpression=()=>this.props.editExpression(this.props.index),this.toggleDisplay=e=>this.props.toggleDisplay(this.props.index,e),this.updateHeader=()=>{var e;let{header:t}=this.state;t=(null===(e=t)||void 0===e?void 0:e.trim())||void 0,this.props.updateHeader(t,this.props.index)},this.headerChanged=e=>this.setState({header:e}),this.state={header:e.field.header}}UNSAFE_componentWillReceiveProps(e){this.setState({header:e.field.header})}render(){const{dragHandle:e,dropConnector:t,index:s,field:i,field:{name:r,field:o,type:a,isArray:n,knownObj:l,expr:d}}=this.props,{header:h}=this.state;return t((0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"data-center",ref:e,children:s+1}),(0,f.jsxs)("td",{children:[r," (",o,")"]}),(l||a)&&(0,f.jsxs)("td",{children:[a," ",!!n&&"(multiple)"]}),(0,f.jsx)("td",{className:"data-center",children:(0,f.jsx)(b.XZ,{checked:i.hide,onChange:this.toggleDisplay,title:"Hide this field in display and use this property only from expression of other fields"})}),(0,f.jsx)("td",{children:i.hide?"(not applicable)":(0,f.jsx)(b.zC,{value:h,placeholder:r,onChange:this.headerChanged,onBlur:this.updateHeader})}),!l&&!a&&(0,f.jsx)("td",{children:JSON.stringify(i)}),!i.hide&&(0,f.jsx)("td",{className:"data-center",children:d?(0,f.jsx)("span",{className:"fa fa-edit",onClick:this.editExpression,title:"Click to edit the expression"}):(0,f.jsx)(b.XZ,{checked:!1,onChange:this.editExpression,title:"Click to add an expression"})}),!!i.hide&&(0,f.jsx)("td",{}),(0,f.jsx)("td",{className:"data-center",children:(0,f.jsx)("span",{className:"fa fa-times",onClick:this.remove})})]}))}}const N=T;var F=s(9311);class R extends F.ZP{constructor(e){super(e,"Query Editor","fa-filter"),this.displayFieldChanged=e=>this.props.onChange({...this.props.query,fields:e}),this.jqlChanged=e=>this.props.onChange({...this.props.query,jql:e}),this.className="query-editor-gadget",this.isGadget=!1,this.hideMenu=!0,this.hideRefresh=!0}renderFooter(){const{query:{id:e,isSystemQuery:t},deleteQuery:s,showSaveDialog:i,saveAs:r,viewReport:o,allowSave:a}=this.props,n=this.isSaveEnabled(),l=e>0;return(0,f.jsxs)("div",{className:"pnl-footer",children:[e&&(0,f.jsxs)("div",{className:"pull-left",children:[(0,f.jsx)(b.zx,{icon:"fa fa-trash",label:"Delete Query",type:"danger",onClick:s}),(0,f.jsx)(b.zx,{icon:"fa fa-floppy-o",label:"Save Query As",type:"success",disabled:!n,onClick:i})]}),(0,f.jsxs)("div",{className:"pull-right",children:[(0,f.jsx)(b.zx,{icon:"fa fa-floppy-o",label:"Save Query",type:"success",disabled:!n||t||!a,onClick:l?r:i}),(0,f.jsx)(b.zx,{icon:"fa fa-list",label:"View Report",type:"info",disabled:!n,onClick:o})]})]})}renderCustomActions(){const{reportsList:e,reportId:t}=this.props;return e&&0!==e.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.jL,{dataset:e,value:t,valueField:"value",onChange:this.props.querySelected,placeholder:"Select a report to edit"}),(0,f.jsx)(b.zx,{icon:"fa fa-plus",onClick:this.props.initModel,label:"New query"})]}):null}isSaveEnabled(){var e,t;const{query:{jql:s,fields:i}}=this.props;return(null===s||void 0===s||null===(e=s.trim())||void 0===e?void 0:e.length)>10&&(null===i||void 0===i||null===(t=i.filter((e=>!e.hide)))||void 0===t?void 0:t.length)>=1}render(){const{query:{fields:e,jql:t}}=this.props;return super.renderBase((0,f.jsx)("div",{className:"query-editor",children:(0,f.jsxs)(o.TabView,{panelContainerClassName:"no-pad",children:[(0,f.jsx)(o.TabPanel,{header:"How to use",children:(0,f.jsxs)("div",{className:"pad-8",children:[(0,f.jsx)("strong",{children:"Filter (JQL):"})," JQL is used to filter and pull data from Jira. You can read more about JQL from atlassian site.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("strong",{children:"Display Settings:"})," Display settings tab lets you to select and pull all the fields required by you for report generation. Only the fields selected in this tab would be pulled from Jira. You can use Expressions for each field to control how the data is rendered. You can hide the fields if it is not required as a column in the report and can be used within expressions of other fields.",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("strong",{children:"Expressions:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:"Any valid JavaScript expression syntax can be used in expressions."}),(0,f.jsx)("li",{children:'To access current field, "this" can be used and to access all the available fields, "Fields" object can be used. (Eg: Fields.summary, Fields.created.name)'}),(0,f.jsx)("li",{children:"Only the fields selected under Display Settings tab can be used in expressions and other fields would be unavailable. Hence add all the required fields before using it in expression."}),(0,f.jsx)("li",{children:"Some of the native functions and custom utility functions are available within expressions."}),(0,f.jsx)("li",{children:"If an object is returned by the expression, then it is converted as JSON and displayed within the cell."})]}),(0,f.jsx)("strong",{children:"Native libraries:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:"Some of the native functions are available for use directly in expressions."}),(0,f.jsx)("li",{children:"Available Functions List: parseInt, parseFloat, isNaN, Math.*, Date, Number"})]}),(0,f.jsx)("strong",{children:"Utility functions:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:'Set of custom utility functions are available under "Utils" object in expressions. These functions can be called like "Utils.formatDate(Fields.created)" in expressions.'}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"Available Functions list:"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"formatDate, formatTime, formatDateTime:"})," Accepts date object and returns formatted date as string"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"formatSecs:"})," Accepts number of secs and returns it in readable format"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"formatMS:"})," Accepts number of milliseconds and returns it in readable format"]})]})]})]})]})}),(0,f.jsx)(o.TabPanel,{header:"Filter (JQL)",children:(0,f.jsx)(a.Z,{jql:t,onChange:this.jqlChanged})}),(0,f.jsx)(o.TabPanel,{header:"Display Settings",children:(0,f.jsx)(N,{fields:e,onChange:this.displayFieldChanged})})]})}))}}const E=R;var q=s(9110),A=s(7360),I=s(6444),P=s(6848);class $ extends i.PureComponent{constructor(e){super(),this.initModel=()=>this.querySelected(""),this.loadReport=async e=>{if(await this.fillQueriesList(e),!e)return;const t=await this.$report.getReportDefinition(e);this.setState({reportId:e,query:t,renderReport:!1})},this.fillQueriesList=async e=>{const t=(await this.$report.getReportsList()).filter((e=>!e.advanced)).map((e=>({value:e.id,label:e.queryName})));this.setState({reportId:e,reportsList:t})},this.querySelected=e=>{if(e){const{navigate:t}=this.props;t(`/${this.$session.userId}/reports/custom/${e}`)}else this.setState(this.getEmptyReport())},this.queryChanged=e=>this.setState({query:e,hasUnsavedChanges:!0}),this.deleteQuery=()=>{const{reportId:e,query:{queryName:t}}=this.state;k.Z.confirmDelete(`Are you sure to delete the report named "${t}" permanently?`).then((()=>{this.$report.deleteSavedQuery(e).then((e=>{this.$message.success("Report deleted successfully!"),this.$analytics.trackEvent("Custom Report Deleted"),this.querySelected("")}))}))},this.viewReport=()=>{const{renderReport:e}=this.state;this.setState({renderReport:!e}),e||this.$analytics.trackEvent("Custom Report Preview",I.Jk.UserActions)},this.showSaveDialog=()=>this.setState({showSaveDialog:!0}),this.saveAs=()=>this.saveQuery(this.state.query.queryName),this.hideSaveDialog=()=>this.setState({showSaveDialog:!1}),this.saveQuery=(e,t)=>{let{query:s}=this.state;s={...s};const i=s.queryName;let r=!1;s.queryName=e,t?(delete s.id,r=!0):i!==e&&(r=!0),this.$report.saveQuery(s).then((e=>{s.id=e,this.setState({showSaveDialog:!1,hasUnsavedChanges:!1,reportId:e,query:s}),this.$message.success("Report saved successfully!"),this.$analytics.trackEvent("Custom Report Saved"),r&&(this.fillQueriesList(e),t&&this.querySelected(e))}),(e=>{e&&e.message&&this.$message.error(e.message)}))},this.settingsChanged=e=>{let{query:t}=this.state;t={...t,settings:e},this.setState({query:t,hasUnsavedChanges:!0})},(0,r.f3)(this,"ReportService","MessageService","AnalyticsService","SessionService");const t=this.getReportIdFromParams(e);this.state=this.getEmptyReport(t)}getReportIdFromParams(e){var t,s;let i=null===(t=e.match)||void 0===t||null===(s=t.params)||void 0===s?void 0:s.reportId;return i&&(i=parseInt(i)),i}componentDidMount(){this.loadReport(this.getReportIdFromParams(this.props))}UNSAFE_componentWillReceiveProps(e){const t=this.getReportIdFromParams(e);this.state.reportId!==t&&this.loadReport(t)}getEmptyReport(){return{reportId:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,query:{jql:"",fields:[]}}}render(){const{reportId:e,query:t,renderReport:s,reportsList:i,showSaveDialog:r,hasUnsavedChanges:o}=this.state;return(0,f.jsxs)("div",{className:"custom-report",children:[!s&&(0,f.jsx)(E,{reportId:e,query:t,reportsList:i,onChange:this.queryChanged,querySelected:this.querySelected,deleteQuery:this.deleteQuery,viewReport:this.viewReport,showSaveDialog:this.showSaveDialog,saveAs:this.saveAs,allowSave:o,initModel:this.initModel}),s&&(0,f.jsx)(A.Z,{isGadget:!1,query:t,settingsChanged:this.settingsChanged,onEditClicked:this.viewReport}),r&&(0,f.jsx)(q.Z,{queryName:t.queryName,allowCopy:t.id>0,onHide:this.hideSaveDialog,onChange:this.saveQuery})]})}}const O=(0,P.E)($)},7360:(e,t,s)=>{s.d(t,{Z:()=>v});s(7313);var i=s(6929),r=s(8933),o=s(794),a=s(9311),n=s(4616),l=s(2251),d=s(9082);async function h(e,t){if(!e)return{};const s=(0,n.DB)("JiraService"),i=e.fields.map((e=>e.field)),r=await s.searchTickets(e.jql,i),o={utils:t},a=e.fields.filter((e=>!e.hide)).map(c.bind(o));o.fieldWithExpr=a.filter((e=>!!e.ast));const d=r.map(p.bind(o));if(o.hasWorklogs){const e=o.usersObj,t=Object.keys(e).map((t=>({field:t,displayText:e[t].displayName,type:"seconds",groupText:"Log Work",allowGrouping:!1,viewComponent:l.Hv,props:{}})));t.push({field:"totalWorklog",displayText:"Total Log Work",type:"seconds",groupText:"Log Work",allowGrouping:!1,viewComponent:l.Hv,props:{}});const s=a.findIndex((e=>{let{field:t}=e;return"worklog"===t}));a.splice(s,1,...t)}return{isLoading:!1,reportData:d,columnList:a,settings:e.settings}}function c(e){const{id:t,field:s,name:i,header:r=i,type:o,isArray:a,expr:n}=e,h={id:t,field:s,displayText:r,type:o,props:{},allowSorting:!a,allowGrouping:"summary"!==s&&"description"!==s};return n?(h.ast=(0,d.Hp)(n),h.exprField=s,h.field=t,h.viewComponent=l.s$):h.viewComponent=function(e,t,s){const{props:i}=t;switch(e){case"issuekey":return l.a3;case"epicLink":return i.hideContext=!0,l.a3;case"project":return t.fieldKey=`${t.field}.name`,l.Bx;case"user":return t.fieldKey=`${t.field}.displayName`,l.H;case"comment":return t.allowSorting=!1,l.Sn;case"issuelinks":return l.m4;case"seconds":return l.Hv;case"workratio":return i.converter=function(e){return-1===e?null:e},l.Hv;case"timetracking":return l.aS;case"parent":return t.fieldKey=`${t.field}.key`,l.lc;case"progress":case"aggregateprogress":return t.fieldKey=`${t.field}.percent`,l.Y3;case"sprint":return l._t;case"attachment":return i.hrefProp="content",i.iconClass="fa-paperclip",i.tagProp="filename",l._t;case"component":return i.titleProp="description",l._t;case"version":return i.titleProp="releaseDate",l._t;case"option":return t.fieldKey=`${t.field}.value`,i.tagProp="value",l._t;case"votes":return t.fieldKey=`${t.field}.votes`,i.tagProp="votes",i.hideZero=!0,l._t;case"watches":return t.fieldKey=`${t.field}.watchCount`,i.tagProp="watchCount",i.hideZero=!0,l._t;case"date":case"datetime":return l.qm;case"issuetype":case"status":case"priority":case"resolution":return t.fieldKey=`${t.field}.name`,l.y5;case"epicStatus":return i.textField="value",i.iconField="",t.fieldKey=`${t.field}.value`,l.y5;case"string":return s?(i.tagProp="",l._t):null;case"number":return l.s$;default:return t.allowSorting=!1,t.allowGrouping=!1,l.s$}}("issuekey"===s?"issuekey":o,h,a),h.allowSorting||(h.allowGrouping=!1),h.allowGrouping&&function(e){const t=[{type:"check",label:"Issue count",prop:"showGroupCount",value:!0},{separator:!0}];switch(e.type){default:return;case"issuetype":case"status":case"priority":case"resolution":t.splice(1,1);break;case"string":t.push({type:"radio",label:"Show value",prop:"valueType",value:"value",default:!0}),t.push({type:"radio",label:"Show count",prop:"valueType",value:"count"}),t.push({type:"radio",label:"Distinct count",prop:"valueType",value:"distinct"});break;case"user":t[1]={type:"check",label:"Show Image",prop:"showImage"},t.push({separator:!0}),t.push({type:"radio",label:"Show name",prop:"valueType",value:"name",default:!0}),t.push({type:"radio",label:"Show email id",prop:"valueType",value:"email"}),t.push({type:"radio",label:"Show both",prop:"valueType",value:"both"});break;case"project":t.push({type:"radio",label:"Show name",prop:"valueType",value:"name"}),t.push({type:"radio",label:"Show key",prop:"valueType",value:"key",default:!0}),t.push({type:"radio",label:"Show both",prop:"valueType",value:"both"});break;case"parent":t[1]={type:"check",label:"Show status",prop:"showStatus",default:!0},t.push({separator:!0}),t.push({type:"radio",label:"Show key",prop:"valueType",value:"key",default:!0}),t.push({type:"radio",label:"Show summary",prop:"valueType",value:"summary"}),t.push({type:"radio",label:"Show both",prop:"valueType",value:"both"});break;case"date":case"datetime":t.push({type:"radio",label:"Friendly date",prop:"funcType",value:"friendly"}),t.push({type:"radio",label:"Group by year",prop:"funcType",value:"yyyy"}),t.push({type:"radio",label:"Group by month",prop:"funcType",value:"MMMM"}),t.push({type:"radio",label:"Group by both",prop:"funcType",value:"yyyy-MM (MMMM)",default:!0}),t.push({type:"radio",label:"Group by date",prop:"funcType",value:"yyyy-MM-dd"});break;case"number":case"seconds":t.push({type:"radio",label:"Group by field",prop:"funcType",value:"",default:!0}),t.push({type:"radio",label:"Sum of field",prop:"funcType",value:"sum"}),t.push({type:"radio",label:"Avg of field",prop:"funcType",value:"avg"}),t.push({type:"radio",label:"Count having value",prop:"funcType",value:"count"})}e.groupOptions=t}(h),h}function p(e){const t=e.fields;return t.issuekey=e.key,t.id=e.id,u.call(this,t),function(e){if(!e.comment)return;e.comment=e.comment.comments}(t),g.call(this,t),t}function u(e){if(!e.worklog)return;if(e.worklog=e.worklog.worklogs,!e.worklog.length)return void delete e.worklog;this.hasWorklogs=!0;const t=this.usersObj||{};this.usersObj=t;for(const s of e.worklog){const{author:i,timeSpentSeconds:r}=s,{accountId:o,emailAddress:a}=i,n=a||o;t[n]||(t[n]=i),e[n]=(e[n]||0)+r,e.totalWorklog=(e.totalWorklog||0)+r}}function g(e){if(this.fieldWithExpr.length)for(const s of this.fieldWithExpr)if("string"!==typeof s.ast)try{e[s.id]=f(s.ast,e[s.exprField],{Fields:e,Utils:this.utils})}catch(t){e[s.id]=`Error: ${(null===t||void 0===t?void 0:t.message)||t}`}else e[s.id]=s.ast}function f(e,t,s){return function(e){if(e instanceof Date)return this.utils.formatDateTime(e);if("object"===typeof e&&!Array.isArray(e)){const t=Object.keys(e);return t.includes("type")&&t.includes("key")&&t.includes("props")?e:JSON.stringify(e)}return e}((0,d.F0)(e,{this:t,...s,JSON:JSON,parseInt:parseInt,parseFloat:parseFloat,isNaN:isNaN,Math:Math,Number:Number,Date:Date,func:m.bind(this,s)}))}function m(e,t,s,i){if(!t)throw Error("No expression is passed to func. First argument should be an expression");if(s&&!Array.isArray(s))throw Error("Second argument should be an array of argument names used in expression");if(i&&"object"!==typeof i)throw Error("Third argument should be an object containing all the variables from current scope to be available for expression");const r=(0,d.Hp)(t);return i={...e,...i},function(){let e=arguments;return e=s.reduce(((t,s,i)=>(t[s]=e[i],t)),i),f(r,this,e)}}var y=s(6417);class x extends a.ZP{constructor(e){const{query:t}=e;super(e,(null===t||void 0===t?void 0:t.queryName)||"Custom report viewer","fa-clock-o"),this.toggleGroupOptions=()=>this.setState({hideGroups:!this.state.hideGroups}),this.refreshData=()=>this.loadData(this.props.query||this.state.query),this.loadData=async e=>{this.setState({isLoading:!0,hasError:!1});try{this.setState(await h(e,{formatDate:this.$userutils.formatDate,formatTime:this.$userutils.formatTime,formatDateTime:this.$userutils.formatDateTime,formatSecs:this.$utils.formatSecs,formatMS:this.$utils.formatTs,showAsLink:e=>(0,y.jsx)(o.Z,{href:this.$userutils.getTicketUrl(e),children:e})}))}catch(t){this.setState({isLoading:!1,hasError:!0})}},this.tableSettingsChanged=e=>{this.settings={...this.settings,...e},this.isGadget?(this.saveSettings(),this.setState({settings:e})):this.props.settingsChanged(e)},(0,n.f3)(this,"AnalyticsService","ReportService","JiraService","UtilsService","UserUtilsService"),this.state.isLoading=!0,this.state.hideGroups=this.isGadget}componentDidMount(){this.initWithProps(this.props)}renderCustomActions(e){return e?(0,y.jsx)(r.zx,{type:"success",title:"Click to toggle group options",icon:this.state.hideGroups?"fa fa-toggle-off":"fa fa-toggle-on",onClick:this.toggleGroupOptions}):(0,y.jsx)(r.zx,{type:"success",label:"Edit",title:"Click to edit the report",icon:"fa fa-edit",onClick:this.props.onEditClicked})}UNSAFE_componentWillReceiveProps(e){super.UNSAFE_componentWillReceiveProps(e),this.initWithProps(e)}initWithProps(e){const{query:t,reportId:s}=e;s?this.reportId!==s&&(this.reportId=s,this.loadReportDefinition(s)):t&&this.query!==t&&(this.query=t,this.loadReportData(t))}async loadReportDefinition(e){const t=await this.$report.getReportDefinition(e);this.title=(null===t||void 0===t?void 0:t.queryName)||"Custom report viewer",this.setState({query:t}),this.loadReportData(t)}loadReportData(e){this.settings={...e.settings,...this.settings},this.jql===e.jql&&this.fields===e.fields||(this.jql=e.jql,this.fields=e.fields,this.loadData(e))}render(){const{query:e}=this.props,{query:t=e}=this.state,{loading:s,reportData:r,columnList:o,settings:a,hasError:n,hideGroups:l}=this.state,{displayColumns:d,groupBy:h,groupFoldable:c,sortField:p,isDesc:u}=this.settings||a||{};return n?super.renderBase((0,y.jsx)("div",{className:"error-block",children:"Unable to load this report due to an error."})):s||!r?super.renderBase():super.renderBase((0,y.jsx)(i.Z,{dataset:r,hideGroups:l,exportSheetName:t.queryName,columns:o,allowSorting:!0,onChange:this.tableSettingsChanged,displayColumns:d,groupBy:h,groupFoldable:c,sortField:p,isDesc:u,noRowsMessage:"No ticket details available"}))}}const v=x}}]);