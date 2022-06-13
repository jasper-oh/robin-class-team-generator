(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,n){e.exports=n(365)},364:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(27),l=n(28),m=n(143),u=n(92),s=n(96),p=n(62),g=n.n(p),d=function(){return function(e,t){0===t().groups.length&&e({type:"GROUPS_FETCHED",groups:t().groups})}},h=Object(l.c)({groups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_GROUP":return[].concat(Object(s.a)(e),[t.group]);case"DELETE_GROUP":return e.filter(function(e){return e.id!==t.id});case"GROUPS_FETCHED":return t.groups;case"ADD_MEMBER":return e.map(function(e){return e.id===t.member.id?Object(u.a)({},e,{members:[].concat(Object(s.a)(e.members),[{id:t.member.memberId,name:t.member.name}])}):e});case"DELETE_MEMBER":return e.map(function(e){return e.id===t.member.id?Object(u.a)({},e,{members:e.members.filter(function(e){return e.id!==t.member.memberId})}):e});default:return e}}}),f=n(93),b=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d)(Object(l.a)(m.a,Object(f.save)({states:["groups"],namespace:"redux"}))),E=Object(l.e)(h,Object(f.load)({states:["groups"],namespace:"redux"}),b),v=n(41),y=n(29),O=n(20),C=n(37),S=n(38),x=n(42),j=n(39),k=n(43),D=n(5),w=n(24),M=Object(w.withStyles)(function(e){return{root:{flexGrow:1},form:{marginTop:"1rem"},paper:{padding:15*e.spacing.unit,textAlign:"center",backgroundColor:"#E9BC6A",color:e.palette.text.secondary},margin:{margin:e.spacing.unit},chip:{fontSize:20,color:"#e4f9f5",backgroundColor:"#11999e",margin:3*e.spacing.unit},link:{textDecoration:"none","&:focus, &:hover, &:visited, &:link, &:active":{textDecoration:"none"}}}})(function(e){var t=e.onDelete,n=e.onSubmit,a=e.onChange,o=e.values,c=e.groups,i=e.classes,l=o.groupName;return r.a.createElement("div",{className:i.root},r.a.createElement(D.h,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:24},r.a.createElement(D.h,{item:!0,xs:4},r.a.createElement(D.q,{className:i.paper},r.a.createElement(D.t,{component:"h5",variant:"h5",gutterBottom:!0},0===c.length?"Create a group":"Select a group"),c.map(function(e){return r.a.createElement(D.k,{component:v.b,key:e.id,to:"/group/".concat(e.id)},r.a.createElement(D.d,{key:e.id,label:e.name,color:"primary",className:i.chip,onDelete:t(e.id,e.members.length)}))}),r.a.createElement("div",{className:i.form},r.a.createElement("form",{onSubmit:n},r.a.createElement(D.s,{value:l,onChange:a,placeholder:"Enter group name",type:"text",name:"groupName",required:!0}),r.a.createElement(D.a,{size:"small",type:"submit",className:i.margin},"Add")))))))}),G=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={groupName:""},n.onSubmit=function(e){var t=n.state.groupName,a=n.props.addGroup;e.preventDefault(),a(t),n.setState({groupName:""})},n.onChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.onDelete=function(e,t){return function(a){var r=n.props.deleteGroup;a.preventDefault(),t>0?window.confirm("Are you sure you want to delete this group with ".concat(t," members"))&&r(e):r(e)}},n}return Object(k.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getGroups)()}},{key:"render",value:function(){var e=this.props.groups;return r.a.createElement(M,{onSubmit:this.onSubmit,onChange:this.onChange,values:this.state,groups:e,onDelete:this.onDelete})}}]),t}(r.a.Component),N=Object(i.b)(function(e){return{groups:e.groups}},{addGroup:function(e){return{type:"ADD_GROUP",group:{id:g()(),name:e,members:[]}}},getGroups:d,deleteGroup:function(e){return{type:"DELETE_GROUP",id:e}}})(G),z=n(40),A=n.n(z),I=n(145),_=n.n(I),B=Object(w.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",backgroundColor:"#30e3ca",color:e.palette.text.secondary},margin:{margin:e.spacing.unit},link:{textDecoration:"none","&:focus, &:hover, &:visited, &:link, &:active":{textDecoration:"none",color:"black"}},demo:{backgroundColor:e.palette.background.paper}}})(function(e){var t=e.onDelete,n=e.onSubmit,a=e.onChange,o=e.values,c=e.groups,i=e.selectedGroupId,l=e.classes,m=o.groupMember,u=c.filter(function(e){return e.id===i});return r.a.createElement(D.q,{className:l.paper},r.a.createElement(D.t,{component:"h5",variant:"h5",gutterBottom:!0},0!==u.length&&u[0].members.length," ","Group Members"),r.a.createElement(D.e,null),r.a.createElement(D.l,{dense:!0},0!==u.length&&u[0].members.map(function(e){return r.a.createElement(D.m,{key:e.id},r.a.createElement(D.o,{primary:"".concat(e.name)}),r.a.createElement(D.n,null,r.a.createElement(D.i,{"aria-label":"Delete",onClick:t(u[0].id,e.id)},r.a.createElement(_.a,null))))})),r.a.createElement("form",{onSubmit:n},r.a.createElement(D.s,{value:m,onChange:a,placeholder:"Enter name",type:"text",name:"groupMember",required:!0,margin:"dense"}),r.a.createElement(D.a,{size:"small",type:"submit",className:l.margin},"Add")))}),R=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},T=n(95),P=n.n(T),U=Object(w.withStyles)({card:{margin:"1rem",backgroundColor:"#e4f9f5"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})(function(e){var t=e.teamCount,n=e.members,a=e.classes,o=e.maxSize,c=function(e,t){for(var n=[];e.length;){var a=Math.ceil(e.length/t--),r=e.slice(0,a);n.push(r),e=e.slice(a)}return n}(R(n),t),i=function(e,t){var n=Math.ceil(e.length/t);if(!n)return[e];t=Math.ceil(e.length/n);var a=e.length-(t-1)*(e.length%t&&t-e.length%t);return P.a.chunk(e.slice(0,a),t).concat(P.a.chunk(e.slice(a),t-1))}(R(n),o),l=t?c:o?i:null;return r.a.createElement(D.h,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:24},l.map(function(e,t){return r.a.createElement(D.b,{key:t,className:a.card},r.a.createElement(D.c,null,r.a.createElement(D.t,{className:a.title,color:"textSecondary",gutterBottom:!0},"Team"," ",t+1),r.a.createElement(D.e,null),r.a.createElement(D.l,{dense:!1},e.map(function(e){return r.a.createElement(D.m,{key:e.id},r.a.createElement(D.o,{primary:e.name}))}))))}))}),q=Object(w.withStyles)(function(e){return{root:{flexGrow:1},formControl:{margin:e.spacing.unit,minWidth:120},paper:{padding:2*e.spacing.unit,textAlign:"center",backgroundColor:"#11999e",color:e.palette.text.secondary},margin:{margin:e.spacing.unit},link:{textDecoration:"none","&:focus, &:hover, &:visited, &:link, &:active":{textDecoration:"none",color:"black"}},demo:{backgroundColor:e.palette.background.paper}}})(function(e){var t=e.groups,n=e.selectedGroupId,a=e.teamCount,o=e.maxSize,c=e.classes,i=e.handleChange,l=t.filter(function(e){return e.id===n}),m=0!==l.length&&l[0].members,u=0!==l.length&&l[0].members.length,s=u>0&&Array.from(Array(u),function(e,t){return t+1}),p=u>0&&Array.from(Array(u),function(e,t){return t+1});return u>2&&r.a.createElement(D.q,{className:c.paper},r.a.createElement(D.t,{component:"h5",variant:"h5",gutterBottom:!0},"Team Generator"),r.a.createElement(D.e,null),r.a.createElement(D.f,{className:c.formControl},r.a.createElement(D.j,{htmlFor:"sizeSelector"},"No. of teams"),r.a.createElement(D.r,{value:a,onChange:i,inputProps:{name:"teamCount",id:"sizeSelector"}},u>0&&s.map(function(e){return e>1&&e<u&&r.a.createElement(D.p,{key:e,value:e},e,u%e===0&&" *")})),r.a.createElement(D.g,null,"* = equal teams")),r.a.createElement(D.f,{className:c.formControl},r.a.createElement(D.j,{htmlFor:"maxSizeSelector"},"Max Size"),r.a.createElement(D.r,{value:o,onChange:i,inputProps:{name:"maxSize",id:"maxSizeSelector"}},u>0&&p.map(function(e){return e>1&&e<=Math.ceil(u/2)&&r.a.createElement(D.p,{key:e,value:e},e,u%e===0&&" *")})),r.a.createElement(D.g,null)),(0!==a||0!==o)&&r.a.createElement(U,{teamCount:a,members:m,maxSize:o}))}),L=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={teamCount:0,maxSize:0},n.handleChange=function(e){var t;if("teamCount"===e.target.name)n.setState((t={},Object(O.a)(t,e.target.name,e.target.value),Object(O.a)(t,"maxSize",0),t));else if("maxSize"===e.target.name){var a;n.setState((a={},Object(O.a)(a,e.target.name,e.target.value),Object(O.a)(a,"teamCount",0),a))}},n}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.groups,n=e.selectedGroupId,a=this.state,o=a.teamCount,c=a.maxSize;return r.a.createElement(q,{groups:t,selectedGroupId:n,teamCount:o,maxSize:parseInt(c),handleChange:this.handleChange})}}]),t}(r.a.Component),F=Object(i.b)(function(e){return{groups:e.groups}},{})(L),W=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={groupMember:""},n.onSubmit=function(e){var t=n.props,a=t.addMember,r=t.match,o=n.state.groupMember,c=r.params.id;e.preventDefault(),a(c,o),n.setState({groupMember:""})},n.onChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.onDelete=function(e,t){return function(){(0,n.props.deleteMember)(e,t)}},n}return Object(k.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getGroups)()}},{key:"render",value:function(){var e=this.props,t=e.groups,n=e.match;return r.a.createElement(A.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:16},r.a.createElement(A.a,{item:!0,xs:3},r.a.createElement(B,{onSubmit:this.onSubmit,onChange:this.onChange,values:this.state,groups:t,selectedGroupId:n.params.id,onDelete:this.onDelete})),r.a.createElement(A.a,{item:!0,xs:6},r.a.createElement(F,{selectedGroupId:n.params.id})))}}]),t}(r.a.Component),H=Object(i.b)(function(e){return{groups:e.groups}},{addMember:function(e,t){return{type:"ADD_MEMBER",member:{id:e,memberId:g()(),name:t}}},deleteMember:function(e,t){return{type:"DELETE_MEMBER",member:{id:e,memberId:t}}},getGroups:d})(W),J=Object(w.withStyles)(function(e){return{root:{padding:"1rem",flexGrow:1},title:{color:"white"},link:{textDecoration:"none","&:focus, &:hover, &:visited, &:link, &:active":{textDecoration:"none",color:"black"}}}})(function(e){var t=e.classes;return r.a.createElement(D.h,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:24,className:t.root},r.a.createElement(D.h,{item:!0,xs:12},r.a.createElement("div",{className:t.title},r.a.createElement(D.t,{component:"h2",variant:"h2",gutterBottom:!0},r.a.createElement(D.k,{component:v.b,to:"/",className:t.link},"Robin's Class Team Creator")))))}),X=(n(364),function(){return r.a.createElement(v.a,null,r.a.createElement(y.a,{path:"/",component:J}),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:N}),r.a.createElement(y.a,{exact:!0,path:"/group/:id",component:H})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:E},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.247d23e2.chunk.js.map