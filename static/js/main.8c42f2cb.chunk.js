(this["webpackJsonpreact-firebase"]=this["webpackJsonpreact-firebase"]||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),s=a.n(c),i=(a(90),a(8)),l=(a(91),a(23)),u=a(137),o=a(146),m=a(140),p=a(144),d=a(51),h=a.n(d),g=a(26),b=a.n(g),f=a(13);var v=b()((function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit}}}))((function(e){var t=e.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(u.a,{className:t.paper},r.a.createElement(o.a,{className:t.avatar},r.a.createElement(h.a,null)),r.a.createElement(m.a,{component:"h1",variant:"h5"},"Hello Guest!"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:f.b,to:"/register",className:t.submit},"Register"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:f.b,to:"/login",className:t.submit},"Login"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:f.b,to:"/",className:t.submit},"Inicio")))})),E=a(6),y=a.n(E),O=a(11),w=a(148),x=a(147),N=a(145),j=a(52),k=a.n(j),S=a(28),U=a(79),C=a(80),D=a(54),L=a.n(D),A=(a(120),a(122),{apiKey:"AIzaSyAzhHe5UnXT_DeS0hjrjGCwG7NoMLLm5LM",authDomain:"reservas-69c8f.firebaseapp.com",databaseURL:"https://reservas-69c8f.firebaseio.com",projectId:"reservas-69c8f",storageBucket:"reservas-69c8f.appspot.com",messagingSenderId:"234490098471",appId:"1:234490098471:web:484b88e023287aa7a56f02"}),I=new(function(){function e(){Object(U.a)(this,e),L.a.initializeApp(A),this.auth=L.a.auth(),this.db=L.a.firestore()}return Object(C.a)(e,[{key:"login",value:function(e,t){return this.auth.signInWithEmailAndPassword(e,t)}},{key:"logout",value:function(){return this.auth.signOut()}},{key:"register",value:function(){var e=Object(O.a)(y.a.mark((function e(t,a,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(a,n);case 2:return e.abrupt("return",this.auth.currentUser.updateProfile({displayName:t}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"addQuote",value:function(e){return this.auth.currentUser?this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).set({quote:e}):alert("Not authorized")}},{key:"isInitialized",value:function(){var e=this;return new Promise((function(t){e.auth.onAuthStateChanged(t)}))}},{key:"getCurrentUsername",value:function(){return this.auth.currentUser&&this.auth.currentUser.displayName}},{key:"getCurrentUserQuote",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("quote"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"uno",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("fbimg1"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dos",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("fbv1"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"tres",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("fbv2"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cuatro",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("fbv3"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cinco",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("fbv4"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"seis",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("yt"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"siete",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("bg1"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"ocho",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("bg2"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nueve",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("bg3"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dies",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.doc("users_codedamn_video/".concat(this.auth.currentUser.uid)).get();case 2:return t=e.sent,e.abrupt("return",t.get("bg4"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}());var _=Object(S.f)(b()((function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}}))((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],l=c[1],d=Object(n.useState)(""),h=Object(i.a)(d,2),g=h[0],b=h[1];return r.a.createElement("main",{className:t.main},r.a.createElement(u.a,{className:t.paper},r.a.createElement(o.a,{className:t.avatar},r.a.createElement(k.a,null)),r.a.createElement(m.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:function(e){return e.preventDefault()&&!1}},r.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"email"},"Email Address"),r.a.createElement(N.a,{id:"email",name:"email",autoComplete:"off",autoFocus:!0,value:s,onChange:function(e){return l(e.target.value)}})),r.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"password"},"Password"),r.a.createElement(N.a,{name:"password",type:"password",id:"password",autoComplete:"off",value:g,onChange:function(e){return b(e.target.value)}})),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return v.apply(this,arguments)},className:t.submit},"Sign in"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:f.b,to:"/register",className:t.submit},"Register"))));function v(){return(v=Object(O.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.login(s,g);case 3:e.history.replace("/dashboard"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}})));var W=Object(S.f)(b()((function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}}))((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],l=c[1],d=Object(n.useState)(""),h=Object(i.a)(d,2),g=h[0],b=h[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),j=E[0],S=E[1],U=Object(n.useState)(""),C=Object(i.a)(U,2),D=C[0],L=C[1];return r.a.createElement("main",{className:t.main},r.a.createElement(u.a,{className:t.paper},r.a.createElement(o.a,{className:t.avatar},r.a.createElement(k.a,null)),r.a.createElement(m.a,{component:"h1",variant:"h5"},"Register Account"),r.a.createElement("form",{className:t.form,onSubmit:function(e){return e.preventDefault()&&!1}},r.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"name"},"Name"),r.a.createElement(N.a,{id:"name",name:"name",autoComplete:"off",autoFocus:!0,value:s,onChange:function(e){return l(e.target.value)}})),r.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"email"},"Email Address"),r.a.createElement(N.a,{id:"email",name:"email",autoComplete:"off",value:g,onChange:function(e){return b(e.target.value)}})),r.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"password"},"Password"),r.a.createElement(N.a,{name:"password",type:"password",id:"password",autoComplete:"off",value:j,onChange:function(e){return S(e.target.value)}})),r.a.createElement(w.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"quote"},"WhatsApp Number"),r.a.createElement(N.a,{name:"quote",type:"text",id:"quote",autoComplete:"off",value:D,onChange:function(e){return L(e.target.value)}})),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return A.apply(this,arguments)},className:t.submit},"Register"),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",component:f.b,to:"/login",className:t.submit},"Go back to Login"))));function A(){return(A=Object(O.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.register(s,g,j);case 3:return t.next=5,I.addQuote(D);case 5:e.history.replace("/dashboard"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}}))),T=a(142);var B=Object(S.f)(b()((function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit}}}))((function(e){var t=e.classes;console.log(e);var a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],l=c[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),b=g[0],f=g[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),w=E[0],x=E[1],N=Object(n.useState)(""),j=Object(i.a)(N,2),k=j[0],S=j[1],U=Object(n.useState)(""),C=Object(i.a)(U,2),D=C[0],L=C[1],A=Object(n.useState)(""),_=Object(i.a)(A,2),W=_[0],B=_[1],F=Object(n.useState)(""),R=Object(i.a)(F,2),G=R[0],q=R[1],P=Object(n.useState)(""),z=Object(i.a)(P,2),K=z[0],H=z[1],M=Object(n.useState)(""),Q=Object(i.a)(M,2),V=Q[0],Y=Q[1],J=Object(n.useState)(""),X=Object(i.a)(J,2),$=X[0],Z=X[1],ee=Object(n.useState)(""),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=I.getCurrentUsername();if(Object(n.useEffect)((function(){I.getCurrentUsername()&&(I.getCurrentUserQuote().then(l),I.uno().then(f),I.dos().then(x),I.tres().then(S),I.cuatro().then(L),I.cinco().then(B),I.seis().then(q),I.siete().then(H),I.ocho().then(Y),I.nueve().then(Z),I.dies().then(ne))}),[re]),!I.getCurrentUsername())return alert("Please login first"),e.history.replace("/login"),null;var ce=.2*b+2*w+5*k+10*D+40*W,se=5*G,ie=.5*K+5*V+10*$+20*ae,le=ce+se+ie;return r.a.createElement(n.Fragment,null,r.a.createElement("main",{className:t.main},r.a.createElement(u.a,{className:t.paper},r.a.createElement(o.a,{className:t.avatar},r.a.createElement(h.a,null)),r.a.createElement(m.a,{component:"h1",variant:"h5"},"Hello ",I.getCurrentUsername()),r.a.createElement(m.a,{component:"h1",variant:"h5"},"You WhatsApp: ",s?'"'.concat(s,'"'):r.a.createElement(T.a,{size:20})),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){return ue.apply(this,arguments)},className:t.submit},"Logout"))),r.a.createElement("div",{className:"container mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-3"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"DETALLES DE PUBLICACIONES"),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"blue"}},"FACEBOOK IMAGENES/+1,000likes ",r.a.createElement("small",{className:"text-muted"},"* 0.2USD/publicaci\xf3n")),": ",b),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"blue"}},"FACEBOOK VIDEOS/+10,000views ",r.a.createElement("small",{className:"text-muted"},"* 2USD/publicaci\xf3n")),": ",w),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"blue"}},"FACEBOOK VIDEOS/+100,000views ",r.a.createElement("small",{className:"text-muted"},"* 5USD/publicaci\xf3n")),": ",k),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"blue"}},"FACEBOOK VIDEOS/+1,000,000views ",r.a.createElement("small",{className:"text-muted"},"* 10USD/publicaci\xf3n")),": ",D),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"blue"}},"FACEBOOK VIDEOS/+10,000,000views ",r.a.createElement("small",{className:"text-muted"},"* 40USD/publicaci\xf3n")),": ",W),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"red"}},"YOUTUBE /+10,000views ",r.a.createElement("small",{className:"text-muted"},"* 5USD/publicaci\xf3n")),": ",G),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"gray"}},"BLOG /+1,000views ",r.a.createElement("small",{className:"text-muted"},"* 0.5USD/publicaci\xf3n")),": ",K),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"gray"}},"BLOG /+10,000views ",r.a.createElement("small",{className:"text-muted"},"* 5USD/publicaci\xf3n")),": ",V),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"gray"}},"BLOG /+100,000views ",r.a.createElement("small",{className:"text-muted"},"* 10USD/publicaci\xf3n")),": ",$),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"gray"}},"BLOG /+1,000,000views ",r.a.createElement("small",{className:"text-muted"},"* 20USD/publicaci\xf3n")),": ",ae)))),r.a.createElement("div",{className:"col-md-6 mt-3"},r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"DETALLES DE PAGOS"),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"blue"}},"FACEBOOK "),": ",ce," USD"),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"red"}},"YOUTUBE "),": ",se," USD"),r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"gray"}},"BLOG "),": ",ie," USD"),r.a.createElement("p",null,r.a.createElement("strong",null,"TOTAL: "),le," USD"),r.a.createElement("hr",null),r.a.createElement("h6",null,"HISTORIAL DE PAGOS"),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"fecha"),r.a.createElement("th",null,"cantidad"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"---"),r.a.createElement("td",null,"--- USD")),r.a.createElement("tr",null,r.a.createElement("td",null,"---"),r.a.createElement("td",null,"--- USD"))))))))));function ue(){return(ue=Object(O.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.logout();case 2:e.history.push("/");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}))),F=(a(124),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(f.c,{className:"navbar-brand",to:"/invitado/home"},"MILENEUR"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.c,{className:"nav-link",to:"/"},"Inicio",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.c,{className:"nav-link",to:"/products"},"Productos")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.c,{className:"nav-link",to:"/contact"},"Contacto")))),r.a.createElement("div",null,r.a.createElement(f.c,{type:"button",className:"btn btn-danger",to:"/session"},"Iniciar Sesi\xf3n")))}),R=a(53),G=a.n(R);function q(){var e=(window.innerWidth,G.a);return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(e,")")}},r.a.createElement(F,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4",style:{color:"white"}},r.a.createElement("p",null,"Login"),r.a.createElement("p",null,"Hola")),r.a.createElement("div",{className:"col-md-4"}),r.a.createElement("div",{className:"col-md-4",style:{color:"white"}},r.a.createElement("p",null,"Hola")))))}var P=a(81),z=a(141),K=a(143),H=Object(P.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){I.isInitialized().then((function(e){c(e)}))})),!1!==a?r.a.createElement(z.a,{theme:H},r.a.createElement(K.a,null),r.a.createElement(f.a,null,r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/firebase",component:q}),r.a.createElement(S.a,{exact:!0,path:"/firebase/session",component:v}),r.a.createElement(S.a,{exact:!0,path:"/firebase/login",component:_}),r.a.createElement(S.a,{exact:!0,path:"/firebase/register",component:W}),r.a.createElement(S.a,{exact:!0,path:"/firebase/dashboard",component:B})))):r.a.createElement("div",{id:"loader"},r.a.createElement(T.a,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a.p+"static/media/calavera.c52c6946.jpg"},85:function(e,t,a){e.exports=a(125)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.8c42f2cb.chunk.js.map