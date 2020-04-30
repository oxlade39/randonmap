(this.webpackJsonprandommap=this.webpackJsonprandommap||[]).push([[0],{123:function(e,t,a){e.exports=a(198)},128:function(e,t,a){},149:function(e,t){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(128),a(244)),l=a(243),s=a(105),u=a(36),m=a(32),d=a(28),p=a(73),f=a.n(p),h=a(90),g=a(30),E=a(248),v=a(232),b=a(91),w=a.n(b),j=a(108),y=a(25),O=a(247),S=a(239),x=a(96),C=a.n(x),k=a(95),I=a.n(k),N=a(252),z=Object(N.a)(),B=a(234),D=a(236),W=a(237),R=a(254),F=Object(v.a)((function(e){return{listItemIcon:{minWidth:e.spacing(3)}}}));var U=function(e){var t=e.countries,a=void 0===t?[]:t,n=F();return r.a.createElement(B.a,{component:"nav",className:n.root},a.map((function(e,t){return r.a.createElement(D.a,{button:!0,key:e.properties.name},r.a.createElement(W.a,{className:n.listItemIcon},t+1),r.a.createElement(R.a,{primary:e.properties.name}))})))},V=a(153),q={scale:5,encoderOptions:1,backgroundColor:"white"},A=Object(v.a)((function(e){return{root:{padding:e.spacing(2)},button:{marginTop:e.spacing(1),margin:e.spacing(.5),fontSize:"0.5em"},listItemIcon:{minWidth:e.spacing(3)}}}));var G=function(e){var t=e.onUpdate,a=e.defaultValues,n=e.selected,c=r.a.useState(Object(d.a)({},a)),o=Object(g.a)(c,2),i=o[0],l=o[1],s=function(e){e.preventDefault(),t(i)},u=A();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:s,className:u.root},r.a.createElement("div",null,r.a.createElement(O.a,{id:"countryCount",name:"countryCount",label:"No. Countries",type:"number",size:"small",InputLabelProps:{shrink:!0},value:i.countryCount,onChange:function(e){e.preventDefault(),l(Object(d.a)({},i,Object(y.a)({},e.target.name,e.target.value)))}})),r.a.createElement("div",null,r.a.createElement(S.a,{variant:"contained",color:"primary",size:"small",component:"span",className:u.button,startIcon:r.a.createElement(I.a,null),onClick:s},"Update"),r.a.createElement(S.a,{variant:"contained",color:"secondary",size:"small",component:"span",className:u.button,startIcon:r.a.createElement(C.a,null),onClick:function(e){e.preventDefault(),V.saveSvgAsPng(document.getElementById("map-svg"),"countries.png",q)}},"Export"))),r.a.createElement("div",null,r.a.createElement(U,{countries:n})))},J=a(246),L=a(39),P=a(240),M=a(245),T=a(255);var X=function(e){var t=e.mercator,a=e.selectedSet;return t.features.filter((function(e){var t=e.feature;return a.has(t.properties.name)?1:0})).map((function(e,t){return r.a.createElement(T.a,{key:e.feature.properties.name,verticalAnchor:"start",x:e.centroid[0],y:e.centroid[1]},t+1)}))},$="#006994";function H(e){var t=e.data,a=e.width,n=e.height,c=e.selected,o=a/2,i=n/2,l=a/630*75,s=new Set(c.map((function(e){return e.properties.name})));return r.a.createElement(J.a,{data:t.features,scale:l,translate:[o,i+50]},(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{mercator:e,selectedSet:s}),r.a.createElement(X,{mercator:e,selectedSet:s}))}))}function K(e){var t=e.mercator,a=e.selectedSet,n=Object(M.a)({domain:[0,1],range:["#ffb01d","#f63a48"]});return r.a.createElement("g",null,r.a.createElement(L.a,{graticule:function(e){return t.path(e)},stroke:"rgba(33,33,33,0.05)"}),t.features.map((function(e,c){var o=e.feature,i=a.has(o.properties.name)?1:0;return r.a.createElement("path",{key:"map-feature-".concat(c),d:t.path(o),fill:n(i?1:0),stroke:$,strokeWidth:.5,opacity:i?1:.5,onClick:function(a){console.log({f:o,mercator:t,center:e.centroid})}})})))}var Q=function(e){var t=e.world,a=e.selected;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexGrow:1,height:"100%"}},r.a.createElement(P.a,null,(function(e){return r.a.createElement("svg",{id:"map-svg",width:"100%",height:"100%"},r.a.createElement("rect",{x:0,y:0,fill:$,rx:14,width:"100%",height:"100%"}),t&&r.a.createElement(H,{data:t,selected:a,width:e.width,height:e.height}))})))},Y=a(242),Z=a(251),_=a(100),ee=a.n(_),te=a(102),ae=a.n(te),ne=a(101),re=a.n(ne),ce=a(5);function oe(){var e=Object(m.e)({countryCount:Object(m.f)(m.a,10),mapId:Object(m.f)(m.c,z)}),t=Object(g.a)(e,2),a=t[0],n=t[1];return{query:a,update:function(e){var t=e.countryCount;n({mapId:Object(N.a)(),countryCount:t},"push")},random:function(){n(Object(d.a)({},a,{mapId:Object(N.a)()}))}}}var ie=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(y.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),closedButtons:{minWidth:0}}}));function le(e){var t=e.open,a=e.toggleDraw,n=ie(),c=oe().random;return t?r.a.createElement(Y.a,{onClick:a,size:"small"},r.a.createElement(ee.a,null)):r.a.createElement(B.a,{className:n.closedButtons},r.a.createElement(D.a,{button:!0,onClick:a},r.a.createElement(W.a,null,r.a.createElement(re.a,null))),r.a.createElement(D.a,{button:!0,onClick:c},r.a.createElement(W.a,null,r.a.createElement(ae.a,null))),r.a.createElement(D.a,null))}var se=function(e){var t,a,n=e.children,c=ie(),o=r.a.useState(!1),i=Object(g.a)(o,2),l=i[0],s=i[1];return r.a.createElement(Z.a,{variant:"permanent",className:Object(ce.a)(c.drawer,(t={},Object(y.a)(t,c.drawerOpen,l),Object(y.a)(t,c.drawerClose,!l),t)),classes:{paper:Object(ce.a)((a={},Object(y.a)(a,c.drawerOpen,l),Object(y.a)(a,c.drawerClose,!l),a))}},r.a.createElement("div",{className:c.toolbar},r.a.createElement(le,{toggleDraw:function(){s(!l)},open:l})),l&&n)},ue=Object(v.a)((function(e){return{root:{display:"flex",flexDirection:"row",height:"100%"},content:{flexGrow:1,flexDirection:"row",padding:e.spacing(3)}}}));var me=function(){var e=ue(),t=r.a.useState([]),a=Object(g.a)(t,2),c=a[0],o=a[1],i=r.a.useState(),l=Object(g.a)(i,2),s=l[0],u=l[1],m=oe(),p=m.query,v=m.update;return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(j.a(a,a.objects.countries));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){if(s){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=w()(a),r=e.sort((function(e,t){return e.properties.name>t.properties.name?1:-1})).sort((function(){return.5-n()})),c=r.slice(0,t);return c}(s.features,p.countryCount,p.mapId);o(e)}}),[s,p,o]),r.a.createElement(E.a,{className:e.root},r.a.createElement(se,{countryCount:p.countryCount,selected:c},r.a.createElement(G,{onUpdate:v,defaultValues:Object(d.a)({},p),selected:c})),r.a.createElement(E.a,{className:e.content},r.a.createElement(Q,{selected:c,world:s})))},de=a(250);var pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Word Search"),r.a.createElement(de.a,{xScale:10,yScale:10,width:100,height:100}))},fe=a(107),he=a(104),ge=a.n(he),Ee=a(103),ve=a.n(Ee),be=Object(fe.a)({palette:{primary:ve.a,secondary:ge.a},status:{danger:"orange"},typography:{fontSize:12}}),we={transformSearchString:m.d};var je=function(){return r.a.createElement(l.a,{theme:be},r.a.createElement(i.a,null),r.a.createElement(s.a,null,r.a.createElement(m.b,{ReactRouterRoute:u.a,stringifyOptions:we},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/map"},r.a.createElement(me,null)),r.a.createElement(u.a,{path:"/wordsearch"},r.a.createElement(pe,null)),r.a.createElement(u.a,null,r.a.createElement(me,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.33be1886.chunk.js.map