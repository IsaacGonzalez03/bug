(function(e){function t(t){for(var c,a,s=t[0],i=t[1],u=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"b08256fd","chunk-343c38ee":"6f19bf96","chunk-42bcb0d1":"dcc3a964","chunk-5953ecdd":"2a64c1c1"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-343c38ee":1,"chunk-42bcb0d1":1,"chunk-5953ecdd":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"31d6cfe0","chunk-343c38ee":"758c0b8b","chunk-42bcb0d1":"2d8cfac8","chunk-5953ecdd":"1a6188fc"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===c||d===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===c||d===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],b.parentNode.removeChild(b),n(o)},b.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}r[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var b=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ac":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const a=Object(c["F"])("data-v-633dcc05");Object(c["t"])("data-v-633dcc05");const r={class:"row justify-content-center"},o={class:"row p-4"},s={class:"col-md-4 align-middle pt-5 order-2"},i={class:"col-md-8 order-1"},u={class:"card my-6 shadow"},d={class:"card-header"},l={class:"card-body"},b={class:"p-0"},g={class:"card-footer p-0 m-0"},p={key:0,class:"py-1 my-1 text-success"},f={key:1,class:"py-1 my-1 text-danger"};Object(c["r"])();const h=a((e,t,n,a,h,O)=>(Object(c["q"])(),Object(c["d"])("div",r,[Object(c["g"])("div",{class:"col-10 card my-2 bg-dark shadow cursor",onClick:t[1]||(t[1]=(...e)=>a.bugDetails&&a.bugDetails(...e)),title:"Bug Details"},[Object(c["g"])("div",o,[Object(c["g"])("div",s,[Object(c["g"])("img",{src:n.bug.creator.picture,class:"rounded-circle image-fluid img-thumbnail img-height shadow"},null,8,["src"]),Object(c["g"])("p",null,Object(c["z"])(n.bug.creator.name),1)]),Object(c["g"])("div",i,[Object(c["g"])("div",u,[Object(c["g"])("h5",d,Object(c["z"])(n.bug.title),1),Object(c["g"])("div",l,[Object(c["g"])("p",b,Object(c["z"])(n.bug.description),1)]),Object(c["g"])("div",null,Object(c["z"])(new Date(n.bug.updatedAt).toLocaleString("en",a.date)),1),Object(c["g"])("div",g,[0==n.bug.closed?(Object(c["q"])(),Object(c["d"])("p",p," Open ")):(Object(c["q"])(),Object(c["d"])("p",f," Closed "))])])])])])])));var O=n("6c02"),v=n("5d40"),m={props:{bug:{type:Object,required:!0}},setup(e){const t=Object(O["d"])();return{date:{year:"numeric",month:"2-digit",day:"2-digit"},bugDetails(){try{t.push({name:"BugDetailsPage",params:{id:e.bug.id}})}catch(n){v["a"].toast(n.message)}}}}};n("1d8e");m.render=h,m.__scopeId="data-v-633dcc05";t["default"]=m},"1d8e":function(e,t,n){"use strict";n("9eff")},"2b20":function(e,t,n){"use strict";n.r(t),n.d(t,"api",(function(){return o}));var c=n("bc3a"),a=n.n(c),r=n("8c89");const o=a.a.create({baseURL:r["b"],timeout:8e3})},"35a3":function(e,t,n){"use strict";n("82ff")},3723:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const a=Object(c["F"])("data-v-03d74c40");Object(c["t"])("data-v-03d74c40");const r={class:"row justify-content-center p-3"},o={class:"col-11 card pl-0 cursor"},s={class:"my-1 d-flex p-3 align-items-center"},i=Object(c["g"])("tr",null,null,-1),u={class:"p-0 m-0"};Object(c["r"])();const d=a((e,t,n,a,d,l)=>(Object(c["q"])(),Object(c["d"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("div",s,[Object(c["g"])("img",{src:n.note.creator.picture,alt:"creator picture",class:"rounded-circle img-thumbnail img-height"},null,8,["src"]),i,Object(c["g"])("p",u,Object(c["z"])(n.note.creator.name)+": "+Object(c["z"])(n.note.body),1),n.note.creator.id===a.state.account.id?(Object(c["q"])(),Object(c["d"])("i",{key:0,onClick:t[1]||(t[1]=(...e)=>a.deleteNote&&a.deleteNote(...e)),class:"fas fa-trash-alt text-danger ms-auto cursor"})):Object(c["e"])("",!0)])])])));var l=n("a1e9"),b=n("5c40"),g=n("83fc"),p=n("5a80"),f=n("5d40"),h={name:"Note",props:{note:{type:Object,required:!0}},setup(e){const t=Object(l["i"])({account:Object(b["d"])(()=>g["AppState"].account),user:Object(b["d"])(()=>g["AppState"].user)});return{state:t,async deleteNote(){try{const t=confirm("Once deleted, note cannot be recovered");!0===t&&await p["a"].deleteNote(e.note.id,e.note.bug)}catch(t){f["a"].toast(t.message)}}}}};n("9725");h.render=d,h.__scopeId="data-v-03d74c40";t["default"]=h},"41cb":function(e,t,n){"use strict";n.r(t),n.d(t,"router",(function(){return s}));var c=n("6c02"),a=n("8816");function r(e){return()=>n("a2f9")(`./${e}.vue`)}const o=[{path:"/",name:"Home",component:r("HomePage")},{path:"/about",name:"About",component:r("AboutPage")},{path:"/account",name:"Account",component:r("AccountPage"),beforeEnter:a["a"]},{path:"/details/:id",name:"BugDetailsPage",component:r("BugDetailsPage")}],s=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:o})},"56d7":function(e,t,n){"use strict";n.r(t);n("5363"),n("1157"),n("4989");var c=n("7a23");const a=Object(c["g"])("footer",null,[Object(c["g"])("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by IG the OG ")],-1);function r(e,t,n,r,o,s){const i=Object(c["x"])("Navbar"),u=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(i)]),Object(c["g"])("main",null,[Object(c["g"])(u)]),a],64)}var o=n("83fc"),s={name:"App",setup(){return{appState:Object(c["b"])(()=>o["AppState"])}}};n("9ed8");s.render=r;var i=s;function u(e){const t=n("ccc2");t.keys().forEach(n=>{const c=t(n),a=c.default||c,r=a.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(r,a)})}var d=n("41cb");const l=Object(c["c"])(i);u(l),l.use(d["router"]).mount("#app")},"5a80":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const{AppState:c}=n("83fc"),{api:a}=n("2b20");class r{async getNotesByBugId(e){const t=await a.get(`api/bugs/${e}/notes`);c.notes=t.data}async createNote(e,t){await a.post("api/notes",e),this.getNotesByBugId(t)}async deleteNote(e,t){await a.delete("api/notes/"+e),this.getNotesByBugId(t)}}const o=new r},"5d40":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n("3d20"),a=n.n(c);class r{static async confirmAction(e="Are you sure?",t="You won't be able to revert this!",n="warning",c="Yes, delete it!"){try{const r=await a.a.fire({title:e,text:t,icon:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c});return!!r.isConfirmed}catch(r){return!1}}static toast(e="Warning!",t="warning",n="top-end",c=3e3,r=!0){a.a.fire({title:e,icon:t,position:n,timer:c,timerProgressBar:r,toast:!0,showConfirmButton:!1})}}},"82ff":function(e,t,n){},"83fc":function(e,t,n){"use strict";n.r(t),n.d(t,"AppState",(function(){return a}));var c=n("7a23");const a=Object(c["u"])({user:{},account:{},bugs:[],notes:[],activeBug:{}})},"86a0":function(e,t,n){},"8c89":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));const c=window.location.origin.includes("localhost"),a=c?"http://localhost:3000":"",r="nitr0.us.auth0.com",o="nitr0.com",s="L0YLmj0kD9JBZ2aobsgJSeYrLz0rukrx"},9725:function(e,t,n){"use strict";n("86a0")},"9d8d":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const a=Object(c["F"])("data-v-426a75b2");Object(c["t"])("data-v-426a75b2");const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},o=Object(c["g"])("div",{class:"d-flex flex-column align-items-center text-success"},[Object(c["g"])("h4",{class:"text-shadow cursor"},[Object(c["f"])(" Debugger "),Object(c["g"])("i",{class:"fas fa-viruses"})])],-1),s=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav mr-auto"},d={class:"nav-item text-shadow"},l=Object(c["f"])(" Home "),b={class:"nav-item text-shadow"},g=Object(c["f"])(" About "),p={class:"navbar-text"},f={key:1,class:"dropdown"},h={class:"mx-3"};Object(c["r"])();const O=a((e,t,n,O,v,m)=>{const j=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("nav",r,[Object(c["g"])(j,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:a(()=>[o]),_:1}),s,Object(c["g"])("div",i,[Object(c["g"])("ul",u,[Object(c["g"])("li",d,[Object(c["g"])(j,{to:{name:"Home"},class:"nav-link"},{default:a(()=>[l]),_:1})]),Object(c["g"])("li",b,[Object(c["g"])(j,{to:{name:"About"},class:"nav-link"},{default:a(()=>[g]),_:1})])]),Object(c["g"])("span",p,[O.user.isAuthenticated?(Object(c["q"])(),Object(c["d"])("div",f,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>O.state.dropOpen=!O.state.dropOpen)},[Object(c["g"])("img",{src:O.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(c["g"])("span",h,Object(c["z"])(O.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:O.state.dropOpen}],onClick:t[4]||(t[4]=e=>O.state.dropOpen=!1)},[Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>O.logout&&O.logout(...e))}," logout ")],2)])):(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>O.login&&O.login(...e))}," Login "))])])])});var v=n("8816"),m=n("83fc"),j=n("8c89"),y=n("41cb");function w(e,t){if(j["d"])console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const k={log(){w("log",arguments)},error(){w("error",arguments)},warn(){w("warn",arguments)},assert(){w("assert",arguments)},trace(){w("trace",arguments)}};var x=n("2b20");class A{async getAccount(){try{const e=await x["api"].get("/account");m["AppState"].account=e.data}catch(e){k.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const E=new A;var C=n("8e27");let T=!1,S=[];const N={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class _{constructor(e=j["b"]){this.socket=Object(C["io"])(e||j["b"]),this.on(N.connected,this.onConnected).on(N.authenticated,this.onAuthenticated).on(N.error,this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){T=!0}onAuthenticated(e){const t=[...S];S=[],t.forEach(e=>{this.emit(e.action,e.payload)})}authenticate(e){this.socket.emit(N.authenticate,e)}onError(e){k.error("[SOCKET_ERROR]",e)}emit(e,t){if(!T)return k.log("[ENQUEING_ACTION]",{action:e,payload:t}),S.push({action:e,payload:t});this.socket.emit(e,t)}}var D=n("5d40");class P extends _{constructor(){super(),this.on("error",this.onError)}onError(e){k.error("[SOCKET_ERROR]",e),D["a"].toast(e.message,"error")}}const B=new P,L=Object(v["b"])({domain:j["e"],clientId:j["c"],audience:j["a"],useRefreshTokens:!0,onRedirectCallback:e=>{y["router"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function q(e){if(!L.isAuthenticated)return e;const t=1e3*L.identity.exp,n=t<Date.now(),c=t<Date.now()+432e5;return n?await L.loginWithPopup():c&&await L.getTokenSilently(),x["api"].defaults.headers.authorization=L.bearer,B.authenticate(L.bearer),e}L.on(L.AUTH_EVENTS.AUTHENTICATED,(async function(){x["api"].defaults.headers.authorization=L.bearer,x["api"].interceptors.request.use(q),m["AppState"].user=L.user,await E.getAccount(),B.authenticate(L.bearer)}));var I={name:"Navbar",setup(){const e=Object(c["u"])({dropOpen:!1});return{state:e,user:Object(c["b"])(()=>m["AppState"].user),async login(){L.loginWithPopup()},async logout(){L.logout({returnTo:window.location.origin})}}}};n("35a3");I.render=O,I.__scopeId="data-v-426a75b2";t["default"]=I},"9ed8":function(e,t,n){"use strict";n("de4d")},"9eff":function(e,t,n){},a2f9:function(e,t,n){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-42bcb0d1"],"./BugDetailsPage.vue":["68bc","chunk-5953ecdd"],"./HomePage.vue":["78a7","chunk-343c38ee"]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(c)},a.id="a2f9",e.exports=a},ccc2:function(e,t,n){var c={"./Bug.vue":"01ac","./Note.vue":"3723","./navbar.vue":"9d8d"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="ccc2"},de4d:function(e,t,n){}});