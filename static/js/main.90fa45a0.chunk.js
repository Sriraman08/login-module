(this["webpackJsonpBasic-redux-concept"]=this["webpackJsonpBasic-redux-concept"]||[]).push([[0],{114:function(e,t,r){},128:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(35),o=r.n(c),s=(r(114),r(22)),i=r(23),u=r(33),l=r(32),p=r(60),d=r(26),j={q:{},login:{},forgot:{},reset:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CALLED":case"REGISTER_CALLED":return Object(d.a)(Object(d.a)({},e),{},{q:t.data});case"LOGIN_CALLED":return Object(d.a)(Object(d.a)({},e),{},{login:t.data});case"FORGOT_PASSWORD_CALLED":return Object(d.a)(Object(d.a)({},e),{},{forgot:t.data});case"RESET_PASSWORD_CALLED":return Object(d.a)(Object(d.a)({},e),{},{reset:t.data});default:return e}},m=Object(p.b)({loggedReducer:h}),b=r(93),x=Object(p.c)(m,Object(p.a)(b.a)),O=r(95),f=r(17),g=r(36),v=r(38),y=r(30),w=r(16),S=r.n(w),k="https://heroku-resource-login-module.herokuapp.com";function C(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}var _={get:function(e){return Object(y.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(k).concat(e),{method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then(C));case 1:case"end":return t.stop()}}),t)})))()},post:function(e,t){return Object(y.a)(S.a.mark((function r(){var n;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=JSON.stringify(t),r.abrupt("return",fetch("".concat(k).concat(e),{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:n}).then(C));case 2:case"end":return r.stop()}}),r)})))()},put:function(e,t){return Object(y.a)(S.a.mark((function r(){var n;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=JSON.stringify(t),r.abrupt("return",fetch("".concat(k).concat(e),{method:"PUT",headers:new Headers({"Content-Type":"application/json"}),body:n}).then(C));case 2:case"end":return r.stop()}}),r)})))()}},D=r(170),T=r(171),E=r(163),L=r(166),R=r(177),I=r(168),W=(r(174),r(176)),A=r(43),P=r.n(A),q=r(173),F=r(175),N=r(2);var G=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var r=new FormData(t.currentTarget),n={};n.email=r.get("email"),n.password=r.get("password"),e.props.dispatch(function(e,t){return function(){var r=Object(y.a)(S.a.mark((function r(n){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:_.post("/api/auth/login",t).then(function(){var t=Object(y.a)(S.a.mark((function t(r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===r.success&&(localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",JSON.stringify(r.accessToken)),localStorage.setItem("user-id",r.loginUserId),n({type:"LOGIN_CALLED",data:r}),e.props.history.push("/content"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({error_text:t.error})}));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(Object(g.a)(e),n))},e.state={error_text:null},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(N.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(E.a,{}),Object(N.jsxs)(W.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(D.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(P.a,{})}),Object(N.jsx)(q.a,{component:"h1",variant:"h5",children:"Sign in"}),!1===this.state.error_text?Object(N.jsx)("h3",{style:{color:"green"},children:this.props.value.message}):Object(N.jsx)("h3",{style:{color:"red"},children:this.state.error_text}),Object(N.jsxs)(W.a,{component:"form",onSubmit:this.handleSubmit,noValidate:!0,sx:{mt:1},children:[Object(N.jsx)(L.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(N.jsx)(L.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(N.jsx)(R.a,{control:Object(N.jsx)(I.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(N.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]})]}),Object(N.jsx)("center",{children:Object(N.jsx)(q.a,{style:{cursor:"pointer"},onClick:function(){return e.props.history.push("/signup")},children:"Don't have an account - Sign Up \ud83d\ude80 "})}),Object(N.jsx)("center",{children:Object(N.jsx)(q.a,{style:{cursor:"pointer"},onClick:function(){return e.props.history.push("/forgotPassword")},children:"Forgot password \ud83c\udf5a "})})]})}}]),r}(n.Component),J=Object(v.b)((function(e){return{value:e.loggedReducer.q}}))(G),H=r(172),U=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var r=new FormData(t.currentTarget),n={};n.name=r.get("Name"),n.email=r.get("email"),n.password=r.get("password"),e.props.dispatch(function(e,t){return function(){var r=Object(y.a)(S.a.mark((function r(n){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:_.post("/api/auth/register",t).then(function(){var t=Object(y.a)(S.a.mark((function t(r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===r.success&&(localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",JSON.stringify(r.accessToken)),localStorage.setItem("user-id",r.registeredUserId),e.setState({error_text:!1}),n({type:"REGISTER_CALLED",data:r}),e.props.history.push("/content"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({error_text:t.error})}));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(Object(g.a)(e),n))},e.state={error_text:null},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(N.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(E.a,{}),Object(N.jsxs)(W.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(D.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(P.a,{})}),Object(N.jsx)(q.a,{component:"h1",variant:"h5",children:"Sign up"}),!1===this.state.error_text?Object(N.jsx)("h3",{style:{color:"green"},children:this.props.value.message}):Object(N.jsx)("h3",{style:{color:"red"},children:this.state.error_text}),Object(N.jsxs)(W.a,{component:"form",noValidate:!0,onSubmit:this.handleSubmit,sx:{mt:3},children:[Object(N.jsxs)(H.a,{container:!0,spacing:2,children:[Object(N.jsx)(H.a,{item:!0,xs:12,children:Object(N.jsx)(L.a,{autoComplete:"given-name",name:"Name",required:!0,fullWidth:!0,id:"Name",label:"Name",autoFocus:!0})}),Object(N.jsx)(H.a,{item:!0,xs:12,children:Object(N.jsx)(L.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(N.jsx)(H.a,{item:!0,xs:12,children:Object(N.jsx)(L.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(N.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(N.jsx)(H.a,{container:!0,justifyContent:"flex-end",children:Object(N.jsx)(H.a,{item:!0,children:Object(N.jsx)("center",{children:Object(N.jsx)(q.a,{style:{cursor:"pointer"},onClick:function(){return e.props.history.push("/")},children:"Login \ud83d\ude80 "})})})})]})]})]})}}]),r}(n.Component),V=Object(v.b)((function(e){return{value:e.loggedReducer.q}}))(U),B=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).logoutHandler=function(){localStorage.removeItem("auth-token"),localStorage.removeItem("user-id"),e.props.history.push("/")},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(N.jsxs)("center",{children:[Object(N.jsx)(q.a,{children:"You are viewing private Content page"}),Object(N.jsx)("button",{onClick:this.logoutHandler,children:"Logout"})]})}}]),r}(n.Component),Y=B,z=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var r=new FormData(t.currentTarget),n={};n.email=r.get("email"),e.props.dispatch(function(e,t){return function(){var r=Object(y.a)(S.a.mark((function r(n){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:_.post("/api/auth/forgotpassword",t).then(function(){var t=Object(y.a)(S.a.mark((function t(r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===r.success&&(e.setState({error_text:!1}),n({type:"FORGOT_PASSWORD_CALLED",data:r}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({error_text:t.error})}));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(Object(g.a)(e),n))},e.state={error_text:null},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(N.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(E.a,{}),Object(N.jsxs)(W.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(D.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(P.a,{})}),Object(N.jsx)(q.a,{component:"h1",variant:"h5",children:"Forgot Password"}),!1===this.state.error_text?Object(N.jsx)("h3",{style:{color:"green"},children:this.props.forgot.message}):Object(N.jsx)("h3",{style:{color:"red"},children:this.state.error_text}),Object(N.jsxs)(W.a,{component:"form",onSubmit:this.handleSubmit,noValidate:!0,sx:{mt:1},children:[Object(N.jsx)(L.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(N.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Send Email"})]})]})]})}}]),r}(n.Component),K=Object(v.b)((function(e){return{value:e.loggedReducer.q,forgot:e.loggedReducer.forgot}}))(z),M=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var r=new FormData(t.currentTarget),n={};n.password=r.get("password"),e.props.dispatch(function(e,t){return function(){var r=Object(y.a)(S.a.mark((function r(n){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:_.put("/api/auth/resetPassword/".concat(e.props.match.params.resetToken),t).then(function(){var t=Object(y.a)(S.a.mark((function t(r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"true"===r.sucess&&(e.setState({error_text:!1}),n({type:"RESET_PASSWORD_CALLED",data:r}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({error_text:t.error})}));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(Object(g.a)(e),n))},e.state={error_text:null},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(N.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(E.a,{}),Object(N.jsxs)(W.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(D.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(P.a,{})}),Object(N.jsx)(q.a,{component:"h1",variant:"h5",children:"Reset Password"}),!1===this.state.error_text?Object(N.jsx)("h3",{style:{color:"green"},children:this.props.reset.message}):Object(N.jsx)("h3",{style:{color:"red"},children:this.state.error_text}),Object(N.jsxs)(W.a,{component:"form",onSubmit:this.handleSubmit,noValidate:!0,sx:{mt:1},children:[Object(N.jsx)(L.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"New Password",type:"password",id:"password",autoComplete:"password"}),Object(N.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Change"})]})]})]})}}]),r}(n.Component),Q=Object(v.b)((function(e){return{value:e.loggedReducer.q,reset:e.loggedReducer.reset}}))(M),X=function(){return Object(N.jsx)(O.a,{children:Object(N.jsxs)(f.c,{children:[Object(N.jsx)(f.a,{exact:!0,path:"/",component:J}),Object(N.jsx)(f.a,{path:"/signup",component:V}),Object(N.jsx)(f.a,{path:"/content",component:Y}),Object(N.jsx)(f.a,{path:"/forgotPassword",component:K}),Object(N.jsx)(f.a,{path:"/resetPassword/:resetToken",component:Q}),Object(N.jsx)(f.a,{path:"*",component:function(){return"Development in progress..."}})]})})},Z=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(v.a,{store:x,children:Object(N.jsx)(X,{})})})}}]),r}(a.a.Component),$=Z;o.a.render(Object(N.jsx)($,{}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.90fa45a0.chunk.js.map