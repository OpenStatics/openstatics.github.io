(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1d51":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col"},[t._v(" ")]),r("div",{staticClass:"col-sm-auto"},[r("div",{staticStyle:{width:"60vw",height:"60vh"},attrs:{id:"box1"}})]),r("div",{staticClass:"col"},[t._v(" ")])])}],i=r("3db5"),o={data:function(){return{board:null,lol:10}},mounted:function(){var t=JXG.JSXGraph.initBoard("box1",{boundingbox:[-10,10,10,-10],axis:!0,keepAspectRatio:!0}),e=t.create("point",[0,0],{fixed:!0},{name:"O",face:""}),r=t.create("point",[2,4],{name:"B",face:""}),n=t.create("point",[4,2],{name:"C"});t.create("line",[e,r],{straightFirst:!1,straightLast:!1,lastArrow:!0,strokeColor:"green"}),t.create("line",[e,n]);function a(t,e){return i["f"](e.coords.usrCoords,t.coords.usrCoords)}var o=function(){var t=a(e,r),o=a(e,n),s=i["b"](o,i["e"](o)),l=i["c"](t,o)/i["e"](o);return i["a"](e.coords.usrCoords,i["d"](s,l))},s=t.create("point",[function(){return o()[1]},function(){return o()[2]}],{name:"B'",face:"",fillColor:"#000"});t.create("line",[e,s],{straightFirst:!1,straightLast:!1,lastArrow:!0,strokeColor:"red"})}},s={title:"force projection",description:"from JSX graph"},l=o,c=r("2877");r.d(e,"meta",(function(){return s}));var u=Object(c["a"])(l,n,a,!1,null,null,null);e["default"]=u.exports},"255d":function(t,e,r){},"4bd9":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph2 my-2",attrs:{id:"box1"}}),r("div",{staticClass:"jsx-graph my-2 text-center",attrs:{id:"box2"}})])}],i={data:function(){return{board:null,lol:10}},mounted:function(){var t=JXG.JSXGraph.initBoard("box1",{boundingbox:[-10,10,10,-10]}),e=JXG.JSXGraph.initBoard("box2",{boundingbox:[-15,15,15,-15],axis:!0,keepAspectRatio:!0});t.addChild(e);var r=t.create("slider",[[1,-2],[6,-2],[0,1,5]]),n=t.create("slider",[[1,-4],[6,-4],[0,0,360]]),a=e.create("point",[0,0],{fixed:!0},{name:"O"}),i=e.create("point",[function(){return Math.cos(n.Value()/180*Math.PI)*r.Value()},function(){return Math.sin(n.Value()/180*Math.PI)*r.Value()}],{name:"v"}),o=(e.create("line",[a,i],{straightFirst:!1,straightLast:!1,lastArrow:!0}),t.create("checkbox",[1,-6,"Projection of F on x"],{})),s=(e.create("line",[a,[function(){return Math.cos(n.Value()/180*Math.PI)*r.Value()},0]],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return o.Value()}}),t.create("checkbox",[1,-8,"Projection of F on y"],{})),l=(e.create("line",[a,[0,function(){return Math.sin(n.Value()/180*Math.PI)*r.Value()}]],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return s.Value()}}),t.create("checkbox",[1,-10,"Resolution of F into components"],{}));e.create("line",[[0,function(){return Math.sin(n.Value()/180*Math.PI)*r.Value()}],i],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return l.Value()},dash:2}),e.create("line",[[function(){return Math.cos(n.Value()/180*Math.PI)*r.Value()},0],i],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return l.Value()},dash:2})}},o={title:"vector demo",description:"from JSX graph"},s=i,l=(r("70e5"),r("2877"));r.d(e,"meta",(function(){return o}));var c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Open Statics")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[t._m(1),t._l(t.pages,(function(e,n){return r("li",{key:n,staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(n))]),r("div",{staticClass:"dropdown-menu"},t._l(e,(function(e){return r("a",{key:e.name,staticClass:"dropdown-item",attrs:{title:e.description},on:{click:function(r){t.current=e.name}}},[t._v(t._s(e.title))])})),0)])}))],2),t._m(2)])]),r("div",{staticClass:"mx-2 my-2"},[t.current?[r(t.current,{tag:"component"})]:[t._v("Home page")]],2)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item active"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n            Home\n            "),r("span",{staticClass:"sr-only"},[t._v("(current)")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),r("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])}],o=(r("ac4d"),r("8a81"),r("28a5"),r("ac6a"),{}),s=r("bff3");s.keys().map((function(t){var e=t.split("/"),r=e.pop(),a=e.pop(),i=o,l=!0,c=!1,u=void 0;try{for(var f,d=e[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var p=f.value;i[p]=i[p]||{}}}catch(h){c=!0,u=h}finally{try{l||null==d.return||d.return()}finally{if(c)throw u}}i[a]=i[a]||[];var v=s(t);return i[a].push(v.meta),n["a"].component(v.meta.name=r.split(".")[0],v.default)}));var l=n["a"].extend({name:"app",data:function(){return{pages:o,current:""}}}),c=l,u=r("2877"),f=Object(u["a"])(c,a,i,!1,null,null,null),d=f.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(d)}}).$mount("#app")},"70e5":function(t,e,r){"use strict";var n=r("255d"),a=r.n(n);a.a},"90c0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%",height:"90vh"},attrs:{id:"jxgbox"}})},a=[],i={mounted:function(){var t,e=JXG.JSXGraph.initBoard("jxgbox",{boundingbox:[-5,5,5,-5]}),r=[],n=[],a=[],i=[],o=[];for(r[0]=e.create("point",[-2.5,-3],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[1]=e.create("point",[-0,4],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[2]=e.create("point",[2.5,-3],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[3]=e.create("point",[-4,0],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[4]=e.create("point",[4,0],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),t=0;t<5;t++)n[t]=e.create("segment",[r[t],r[(t+1)%5]],{strokeColor:"black",strokeWidth:1});for(t=0;t<5;t++)a[t]=e.create("intersection",[n[t],n[(t+2)%5],0],{name:"",strokeColor:"#EAEA00",fillColor:"#EAEA00"});for(t=0;t<5;t++)i[t]=e.create("circumcircle",[r[t],a[t],a[(t+2)%5]],{strokeColor:"gray",strokeWidth:1,point:{visible:!1}});for(t=0;t<5;t++)o[t]=e.create("intersection",[i[t],i[(t+2)%5],0],{name:"",strokeColor:"#EA0000",fillColor:"#EA0000"});e.create("circumcircle",[o[0],o[2],o[3]],{strokeColor:"red",strokeWidth:2,point:{strokeColor:"#000000",fillColor:"#000000",size:1}});e.update()}},o={title:"Five Circle Theorem",description:"Example from JSX Graph"},s=i,l=r("2877");r.d(e,"meta",(function(){return o}));var c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},b085:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"jxgbox",staticStyle:{width:"700px",height:"500px",margin:"auto auto"},attrs:{id:"box"}})]),r("div",{staticClass:"col-3"},[r("button",{staticClass:"btn btn-primary"},[t._v("Start Animation")])])])])])}],i={mounted:function(){var t=JXG.JSXGraph.initBoard("box",{boundingbox:[-10,10,10,-10],axis:!0,keepAspectRatio:!0}),e=t.create("slider",[[6,9],[11,9],[-5,0,5]],{name:"Hinge Position (m)"}),r=function(){return e.Value()},n=(t.create("point",[r,0]),t.create("line",[[-5,0],[5,0]],{straightFirst:!1,straightLast:!1,strokeWidth:2,fixed:!0}),t.create("slider",[[6,7],[11,7],[-3,1,3]],{name:"F1 Magnitude (N)"})),a=function(){return n.Value()},i=t.create("slider",[[6,6],[11,6],[0,90,360]],{name:"F1 Angle (deg)"}),o=function(){return i.Value()},s=t.create("slider",[[6,5],[11,5],[-5,-5,5]],{name:"F1 Position (m)"}),l=function(){return s.Value()},c=function(){return 0},u=function(){return a()*Math.cos(o()/180*Math.PI)+l()},f=function(){return a()*Math.sin(o()/180*Math.PI)+c()},d=(t.create("line",[[l,0],[u,f]],{straightFirst:!1,straightLast:!1,strokeWidth:2,strokeColor:"black",lastArrow:!0,fixed:!0}),t.create("slider",[[6,3],[11,3],[-3,1,3]],{name:"F2 Magnitude (N)"})),p=function(){return d.Value()},v=t.create("slider",[[6,2],[11,2],[0,90,360]],{name:"F2 Angle (deg)"}),h=function(){return v.Value()},m=t.create("slider",[[6,1],[11,1],[-5,5,5]],{name:"F2 Position (m)"}),b=function(){return m.Value()},g=function(){return 0},x=function(){return p()*Math.cos(h()/180*Math.PI)+b()},C=function(){return p()*Math.sin(h()/180*Math.PI)+g()};t.create("line",[[b,0],[x,C]],{straightFirst:!1,straightLast:!1,strokeWidth:2,strokeColor:"black",lastArrow:!0,fixed:!0})}},o={title:"Moment of force",description:"moment of force"},s=i,l=r("2877");r.d(e,"meta",(function(){return o}));var c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},bff3:function(t,e,r){var n={"./geometry/FiveCircles.vue":"90c0","./other/Riemann.vue":"e548","./particles/ParticleEquilibrium.vue":"fb01","./vectors/ForceProjection.vue":"1d51","./vectors/momentOfForce.vue":"b085","./vectors/vector.vue":"4bd9"};function a(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="bff3"},e548:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jxgbox",staticStyle:{width:"100%",height:"90vh"},attrs:{id:"box1"}})},a=[],i=r("2b0e"),o=i["a"].extend({mounted:function(){var t=JXG.JSXGraph.initBoard("box1",{axis:!0,boundingbox:[-8,4,8,-4]}),e=t.create("slider",[[1,3],[5,3],[1,10,50]],{name:"n",snapWidth:1}),r=t.create("slider",[[1,2],[5,2],[-10,-3,0]],{name:"start"}),n=t.create("slider",[[1,1],[5,1],[0,2*Math.PI,10]],{name:"end"}),a=function(t){return Math.sin(t)};t.create("functiongraph",[a,function(){return r.Value()},function(){return n.Value()}]),t.create("riemannsum",[a,function(){return e.Value()},function(){},function(){return r.Value()},function(){return n.Value()}],{fillColor:"#ffff00",fillOpacity:.3}),t.create("text",[-6,-3,function(){return"Sum="+JXG.Math.Numerics.riemannsum(a,e.Value(),"left".value,r.Value(),n.Value()).toFixed(4)}])}}),s={title:"Riemann Sum",description:"Demo copy and pasted from JSXGraph"},l=o,c=r("2877");r.d(e,"meta",(function(){return s}));var u=Object(c["a"])(l,n,a,!1,null,null,null);e["default"]=u.exports},fb01:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("\n  Particle Equilibrium\n")])},a=[],i={},o={title:"Particle Equilibrium",description:"Non sense"},s=i,l=r("2877");r.d(e,"meta",(function(){return o}));var c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports}});
//# sourceMappingURL=app.dbd3f360.js.map