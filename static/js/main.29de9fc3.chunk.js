(this.webpackJsonpmodern_react_navbar=this.webpackJsonpmodern_react_navbar||[]).push([[0],{201:function(e,t,c){},376:function(e,t,c){},380:function(e,t,c){},402:function(e,t,c){var s={"./0.svg":[426,3],"./1.svg":[427,4],"./10.svg":[428,5],"./100.svg":[429,6],"./11.svg":[430,7],"./12.svg":[431,8],"./13.svg":[432,9],"./14.svg":[433,10],"./15.svg":[434,11],"./16.svg":[435,12],"./17.svg":[436,13],"./18.svg":[437,14],"./19.svg":[438,15],"./2.svg":[439,16],"./20.svg":[440,17],"./21.svg":[441,18],"./22.svg":[442,19],"./23.svg":[443,20],"./24.svg":[444,21],"./25.svg":[445,22],"./26.svg":[446,23],"./27.svg":[447,24],"./28.svg":[448,25],"./29.svg":[449,26],"./3.svg":[450,27],"./30.svg":[451,28],"./31.svg":[452,29],"./32.svg":[453,30],"./33.svg":[454,31],"./34.svg":[455,32],"./35.svg":[456,33],"./36.svg":[457,34],"./37.svg":[458,35],"./38.svg":[459,36],"./39.svg":[460,37],"./4.svg":[461,38],"./40.svg":[462,39],"./41.svg":[463,40],"./42.svg":[464,41],"./43.svg":[465,42],"./44.svg":[466,43],"./45.svg":[467,44],"./46.svg":[468,45],"./47.svg":[469,46],"./48.svg":[470,47],"./49.svg":[471,48],"./5.svg":[472,49],"./50.svg":[473,50],"./51.svg":[474,51],"./52.svg":[475,52],"./53.svg":[476,53],"./54.svg":[477,54],"./55.svg":[478,55],"./56.svg":[479,56],"./57.svg":[480,57],"./58.svg":[481,58],"./59.svg":[482,59],"./6.svg":[483,60],"./60.svg":[484,61],"./61.svg":[485,62],"./62.svg":[486,63],"./63.svg":[487,64],"./64.svg":[488,65],"./65.svg":[489,66],"./66.svg":[490,67],"./67.svg":[491,68],"./68.svg":[492,69],"./69.svg":[493,70],"./7.svg":[494,71],"./70.svg":[495,72],"./71.svg":[496,73],"./72.svg":[497,74],"./73.svg":[498,75],"./74.svg":[499,76],"./75.svg":[500,77],"./76.svg":[501,78],"./77.svg":[502,79],"./78.svg":[503,80],"./79.svg":[504,81],"./8.svg":[505,82],"./80.svg":[506,83],"./81.svg":[507,84],"./82.svg":[508,85],"./83.svg":[509,86],"./84.svg":[510,87],"./85.svg":[511,88],"./86.svg":[512,89],"./87.svg":[513,90],"./88.svg":[514,91],"./89.svg":[515,92],"./9.svg":[516,93],"./90.svg":[517,94],"./91.svg":[518,95],"./92.svg":[519,96],"./93.svg":[520,97],"./94.svg":[521,98],"./95.svg":[522,99],"./96.svg":[523,100],"./97.svg":[524,101],"./98.svg":[525,102],"./99.svg":[526,103]};function a(e){if(!c.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],a=t[0];return c.e(t[1]).then((function(){return c(a)}))}a.keys=function(){return Object.keys(s)},a.id=402,e.exports=a},404:function(e,t,c){},412:function(e,t){},414:function(e,t){},423:function(e,t,c){},424:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(26),n=c.n(r),i=(c(200),c(531)),l=c(17),o=c(20),u=(c(201),c(195)),j=(c(376),c(13)),d=c.n(j),b=c(16),x=c(8),h=c(190),p=(c(377),c(425),h.a.initializeApp({apiKey:"AIzaSyAaBlsJsd_p9RK6rd8Z0BqIh9SeQ6sGjDA",authDomain:"chat-app-e3fef.firebaseapp.com",projectId:"chat-app-e3fef",storageBucket:"chat-app-e3fef.appspot.com",messagingSenderId:"293479775714",appId:"1:293479775714:web:14d262a04c59e4e86f8dbb",measurementId:"G-8N6DY58FPK"})),v=p.auth(),f=p,O=c(15),m=c.n(O),g=c(4),y=a.a.createContext();function w(){return Object(s.useContext)(y)}function N(e){var t=e.children,c=Object(s.useState)(),a=Object(x.a)(c,2),r=a[0],n=a[1],i=Object(s.useState)(!0),l=Object(x.a)(i,2),o=l[0],u=l[1],j=Object(s.useState)(),h=Object(x.a)(j,2),p=h[0],f=h[1];Object(s.useEffect)((function(){return v.onAuthStateChanged((function(e){n(e),u(!1)}))}),[]),Object(s.useEffect)(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,m.a.get("https://api.chatengine.io/users/",{headers:{"private-key":"e8bc094d-c2f4-48ea-86fe-af5a9c51f2c2"}});case 3:t=e.sent,f(t.data.filter((function(e){return e.email!=r.email})));case 5:case"end":return e.stop()}}),e)}))),[r]);var O={currentUser:r,usersChat:p,login:function(e,t){return v.signInWithEmailAndPassword(e,t)},signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},logout:function(){return v.signOut()},resetPassword:function(e){return v.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(g.jsx)(y.Provider,{value:O,children:!o&&t})}var k=function(){var e=w().currentUser;return null!=e?Object(g.jsx)(u.d,{height:"95vh",projectID:"7637b906-c83c-4ef7-a194-25c5224671ba",userName:e.email.split("@")[0],userSecret:e.uid}):"Connectez vous"},C=(c(380),c(381),c(191)),S=c.n(C);var E=function(e){return Object(g.jsx)(S.a,{type:e.type,color:"crimson",height:100,width:100,timeout:e.timeout})},P={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255,255,255,0.75)",padding:"50px",zIndex:1e3,height:"500px",width:"50%",minWidth:"440px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",borderRadius:"5px",boxShadow:"4px 5px 1px white"},R={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, .7)",zIndex:1e3},U={fontSize:"32px",textShadow:"-0.5px -0.5px #0c0, 0.5px 0.5px #060, -0.5px 0 2px #000",fontFamily:"Arial, Helvetica, sans-serif",color:"#090",padding:"16px",fontWeight:"lighter",textAlign:"center",display:"block",margin:"rgba16px"},I={display:"flex",justifyContent:"space-around"},L={width:"95px",marginTop:"10px"};var F=function(e){var t=Object(o.g)(),a=w().currentUser,r=Object(s.useState)(null),i=Object(x.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(!1),d=Object(x.a)(j,2),b=d[0],h=d[1];return Object(s.useEffect)((function(){c(402)("./".concat(e.svgNumber,".svg")).then((function(e){u(e.default)}))}),[]),Object(s.useEffect)((function(){var e=setTimeout((function(){h(!0)}),5e3);return function(){return clearTimeout(e)}}),[]),n.a.createPortal(Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:R}),Object(g.jsxs)("div",{style:P,children:[Object(g.jsx)(E,{type:"Bars",timeout:4500}),!b&&Object(g.jsx)("span",{style:{boxShadow:"bold"},children:"Calculating ..."}),b&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(E,{type:"Hearts"}),null!=l&&Object(g.jsx)("img",{src:l}),Object(g.jsx)("div",{style:U,children:e.messageResult}),Object(g.jsxs)("div",{style:I,children:[Object(g.jsx)("button",{onClick:function(){e.setMatchResult(null),null==a?t.push("/login"):t.push("/chat")},style:L,children:"Chatroom"}),Object(g.jsx)("button",{onClick:function(){e.setMatchResult(null)},style:L,children:"Exit"})]})]})]})]}),document.getElementById("portal"))},D=a.a.createContext();function W(e){var t=e.children,c=Object(s.useRef)(),a=Object(s.useState)(!1),r=Object(x.a)(a,2),n=r[0],i=r[1],l=Object(s.useState)(""),o=Object(x.a)(l,2),u=o[0],j=o[1],d=Object(s.useState)(null),b=Object(x.a)(d,2),h={peer:c,showVideoCall:n,setShowVideoCall:i,currentCallState:u,setCurrentCallState:j,callInformation:b[0],setCallInformation:b[1]};return Object(g.jsx)(D.Provider,{value:h,children:t})}var A=c(532),T=c(535),z=c(534),B=c(533),G=c(530);function H(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=w(),a=c.login,r=c.currentUser,n=Object(s.useState)(""),i=Object(x.a)(n,2),u=i[0],j=i[1],h=Object(s.useState)(!1),p=Object(x.a)(h,2),v=p[0],f=p[1],O=Object(s.useState)(!0),m=Object(x.a)(O,2),y=m[0],N=m[1],k=Object(o.g)();function C(){return(C=Object(b.a)(d.a.mark((function c(s){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,j(""),f(!0),c.next=6,a(e.current.value,t.current.value);case 6:console.log(r),N(!1),k.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(1),j("Failed to log in");case 14:f(!1);case 15:case"end":return c.stop()}}),c,null,[[1,11]])})))).apply(this,arguments)}return Object(g.jsxs)(A.a,{show:y,centered:!0,children:[Object(g.jsxs)(T.a,{children:[Object(g.jsxs)(T.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),u&&Object(g.jsx)(z.a,{variant:"danger",children:u}),Object(g.jsxs)(B.a,{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(g.jsxs)(B.a.Group,{id:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email"}),Object(g.jsx)(B.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsxs)(B.a.Group,{id:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsx)(G.a,{disabled:v,className:"w-100",type:"submit",children:"Log In"})]}),Object(g.jsx)("div",{className:"w-100 text-center mt-3",children:Object(g.jsx)(l.b,{to:"/forgot-password",children:"Forgot Password?"})})]}),Object(g.jsx)(A.a.Footer,{children:Object(g.jsx)(G.a,{variant:"primary",onClick:function(){return N(!1)},children:"Exit"})})]}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(g.jsx)(l.b,{to:"/signup",children:"Sign Up"})]})]})}var q=function(){var e=Object(s.useContext)(D),t=(e.showVideoCall,e.currentCallState,e.callInformation),c=(e.setCallInformation,e.setShowVideoCall,w()),a=(c.usersChat,c.currentUser),r=Object(s.useRef)(),n=Object(s.useRef)(),l=Object(s.useState)(null),o=Object(x.a)(l,2),u=o[0],j=o[1];return Object(s.useEffect)(Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||null==a){e.next=16;break}return e.prev=1,e.next=4,f.firestore().collection("calls").doc(a.email).delete();case 4:return console.log("Current successfully deleted!"),e.next=7,f.firestore().collection("destroy").doc(a.email);case 7:if(e.t0=e.sent,null==e.t0){e.next=11;break}return e.next=11,f.firestore().collection("destroy").doc(a.email).delete();case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(1),console.error("Error removing document: ",e.t1);case 16:if(!t||null==t){e.next=32;break}return e.prev=17,e.next=20,f.firestore().collection("calls").doc(t.from).delete();case 20:return console.log("Other successfully deleted!"),e.next=23,f.firestore().collection("destroy").doc(t.from);case 23:if(e.t2=e.sent,null==e.t2){e.next=27;break}return e.next=27,f.firestore().collection("destroy").doc(t.from).delete();case 27:e.next=32;break;case 29:e.prev=29,e.t3=e.catch(17),console.error("Error removing document: ",e.t3);case 32:case"end":return e.stop()}}),e,null,[[1,13],[17,29]])}))),[]),a&&null!=a?null===u?Object(g.jsxs)("form",{className:"home",onSubmit:function(e){e.preventDefault(),fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=".concat(r.current.value,"&sname=").concat(n.current.value),{method:"GET",headers:{"x-rapidapi-key":"36f99601d0mshff227eef7694e85p164d14jsn84b0ebf94d9e","x-rapidapi-host":"love-calculator.p.rapidapi.com"}}).then((function(e){return e.json()})).then(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,f.firestore().collection(a.email).doc(t.sname).set(t);case 4:e.sent,j(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("err")}))},children:[Object(g.jsxs)("div",{className:"form",children:[Object(g.jsx)("input",{type:"text",placeholder:"Your Name",required:!0,autocomplete:"off",ref:r}),Object(g.jsx)("label",{for:"name",className:"label-name",children:Object(g.jsx)("span",{className:"content-name"})})]}),Object(g.jsxs)("div",{className:"form",children:[Object(g.jsx)("input",{type:"text",placeholder:"Match Name",required:!0,autocomplete:"off",ref:n}),Object(g.jsx)("label",{for:"name",className:"label-name",children:Object(g.jsx)("span",{className:"content-name"})})]}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"submit",value:"Run",className:"button"})})]}):Object(g.jsx)(F,{svgNumber:u.percentage,messageResult:u.result,setMatchResult:j}):Object(g.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(H,{})})})},M=(c(404),c(38)),J=c.n(M),_=c(98),V=c(126),K=c(194),Y=c(0),Q=c(50),Z=function(){var e=w().currentUser,t=Object(o.h)();function c(){var e=J()("#navbarSupportedContent").find(".active"),t=e.innerHeight(),c=e.innerWidth(),s=e.position(),a=e.position();J()(".hori-selector").css({top:s.top+"px",left:a.left+"px",height:t+"px",width:c+"px"}),J()("#navbarSupportedContent").on("click","li",(function(e){J()("#navbarSupportedContent ul li").removeClass("active"),J()(this).addClass("active");var t=J()(this).innerHeight(),c=J()(this).innerWidth(),s=J()(this).position(),a=J()(this).position();J()(".hori-selector").css({top:s.top+"px",left:a.left+"px",height:t+"px",width:c+"px"})}))}return console.log(t),Object(s.useEffect)((function(){c(),J()(window).on("resize",(function(){setTimeout((function(){c()}),500)}))}),[]),Object(g.jsx)(Y.b.Provider,{value:{size:"22px",style:{verticalAlign:"middle",marginRight:"7.5px",marginBottom:"3px"}},children:Object(g.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-mainbg",children:[Object(g.jsx)(l.c,{className:"navbar-brand navbar-logo",to:"/",exact:!0,children:"SalKat Love Calculator"}),Object(g.jsx)("button",{className:"navbar-toggler",onClick:function(){setTimeout((function(){c()}))},type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("i",{className:"fas fa-bars text-white"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:null!=e?Object(g.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(g.jsxs)("div",{className:"hori-selector",children:[Object(g.jsx)("div",{className:"left"}),Object(g.jsx)("div",{className:"right"})]}),Object(g.jsx)("li",{className:"nav-item active",style:{backgroundColor:"/"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/",exact:!0,children:[Object(g.jsx)(_.a,{}),"Home"]})}),Object(g.jsx)("li",{className:"nav-item",style:{backgroundColor:"/my-account"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/my-account",exact:!0,children:[Object(g.jsx)(V.a,{}),"My Account"]})}),Object(g.jsx)("li",{className:"nav-item",style:{backgroundColor:"/chat"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/chat",exact:!0,children:[Object(g.jsx)(K.a,{}),"Chatroom"]})}),Object(g.jsx)("li",{className:"nav-item",style:{backgroundColor:"/call"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/call",exact:!0,children:[Object(g.jsx)(Q.a,{}),"PeerToPeerCall"]})})]}):Object(g.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(g.jsxs)("div",{className:"hori-selector",children:[Object(g.jsx)("div",{className:"left"}),Object(g.jsx)("div",{className:"right"})]}),Object(g.jsx)("li",{className:"nav-item active",style:{backgroundColor:"/"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/",exact:!0,children:[Object(g.jsx)(_.a,{}),"Home"]})}),Object(g.jsx)("li",{className:"nav-item",style:{backgroundColor:"/signup"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/signup",exact:!0,children:[Object(g.jsx)(V.b,{}),"Signup"]})}),Object(g.jsx)("li",{className:"nav-item",style:{backgroundColor:"/login"===t.pathname?"rgba(255,255,255,0.15)":null},children:Object(g.jsxs)(l.c,{className:"nav-link",to:"/login",exact:!0,children:[Object(g.jsx)(_.b,{}),"Login"]})})]})})]})})},X=c(127);c(423);var $=function(){var e=w(),t=e.usersChat,c=e.currentUser;console.log(t);var a=Object(s.useRef)(),r=Object(s.useRef)(),n=Object(s.useRef)(),i=Object(s.useRef)(),l=Object(s.useRef)(),o=Object(s.useState)(!0),u=Object(x.a)(o,2),j=(u[0],u[1],Object(s.useState)(!1)),h=Object(x.a)(j,2),p=h[0],v=h[1],O=Object(s.useState)("show"),m=Object(x.a)(O,2),y=m[0],N=m[1],k=Object(s.useState)({text:"Receiver video",user:""}),C=Object(x.a)(k,2),S=C[0],E=C[1],P=Object(s.useState)(null),R=Object(x.a)(P,2),U=R[0],I=R[1];Object(s.useEffect)(Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:r.current.srcObject=e.sent,r.current.play();case 4:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.firestore().collection("calls").doc(c.email).onSnapshot(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.data()){e.next=37;break}if("offer"!==t.data().type){e.next=7;break}I(t.data()),v(!1),E({text:"call from ",user:t.data().from}),e.next=35;break;case 7:if("accept"!==t.data().type){e.next=14;break}v(!0),E({text:"",user:""}),a.current.signal(JSON.parse(t.data().sd)),a.current.on("stream",(function(e){n.current.srcObject=e,n.current.play()})),e.next=35;break;case 14:if("refuse"!==t.data().type){e.next=29;break}return e.prev=15,e.next=18,f.firestore().collection("calls").doc(t.data().from).delete();case 18:return e.next=20,f.firestore().collection("calls").doc(c.email).delete();case 20:E({text:"The call was not accepted by",user:t.data().from.split("@")[0]}),N("show"),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(15),console.log(e.t0);case 27:e.next=35;break;case 29:if("destroy"!==t.data().type){e.next=35;break}return E({text:"The call was destroyed by",user:t.data().from.split("@")[0]}),v(!1),N("show"),e.next=35,f.firestore().collection("calls").doc(c.email).delete();case 35:e.next=38;break;case 37:I(null);case 38:case"end":return e.stop()}}),e,null,[[15,24]])})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),[]);var L=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("show"!==y){e.next=9;break}if(""!==i.current.value){e.next=3;break}return e.abrupt("return");case 3:return N(""),v(!1),E({text:"Try to establish a connection",user:i.current.value.split("@")[0]}),a.current=new X({initiator:!0,stream:r.current.srcObject,trickle:!1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]}}),a.current.on("signal",function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.firestore().collection("calls").doc(i.current.value).set({type:"offer",from:c.email,sd:JSON.stringify(t)});case 3:e.sent,E({text:"Waiting for answer from",user:i.current.value.split("@")[0],color:""}),N("noshow"),l.current=i.current.value,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return");case 9:if("noshow"!==y){e.next=35;break}if(e.prev=10,null==U){e.next=20;break}return e.next=14,f.firestore().collection("calls").doc(U.from).delete();case 14:return e.next=16,f.firestore().collection("calls").doc(c.email).delete();case 16:return e.next=18,f.firestore().collection("calls").doc(U.from).set({type:"destroy",from:c.email});case 18:e.next=26;break;case 20:return e.next=22,f.firestore().collection("calls").doc(l.current).delete();case 22:return e.next=24,f.firestore().collection("calls").doc(c.email).delete();case 24:return e.next=26,f.firestore().collection("calls").doc(i.current.value).set({type:"destroy",from:c.email});case 26:a.current.destroy(),E({text:"The call is destroyed ...",user:""}),N("show"),v(!1),e.next=35;break;case 32:e.prev=32,e.t0=e.catch(10),console.log(e.t0);case 35:case"end":return e.stop()}}),e,null,[[10,32]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"video",children:[Object(g.jsxs)("div",{className:"video-item",children:[Object(g.jsx)("video",{ref:r}),Object(g.jsxs)("div",{className:"video-item-actions",children:[Object(g.jsxs)("select",{name:"pets",id:"pet-select",ref:i,children:[Object(g.jsx)("option",{value:"",children:"--Please choose who to call--"}),t&&t.map((function(e,t){return Object(g.jsx)("option",{value:e.email,children:e.email.split("@")[0]})}))]}),("show"===y||"noshow"===y)&&Object(g.jsxs)("div",{className:"show"===y?"video-item-icon":"video-item-icon2",onClick:L,children:["show"===y&&Object(g.jsx)(Q.a,{size:32}),"noshow"===y&&Object(g.jsx)(Q.b,{size:32})]})]})]}),Object(g.jsxs)("div",{className:"video-item",children:[p?Object(g.jsx)("video",{ref:n}):null!=U&&!p&&Object(g.jsxs)("div",{className:"video-item-no-video",children:[Object(g.jsxs)("span",{children:["call from ",Object(g.jsx)("span",{style:{fontWeight:"bold"},children:U.from.split("@")[0]})]}),Object(g.jsxs)("div",{className:"video-item-no-video-answerCall",children:[Object(g.jsx)("div",{style:{width:"50%"},children:Object(g.jsx)("div",{className:"video-item-icon",style:{width:"40px"},onClick:function(){a.current=new X({initiator:!1,stream:r.current.srcObject,trickle:!1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]}}),a.current.signal(JSON.parse(U.sd)),a.current.on("signal",(function(e){try{f.firestore().collection("calls").doc(U.from).set({type:"accept",from:c.email,sd:JSON.stringify(e)}),E({text:"",user:""}),N("noshow")}catch(t){console.log(t)}})),a.current.on("stream",(function(e){E({text:"",user:""}),v(!0),n.current.srcObject=e,n.current.play()}))},children:Object(g.jsx)(Q.a,{size:32})})}),Object(g.jsx)("div",{style:{width:"50%"},children:Object(g.jsx)("div",{className:"video-item-icon2",style:{width:"40px"},onClick:function(){try{f.firestore().collection("calls").doc(U.from).set({type:"refuse",from:c.email}),I(null),E({text:"Call refused ...",user:""}),N("show")}catch(e){console.log(e)}},children:Object(g.jsx)(Q.b,{size:32})})})]})]}),Object(g.jsx)("div",{className:"video-item-text",children:Object(g.jsxs)("p",{children:[S.text," ",Object(g.jsx)("span",{className:"video-item-text-username",children:S.user})]})})]})]})};var ee=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=Object(s.useRef)(),a=w(),r=a.signup,n=(a.currentUser,Object(s.useState)("")),i=Object(x.a)(n,2),u=i[0],j=i[1],h=Object(s.useState)(!1),p=Object(x.a)(h,2),v=p[0],f=p[1],O=Object(s.useState)(!0),y=Object(x.a)(O,2),N=y[0],k=y[1],C=Object(o.g)();function S(){return(S=Object(b.a)(d.a.mark((function s(a){var n,i,l;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),t.current.value===c.current.value){s.next=3;break}return s.abrupt("return",j("Passwords do not match"));case 3:return s.prev=3,j(""),f(!0),s.next=8,r(e.current.value,t.current.value);case 8:n=s.sent,(i=new FormData).append("email",n.user.email),i.append("username",n.user.email.split("@")[0]),i.append("secret",n.user.uid),l=m.a.post("https://api.chatengine.io/users",i,{headers:{"private-key":"e8bc094d-c2f4-48ea-86fe-af5a9c51f2c2"}}),console.log(l),k(!1),C.push("/"),s.next=22;break;case 19:s.prev=19,s.t0=s.catch(3),j("Failed to create an account");case 22:f(!1);case 23:case"end":return s.stop()}}),s,null,[[3,19]])})))).apply(this,arguments)}return Object(g.jsxs)(A.a,{show:N,centered:!0,children:[Object(g.jsxs)(T.a,{children:[Object(g.jsxs)(T.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),u&&Object(g.jsx)(z.a,{variant:"danger",children:u}),Object(g.jsxs)(B.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(g.jsxs)(B.a.Group,{id:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email"}),Object(g.jsx)(B.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsxs)(B.a.Group,{id:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsxs)(B.a.Group,{id:"password-confirm",children:[Object(g.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(B.a.Control,{type:"password",ref:c,required:!0})]}),Object(g.jsx)(G.a,{disabled:v,className:"w-100",type:"submit",children:"Sign Up"})]})]}),Object(g.jsx)(T.a.Footer,{children:Object(g.jsx)(G.a,{variant:"primary",onClick:function(){return k(!1)},children:"Exit"})})]}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(g.jsx)(l.b,{to:"/login",children:"Log In"})]})]})};var te=function(){var e=Object(s.useState)(""),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(!0),n=Object(x.a)(r,2),i=n[0],u=n[1],j=w(),h=j.currentUser,p=j.logout,v=Object(o.g)();function f(){return(f=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,p();case 4:v.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(g.jsxs)(A.a,{show:i,centered:!0,children:[Object(g.jsxs)(T.a,{children:[Object(g.jsxs)(T.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(g.jsx)(z.a,{variant:"danger",children:c}),Object(g.jsx)("strong",{children:"Email:"})," ",null!=h&&h.email,Object(g.jsx)(l.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]}),Object(g.jsx)(T.a.Footer,{children:Object(g.jsx)(G.a,{variant:"primary",onClick:function(){return u(!1)},children:"Exit"})})]}),Object(g.jsx)("div",{className:"w-100 text-center mt-2",children:Object(g.jsx)(G.a,{variant:"link",onClick:function(){return f.apply(this,arguments)},children:"Log Out"})})]})};function ce(){var e=Object(s.useRef)(),t=w().resetPassword,c=Object(s.useState)(""),a=Object(x.a)(c,2),r=a[0],n=a[1],i=Object(s.useState)(""),o=Object(x.a)(i,2),u=o[0],j=o[1],h=Object(s.useState)(!1),p=Object(x.a)(h,2),v=p[0],f=p[1],O=Object(s.useState)(!0),m=Object(x.a)(O,2),y=m[0],N=m[1];function k(){return(k=Object(b.a)(d.a.mark((function c(s){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,j(""),n(""),f(!0),c.next=7,t(e.current.value);case 7:j("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),n("Failed to reset password");case 13:f(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(g.jsxs)(A.a,{show:y,centered:!0,children:[Object(g.jsxs)(T.a,{children:[Object(g.jsxs)(T.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(g.jsx)(z.a,{variant:"danger",children:r}),u&&Object(g.jsx)(z.a,{variant:"success",children:u}),Object(g.jsxs)(B.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(g.jsxs)(B.a.Group,{id:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email"}),Object(g.jsx)(B.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsx)(G.a,{disabled:v,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(g.jsx)("div",{className:"w-100 text-center mt-3",children:Object(g.jsx)(l.b,{to:"/login",children:"Login"})})]}),Object(g.jsx)(T.a.Footer,{children:Object(g.jsx)(G.a,{variant:"primary",onClick:function(){return N(!1)},children:"Exit"})})]}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(g.jsx)(l.b,{to:"/signup",children:"Sign Up"})]})]})}function se(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=Object(s.useRef)(),a=w(),r=a.currentUser,n=a.updatePassword,i=a.updateEmail,u=Object(s.useState)(""),j=Object(x.a)(u,2),d=j[0],b=j[1],h=Object(s.useState)(!1),p=Object(x.a)(h,2),v=p[0],f=p[1],O=Object(s.useState)(!0),m=Object(x.a)(O,2),y=m[0],N=m[1],k=Object(o.g)();return Object(g.jsxs)(A.a,{show:y,centered:!0,children:[Object(g.jsxs)(T.a,{children:[Object(g.jsxs)(T.a.Body,{children:[Object(g.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),d&&Object(g.jsx)(z.a,{variant:"danger",children:d}),Object(g.jsxs)(B.a,{onSubmit:function(s){if(s.preventDefault(),t.current.value!==c.current.value)return b("Passwords do not match");var a=[];f(!0),b(""),e.current.value!==r.email&&a.push(i(e.current.value)),t.current.value&&a.push(n(t.current.value)),Promise.all(a).then((function(){k.push("/")})).catch((function(){b("Failed to update account")})).finally((function(){f(!1)}))},children:[Object(g.jsxs)(B.a.Group,{id:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email"}),Object(g.jsx)(B.a.Control,{type:"email",ref:e,required:!0,defaultValue:null!=r&&r.email})]}),Object(g.jsxs)(B.a.Group,{id:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(g.jsxs)(B.a.Group,{id:"password-confirm",children:[Object(g.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(B.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(g.jsx)(G.a,{disabled:v,className:"w-100",type:"submit",children:"Update"})]})]}),Object(g.jsx)(T.a.Footer,{children:Object(g.jsx)(G.a,{variant:"primary",onClick:function(){return N(!1)},children:"Exit"})})]}),Object(g.jsx)("div",{className:"w-100 text-center mt-2",children:Object(g.jsx)(l.b,{to:"/",children:"Cancel"})})]})}var ae=function(){return Object(g.jsx)(W,{children:Object(g.jsx)(N,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(Z,{}),Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"/",exact:!0,children:Object(g.jsx)(q,{})}),Object(g.jsx)(o.b,{path:"/forgot-password",exact:!0,children:Object(g.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(ce,{})})})}),Object(g.jsx)(o.b,{path:"/signup",exact:!0,children:Object(g.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(ee,{})})})}),Object(g.jsx)(o.b,{path:"/login",exact:!0,children:Object(g.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(H,{})})})}),Object(g.jsx)(o.b,{path:"/my-account",exact:!0,children:Object(g.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(te,{})})})}),Object(g.jsx)(o.b,{path:"/update-profile",exact:!0,children:Object(g.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(se,{})})})}),Object(g.jsx)(o.b,{path:"/chat",exact:!0,children:Object(g.jsx)(k,{})}),Object(g.jsx)(o.b,{path:"/call",exact:!0,children:Object(g.jsx)($,{})}),Object(g.jsx)(o.a,{to:"/"})]})]})})})})};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(ae,{})}),document.getElementById("root"))}},[[424,1,2]]]);
//# sourceMappingURL=main.29de9fc3.chunk.js.map