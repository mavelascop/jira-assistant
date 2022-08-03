"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[396],{2835:(e,t,s)=>{function n(e,t,s){if(!e)return null;const{icon:n,name:i}=e;return{name:i,id:`D-${t}`,url:`/${s}/dashboard/${t}`,icon:n,isDashboard:!0}}s.d(t,{G:()=>i,ZP:()=>a,h$:()=>n});const i=[{title:!0,name:"Dashboards",isDashboard:!0},{name:"Default",id:"D-0",url:"/dashboard/0",icon:"fa fa-tachometer",isDashboard:!0},{title:!0,name:"Activities"},{name:"Worklog Calendar",id:"CAL",url:"/calendar",icon:"fa fa-calendar"},{name:"Import worklog",id:"IMW",url:"/import/worklog",icon:"fa fa-clock-o"},{name:"Import issue",id:"IMI",url:"/import/issue",icon:"fa fa-ticket",badge:{variant:"info",text:"BETA"}},{title:!0,name:"Reports"},{name:"Worklog Report",id:"R-UD",url:"/reports/userdaywise",icon:"fa fa-users"},{name:"Sprint Report",id:"R-SP",url:"/reports/sprint",icon:"fa fa-history"},{name:"Custom Report",id:"R-CR",url:"/reports/custom",icon:"fa fa-table"},{name:"Estimate vs Actual",id:"R-EA",url:"/reports/estimateactual",icon:"fa fa-bar-chart"},{name:"Report Builder",id:"R-CG",url:"/reports/advanced",icon:"fa fa-table",badge:{variant:"info",text:"BETA"}},{title:!0,name:"Settings"},{name:"General",id:"S-GE",url:"/settings/general",icon:"fa fa-cog"},{name:"User groups",id:"S-UG",url:"/settings/usergroups",icon:"fa fa-users"},{name:"Advanced",id:"S-AD",url:"/settings/global",icon:"fa fa-cogs"},{title:!0,name:"Other"},{name:"Contact us",id:"SUP",url:"/contactus",icon:"fa fa-phone"}],a={items:i}},1329:(e,t,s)=>{s.d(t,{sg:()=>g,ch:()=>m,TT:()=>d,XP:()=>u,Et:()=>p,lE:()=>x});var n=s(7313),i=s(8041),a=s(6123),r=s.n(a),o=s(6417);const l=(0,n.createContext)({}),c="sortChanged",h="dataChanged";class d extends n.PureComponent{constructor(e){super(e),this.sharedProps={getData:()=>this.state.dataset,sortBy:e=>{let{isDesc:t}=this.state;if(t=e===this.state.sortBy&&!t,!e)return this.state.sortBy;{let{dataset:s}=this.state;if(s){let n=!1;this.props.onSort&&(n=this.props.onSort(e,t)),n||(s=s.sortBy(e,t),this.setState({dataset:s,sortBy:e,isDesc:t}),this.eventEmitter.emit(c,e,t))}}},getSortedField:()=>{const{sortBy:e,isDesc:t}=this.state;return{sortBy:e,isDesc:t}},onDataChanged:e=>(this.eventEmitter.on(h,e),()=>this.eventEmitter.off(h,e)),onSortFieldChanged:e=>(this.eventEmitter.on(c,e),()=>this.eventEmitter.off(c,e))},this.eventEmitter=new i.EventEmitter,this.eventEmitter.setMaxListeners(400),this.actualDataset=e.dataset,this.state={dataset:e.dataset,sortBy:e.sortBy,isDesc:e.isDesc}}UNSAFE_componentWillReceiveProps(e){const{dataset:t,sortBy:s,isDesc:n}=e;t!==this.actualDataset&&(this.actualDataset=t,this.setState({dataset:t,sortBy:s,isDesc:n}),this.eventEmitter.emit(h,e.dataset)),s===this.state.sortBy&&n===this.state.isDesc||(this.setState({dataset:t,sortBy:s,isDesc:n}),this.eventEmitter.emit(c,s,n))}render(){const{className:e,style:t,children:s,exportable:n,exportSheetName:i}=this.props;return(0,o.jsx)("div",{className:r()("scroll-table-container",e),ref:e=>this.container=e,children:(0,o.jsx)(l.Provider,{value:this.sharedProps,children:(0,o.jsx)("table",{ref:e=>this.table=e,"export-sheet-name":i,className:r()("scroll-table table-bordered",e,!1!==n?"exportable":null),style:t,children:s})})})}}class p extends n.PureComponent{constructor(){super(...arguments),this.state={}}render(){const{className:e,style:t,children:s}=this.props;return(0,o.jsx)("thead",{className:e,style:t,children:s})}}p.contextType=l;class u extends n.PureComponent{componentDidMount(){this.cleanup=this.context.onSortFieldChanged(((e,t)=>{this.setState({sortBy:e,isDesc:t})}))}componentWillUnmount(){this.cleanup()}render(){const{children:e,className:t,style:s}=this.props,n=this.context.getData();let i=null;return n&&0===n.length?null:(i="function"===typeof e?n&&n.length>0&&n.map(e):e,(0,o.jsx)("tbody",{className:t,style:s,children:i}))}}u.contextType=l;class m extends n.PureComponent{constructor(){super(...arguments),this.state={hasRows:!1}}componentDidMount(){const e=this.context.getData();this.setState({hasRows:!(!e||!e.length)}),this.cleanup=this.context.onDataChanged((e=>this.setState({hasRows:!(!e||!e.length)})))}componentWillUnmount(){this.cleanup()}render(){if(this.state.hasRows)return null;const{children:e,span:t}=this.props;return(0,o.jsx)("tbody",{children:(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:t,children:e})})})}}m.contextType=l;class x extends n.PureComponent{render(){return(0,o.jsx)("tr",{...this.props})}}x.contextType=l;class g extends n.PureComponent{constructor(){super(...arguments),this.state={},this.onClick=e=>{this.context.sortBy(this.props.sortBy)}}componentDidMount(){this.setState(this.context.getSortedField()),this.cleanup=this.context.onSortFieldChanged(((e,t)=>{this.setState({sortBy:e,isDesc:t})}))}componentWillUnmount(){this.cleanup()}render(){const{sortBy:e,isDesc:t}=this.state,{style:s,sortBy:n,children:i,noExport:a,rowSpan:r,colSpan:l,dragConnector:c}=this.props;let{className:h}=this.props;return h||(h=""),e&&(h+=" sortable"),(0,o.jsxs)("th",{ref:c,className:h,style:s,onClick:this.onClick,"no-export":a?"true":null,rowSpan:r,colSpan:l,children:[i," ",n?n===e?(0,o.jsx)("i",{className:"fa fa-sort-"+(t?"desc":"asc")}):(0,o.jsx)("i",{className:"fa fa-sort"}):null]})}}g.contextType=l},6892:(e,t,s)=>{s.r(t),s.d(t,{default:()=>W});var n=s(7313),i=s(7030),a=s(8303),r=s(3021),o=s(5818),l=s(560),c=s(8407),h=s(1519),d=s(2835);const p=n.lazy((()=>Promise.all([s.e(500),s.e(960),s.e(13),s.e(640),s.e(136),s.e(182)]).then(s.bind(s,4486)))),u=n.lazy((()=>Promise.all([s.e(500),s.e(960),s.e(13),s.e(640),s.e(136),s.e(661)]).then(s.bind(s,681)))),m=n.lazy((()=>Promise.all([s.e(500),s.e(997),s.e(511)]).then(s.bind(s,5511)))),x=n.lazy((()=>Promise.all([s.e(500),s.e(997),s.e(647)]).then(s.bind(s,9647)))),g=n.lazy((()=>Promise.all([s.e(500),s.e(640),s.e(356)]).then(s.bind(s,2825)))),j=n.lazy((()=>Promise.all([s.e(500),s.e(13),s.e(12)]).then(s.bind(s,6429)))),f=n.lazy((()=>Promise.all([s.e(500),s.e(13),s.e(760)]).then(s.bind(s,1682)))),y=n.lazy((()=>Promise.all([s.e(500),s.e(960),s.e(13),s.e(640),s.e(136),s.e(131)]).then(s.bind(s,1034)))),S=n.lazy((()=>Promise.all([s.e(500),s.e(960),s.e(13),s.e(640),s.e(136),s.e(588)]).then(s.bind(s,4567)))),b=n.lazy((()=>Promise.all([s.e(951),s.e(349)]).then(s.bind(s,8461)))),v=n.lazy((()=>s.e(536).then(s.bind(s,536)))),k=n.lazy((()=>s.e(119).then(s.bind(s,119)))),C=n.lazy((()=>s.e(642).then(s.bind(s,3642)))),P=n.lazy((()=>s.e(257).then(s.bind(s,8051)))),w=(document.location.href.indexOf("?quick=true"),[{path:"/dashboard/:index/:isQuickView",component:p},{path:"/dashboard/:index",component:p,isExact:!0},{path:"/calendar",component:u},{path:"/reports/userdaywise",component:y},{path:"/reports/estimateactual",component:j},{path:"/reports/sprint",component:f},{path:"/reports/custom/:reportId",component:g},{path:"/reports/custom",component:g},{path:"/reports/advanced/:reportId",component:S},{path:"/reports/advanced",component:S},{path:"/import/worklog",component:m},{path:"/import/issue",component:x},{path:"/settings/general",component:b},{path:"/settings/usergroups",component:v},{path:"/settings/global",component:k},{path:"/contribute",component:P},{path:"/contactus",component:C}]);var D=s(4616),N=s(747),U=s(6088),B=s(7544),$=s(6417);class E extends n.PureComponent{constructor(e){super(e),(0,U.f3)(this,"SessionService");const{jiraUser:{displayName:t,emailAddress:s,key:n,avatarUrls:i}={}}=this.$session.CurrentUser;this.state={name:t,login:n,emailAddress:s,imageUrl:(i||{})["24x24"]}}render(){const{name:e,emailAddress:t,imageUrl:s,login:n}=this.state;return(0,$.jsx)(h.tc,{children:(0,$.jsxs)(l.OB,{direction:"down",children:[(0,$.jsx)(l.Z_,{tag:"div",style:{cursor:"pointer"},children:(0,$.jsxs)("div",{className:"user-panel",children:[(0,$.jsx)("div",{className:"pull-left image",children:(0,$.jsx)("img",{className:"img-circle",src:s,alt:"",title:`${t}(${n})`})}),(0,$.jsxs)("div",{className:"pull-left info",children:[(0,$.jsx)("div",{children:e}),(0,$.jsx)("div",{children:t})]})]})}),(0,$.jsx)(l.h_,{right:!0,children:(0,$.jsx)(B.Z,{})})]})})}}const I=E;var A=s(4711),z=s(232);class R extends n.PureComponent{constructor(e){super(e),(0,D.f3)(this,"UserUtilsService"),this.value=this.$userutils.formatDateTime(z.oV)}render(){return(0,$.jsxs)("span",{className:"build-date",children:["Build: ",this.value]})}}const T=R,L=n.lazy((()=>s.e(770).then(s.bind(s,2770))));class M extends n.PureComponent{constructor(){super(),this.loading=()=>(0,$.jsx)("div",{className:"animated fadeIn pt-1 text-center",children:"Loading..."}),this.signOut=e=>{e.preventDefault(),this.$cache.clear(),this.props.history.push("/integrate")},(0,D.f3)(this,"DashboardService","SessionService","SettingsService","CacheService");const{userId:e}=this.$session;this.state={menus:this.getMenus(e),userId:e},this.initApp()}initApp(){const{userId:e}=this.state;(0,A._3)(this.$session.CurrentUser.startOfWeek),this.$dashboard.onChange((()=>this.setState({menus:this.getMenus(e)}))),this.initBody()}async initBody(){const e=document.body.classList;document.location.href.indexOf("?quick=true")>-1&&(this.$session.isQuickView=!0,e.add("quick-view"));const t=await this.$settings.get("skin",!0)||"skin-blue";e.add(t)}componentWillUnmount(){this.$dashboard.onChange((()=>{}))}getMenus(e){const t=d.ZP.items.map((t=>{const s={...t};return s.url=`/${e}${s.url}`,s})),s=this.$dashboard.getDashboards();return null!==s&&void 0!==s&&s.length&&t.splice(1,1,...s.map(((t,s)=>(0,d.h$)(t,s,e)))),{items:t}}render(){const{userId:e,menus:t}=this.state;return(0,$.jsxs)("div",{className:"app",children:[(0,$.jsx)(h.tf,{fixed:!0,children:(0,$.jsx)(n.Suspense,{fallback:this.loading(),children:(0,$.jsx)(L,{onLogout:this.signOut})})}),(0,$.jsxs)("div",{className:"app-body",children:[(0,$.jsxs)(h.S8,{fixed:!0,display:"lg",children:[(0,$.jsx)(I,{onLogout:this.signOut}),(0,$.jsx)(n.Suspense,{children:(0,$.jsx)(h.Bb,{navConfig:t,...this.props,router:a})}),(0,$.jsx)(h.k8,{children:(0,$.jsx)(T,{})})]}),(0,$.jsx)("main",{className:"main",children:(0,$.jsx)(r.W,{backend:o.HTML5Backend,children:(0,$.jsx)(l.W2,{fluid:!0,children:(0,$.jsx)(n.Suspense,{fallback:this.loading(),children:(0,$.jsx)(i.rs,{children:w.map(((t,s)=>t.component?(0,$.jsx)(i.AW,{path:`/${e}${t.path}`,exact:t.exact,name:t.name,render:e=>(0,$.jsx)(t.component,{...e})},s):null))})})})})})]}),(0,$.jsx)(N.ContextMenu,{}),(0,$.jsx)(c.Q,{})]})}}const W=M},7544:(e,t,s)=>{s.d(t,{Z:()=>S});var n=s(7313),i=s(560),a=s(6088),r=s(4134),o=s(4711),l=s(6444),c=s(9970),h=s(1329),d=s(232),p=s(9422),u=s(1783),m=s(4616),x=s(6417);class g extends u.Z{constructor(e){super(e,"Export Settings",{width:"520px"}),this.setValue=(e,t,s)=>{let{settings:n}=this.state;n={...n};const i={...n[s.id]};e?i[t]=e:delete i[t],Object.keys(i).length?n[s.id]=i:delete n[s.id];const a=Object.keys(n).length>0;this.setState({settings:n,hasSelection:a})},this.export=async()=>{const{settings:e,exportAll:t}=this.state,s=await this.$backup.exportData(t||e),n=(0,c.$k)(s),i=`JA_Backup_${(new Date).format("yyyyMMdd")}.jab`;(0,o.FA)(n,"jab",i),this.$analytics.trackEvent("Settings exported",l.Jk.UserActions)},this.toggleAll=e=>this.setState({exportAll:e}),(0,m.f3)(this,"UserService","BackupService"),this.state.settings={},this.state.exportAll=!0,this.init()}async init(){const e=await this.$user.getAllUsers();this.setState({users:e})}getFooter(){const{hasSelection:e,exportAll:t}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.XZ,{checked:t,onChange:this.toggleAll,label:"Export all settings",className:"pull-left"}),(0,x.jsx)(p.zx,{icon:"fa fa-times",label:"Cancel",onClick:this.onHide}),(0,x.jsx)(p.zx,{type:"success",icon:"fa fa-download",label:"Export",onClick:this.export,disabled:!t&&!e})]})}render(){const{users:e,settings:t,exportAll:s}=this.state;return e?super.renderBase((0,x.jsxs)(h.TT,{children:[(0,x.jsx)(h.Et,{children:(0,x.jsxs)(h.lE,{children:[(0,x.jsx)("th",{children:"Instance"}),(0,x.jsx)("th",{children:"Reports"}),(0,x.jsx)("th",{children:"User Groups"}),(0,x.jsx)("th",{children:"Settings"})]})}),(0,x.jsx)(h.XP,{children:e.map(((e,n)=>{var i,a,r;return(0,x.jsxs)(h.lE,{children:[(0,x.jsx)("td",{children:e.id===d.rH?"General":e.jiraUrl}),(0,x.jsx)("td",{children:e.id>d.rH&&(0,x.jsx)(p.XZ,{checked:s||(null===(i=t[e.id])||void 0===i?void 0:i.reports)||!1,field:"reports",args:e,onChange:this.setValue,disabled:s})}),(0,x.jsx)("td",{children:e.id>d.rH&&(0,x.jsx)(p.XZ,{checked:s||(null===(a=t[e.id])||void 0===a?void 0:a.groups)||!1,field:"groups",args:e,onChange:this.setValue,disabled:s||e.id===d.rH})}),(0,x.jsx)("td",{children:(0,x.jsx)(p.XZ,{checked:s||(null===(r=t[e.id])||void 0===r?void 0:r.settings)||!1,field:"settings",args:e,onChange:this.setValue,disabled:s})})]},n)}))})]})):super.renderBase((0,x.jsx)("span",{children:"Loading..."}))}}const j=g;class f extends n.PureComponent{constructor(e){super(e),this.switchUser=e=>{const t=parseInt(e.currentTarget.attributes["user-id"].value);this.context.switchUser(t),this.$analytics.trackEvent("Instance switched",l.Jk.Instance)},(0,a.f3)(this,"SessionService","UserService","UserUtilsService","AnalyticsService"),this.currentUserId=this.$session.CurrentUser.userId,this.state={profileUrl:this.$userutils.getProfileUrl()},this.init()}async init(){const e=await this.$user.getUsersList();this.setState({users:e.filter((e=>e.id!==this.currentUserId))})}render(){const{users:e,profileUrl:t}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.hP,{header:!0,tag:"div",className:"text-center",children:(0,x.jsx)("strong",{children:"Switch Instance"})}),e&&e.length>0&&e.map((e=>(0,x.jsxs)(i.hP,{tag:"span","user-id":e.id,onClick:this.switchUser,title:e.email,children:[(0,x.jsx)("i",{className:"fa fa-external-link icon-extl"}),(0,x.jsxs)("div",{className:"inline pointer",children:[(0,x.jsx)("div",{children:(0,o._P)(e.jiraUrl)}),(0,x.jsxs)("div",{children:["(",e.userId,")"]})]})]},e.id))),(0,x.jsxs)(i.hP,{tag:"a",href:"/index.html#/integrate",title:"Integrate with new instance of Jira",children:[(0,x.jsx)("i",{className:"fa fa-plug"})," Integrate"]}),(0,x.jsx)(i.hP,{header:!0,tag:"div",className:"text-center",children:(0,x.jsx)("strong",{children:"Settings"})}),(0,x.jsxs)(i.hP,{tag:"span",onClick:this.props.showSettings,className:"pointer",children:[(0,x.jsx)("i",{className:"fa fa-download"})," Export Settings"]}),(0,x.jsxs)(i.hP,{tag:"span",className:"pointer",onClick:this.props.onImport,children:[(0,x.jsx)("i",{className:"fa fa-upload"})," Import Settings"]}),(0,x.jsxs)(i.hP,{tag:"a",href:t,target:"_blank",children:[(0,x.jsx)("i",{className:"fa fa-user"})," Jira Profile"]}),(0,x.jsxs)(i.hP,{onClick:this.props.onLogout,children:[(0,x.jsx)("i",{className:"fa fa-lock"})," Logout"]})]})}}f.contextType=r.Il;class y extends n.PureComponent{constructor(e){super(e),this.showSettings=()=>this.setState({showSettingPopup:!0}),this.hideSettings=()=>this.setState({showSettingPopup:!0}),this.state={}}render(){const{showSettingPopup:e}=this.state;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.JL,{className:"d-md-down-none margin-r-5",navbar:!0,children:(0,x.jsxs)(i.OB,{nav:!0,direction:"down",children:[(0,x.jsx)(i.Z_,{nav:!0,children:(0,x.jsxs)("span",{className:"nav-link pointer",title:`Currently connected to ${this.props.instance}. Click to see more options.`,children:[" ",(0,x.jsx)("span",{className:"fa fa-exchange"})," ",(0,x.jsx)("strong",{children:this.props.instance})]})}),(0,x.jsx)(i.h_,{left:!0,children:(0,x.jsx)(f,{onLogout:this.props.onLogout,onImport:this.props.onImport,showSettings:this.showSettings})})]})}),e&&(0,x.jsx)(j,{onDone:this.hideSettings,onHide:this.hideSettings})]})}}const S=y}}]);