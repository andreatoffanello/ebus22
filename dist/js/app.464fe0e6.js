(function(e){function t(t){for(var n,o,i=t[0],r=t[1],l=t[2],u=0,b=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var r=a[i];0!==c[r]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=r;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"13a7":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=(a("b0c0"),{class:"button"});function s(e,t,a,s,o,i){return Object(n["t"])(),Object(n["f"])("div",c,[Object(n["g"])("span",null,Object(n["A"])(a.label),1),Object(n["g"])("i",{class:Object(n["p"])(a.icon)},null,2)])}var o={props:["label","icon"]},i=a("6b0d"),r=a.n(i);const l=r()(o,[["render",s]]);var d=l,u={class:"img_wrapper"},b=["src"],m={class:"item_content"},p={class:"item_content_bottom"};function j(e){return function(t,a){var c=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["d"])(c,{to:e.menuItem.url},{default:Object(n["D"])((function(){return[Object(n["g"])("div",{class:Object(n["p"])(["nav_card shadow_hover",{open:e.active}])},[Object(n["g"])("div",u,[Object(n["g"])("img",{src:e.menuItem.imgUrl,alt:""},null,8,b)]),Object(n["g"])("div",m,[Object(n["g"])("p",null,Object(n["A"])(e.menuItem.name),1),Object(n["g"])("div",p,[Object(n["j"])(d,{label:"View page",icon:"icon_expand_1"})])])],2)]})),_:1},8,["to"])}}var g={props:["menuItem","active"]},h=Object.assign(g,{setup:j});const v=h;var f=v,O=a("bc3a"),y=a.n(O),w={class:"nav"},_={class:"nav_left"},k=Object(n["h"])('<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>',9),x=[k],S={class:"nav_center"},D=Object(n["g"])("span",{class:"small bold upper"},"eBus",-1),M=Object(n["g"])("span",{class:"small bold upper text_separator"},"//",-1),P={key:0,class:"small bold upper"},z={key:1,class:"small bold upper"},A={class:"nav_right"},Y={class:"time small bold upper"},R={class:"date small bold upper"},X=Object(n["g"])("div",{class:"button button_nav"},[Object(n["g"])("span",null,"Login"),Object(n["g"])("i",{class:"icon_login"})],-1),Z={class:"menu_grid"};function C(e){return function(e,t){return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",w,[Object(n["g"])("div",_,[Object(n["g"])("div",{class:"menu_button",onClick:t[0]||(t[0]=function(t){return e.openMenu()})},[Object(n["g"])("div",{class:Object(n["p"])(["menu_icon",{open:e.menuOpen}])},x,2)])]),Object(n["g"])("div",S,[D,M,e.menuOpen?(Object(n["t"])(),Object(n["f"])("span",P,"Menu")):Object(n["e"])("",!0),e.menuOpen?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["f"])("span",z,Object(n["A"])(e.$route.name),1))]),Object(n["g"])("div",A,[Object(n["g"])("span",Y,Object(n["A"])(e.time),1),Object(n["g"])("span",R,Object(n["A"])(e.date),1),X])]),Object(n["g"])("div",{class:Object(n["p"])(["fullscreen_menu",{open:e.menuOpen}])},[Object(n["g"])("div",Z,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.menuItems,(function(a){return Object(n["t"])(),Object(n["d"])(f,{key:a.name,"menu-item":a,active:e.menuOpen,onClick:t[1]||(t[1]=function(t){return e.openMenu()})},null,8,["menu-item","active"])})),128))])],2)],64)}}var T={name:"Navbar",data:function(){return{menuItems:[],menuOpen:!1,time:"",date:""}},mounted:function(){this.loadMenuItems(),this.timeUpdate()},methods:{loadMenuItems:function(){var e=this;y.a.get("../configs/main_menu.json").then((function(t){return e.menuItems=t.data}))},openMenu:function(){this.menuOpen?this.menuOpen=!1:this.menuOpen=!0},checkTime:function(e){return e<10&&(e="0"+e),e},timeUpdate:function(){var e=this;setInterval((function(){var t=new Date,a=t.getHours(),n=t.getMinutes(),c=t.getSeconds(),s=t.getDate(),o=t.getMonth()+1,i=t.getFullYear();a=e.checkTime(a),n=e.checkTime(n),c=e.checkTime(c),s=e.checkTime(s),o=e.checkTime(o);var r=a+":"+n+":"+c,l=s+"/"+o+"/"+i;e.time=r,e.date=l}),1e3)}}},E=Object.assign(T,{setup:C});const I=E;var q=I,L={class:"notifications"},W=Object(n["g"])("div",{class:"panel_header"},[Object(n["g"])("span",{class:"regular bold"},"Notifications")],-1),N={class:"notif_wrapper"},U={class:"icon_wrapper"},B={class:"title regular bold"},$={class:"time"},F=Object(n["i"])("See details"),V={class:"panel_bottom"},H=Object(n["g"])("span",null,"See All",-1);function K(e,t,a,c,s,o){var i=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["f"])("div",L,[W,Object(n["g"])("div",N,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(s.notifications,(function(e){return Object(n["t"])(),Object(n["f"])("div",{class:Object(n["p"])(["notif",e.level]),key:e.id},[Object(n["g"])("div",U,[Object(n["g"])("i",{class:Object(n["p"])(e.icon)},null,2)]),Object(n["g"])("span",B,Object(n["A"])(e.title),1),Object(n["g"])("span",$,Object(n["A"])(e.time),1),Object(n["j"])(i,{to:"messages",class:"link"},{default:Object(n["D"])((function(){return[F]})),_:1})],2)})),128))]),Object(n["g"])("div",V,[Object(n["j"])(i,{class:"button primary",to:"messages"},{default:Object(n["D"])((function(){return[H]})),_:1})])])}var J={data:function(){return{notifications:[]}},mounted:function(){this.loadNotifications()},methods:{loadNotifications:function(){var e=this;y.a.get("./data-examples/notifications.json").then((function(t){e.notifications=t.data}))}}};const G=r()(J,[["render",K]]);var Q=G,ee={class:"messages"},te=Object(n["g"])("div",{class:"panel_header"},[Object(n["g"])("span",{class:"regular bold"},"Messages")],-1),ae={class:"messages_wrapper"},ne=Object(n["g"])("div",{class:"tab_button"},null,-1),ce=Object(n["g"])("span",null,null,-1),se=[ce],oe={class:"panel_bottom"},ie=Object(n["g"])("span",null,"See All",-1);function re(e,t,a,c,s,o){var i=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["f"])("div",ee,[te,Object(n["g"])("div",ae,[ne,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(s.messagesReceived,(function(e){return Object(n["t"])(),Object(n["f"])("div",{class:"message",key:e.id},se)})),128))]),Object(n["g"])("div",oe,[Object(n["j"])(i,{class:"button primary",to:"messages"},{default:Object(n["D"])((function(){return[ie]})),_:1})])])}var le={data:function(){return{messagesReceived:[],messagesSent:[]}},mounted:function(){this.loadReceivedMessages(),this.loadSentMessages()},methods:{loadReceivedMessages:function(){var e=this;y.a.get("./data-examples/messages-received.json").then((function(t){e.messagesReceived=t.data}))},loadSentMessages:function(){var e=this;y.a.get("./data-examples/messages-sent.json").then((function(t){e.messagesSent=t.data}))}}};const de=r()(le,[["render",re]]);var ue=de,be={class:"sidebar"},me={class:"sidebar_menu"},pe=Object(n["g"])("i",{class:"icon_bell"},null,-1),je=Object(n["g"])("span",{class:"counter"},"2",-1),ge=[pe,je],he=Object(n["g"])("i",{class:"icon_message"},null,-1),ve=Object(n["g"])("span",{class:"counter"},"2",-1),fe=[he,ve],Oe={class:"sidebar_bottom"},ye=Object(n["g"])("i",{class:"icon_contrast"},null,-1),we=[ye],_e=Object(n["g"])("i",{class:"icon_expand"},null,-1),ke=[_e],xe=Object(n["g"])("i",{class:"icon_close"},null,-1),Se=[xe];function De(e){return function(e,t){return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",be,[Object(n["g"])("div",me,[Object(n["g"])("div",{class:"sidebar_icon",onClick:t[0]||(t[0]=function(t){return e.sideOpen("notifications")})},ge),Object(n["g"])("div",{class:"sidebar_icon",onClick:t[1]||(t[1]=function(t){return e.sideOpen("messages")})},fe)]),Object(n["g"])("div",Oe,[Object(n["g"])("div",{class:"sidebar_icon",onClick:t[2]||(t[2]=function(t){return e.toggleDark()})},we),Object(n["g"])("div",{class:"sidebar_icon",onClick:t[3]||(t[3]=function(t){return e.$emit("toggleNoDis")})},ke)])]),Object(n["g"])("div",{class:Object(n["p"])(["sidebar_panel shadow",{open:e.openSide,w32:e.notifications,w64:e.messages}])},[e.notifications?(Object(n["t"])(),Object(n["d"])(Q,{key:0})):Object(n["e"])("",!0),e.messages?(Object(n["t"])(),Object(n["d"])(ue,{key:1})):Object(n["e"])("",!0),e.openSide?(Object(n["t"])(),Object(n["f"])("div",{key:2,class:"close_panel",onClick:t[4]||(t[4]=function(t){return e.sideClose()})},Se)):Object(n["e"])("",!0)],2)],64)}}var Me={emits:["toggleNoDis","toggleDark"],data:function(){return{openSide:!1,notifications:!1,messages:!1,theme:this.$store.state.theme}},methods:{toggleDistractionMode:function(){this.$noDis=!this.$noDis},sideClose:function(){this.openSide=!1,this.notification=!1,this.messages=!1},sideOpen:function(e){this.openSide=!0,"notifications"===e&&(this.notifications=!0,this.messages=!1),"messages"===e&&(this.messages=!0,this.notifications=!1)},toggleDark:function(){"dark"===this.theme?this.theme="light":this.theme="dark",this.$store.commit("toggleTheme",this.theme)}}},Pe=Object.assign(Me,{setup:De});const ze=Pe;var Ae=ze,Ye={class:"kpi"},Re={class:"component_content"},Xe={class:"kpi_block early"},Ze={class:"kpi_label"},Ce=Object(n["g"])("span",null,"Early",-1),Te={class:"number"},Ee={class:"percentage"},Ie={class:"block_circle"},qe={viewBox:"0 0 42 42",class:"circle_wrap"},Le=Object(n["g"])("circle",{class:"base",cx:"21",cy:"21",r:"15.91549430918952"},null,-1),We=["stroke-dasharray"],Ne={class:"circle_data"},Ue={class:"number"},Be=Object(n["g"])("div",{class:"divider"},null,-1),$e={class:"percentage"},Fe={class:"kpi_block ontime"},Ve={class:"kpi_label"},He=Object(n["g"])("span",null,"On time",-1),Ke={class:"number"},Je={class:"percentage"},Ge={class:"block_circle"},Qe={viewBox:"0 0 42 42",class:"circle_wrap"},et=Object(n["g"])("circle",{class:"base",cx:"21",cy:"21",r:"15.91549430918952"},null,-1),tt=["stroke-dasharray"],at={class:"circle_data"},nt={class:"number"},ct=Object(n["g"])("div",{class:"divider"},null,-1),st={class:"percentage"},ot={class:"kpi_block late"},it={class:"kpi_label"},rt=Object(n["g"])("span",null,"Late",-1),lt={class:"number"},dt={class:"percentage"},ut={class:"block_circle"},bt={viewBox:"0 0 42 42",class:"circle_wrap"},mt=Object(n["g"])("circle",{class:"base",cx:"21",cy:"21",r:"15.91549430918952"},null,-1),pt=["stroke-dasharray"],jt={class:"circle_data"},gt={class:"number"},ht=Object(n["g"])("div",{class:"divider"},null,-1),vt={class:"percentage"},ft={class:"kpi_block primary"},Ot={class:"kpi_label"},yt=Object(n["g"])("span",null,"Vehicles",-1),wt={class:"number nobkg"},_t={class:"block_circle"},kt=Object(n["g"])("svg",{viewBox:"0 0 42 42",class:"circle_wrap"},[Object(n["g"])("circle",{class:"circle transparent",cx:"21",cy:"21",r:"15.91549430918952","stroke-dasharray":"50 50","stroke-dashoffset":"0"})],-1),xt={class:"circle_data"},St={class:"number"},Dt=Object(n["g"])("div",{class:"divider"},null,-1),Mt=Object(n["g"])("span",{class:"percentage"},"Total",-1),Pt={class:"kpi_block primary"},zt={class:"kpi_label"},At=Object(n["g"])("span",null,"Cadence",-1),Yt={class:"number nobkg"},Rt=Object(n["g"])("span",{class:"percentage"},"min",-1),Xt={class:"block_circle"},Zt=Object(n["g"])("svg",{viewBox:"0 0 42 42",class:"circle_wrap"},[Object(n["g"])("circle",{class:"circle transparent",cx:"21",cy:"21",r:"15.91549430918952","stroke-dasharray":"50 50","stroke-dashoffset":"0"})],-1),Ct={class:"circle_data"},Tt={class:"number"},Et=Object(n["g"])("div",{class:"divider"},null,-1),It=Object(n["g"])("span",{class:"percentage"},"Minutes",-1),qt={class:"kpi_block primary"},Lt={class:"kpi_label"},Wt=Object(n["g"])("span",null,"Regularity",-1),Nt={class:"number"},Ut={class:"block_circle"},Bt={viewBox:"0 0 42 42",class:"circle_wrap"},$t=Object(n["g"])("circle",{class:"base",cx:"21",cy:"21",r:"15.91549430918952"},null,-1),Ft=["stroke-dasharray"],Vt={class:"circle_data"},Ht={class:"number"},Kt=Object(n["g"])("div",{class:"divider"},null,-1),Jt=Object(n["g"])("span",{class:"percentage"},null,-1),Gt=Object(n["g"])("i",{class:"icon_arrow_up"},null,-1),Qt=Object(n["g"])("i",{class:"icon_arrow_down"},null,-1),ea=[Gt,Qt],ta=Object(n["g"])("div",{class:"component_footer"},null,-1);function aa(e,t,a,c,s,o){return Object(n["t"])(),Object(n["f"])("div",Ye,[Object(n["g"])("div",Re,[Object(n["g"])("div",{class:Object(n["p"])(["kpi_grid",{enlarge:s.enlarge}])},[Object(n["g"])("div",Xe,[Object(n["g"])("div",Ze,[Ce,Object(n["g"])("span",Te,Object(n["A"])(s.early),1),Object(n["g"])("span",Ee,Object(n["A"])(s.earlyPerc)+"%",1)]),Object(n["g"])("div",Ie,[(Object(n["t"])(),Object(n["f"])("svg",qe,[Le,Object(n["g"])("circle",{class:"circle",cx:"21",cy:"21",r:"15.91549430918952","stroke-dasharray":s.earlyPerc+" "+[100-s.earlyPerc],"stroke-dashoffset":"0"},null,8,We)])),Object(n["g"])("div",Ne,[Object(n["g"])("span",Ue,Object(n["A"])(s.early),1),Be,Object(n["g"])("span",$e,Object(n["A"])(s.earlyPerc)+"%",1)])])]),Object(n["g"])("div",Fe,[Object(n["g"])("div",Ve,[He,Object(n["g"])("span",Ke,Object(n["A"])(s.ontime),1),Object(n["g"])("span",Je,Object(n["A"])(s.ontimePerc)+"%",1)]),Object(n["g"])("div",Ge,[(Object(n["t"])(),Object(n["f"])("svg",Qe,[et,Object(n["g"])("circle",{class:"circle",cx:"21",cy:"21",r:"15.91549430918952","stroke-dasharray":s.ontimePerc+" "+[100-s.ontimePerc],"stroke-dashoffset":"0"},null,8,tt)])),Object(n["g"])("div",at,[Object(n["g"])("span",nt,Object(n["A"])(s.ontime),1),ct,Object(n["g"])("span",st,Object(n["A"])(s.ontimePerc)+"%",1)])])]),Object(n["g"])("div",ot,[Object(n["g"])("div",it,[rt,Object(n["g"])("span",lt,Object(n["A"])(s.late),1),Object(n["g"])("span",dt,Object(n["A"])(s.latePerc)+"%",1)]),Object(n["g"])("div",ut,[(Object(n["t"])(),Object(n["f"])("svg",bt,[mt,Object(n["g"])("circle",{class:"circle",cx:"21",cy:"21",r:"15.91549430918952","stroke-dasharray":s.latePerc+" "+[100-s.latePerc],"stroke-dashoffset":"0"},null,8,pt)])),Object(n["g"])("div",jt,[Object(n["g"])("span",gt,Object(n["A"])(s.late),1),ht,Object(n["g"])("span",vt,Object(n["A"])(s.latePerc)+"%",1)])])]),Object(n["g"])("div",ft,[Object(n["g"])("div",Ot,[yt,Object(n["g"])("span",wt,Object(n["A"])(s.all),1)]),Object(n["g"])("div",_t,[kt,Object(n["g"])("div",xt,[Object(n["g"])("span",St,Object(n["A"])(s.all),1),Dt,Mt])])]),Object(n["g"])("div",Pt,[Object(n["g"])("div",zt,[At,Object(n["g"])("span",Yt,Object(n["A"])(s.cadence),1),Rt]),Object(n["g"])("div",Xt,[Zt,Object(n["g"])("div",Ct,[Object(n["g"])("span",Tt,Object(n["A"])(s.cadence),1),Et,It])])]),Object(n["g"])("div",qt,[Object(n["g"])("div",Lt,[Wt,Object(n["g"])("span",Nt,Object(n["A"])(s.regularity)+"%",1)]),Object(n["g"])("div",Ut,[(Object(n["t"])(),Object(n["f"])("svg",Bt,[$t,Object(n["g"])("circle",{class:"circle primary",cx:"21",cy:"21",r:"15.91549430918952","stroke-dasharray":s.regularity+" "+[100-s.regularity],"stroke-dashoffset":"0"},null,8,Ft)])),Object(n["g"])("div",Vt,[Object(n["g"])("span",Ht,Object(n["A"])(s.regularity)+"%",1),Kt,Jt])])])],2),Object(n["g"])("div",{class:"expander_button",onClick:t[0]||(t[0]=function(e){return o.toggleEnlarge()})},[Object(n["g"])("div",{class:Object(n["p"])(["expander_icons",{enlarge:s.enlarge}])},ea,2)])]),ta])}a("b680");var na={data:function(){return{enlarge:!1,hide:!0,early:"",earlyPerc:"",ontime:"",ontimePerc:"",late:"",latePerc:"",all:"",regularity:"",cadence:""}},mounted:function(){this.loadKpi(),this.simulateData()},methods:{loadKpi:function(){var e,t=this;y.a.get("./data-examples/kpi.json").then((function(a){e=a.data[0],t.regularity=e.regularity,t.cadence=e.cadence,t.early=e.early,t.ontime=e.ontime,t.late=e.late,t.updateValues(e)}))},updateValues:function(e){this.all=this.early+this.ontime+this.late;var t=this.early/this.all*100;this.earlyPerc=t.toFixed(1);var a=this.ontime/this.all*100;this.ontimePerc=a.toFixed(1);var n=this.late/this.all*100;this.latePerc=n.toFixed(1)},simulateData:function(){var e=this;setInterval((function(){var t=e.early+(Math.random()<.7?-1:1);e.early=t>=2?t:2;var a=e.late+(Math.random()<.7?-1:1);e.late=a>=3?a:3;var n=e.ontime+(Math.random()<.7?-1:1);e.ontime=n>=4?n:4,e.updateValues(e.data)}),4e3)},toggleEnlarge:function(){this.enlarge=!this.enlarge}}};const ca=r()(na,[["render",aa]]);var sa=ca,oa={class:"footer"},ia={setup:function(e){return function(e,t){return Object(n["t"])(),Object(n["f"])("div",oa,[Object(n["j"])(sa)])}}};const ra=ia;var la=ra,da={class:"popup shadow","data-draggable":""},ua=Object(n["g"])("span",{class:"popup_title"},"Popup title",-1),ba=[ua],ma=Object(n["h"])('<div class="popup_content"><span>Lorem ipsum</span></div><div class="popup_bottom"><div class="buttons_grid"><div class="button primary"><span>Confirm</span><i class="icon_check"></i></div><div class="button disabled"><span>Dismiss</span><i class="icon_close"></i></div></div></div>',2);function pa(e,t,a,c,s,o){return Object(n["t"])(),Object(n["f"])("div",da,[Object(n["g"])("div",{class:"popup_head",onMousedown:t[0]||(t[0]=function(){return o.dragElem&&o.dragElem.apply(o,arguments)})},ba,32),ma])}var ja={data:function(){return{isDrag:!1}},methods:{dragElem:function(e){var t=this;e.preventDefault(),this.isDrag=!0;var a=e.target,n=a.closest("[data-draggable]"),c=n.getBoundingClientRect().top,s=n.getBoundingClientRect().left,o=e.clientX-s,i=e.clientY-c;document.addEventListener("mousemove",(function(e){if(t.isDrag){var c=e.clientX,s=e.clientY,r=c-o,l=s-i;n.style.left=r+"px",n.style.top=l+"px",a.style.cursor="grabbing"}})),document.addEventListener("mouseup",(function(e){t.isDrag=!1,a.style.cursor="grab",console.log("isdrag: "+t.isDrag)}))}}};const ga=r()(ja,[["render",pa]]);var ha=ga,va={class:"layout"},fa=Object(n["g"])("i",{class:"icon_close"},null,-1),Oa=[fa];function ya(e){return function(e,t){var a=Object(n["y"])("router-view");return Object(n["t"])(),Object(n["f"])("div",va,[e.noDis?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(q,{key:0})),e.noDis?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(Ae,{key:1,onToggleNoDis:t[0]||(t[0]=function(t){return e.toggleNoDis()})})),Object(n["j"])(a),e.noDis?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(la,{key:2})),e.noDis?(Object(n["t"])(),Object(n["f"])("div",{key:3,class:"close_nodis shadow",onClick:t[1]||(t[1]=function(t){return e.toggleNoDis()})},Oa)):Object(n["e"])("",!0),Object(n["j"])(ha)])}}var wa={data:function(){return{noDis:!1}},mounted:function(){document.querySelector("[data-theme]").setAttribute("data-theme",this.$store.state.theme)},computed:{selectedTheme:function(){return this.$store.state.theme}},watch:{selectedTheme:function(){document.querySelector("[data-theme]").setAttribute("data-theme",this.$store.state.theme)}},methods:{toggleNoDis:function(){this.noDis=!this.noDis,console.log(this.noDis)}}},_a=Object.assign(wa,{setup:ya});a("6ecd");const ka=_a;var xa=ka,Sa=a("9483");Object(Sa["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Da=a("6c02"),Ma=Object(n["h"])('<div class="webgl" data-webgl=""></div><div class="home_header"><div class="home_header_content"><h1>EBUS Suite</h1><div class="divider"></div><h2>Welcome to the most advanced Automatic Vehicle Management System</h2></div><div class="block_grid"><h2>We provide solutions for</h2><div class="box" data-navto="scene1"><span>On-board Systems</span></div><div class="box" data-navto="scene2"><span>Infomobility</span></div><div class="box" data-navto="scene3"><span>Central Software</span></div><div class="box" data-navto="scene4"><span>Reports / Data Analysis</span></div></div></div>',2);function Pa(e,t,a,n,c,s){return Ma}a("159b");var za=a("5a89"),Aa=a("34ad"),Ya=a("4721"),Ra=a("cffa"),Xa={cameraX:0,cameraY:400,cameraZ:0,cameraRX:Math.PI/2,cameraRY:0,cameraRZ:0,objectX:0,objectY:0,objectZ:0},Za={cameraX:-110,cameraY:40,cameraZ:110,objectX:-60,objectY:0,objectZ:60},Ca={cameraX:-110,cameraY:40,cameraZ:-110,objectX:-60,objectY:0,objectZ:-60},Ta={cameraX:110,cameraY:40,cameraZ:-110,objectX:60,objectY:0,objectZ:-60},Ea={cameraX:110,cameraY:40,cameraZ:110,objectX:60,objectY:0,objectZ:60},Ia={data:function(){return{basecolor:16448250}},mounted:function(){this.init(),this.animate()},methods:{init:function(){var e=this;this.scene=new za["db"],this.scene.background=new za["i"](this.basecolor),this.scene.fog=new za["n"](this.basecolor,.005),this.renderer=new za["sb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);var t=document.querySelector("[data-webgl]"),a=t.offsetWidth,n=t.offsetHeight;this.renderer.setSize(a,n),this.clock=new za["h"],document.querySelector("[data-webgl]").appendChild(this.renderer.domElement),this.camera=new za["U"](35,a/n,1,1e3),this.camera.position.set(Xa.cameraX,Xa.cameraY,Xa.cameraZ),this.camera.rotation.set(Xa.cameraRX,Xa.cameraRY,Xa.cameraRZ),this.initialCamera={x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},this.controls=new Ya["a"](this.camera,this.renderer.domElement),this.controls.autoRotate=!1,this.controls.autoRotateSpeed=.5,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=50,this.controls.maxDistance=500,this.controls.maxPolarAngle=Math.PI/2.5,this.controls.target.set(Xa.objectX,Xa.objectY,Xa.objectZ);var c=new Aa["a"];c.load("/3d/vehicles.glb",(function(t){var a={x:Za.objectX,y:Za.objectY,z:Za.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),c.load("/3d/stop.glb",(function(t){var a={x:Ca.objectX,y:Ca.objectY,z:Ca.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),c.load("/3d/office.glb",(function(t){var a={x:Ta.objectX,y:Ta.objectY,z:Ta.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),c.load("/3d/data.glb",(function(t){var a={x:Ea.objectX,y:Ea.objectY,z:Ea.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),window.addEventListener("resize",(function(){e.onWindowResize()})),this.flyToScene(Za),this.navigation(),this.particles()},wireframize:function(e,t){var a=this,n=e.scene,c=n.children,s=new za["p"];c.forEach((function(e,n){var c=e.clone();c.traverse((function(e){e.material=new za["K"]({color:a.basecolor})})),e.traverse((function(e){e.material=new za["K"]({color:29439,wireframe:!0,transparent:!0,opacity:1})}));var o=new za["S"];o.add(e),o.add(c),o.position.set(t.x,t.y,t.z),s.add(o)})),this.scene.add(s)},animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.render()},render:function(){this.renderer.render(this.scene,this.camera)},onWindowResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},navigation:function(){var e=this;document.querySelectorAll("[data-navto]").forEach((function(t,a){t.addEventListener("click",(function(){e.controls.enabled=!1,e.controls.autoRotate=!0;var a,n=t.getAttribute("data-navto");"scene0"===n&&(a=Xa,e.controls.autoRotate=!1),"scene1"===n&&(a=Za),"scene2"===n&&(a=Ca),"scene3"===n&&(a=Ta),"scene4"===n&&(a=Ea),e.flyToScene(a)}))}))},flyToScene:function(e){var t=this,a=Ra["a"].timeline();a.to(this.camera.position,{duration:5,ease:"expo",x:e.cameraX,y:e.cameraY,z:e.cameraZ,onUpdate:function(){t.controls.update(),t.controls.autoRotate=!0},onComplete:function(){t.controls.enabled=!0}}),a.to(this.controls.target,{duration:5,ease:"expo",x:e.objectX,y:e.objectY,z:e.objectZ,onUpdate:function(){t.controls.update()},onComplete:function(){t.controls.enabled=!0}},"<"),"scene0"===e&&a.to(this.camera.rotation,{duration:2,ease:"expo",x:this.initialCamera.x,y:this.initialCamera.y,z:this.initialCamera.z,onUpdate:function(){t.controls.update()},onComplete:function(){t.controls.enabled=!1}},5)},particles:function(){for(var e=1300,t=0;t<e;t++){var a=500*Math.random()-250,n=500*Math.random()-250,c=500*Math.random()-250,s=5*Math.random(),o=new za["d"](s,s,s),i=new za["K"]({color:29439,opacity:Math.random(),transparent:!0}),r=new za["J"](o,i);r.position.set(a,n,c);var l=Ra["a"].timeline({repeat:-1,repeatDelay:10*Math.random()+3}),d=r.rotation.x,u=r.rotation.y,b=r.rotation.z;l.to(r.rotation,{x:d+Math.PI/2},10*Math.random()),l.to(r.rotation,{y:u+Math.PI/2},10*Math.random()),l.to(r.rotation,{z:b+Math.PI/2},10*Math.random()),this.scene.add(r)}}}};const qa=r()(Ia,[["render",Pa]]);var La=qa,Wa=Object(n["h"])('<div class="webgl" data-webgl=""></div><div class="home_header"><div class="home_header_content"><h1>EBUS Suite</h1><div class="divider"></div><h2>Welcome to the most advanced Automatic Vehicle Management System</h2></div><div class="block_grid"><h2>We provide solutions for</h2><div class="box" data-navto="scene1"><span>On-board Systems</span></div><div class="box" data-navto="scene2"><span>Infomobility</span></div><div class="box" data-navto="scene3"><span>Central Software</span></div><div class="box" data-navto="scene4"><span>Reports / Data Analysis</span></div></div></div>',2);function Na(e,t,a,n,c,s){return Wa}var Ua={cameraX:0,cameraY:400,cameraZ:0,cameraRX:Math.PI/2,cameraRY:0,cameraRZ:0,objectX:0,objectY:0,objectZ:0},Ba={cameraX:-110,cameraY:40,cameraZ:110,objectX:-60,objectY:0,objectZ:60},$a={cameraX:-110,cameraY:40,cameraZ:-110,objectX:-60,objectY:0,objectZ:-60},Fa={cameraX:110,cameraY:40,cameraZ:-110,objectX:60,objectY:0,objectZ:-60},Va={cameraX:110,cameraY:40,cameraZ:110,objectX:60,objectY:0,objectZ:60},Ha={data:function(){return{basecolor:0}},mounted:function(){this.init(),this.animate()},methods:{init:function(){var e=this;this.scene=new za["db"],this.scene.background=new za["i"](this.basecolor),this.scene.fog=new za["n"](this.basecolor,.005),this.renderer=new za["sb"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);var t=document.querySelector("[data-webgl]"),a=t.offsetWidth,n=t.offsetHeight;this.renderer.setSize(a,n),this.clock=new za["h"],document.querySelector("[data-webgl]").appendChild(this.renderer.domElement),this.camera=new za["U"](35,a/n,1,1e3),this.camera.position.set(Ua.cameraX,Ua.cameraY,Ua.cameraZ),this.camera.rotation.set(Ua.cameraRX,Ua.cameraRY,Ua.cameraRZ),this.initialCamera={x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},this.controls=new Ya["a"](this.camera,this.renderer.domElement),this.controls.autoRotate=!1,this.controls.autoRotateSpeed=.5,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=50,this.controls.maxDistance=500,this.controls.maxPolarAngle=Math.PI/2.5,this.controls.target.set(Ua.objectX,Ua.objectY,Ua.objectZ);var c=new Aa["a"];c.load("/3d/vehicles.glb",(function(t){var a={x:Ba.objectX,y:Ba.objectY,z:Ba.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),c.load("/3d/stop.glb",(function(t){var a={x:$a.objectX,y:$a.objectY,z:$a.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),c.load("/3d/office.glb",(function(t){var a={x:Fa.objectX,y:Fa.objectY,z:Fa.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),c.load("/3d/data.glb",(function(t){var a={x:Va.objectX,y:Va.objectY,z:Va.objectZ};e.wireframize(t,a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),window.addEventListener("resize",(function(){e.onWindowResize()})),this.flyToScene(Ba),this.navigation(),this.particles()},wireframize:function(e,t){var a=this,n=e.scene,c=n.children,s=new za["p"];c.forEach((function(e,n){var c=e.clone();c.traverse((function(e){e.material=new za["K"]({color:a.basecolor})})),e.traverse((function(e){e.material=new za["K"]({color:29439,wireframe:!0,transparent:!0,opacity:1})}));var o=new za["S"];o.add(e),o.add(c),o.position.set(t.x,t.y,t.z),s.add(o)})),this.scene.add(s)},animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.render()},render:function(){this.renderer.render(this.scene,this.camera)},onWindowResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},navigation:function(){var e=this;document.querySelectorAll("[data-navto]").forEach((function(t,a){t.addEventListener("click",(function(){e.controls.enabled=!1,e.controls.autoRotate=!0;var a,n=t.getAttribute("data-navto");"scene0"===n&&(a=Ua,e.controls.autoRotate=!1),"scene1"===n&&(a=Ba),"scene2"===n&&(a=$a),"scene3"===n&&(a=Fa),"scene4"===n&&(a=Va),e.flyToScene(a)}))}))},flyToScene:function(e){var t=this,a=Ra["a"].timeline();a.to(this.camera.position,{duration:5,ease:"expo",x:e.cameraX,y:e.cameraY,z:e.cameraZ,onUpdate:function(){t.controls.update(),t.controls.autoRotate=!0},onComplete:function(){t.controls.enabled=!0}}),a.to(this.controls.target,{duration:5,ease:"expo",x:e.objectX,y:e.objectY,z:e.objectZ,onUpdate:function(){t.controls.update()},onComplete:function(){t.controls.enabled=!0}},"<"),"scene0"===e&&a.to(this.camera.rotation,{duration:2,ease:"expo",x:this.initialCamera.x,y:this.initialCamera.y,z:this.initialCamera.z,onUpdate:function(){t.controls.update()},onComplete:function(){t.controls.enabled=!1}},5)},particles:function(){for(var e=1300,t=0;t<e;t++){var a=500*Math.random()-250,n=500*Math.random()-250,c=500*Math.random()-250,s=5*Math.random(),o=new za["d"](s,s,s),i=new za["K"]({color:29439,opacity:Math.random(),transparent:!0}),r=new za["J"](o,i);r.position.set(a,n,c);var l=Ra["a"].timeline({repeat:-1,repeatDelay:10*Math.random()+3}),d=r.rotation.x,u=r.rotation.y,b=r.rotation.z;l.to(r.rotation,{x:d+Math.PI/2},10*Math.random()),l.to(r.rotation,{y:u+Math.PI/2},10*Math.random()),l.to(r.rotation,{z:b+Math.PI/2},10*Math.random()),this.scene.add(r)}}}};const Ka=r()(Ha,[["render",Na]]);var Ja=Ka,Ga={class:"page home"};function Qa(e){return function(e,t){return Object(n["t"])(),Object(n["f"])("div",Ga,[e.isDark?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(La,{key:0})),e.isDark?(Object(n["t"])(),Object(n["d"])(Ja,{key:1})):Object(n["e"])("",!0)])}}var en={data:function(){return{isDark:!1}},mounted:function(){"dark"===this.$store.state.theme?this.isDark=!0:this.isDark=!1},computed:{selectedTheme:function(){return this.$store.state.theme}},watch:{selectedTheme:function(){"dark"===this.$store.state.theme?this.isDark=!0:this.isDark=!1}}},tn=Object.assign(en,{setup:Qa});const an=tn;var nn=an,cn={class:"page"},sn=Object(n["g"])("h1",null,"Login",-1),on=[sn];function rn(e,t){return Object(n["t"])(),Object(n["f"])("div",cn,on)}const ln={},dn=r()(ln,[["render",rn]]);var un=dn,bn={class:"linear component"},mn=Object(n["h"])('<div class="component_head"><div class="horizontal_menu"><div class="menu_item"><i class="icon_message"></i><span>Send Message</span></div><div class="menu_item"><i class="icon_sawtooth"></i><span>Sawtooth Graph</span></div><div class="menu_item"><i class="icon_bus_line_alt"></i><span>Partial Service</span></div></div></div><div class="component_content"></div>',2),pn=[mn];function jn(e,t){return Object(n["t"])(),Object(n["f"])("div",bn,pn)}const gn={},hn=r()(gn,[["render",jn]]);var vn=hn,fn={class:"page linearview"},On={class:"main"},yn={setup:function(e){return function(e,t){return Object(n["t"])(),Object(n["f"])("div",fn,[Object(n["g"])("div",On,[Object(n["j"])(vn)])])}}};const wn=yn;var _n=wn,kn={class:"page"},xn=Object(n["g"])("h1",null,"Deposit",-1),Sn=[xn];function Dn(e,t){return Object(n["t"])(),Object(n["f"])("div",kn,Sn)}const Mn={},Pn=r()(Mn,[["render",Dn]]);var zn=Pn,An={class:""},Yn=Object(n["g"])("h1",null,"PlanTable",-1),Rn=[Yn];function Xn(e,t){return Object(n["t"])(),Object(n["f"])("div",An,Rn)}const Zn={},Cn=r()(Zn,[["render",Xn]]);var Tn=Cn,En={class:"page"},In=Object(n["g"])("h1",null,"Cartographic",-1),qn=[In];function Ln(e,t){return Object(n["t"])(),Object(n["f"])("div",En,qn)}const Wn={},Nn=r()(Wn,[["render",Ln]]);var Un=Nn,Bn={class:""},$n=Object(n["g"])("h1",null,"ServiceList",-1),Fn=[$n];function Vn(e,t){return Object(n["t"])(),Object(n["f"])("div",Bn,Fn)}const Hn={},Kn=r()(Hn,[["render",Vn]]);var Jn=Kn,Gn={class:"page"},Qn=Object(n["g"])("h1",null,"Diagnostic",-1),ec=[Qn];function tc(e,t){return Object(n["t"])(),Object(n["f"])("div",Gn,ec)}const ac={},nc=r()(ac,[["render",tc]]);var cc=nc,sc={class:"page"},oc=Object(n["g"])("h1",null,"Synoptic",-1),ic=[oc];function rc(e,t){return Object(n["t"])(),Object(n["f"])("div",sc,ic)}const lc={},dc=r()(lc,[["render",rc]]);var uc=dc,bc={class:"page"},mc=Object(n["g"])("h1",null,"Anomalies",-1),pc=[mc];function jc(e,t){return Object(n["t"])(),Object(n["f"])("div",bc,pc)}const gc={},hc=r()(gc,[["render",jc]]);var vc=hc,fc={class:""},Oc=Object(n["g"])("h1",null,"Reports",-1),yc=[Oc];function wc(e,t){return Object(n["t"])(),Object(n["f"])("div",fc,yc)}const _c={},kc=r()(_c,[["render",wc]]);var xc=kc,Sc={class:"page"},Dc=Object(n["g"])("h1",null,"Planification",-1),Mc=[Dc];function Pc(e,t){return Object(n["t"])(),Object(n["f"])("div",Sc,Mc)}const zc={},Ac=r()(zc,[["render",Pc]]);var Yc=Ac,Rc={class:"page"},Xc=Object(n["g"])("h1",null,"Departures",-1),Zc=[Xc];function Cc(e,t){return Object(n["t"])(),Object(n["f"])("div",Rc,Zc)}const Tc={},Ec=r()(Tc,[["render",Cc]]);var Ic=Ec,qc=[{path:"/",name:"Home",component:nn},{path:"/login",name:"Login",component:un},{path:"/linear",name:"Linear View",component:_n},{path:"/deposit",name:"Deposit",component:zn},{path:"/plantable",name:"Plan Table",component:Tn},{path:"/cartographic",name:"Cartographic",component:Un},{path:"/servicelist",name:"Service List",component:Jn},{path:"/diagnostic",name:"Diagnostic",component:cc},{path:"/synoptic",name:"Synoptic View",component:uc},{path:"/anomalies",name:"Anomalies",component:vc},{path:"/reports",name:"Reports",component:xc},{path:"/planification",name:"Planification",component:Yc},{path:"/departures",name:"Departures",component:Ic}],Lc=Object(Da["a"])({history:Object(Da["b"])("/"),routes:qc}),Wc=Lc,Nc=a("5502"),Uc=Object(Nc["a"])({state:function(){return{theme:"light"}},mutations:{toggleTheme:function(e,t){e.theme=t}}}),Bc=Object(n["c"])(xa).use(Wc).use(Uc);Bc.mount("#app")},"6ecd":function(e,t,a){"use strict";a("13a7")}});
//# sourceMappingURL=app.464fe0e6.js.map