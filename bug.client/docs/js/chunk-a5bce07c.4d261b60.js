(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5bce07c"],{"67ba":function(t,e,a){},"78a7":function(t,e,a){"use strict";a.r(e);var s=a("7a23");const c=Object(s["F"])("data-v-27d22f53");Object(s["t"])("data-v-27d22f53");const u={class:"home container-fluid align-items-center justify-content-center bg-secondary shadow"},g={class:"row justify-content-center my-5"},n={class:"col-8 p-0"},i=Object(s["g"])("div",{class:"card-header"},[Object(s["g"])("h3",{class:"text-success text-shadow"}," New Bug ")],-1),b={class:"card-body"},o={class:"form-group"},r=Object(s["g"])("div",{class:"card-footer"},[Object(s["g"])("button",{type:"submit",class:"btn btn-warning btn-sm float-right shadow-sm text-light cursor",title:"Submit Form"}," Submit ")],-1),l={class:"row"},d={class:"col"};Object(s["r"])();const p=c((t,e,a,c,p,B)=>{const O=Object(s["x"])("Bug");return Object(s["q"])(),Object(s["d"])("div",u,[Object(s["g"])("div",g,[Object(s["g"])("div",n,[Object(s["g"])("form",{class:"card shadow bg-dark",onSubmit:e[3]||(e[3]=Object(s["E"])((...t)=>c.createBug&&c.createBug(...t),["prevent"]))},[i,Object(s["g"])("div",b,[Object(s["g"])("div",o,[Object(s["D"])(Object(s["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>c.state.newBug.title=t),type:"text",class:"form-control my-1 bg-light shadow-sm",placeholder:"bug...",title:"Bug Title"},null,512),[[s["B"],c.state.newBug.title]]),Object(s["D"])(Object(s["g"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>c.state.newBug.description=t),class:"form-control bg-light shadow-sm",cols:"30",rows:"3",placeholder:"explain in detail...",title:"Bug Description"},null,512),[[s["B"],c.state.newBug.description]])])]),r],32),Object(s["g"])("div",l,[Object(s["g"])("div",d,[Object(s["g"])("button",{class:"btn btn-success my-3 cursor",type:"button",onClick:e[4]||(e[4]=(...t)=>c.filterBugs&&c.filterBugs(...t))}," Sort Bugs ")])])])]),(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(c.state.bugs,t=>(Object(s["q"])(),Object(s["d"])(O,{key:t.id,bug:t},null,8,["bug"]))),128))])});var B=a("83fc"),O=a("af90"),j=a("5d40"),w={name:"Home",setup(){const t=Object(s["u"])({bugOrder:!0,account:Object(s["b"])(()=>B["AppState"].account),user:Object(s["b"])(()=>B["AppState"].user),bugs:Object(s["b"])(()=>B["AppState"].bugs),newBug:{}});return Object(s["o"])(async()=>await O["a"].getAllBugs()),{state:t,async filterBugs(){try{!0===t.bugOrder&&(await O["a"].filterBugs(),t.bugOrder=!1)}catch(e){}},async createBug(){try{await O["a"].createBug(t.newBug),j["a"].toast("Successfully Created Bug","success"),t.newBug={}}catch(e){j["a"].toast(e.message)}}}}};a("b8c4");w.render=p,w.__scopeId="data-v-27d22f53";e["default"]=w},af90:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a("8a4e");const{AppState:c}=a("83fc"),{router:u}=a("41cb"),{api:g}=a("2b20");class n{async getAllBugs(){const t=await g.get("api/bugs");c.bugs=t.data,s["a"].log(t.data)}async filterBugs(){c.bugs=c.bugs.filter(t=>!1===t.closed)}async getBugById(t){const e=await g.get("api/bugs/"+t);c.activeBug=e.data}async createBug(t){const e=await g.post("api/bugs",t);this.getAllBugs(),u.push({name:"BugDetailsPage",params:{id:e.data.id}})}async deleteBug(t){await g.delete("api/bugs/"+t),this.getBugById(t),this.getAllBugs()}async editBug(t){delete t.closed,await g.put("api/bugs/"+t.id,t),this.getBugById(t.id)}}const i=new n},b8c4:function(t,e,a){"use strict";a("67ba")}}]);