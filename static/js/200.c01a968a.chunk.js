"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[200],{2835:(e,t,s)=>{function n(e,t,s){if(!e)return null;const{icon:n,name:i}=e;return{name:i,id:`D-${t}`,url:`/${s}/dashboard/${t}`,icon:n,isDashboard:!0}}s.d(t,{G:()=>i,ZP:()=>r,h$:()=>n});const i=[{title:!0,name:"Dashboards",isDashboard:!0},{name:"Default",id:"D-0",url:"/dashboard/0",icon:"fa fa-tachometer",isDashboard:!0},{title:!0,name:"Activities"},{name:"Worklog Calendar",id:"CAL",url:"/calendar",icon:"fa fa-calendar"},{name:"Import worklog",id:"IMW",url:"/import/worklog",icon:"fa fa-clock-o"},{name:"Import issue",id:"IMI",url:"/import/issue",icon:"fa fa-ticket",badge:{variant:"info",text:"BETA"}},{name:"Poker",id:"PLP",url:s(9149).xn?"/../poker":"/poker",icon:"fa fa-ticket",badge:{variant:"info",text:"BETA"},attributes:{target:"_blank",rel:"noopener"}},{title:!0,name:"Reports"},{name:"Worklog Report",id:"R-UD",url:"/reports/userdaywise",icon:"fa fa-users"},{name:"Sprint Report",id:"R-SP",url:"/reports/sprint",icon:"fa fa-history"},{name:"Custom Report",id:"R-CR",url:"/reports/custom",icon:"fa fa-table"},{name:"Estimate vs Actual",id:"R-EA",url:"/reports/estimateactual",icon:"fa fa-bar-chart"},{name:"Report Builder",id:"R-CG",url:"/reports/advanced",icon:"fa fa-table",badge:{variant:"info",text:"BETA"}},{title:!0,name:"Settings"},{name:"General",id:"S-GE",url:"/settings/general",icon:"fa fa-cog"},{name:"User groups",id:"S-UG",url:"/settings/usergroups",icon:"fa fa-users"},{name:"Advanced",id:"S-AD",url:"/settings/global",icon:"fa fa-cogs"},{title:!0,name:"Other"},{name:"Contact us",id:"SUP",url:"/contactus",icon:"fa fa-phone"}],r={items:i}},1329:(e,t,s)=>{s.d(t,{sg:()=>g,ch:()=>m,TT:()=>d,XP:()=>u,Et:()=>p,lE:()=>x});var n=s(7313),i=s(8041),r=s(6123),a=s.n(r),o=s(6417);const l=(0,n.createContext)({}),c="sortChanged",h="dataChanged";class d extends n.PureComponent{constructor(e){super(e),this.sharedProps={getData:()=>this.state.dataset,sortBy:e=>{let{isDesc:t}=this.state;if(t=e===this.state.sortBy&&!t,!e)return this.state.sortBy;{let{dataset:s}=this.state;if(s){let n=!1;this.props.onSort&&(n=this.props.onSort(e,t)),n||(s=s.sortBy(e,t),this.setState({dataset:s,sortBy:e,isDesc:t}),this.eventEmitter.emit(c,e,t))}}},getSortedField:()=>{const{sortBy:e,isDesc:t}=this.state;return{sortBy:e,isDesc:t}},onDataChanged:e=>(this.eventEmitter.on(h,e),()=>this.eventEmitter.off(h,e)),onSortFieldChanged:e=>(this.eventEmitter.on(c,e),()=>this.eventEmitter.off(c,e))},this.eventEmitter=new i.EventEmitter,this.eventEmitter.setMaxListeners(400),this.actualDataset=e.dataset,this.state={dataset:e.dataset,sortBy:e.sortBy,isDesc:e.isDesc}}UNSAFE_componentWillReceiveProps(e){const{dataset:t,sortBy:s,isDesc:n}=e;t!==this.actualDataset&&(this.actualDataset=t,this.setState({dataset:t,sortBy:s,isDesc:n}),this.eventEmitter.emit(h,e.dataset)),s===this.state.sortBy&&n===this.state.isDesc||(this.setState({dataset:t,sortBy:s,isDesc:n}),this.eventEmitter.emit(c,s,n))}render(){const{className:e,style:t,children:s,exportable:n,exportSheetName:i}=this.props;return(0,o.jsx)("div",{className:a()("scroll-table-container",e),ref:e=>this.container=e,children:(0,o.jsx)(l.Provider,{value:this.sharedProps,children:(0,o.jsx)("table",{ref:e=>this.table=e,"export-sheet-name":i,className:a()("scroll-table table-bordered",e,!1!==n?"exportable":null),style:t,children:s})})})}}class p extends n.PureComponent{constructor(){super(...arguments),this.state={}}render(){const{className:e,style:t,children:s}=this.props;return(0,o.jsx)("thead",{className:e,style:t,children:s})}}p.contextType=l;class u extends n.PureComponent{componentDidMount(){this.cleanup=this.context.onSortFieldChanged(((e,t)=>{this.setState({sortBy:e,isDesc:t})}))}componentWillUnmount(){this.cleanup()}render(){const{children:e,className:t,style:s}=this.props,n=this.context.getData();let i=null;return n&&0===n.length?null:(i="function"===typeof e?n&&n.length>0&&n.map(e):e,(0,o.jsx)("tbody",{className:t,style:s,children:i}))}}u.contextType=l;class m extends n.PureComponent{constructor(){super(...arguments),this.state={hasRows:!1}}componentDidMount(){const e=this.context.getData();this.setState({hasRows:!(!e||!e.length)}),this.cleanup=this.context.onDataChanged((e=>this.setState({hasRows:!(!e||!e.length)})))}componentWillUnmount(){this.cleanup()}render(){if(this.state.hasRows)return null;const{children:e,span:t}=this.props;return(0,o.jsx)("tbody",{children:(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:t,children:e})})})}}m.contextType=l;class x extends n.PureComponent{render(){return(0,o.jsx)("tr",{...this.props})}}x.contextType=l;class g extends n.PureComponent{constructor(){super(...arguments),this.state={},this.onClick=e=>{this.context.sortBy(this.props.sortBy)}}componentDidMount(){this.setState(this.context.getSortedField()),this.cleanup=this.context.onSortFieldChanged(((e,t)=>{this.setState({sortBy:e,isDesc:t})}))}componentWillUnmount(){this.cleanup()}render(){const{sortBy:e,isDesc:t}=this.state,{style:s,sortBy:n,children:i,noExport:r,rowSpan:a,colSpan:l,dragConnector:c}=this.props;let{className:h}=this.props;return h||(h=""),e&&(h+=" sortable"),(0,o.jsxs)("th",{ref:c,className:h,style:s,onClick:this.onClick,"no-export":r?"true":null,rowSpan:a,colSpan:l,children:[i," ",n?n===e?(0,o.jsx)("i",{className:"fa fa-sort-"+(t?"desc":"asc")}):(0,o.jsx)("i",{className:"fa fa-sort"}):null]})}}g.contextType=l},5960:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var n=s(7313),i=s(9466),r=s(6552),a=s(1519),o=s(2835),l=s(4616),c=s(1485),h=s(5991),d=s(6698),p=s(7544),u=s(6417);class m extends n.PureComponent{constructor(e){super(e),(0,h.f3)(this,"SessionService");const{jiraUser:{displayName:t,emailAddress:s,key:n,avatarUrls:i}={}}=this.$session.CurrentUser;this.state={name:t,login:n,emailAddress:s,imageUrl:(i||{})["24x24"]}}render(){const{name:e,emailAddress:t,imageUrl:s,login:n}=this.state;return(0,u.jsx)(a.tc,{children:(0,u.jsxs)(d.OB,{direction:"down",children:[(0,u.jsx)(d.Z_,{tag:"div",style:{cursor:"pointer"},children:(0,u.jsxs)("div",{className:"user-panel",children:[(0,u.jsx)("div",{className:"pull-left image",children:(0,u.jsx)("img",{className:"img-circle",src:s,alt:"",title:`${t}(${n})`})}),(0,u.jsxs)("div",{className:"pull-left info",children:[(0,u.jsx)("div",{children:e}),(0,u.jsx)("div",{children:t})]})]})}),(0,u.jsx)(d.h_,{end:!0,children:(0,u.jsx)(p.Z,{})})]})})}}const x=m;var g=s(4711),f=s(232);class j extends n.PureComponent{constructor(e){super(e),(0,l.f3)(this,"UserUtilsService"),this.value=this.$userutils.formatDateTime(f.oV)}render(){return(0,u.jsxs)("span",{className:"build-date",children:["Build: ",this.value]})}}const v=j;var y=s(4074),b=s(9149),S=s(7890),k=s(3021),w=s(5818);const C=n.lazy((()=>Promise.all([s.e(500),s.e(756),s.e(430),s.e(13),s.e(640),s.e(107),s.e(182)]).then(s.bind(s,4486)))),P=n.lazy((()=>Promise.all([s.e(500),s.e(756),s.e(430),s.e(13),s.e(640),s.e(107),s.e(661)]).then(s.bind(s,681)))),T=n.lazy((()=>Promise.all([s.e(500),s.e(997),s.e(511)]).then(s.bind(s,5511)))),D=n.lazy((()=>Promise.all([s.e(500),s.e(997),s.e(647)]).then(s.bind(s,9647)))),E=n.lazy((()=>Promise.all([s.e(500),s.e(640),s.e(356)]).then(s.bind(s,2825)))),$=n.lazy((()=>Promise.all([s.e(500),s.e(13),s.e(12)]).then(s.bind(s,6429)))),N=n.lazy((()=>Promise.all([s.e(500),s.e(13),s.e(760)]).then(s.bind(s,1682)))),U=n.lazy((()=>Promise.all([s.e(500),s.e(756),s.e(430),s.e(13),s.e(640),s.e(107),s.e(131)]).then(s.bind(s,1034)))),B=n.lazy((()=>Promise.all([s.e(500),s.e(756),s.e(430),s.e(13),s.e(640),s.e(107),s.e(588)]).then(s.bind(s,4567)))),I=n.lazy((()=>Promise.all([s.e(951),s.e(262)]).then(s.bind(s,6049)))),A=n.lazy((()=>s.e(536).then(s.bind(s,536)))),R=n.lazy((()=>s.e(514).then(s.bind(s,119)))),z=n.lazy((()=>s.e(642).then(s.bind(s,3642)))),L=n.lazy((()=>s.e(257).then(s.bind(s,8051)))),M=(document.location.href.indexOf("?quick=true"),[{path:"/dashboard/:index/:isQuickView",component:C},{path:"/dashboard/:index",component:C,isExact:!0},{path:"/calendar",component:P},{path:"/reports/userdaywise",component:U},{path:"/reports/estimateactual",component:$},{path:"/reports/sprint",component:N},{path:"/reports/custom/:reportId",component:E},{path:"/reports/custom",component:E},{path:"/reports/advanced/:reportId",component:B},{path:"/reports/advanced",component:B},{path:"/import/worklog",component:T},{path:"/import/issue",component:D},{path:"/settings/general",component:I},{path:"/settings/usergroups",component:A},{path:"/settings/global",component:R},{path:"/contribute",component:L},{path:"/contactus",component:z}]);var W=s(6848);class Z extends n.PureComponent{render(){return(0,u.jsx)(k.W,{backend:w.HTML5Backend,children:(0,u.jsx)(d.W2,{fluid:!0,children:(0,u.jsx)(n.Suspense,{fallback:this.props.loader(),children:(0,u.jsx)(S.Z5,{children:M.map(((e,t)=>{const s=(0,W.E)(e.component);return(0,u.jsx)(S.AW,{path:e.path,exact:e.exact||!1,name:e.name,element:(0,u.jsx)(s,{})},t)}))})})})})}}const _=Z,F=n.lazy((()=>Promise.all([s.e(500),s.e(756),s.e(430),s.e(13),s.e(640),s.e(107),s.e(238)]).then(s.bind(s,5443))));class O extends n.PureComponent{constructor(){var e;super(),e=this,this.loadTracker=()=>this.$wltimer.getCurrentTimer().then((e=>{var t;const s=null===(t=this.state.timerEntry)||void 0===t?void 0:t.key;this.setTimer(e,s&&s!==(null===e||void 0===e?void 0:e.key))})),this.loading=()=>(0,u.jsx)("div",{className:"animated fadeIn pt-1 text-center",children:"Loading..."}),this.signOut=e=>{e.preventDefault(),this.$cache.clear(),this.$settings.set("CurrentUserId"),this.$settings.set("CurrentJiraUrl"),b.xn?document.location.href="/":this.props.navigate("/integrate")},this.setTimer=function(t){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.worklogContextProps={...e.worklogContextProps,needReload:s,timerEntry:t},e.setState({timerEntry:t})},this.worklogContextProps={getElapsedTimeInSecs:()=>{const{timerEntry:e}=this.state;if(!e)return null;const{key:t,started:s,lapse:n,description:i}=e,r=(new Date).getTime();if(s>=r)return this.$message.error("System time has changed since timer has started. Please stop and restart the timer.","Time mismatch"),{key:t,lapse:0,description:i,isRunning:!1,hasError:!0};const a=(s>0?r-s:0)+(n||0);return{key:t,lapse:Math.round(a/1e3),description:i,isRunning:s>0}},setUpdates:this.setTimer,startTimer:async(e,t)=>{t||(t=this.$session.userId);try{var s;let a=await this.$wltimer.startTimer(t,e);var n,i;if(null!==(s=a)&&void 0!==s&&s.isActive)r.Z.yesNo((0,u.jsxs)(u.Fragment,{children:['Already timer is running for "',null===(n=a)||void 0===n||null===(i=n.entry)||void 0===i?void 0:i.key,'".',(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"Would you like to stop it and start new timer?"]}),"Timer running").then((async()=>{a=await this.$wltimer.startTimer(t,e,null,!0),this.setTimer(a,!0)}));else this.setTimer(a)}catch(a){this.$message.error(a.message)}},resumeTimer:async()=>this.setTimer(await this.$wltimer.resumeTimer()),pauseTimer:async()=>this.setTimer(await this.$wltimer.pauseTimer()),stopTimer:async()=>this.setTimer(!await this.$wltimer.stopTimer(),!0)},(0,l.f3)(this,"DashboardService","SessionService","SettingsService","CacheService","WorklogTimerService","MessageService");const{userId:t}=this.$session;this.state={menus:this.getMenus(t),userId:t}}componentDidMount(){const{userId:e}=this.state;(0,g._3)(this.$session.CurrentUser.startOfWeek),this.loadTracker(),window.addEventListener("focus",this.loadTracker),this.$dashboard.onChange((()=>this.setState({menus:this.getMenus(e)}))),this.initBody()}async initBody(){const e=document.body.classList;document.location.href.indexOf("?quick=true")>-1&&(this.$session.isQuickView=!0,e.add("quick-view"));const t=await this.$settings.get("skin",!0)||"skin-blue";e.add(t)}componentWillUnmount(){this.$dashboard.onChange((()=>{})),window.removeEventListener("focus",this.loadTracker)}getMenus(e){const t=o.ZP.items.map((t=>{const s={...t};return s.url=`/${e}${s.url}`,s})),s=this.$dashboard.getDashboards();return null!==s&&void 0!==s&&s.length&&t.splice(1,1,...s.map(((t,s)=>(0,o.h$)(t,s,e)))),{items:t}}render(){const{menus:e}=this.state;return(0,u.jsx)(y.iD,{value:this.worklogContextProps,children:(0,u.jsxs)("div",{className:"app",children:[(0,u.jsx)(a.tf,{fixed:!0,children:(0,u.jsx)(F,{onLogout:this.signOut})}),(0,u.jsxs)("div",{className:"app-body",children:[(0,u.jsxs)(a.S8,{fixed:!0,display:"lg",children:[(0,u.jsx)(x,{onLogout:this.signOut}),(0,u.jsx)(a.Bb,{navConfig:e,...this.props,router:i}),(0,u.jsx)(a.k8,{children:(0,u.jsx)(v,{})})]}),(0,u.jsx)("main",{className:"main",children:(0,u.jsx)(_,{loader:this.loading})})]}),(0,u.jsx)(c.xV,{})]})})}}const H=(0,W.E)(O)},7544:(e,t,s)=>{s.d(t,{Z:()=>b});var n=s(7313),i=s(6698),r=s(5991),a=s(4711),o=s(4074),l=s(6444),c=s(9970),h=s(1329),d=s(232),p=s(9165),u=s(1783),m=s(4616),x=s(6417);class g extends u.Z{constructor(e){super(e,"Export Settings",{width:"520px"}),this.setValue=(e,t,s)=>{let{settings:n}=this.state;n={...n};const i={...n[s.id]};e?i[t]=e:delete i[t],Object.keys(i).length?n[s.id]=i:delete n[s.id];const r=Object.keys(n).length>0;this.setState({settings:n,hasSelection:r})},this.export=async()=>{const{settings:e,exportAll:t}=this.state,s=await this.$backup.exportBackup(t||e),n=(0,c.$k)(s),i=`JA_Backup_${(new Date).format("yyyyMMdd")}.jab`;(0,a.FA)(n,"jab",i),this.$analytics.trackEvent("Settings exported",l.Jk.UserActions),this.onHide()},this.toggleAll=e=>this.setState({exportAll:e}),(0,m.f3)(this,"UserService","BackupService"),this.state.settings={},this.state.exportAll=!0,this.init()}async init(){const e=await this.$user.getAllUsers();this.setState({users:e})}getFooter(){const{hasSelection:e,exportAll:t}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.XZ,{checked:t,onChange:this.toggleAll,label:"Export all settings",className:"pull-left"}),(0,x.jsx)(p.zx,{icon:"fa fa-times",label:"Cancel",onClick:this.onHide}),(0,x.jsx)(p.zx,{type:"success",icon:"fa fa-download",label:"Export",onClick:this.export,disabled:!t&&!e})]})}render(){const{users:e,settings:t,exportAll:s}=this.state;return e?super.renderBase((0,x.jsxs)(h.TT,{children:[(0,x.jsx)(h.Et,{children:(0,x.jsxs)(h.lE,{children:[(0,x.jsx)("th",{children:"Instance"}),(0,x.jsx)("th",{children:"Reports"}),(0,x.jsx)("th",{children:"User Groups"}),(0,x.jsx)("th",{children:"Settings"})]})}),(0,x.jsx)(h.XP,{children:e.map(((e,n)=>{var i,r,a;return(0,x.jsxs)(h.lE,{children:[(0,x.jsx)("td",{children:e.id===d.rH?"General":e.jiraUrl}),(0,x.jsx)("td",{children:e.id>d.rH&&(0,x.jsx)(p.XZ,{checked:s||(null===(i=t[e.id])||void 0===i?void 0:i.reports)||!1,field:"reports",args:e,onChange:this.setValue,disabled:s})}),(0,x.jsx)("td",{children:e.id>d.rH&&(0,x.jsx)(p.XZ,{checked:s||(null===(r=t[e.id])||void 0===r?void 0:r.groups)||!1,field:"groups",args:e,onChange:this.setValue,disabled:s||e.id===d.rH})}),(0,x.jsx)("td",{children:(0,x.jsx)(p.XZ,{checked:s||(null===(a=t[e.id])||void 0===a?void 0:a.settings)||!1,field:"settings",args:e,onChange:this.setValue,disabled:s})})]},n)}))})]})):super.renderBase((0,x.jsx)("span",{children:"Loading..."}))}}const f=g;var j=s(9149);class v extends n.PureComponent{constructor(e){super(e),this.switchUser=e=>{const t=parseInt(e.currentTarget.attributes["user-id"].value);this.context.switchUser(t),this.$analytics.trackEvent("Instance switched",l.Jk.Instance)},(0,r.f3)(this,"SessionService","UserService","UserUtilsService","AnalyticsService"),this.currentUserId=this.$session.CurrentUser.userId,this.state={profileUrl:this.$userutils.getProfileUrl()}}async componentDidMount(){const e=await this.$user.getUsersList();this.setState({users:e.filter((e=>e.id!==this.currentUserId))})}render(){const{users:e,profileUrl:t}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.hP,{header:!0,tag:"div",className:"text-center",children:(0,x.jsx)("strong",{children:"Switch Instance"})}),e&&e.length>0&&e.map((e=>(0,x.jsxs)(i.hP,{tag:"span","user-id":e.id,onClick:this.switchUser,title:e.email,children:[(0,x.jsx)("i",{className:"fa fa-external-link icon-extl"}),(0,x.jsxs)("div",{className:"inline pointer",children:[(0,x.jsx)("div",{children:(0,a._P)(e.jiraUrl)}),(0,x.jsxs)("div",{children:["(",e.userId,")"]})]})]},e.id))),(0,x.jsxs)(i.hP,{tag:"a",href:j.xn?"/integrate":"/index.html#/integrate",title:"Integrate with new instance of Jira",children:[(0,x.jsx)("i",{className:"fa fa-plug"})," Integrate"]}),(0,x.jsx)(i.hP,{header:!0,tag:"div",className:"text-center",children:(0,x.jsx)("strong",{children:"Settings"})}),(0,x.jsxs)(i.hP,{tag:"span",onClick:this.props.showSettings,className:"pointer",children:[(0,x.jsx)("i",{className:"fa fa-download"})," Export Settings"]}),(0,x.jsxs)(i.hP,{tag:"span",className:"pointer",onClick:this.props.onImport,children:[(0,x.jsx)("i",{className:"fa fa-upload"})," Import Settings"]}),(0,x.jsxs)(i.hP,{tag:"a",href:t,target:"_blank",children:[(0,x.jsx)("i",{className:"fa fa-user"})," Jira Profile"]}),(0,x.jsxs)(i.hP,{onClick:this.props.onLogout,children:[(0,x.jsx)("i",{className:"fa fa-lock"})," Logout"]})]})}}v.contextType=o.Il;class y extends n.PureComponent{constructor(e){super(e),this.showSettings=()=>this.setState({showSettingPopup:!0}),this.hideSettings=()=>this.setState({showSettingPopup:!0}),this.state={}}render(){const{showSettingPopup:e}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.JL,{className:"d-md-down-none margin-r-5",navbar:!0,children:(0,x.jsxs)(i.OB,{nav:!0,direction:"down",children:[(0,x.jsx)(i.Z_,{nav:!0,children:(0,x.jsxs)("span",{className:"nav-link pointer",title:`Currently connected to ${this.props.instance}. Click to see more options.`,children:[" ",(0,x.jsx)("span",{className:"fa fa-exchange"})," ",(0,x.jsx)("strong",{children:this.props.instance})]})}),(0,x.jsx)(i.h_,{left:!0,children:(0,x.jsx)(v,{onLogout:this.props.onLogout,onImport:this.props.onImport,showSettings:this.showSettings})})]})}),e&&(0,x.jsx)(f,{onDone:this.hideSettings,onHide:this.hideSettings})]})}}const b=y}}]);