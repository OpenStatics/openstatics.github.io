(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],f=0,h=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0a73":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph my-2 text-center",attrs:{id:"box2"}})])}],i={mounted:function(){var t=JXG.JSXGraph.initBoard("box2",{boundingbox:[-15,15,15,-15],axis:!0,keepAspectRatio:!0}),e=t.create("slider",[[1,-6],[6,-6],[0,1,5]]),r=t.create("slider",[[1,-8],[6,-8],[0,0,360]]),n=t.create("checkbox",[1,-10,"Projection of F on x"],{}),a=t.create("checkbox",[1,-12,"Resolution of F into components"],{}),i=t.create("checkbox",[1,-14,"Projection of F on y"],{}),o=t.create("point",[0,0],{fixed:!0},{name:"O"}),s=t.create("point",[function(){return Math.cos(r.Value()/180*Math.PI)*e.Value()},function(){return Math.sin(r.Value()/180*Math.PI)*e.Value()}],{name:"v"});t.create("line",[o,s],{straightFirst:!1,straightLast:!1,lastArrow:!0}),t.create("line",[o,[function(){return Math.cos(r.Value()/180*Math.PI)*e.Value()},0]],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return n.Value()}}),t.create("line",[o,[0,function(){return Math.sin(r.Value()/180*Math.PI)*e.Value()}]],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return i.Value()}}),t.create("line",[[0,function(){return Math.sin(r.Value()/180*Math.PI)*e.Value()}],s],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return a.Value()},dash:2}),t.create("line",[[function(){return Math.cos(r.Value()/180*Math.PI)*e.Value()},0],s],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return a.Value()},dash:2})}},o={title:"Force Vector (2D)",description:"from JSX graph"},s=i,c=(r("b01d"),r("2877"));r.d(e,"meta",(function(){return o}));var l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},"1a17":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph2 my-2",attrs:{id:"box1"}}),r("div",{staticClass:"jsx-graph my-2 text-center",attrs:{id:"box2"}})])}],i={data:function(){return{board:null,lol:10}},mounted:function(){var t=JXG.JSXGraph.initBoard("box1",{boundingbox:[-10,10,10,-10]}),e=JXG.JSXGraph.initBoard("box2",{boundingbox:[-15,15,15,-15],axis:!0,keepAspectRatio:!0});t.addChild(e);var r=t.create("slider",[[1,-2],[6,-2],[0,1,5]],{name:"Force A"}),n=t.create("slider",[[1,-4],[6,-4],[0,0,360]],{name:"Angle A"}),a=t.create("slider",[[1,-6],[6,-6],[0,1,5]],{name:"Force B"}),i=t.create("slider",[[1,-8],[6,-8],[0,0,360]],{name:"Angle B"}),o=e.create("point",[0,0],{fixed:!0},{name:"O"}),s=e.create("point",[function(){return Math.cos(n.Value()/180*Math.PI)*r.Value()},function(){return Math.sin(n.Value()/180*Math.PI)*r.Value()}],{name:"F1"}),c=e.create("point",[function(){return Math.cos(i.Value()/180*Math.PI)*a.Value()},function(){return Math.sin(i.Value()/180*Math.PI)*a.Value()}],{name:"F2"}),l=e.create("point",[function(){var t=Math.cos(n.Value()/180*Math.PI)*r.Value(),e=Math.cos(i.Value()/180*Math.PI)*a.Value();n.Value(),i.Value();return t+e},function(){var t=Math.sin(n.Value()/180*Math.PI)*r.Value(),e=Math.sin(i.Value()/180*Math.PI)*a.Value();n.Value(),i.Value();return t+e}],{name:"FR"}),u=(e.create("line",[o,s],{straightFirst:!1,straightLast:!1,lastArrow:!0}),e.create("line",[o,c],{straightFirst:!1,straightLast:!1,lastArrow:!0}),e.create("line",[o,l],{straightFirst:!1,straightLast:!1,lastArrow:!0}),t.create("checkbox",[8,-2,"Show Parallolegram"],{}));e.create("line",[s,l],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return u.Value()}}),e.create("line",[c,l],{straightFirst:!1,straightLast:!1,lastArrow:!0,visible:function(){return u.Value()}})}},o={title:"Force Vector Addition",description:"from JSX graph"},s=i,c=(r("3529"),r("2877"));r.d(e,"meta",(function(){return o}));var l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},"1d51":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col"},[t._v(" ")]),r("div",{staticClass:"col-sm-auto"},[r("div",{staticStyle:{width:"60vw",height:"60vh"},attrs:{id:"box1"}})]),r("div",{staticClass:"col"},[t._v(" ")])])}],i=r("3db5"),o={data:function(){return{board:null,lol:10}},mounted:function(){var t=JXG.JSXGraph.initBoard("box1",{boundingbox:[-10,10,10,-10],axis:!0,keepAspectRatio:!0}),e=t.create("point",[0,0],{fixed:!0},{name:"O",face:""}),r=t.create("point",[2,4],{name:"B",face:""}),n=t.create("point",[4,2],{name:"C"});t.create("line",[e,r],{straightFirst:!1,straightLast:!1,lastArrow:!0,strokeColor:"green"}),t.create("line",[e,n]);function a(t,e){return i["f"](e.coords.usrCoords,t.coords.usrCoords)}var o=function(){var t=a(e,r),o=a(e,n),s=i["b"](o,i["e"](o)),c=i["c"](t,o)/i["e"](o);return i["a"](e.coords.usrCoords,i["d"](s,c))},s=t.create("point",[function(){return o()[1]},function(){return o()[2]}],{name:"B'",face:"",fillColor:"#000"});t.create("line",[e,s],{straightFirst:!1,straightLast:!1,lastArrow:!0,strokeColor:"red"})}},s={title:"force projection",description:"from JSX graph"},c=o,l=r("2877");r.d(e,"meta",(function(){return s}));var u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},"34f4":function(t,e,r){},3529:function(t,e,r){"use strict";var n=r("5568"),a=r.n(n);a.a},"3dbd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0==t.currentSelection?r("fbd"):t._e(),1==t.currentSelection?r("analysisA"):t._e(),2==t.currentSelection?r("analysisB"):t._e(),3==t.currentSelection?r("analysisC"):t._e(),4==t.currentSelection?r("analysisD"):t._e(),r("button",{on:{click:function(){return t.changeSelection(0)}}},[t._v("Overview: Free Body Diagram")]),r("button",{on:{click:function(){return t.changeSelection(1)}}},[t._v("Analysis on A")]),r("button",{on:{click:function(){return t.changeSelection(2)}}},[t._v("Analysis on B")]),r("button",{on:{click:function(){return t.changeSelection(3)}}},[t._v("Analysis on C")]),r("button",{on:{click:function(){return t.changeSelection(4)}}},[t._v("Analysis on D")]),r("button",{on:{click:function(){return t.changeSelection(5)}}},[t._v("Analysis on E")])],1)},a=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph my-2 text-center",attrs:{id:"box1"}})])}],s={components:{},mounted:function(){var t=4,e=JXG.JSXGraph.initBoard("box1",{boundingbox:[-15,15,15,-15],keepAspectRatio:!0,showCopyright:!1}),r=e.create("slider",[[-3,-10],[3,-10],[1,1,2]],{name:"Load F_C"}),n=e.create("slider",[[-3,-12],[3,-12],[0,90,180]],{name:"Angle(&Phi;)"}),a=function(){var e=Math.cos(n.Value()/180*Math.PI)*r.Value();return Math.abs(e)<Math.pow(10,-7)?0:parseFloat(e.toFixed(t))},i=function(){var e=Math.sin(n.Value()/180*Math.PI),a=2,i=1,o=r.Value()*e*i/a;return Math.abs(o)<Math.pow(10,-7)?0:parseFloat(o.toFixed(t))},o=function(){var e=Math.sin(n.Value()/180*Math.PI),a=r.Value()*e-i();return Math.abs(a)<Math.pow(10,-7)?0:parseFloat(a.toFixed(t))};e.create("text",[-2,-4,function(){return"Sum of the x forces:"+a()}],{fixed:!0}),e.create("text",[-2,-8,function(){return"R_Ay: "+o()}]),e.create("text",[-2,-6,function(){return"R_E: "+i()}]);var s=e.create("point",[-10,0],{name:"a",fixed:!0}),c=e.create("point",[-5,5*Math.sqrt(3)],{name:"b",fixed:!0}),l=e.create("point",[0,0],{name:"c",fixed:!0}),u=e.create("point",[5,5*Math.sqrt(3)],{name:"d",fixed:!0}),f=e.create("point",[10,0],{name:"e",fixed:!0}),h=e.create("point",[function(){var t=Math.cos(n.Value()/180*Math.PI);return Math.abs(t)<Math.pow(10,-7)?0:-3*t},function(){var t=Math.sin(n.Value()/180*Math.PI);return Math.abs(t)<Math.pow(10,-7)?0:-3*r.Value()*t}],{visible:!1}),d=e.create("point",[function(){return-3*Math.abs(a())-10},0],{fixed:!0,visible:!1}),v=e.create("point",[-10,function(){return-3*Math.abs(o())}],{fixed:!0,visible:!1}),p=e.create("point",[10,function(){return-3*Math.abs(i())}],{fixed:!0,visible:!1});e.create("line",[s,c],{straightFirst:!1,straightLast:!1}),e.create("line",[s,l],{straightFirst:!1,straightLast:!1}),e.create("line",[c,l],{straightFirst:!1,straightLast:!1}),e.create("line",[c,u],{straightFirst:!1,straightLast:!1}),e.create("line",[l,u],{straightFirst:!1,straightLast:!1}),e.create("line",[l,f],{straightFirst:!1,straightLast:!1}),e.create("line",[u,f],{straightFirst:!1,straightLast:!1});e.create("line",[l,h],{straightFirst:!1,straightLast:!1,touchFirstPoint:!0,lastArrow:!0}),e.create("line",[s,v],{straightFirst:!1,straightLast:!1,firstArrow:!0,touchFirstPoint:!0}),e.create("line",[s,d],{straightFirst:!1,straightLast:!1,firstArrow:!0,touchFirstPoint:!0}),e.create("line",[f,p],{straightFirst:!1,straightLast:!1,touchFirstPoint:!0,firstArrow:!0});e.create("text",[0,-.5,function(){return"F_C ="+r.Value()+"N"}],{anchor:h}),e.create("text",[-2,1,function(){return"R_{A,x} ="+a()+"N"}],{anchor:d}),e.create("text",[0,-.5,function(){return"R_{A,y} ="+o()+"N"}],{anchor:v}),e.create("text",[0,-.5,function(){return"R_{E} ="+i()+"N"}],{anchor:p})}},c=s,l=r("2877"),u=Object(l["a"])(c,i,o,!1,null,null,null),f=u.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph",attrs:{id:"boxA"}})])}],v={mounted:function(){var t=4,e=JXG.JSXGraph.initBoard("boxA",{boundingbox:[-15,15,15,-15],keepAspectRatio:!0,showCopyright:!1}),r=e.create("slider",[[-3,-10],[3,-10],[1,1,2]],{name:"Load F_C"}),n=e.create("slider",[[-3,-12],[3,-12],[0,90,180]],{name:"Angle(&Phi;)"}),a=function(){var e=Math.cos(n.Value()/180*Math.PI)*r.Value();return Math.abs(e)<Math.pow(10,-7)?0:parseFloat(e.toFixed(t))},i=function(){var e=Math.sin(n.Value()/180*Math.PI),a=2,i=1,o=r.Value()*e*i/a;return Math.abs(o)<Math.pow(10,-7)?0:parseFloat(o.toFixed(t))},o=function(){var e=Math.sin(n.Value()/180*Math.PI),a=r.Value()*e-i();return Math.abs(a)<Math.pow(10,-7)?0:parseFloat(a.toFixed(t))},s=e.create("point",[-10,0],{name:"a",fixed:!0}),c=e.create("point",[function(){return Math.abs(o()/Math.sin(n.Value()/180*Math.PI))*Math.cos(Math.PI/3)*10-10},function(){return Math.abs(o()/Math.sin(n.Value()/180*Math.PI))*Math.sin(Math.PI/3)*10}],{visible:!1}),l=e.create("point",[0,0],{visible:!1}),u=(e.create("line",[s,c],{name:"lala",straightFirst:!1,straightLast:!1,lastArrow:!0}),e.create("line",[s,l],{straightFirst:!1,straightLast:!1,lastArrow:!0}),e.create("point",[function(){return-3*Math.abs(a())-10},0],{fixed:!0,visible:!1})),f=e.create("point",[-10,function(){return-3*Math.abs(o())}],{fixed:!0,visible:!1});e.create("line",[s,f],{straightFirst:!1,straightLast:!1,firstArrow:!0,touchFirstPoint:!0}),e.create("line",[s,u],{straightFirst:!1,straightLast:!1,firstArrow:!0,touchFirstPoint:!0});e.create("text",[-2,1,function(){return"R_{A,x} ="+a()+"N"}],{anchor:u}),e.create("text",[0,-.5,function(){return"R_{A,y} ="+o()+"N"}],{anchor:f})}},p=v,m=Object(l["a"])(p,h,d,!1,null,null,null),g=m.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph",attrs:{id:"box2"}})])}],M={mounted:function(){}},_=M,P=Object(l["a"])(_,b,x,!1,null,null,null),F=(P.exports,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph",attrs:{id:"box2"}})])}],V={mounted:function(){var t=JXG.JSXGraph.initBoard("box2",{boundingbox:[-15,15,15,-15],keepAspectRatio:!0,showCopyright:!1}),e=t.create("slider",[[-3,-10],[3,-10],[1,1,2]],{name:"Load F_C"}),r=t.create("slider",[[-3,-12],[3,-12],[0,90,180]],{name:"Angle(&Phi;)"}),n=t.create("point",[0,0],{name:"a",fixed:!0}),a=t.create("point",[-10,0],{name:"b",fixed:!0,visible:!1}),i=t.create("point",[10,0],{name:"c",fixed:!0,visible:!1}),o=t.create("point",[5,5*Math.sqrt(3)],{name:"d",fixed:!0,visible:!1}),s=t.create("point",[-5,5*Math.sqrt(3)],{name:"e",fixed:!0,visible:!1}),c=(t.create("line",[n,s],{name:"lala",straightFirst:!1,straightLast:!1,lastArrow:!0}),t.create("line",[n,o],{straightFirst:!1,straightLast:!1,lastArrow:!0})),l=(t.create("line",[n,a],{straightFirst:!1,straightLast:!1,lastArrow:!0}),t.create("line",[n,i],{straightFirst:!1,straightLast:!1,lastArrow:!0}),t.create("point",[function(){var t=Math.cos(r.Value()/180*Math.PI);return Math.abs(t)<Math.pow(10,-7)?0:-3*t},function(){var t=Math.sin(r.Value()/180*Math.PI);return Math.abs(t)<Math.pow(10,-7)?0:-3*e.Value()*t}],{visible:!1}));t.create("line",[n,l],{straightFirst:!1,straightLast:!1,touchFirstPoint:!0,lastArrow:!0});t.create("text",[0,-1,"azvdfvgdafgafdg"],{anchor:c}),t.create("text",[0,-.5,function(){return"F_C ="+e.Value()+"N"}],{anchor:l})}},w=V,y=Object(l["a"])(w,F,C,!1,null,null,null),A=y.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"jsx-graph",attrs:{id:"box2"}})])}],j={mounted:function(){}},L=j,E=Object(l["a"])(L,k,S,!1,null,null,null),I=E.exports,O={data:function(){return{currentSelection:0}},components:{fbd:f,analysisA:g,analysisC:A,analysisD:I},methods:{changeSelection:function(t){this.currentSelection=t,console.log(this.currentSelection)}},mounted:function(){}},X={title:"methods of joint demo",description:"joint"},J=O;r.d(e,"meta",(function(){return X}));var $=Object(l["a"])(J,n,a,!1,null,null,null);e["default"]=$.exports},5568:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Open Statics")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"nav-content"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[t._m(1),t._l(t.pages,(function(e,n){return r("li",{key:n,staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{role:"button","data-toggle":"dropdown"}},[t._v(t._s(n))]),r("div",{staticClass:"dropdown-menu"},t._l(e,(function(e){return r("a",{key:e.name,staticClass:"dropdown-item",attrs:{href:"/"+n+"/"+e.name,title:e.description},on:{click:function(r){t.current=e.name}}},[t._v(t._s(e.title))])})),0)])}))],2),t._m(2)])]),r("div",{staticClass:"mx-2 my-2"},[t.current?[r(t.current,{tag:"component"})]:[t._v("\n      Home page\n    ")]],2)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#nav-content"}},[r("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item active"},[r("a",{staticClass:"nav-link"},[t._v("\n            Home\n            "),r("span",{staticClass:"sr-only"},[t._v("(current)")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),r("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])}],o=(r("ac4d"),r("8a81"),r("28a5"),r("ac6a"),{}),s=r("bff3");s.keys().map((function(t){var e=t.split("/"),r=e.pop(),a=e.pop(),i=o,c=!0,l=!1,u=void 0;try{for(var f,h=e[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){var d=f.value;i[d]=i[d]||{}}}catch(p){l=!0,u=p}finally{try{c||null==h.return||h.return()}finally{if(l)throw u}}i[a]=i[a]||[];var v=s(t);return i[a].push(v.meta),n["a"].component(v.meta.name=r.split(".")[0],v.default)}));var c=n["a"].extend({name:"app",data:function(){return{pages:o,current:""}},mounted:function(){this.updateRoute()},methods:{updateRoute:function(){var t=window.location.pathname.split("/");console.log(t)}}}),l=c,u=r("2877"),f=Object(u["a"])(l,a,i,!1,null,null,null),h=f.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},"90c0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%",height:"90vh"},attrs:{id:"jxgbox"}})},a=[],i={mounted:function(){var t,e=JXG.JSXGraph.initBoard("jxgbox",{boundingbox:[-5,5,5,-5]}),r=[],n=[],a=[],i=[],o=[];for(r[0]=e.create("point",[-2.5,-3],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[1]=e.create("point",[-0,4],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[2]=e.create("point",[2.5,-3],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[3]=e.create("point",[-4,0],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),r[4]=e.create("point",[4,0],{name:"",strokeColor:"#7355ff",fillColor:"#7355ff"}),t=0;t<5;t++)n[t]=e.create("segment",[r[t],r[(t+1)%5]],{strokeColor:"black",strokeWidth:1});for(t=0;t<5;t++)a[t]=e.create("intersection",[n[t],n[(t+2)%5],0],{name:"",strokeColor:"#EAEA00",fillColor:"#EAEA00"});for(t=0;t<5;t++)i[t]=e.create("circumcircle",[r[t],a[t],a[(t+2)%5]],{strokeColor:"gray",strokeWidth:1,point:{visible:!1}});for(t=0;t<5;t++)o[t]=e.create("intersection",[i[t],i[(t+2)%5],0],{name:"",strokeColor:"#EA0000",fillColor:"#EA0000"});e.create("circumcircle",[o[0],o[2],o[3]],{strokeColor:"red",strokeWidth:2,point:{strokeColor:"#000000",fillColor:"#000000",size:1}});e.update()}},o={title:"Five Circle Theorem",description:"Example from JSX Graph"},s=i,c=r("2877");r.d(e,"meta",(function(){return o}));var l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},b01d:function(t,e,r){"use strict";var n=r("34f4"),a=r.n(n);a.a},b085:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-3"},[r("button",{staticClass:"btn btn-primary mb-3",on:{click:function(e){return t.rotate()}}},[t._v("Start Animation")]),r("br"),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.resetLine()}}},[t._v("Reset Line")])])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"jxgbox",staticStyle:{width:"700px",height:"500px",margin:"auto auto"},attrs:{id:"box"}})])}],i={data:function(){return{hingePos:void 0,line:void 0,f1:void 0,f2:void 0,angularAcc:void 0,leftPoint:void 0,rightPoint:void 0}},methods:{rotate:function(){for(var t=this,e=0,r=Math.atan(this.leftPoint.Y()/this.leftPoint.X()),n=60,a=function(a){r+=e*(n/1e3),e+=t.angularAcc()*(n/1e3);var i=(5-t.hingePos())*Math.cos(r)+t.hingePos(),o=(5-t.hingePos())*Math.sin(r),s=(5+t.hingePos())*Math.cos(Math.PI+r)+t.hingePos(),c=(5+t.hingePos())*Math.sin(Math.PI+r);console.log(r),setTimeout((function(){t.leftPoint.moveTo([s,c],17),t.rightPoint.moveTo([i,o],17)}),a)},i=0;i<8e3;i+=n)a(i)},resetLine:function(){this.leftPoint.moveTo([-5,0],17),this.rightPoint.moveTo([5,0],17)}},mounted:function(){var t=this,e=JXG.JSXGraph.initBoard("box",{boundingbox:[-10,10,10,-10],axis:!0,keepAspectRatio:!0}),r=e.create("slider",[[6,9],[11,9],[-5,0,5]],{name:"Hinge Position (m)"}),n=function(){return r.Value()};this.hingePos=n;e.create("point",[n,0]);var a=e.create("slider",[[6,7],[11,7],[-3,1,3]],{name:"F1 Magnitude (N)"}),i=function(){return a.Value()},o=e.create("slider",[[6,6],[11,6],[0,90,360]],{name:"F1 Angle (deg)"}),s=function(){return o.Value()},c=e.create("slider",[[6,5],[11,5],[-5,-5,5]],{name:"F1 Position (m)"}),l=function(){return c.Value()},u=function(){return 0},f=function(){return i()*Math.cos(s()/180*Math.PI)+l()},h=function(){return i()*Math.sin(s()/180*Math.PI)+u()},d=(e.create("line",[[l,0],[f,h]],{straightFirst:!1,straightLast:!1,strokeWidth:2,strokeColor:"black",lastArrow:!0,fixed:!0}),e.create("slider",[[6,3],[11,3],[-3,1,3]],{name:"F2 Magnitude (N)"})),v=function(){return d.Value()},p=e.create("slider",[[6,2],[11,2],[0,90,360]],{name:"F2 Angle (deg)"}),m=function(){return p.Value()},g=e.create("slider",[[6,1],[11,1],[-5,5,5]],{name:"F2 Position (m)"}),b=function(){return g.Value()},x=function(){return 0},M=function(){return v()*Math.cos(m()/180*Math.PI)+b()},_=function(){return v()*Math.sin(m()/180*Math.PI)+x()},P=(e.create("line",[[b,0],[M,_]],{straightFirst:!1,straightLast:!1,strokeWidth:2,strokeColor:"black",lastArrow:!0,fixed:!0}),function(){var t=i()*(l()-n())*Math.sin(s()/180*Math.PI)+v()*(b()-n())*Math.sin(m()/180*Math.PI),e=1/12*25+Math.pow(n(),2);return t/e});this.leftPoint=e.create("point",[-5,0]),this.rightPoint=e.create("point",[5,0]);var F=function(){return t.leftPoint.X()},C=function(){return t.leftPoint.Y()},V=function(){return t.rightPoint.X()},w=function(){return t.rightPoint.Y()};this.line=e.create("line",[[F,C],[V,w]],{straightFirst:!1,straightLast:!1,strokeWidth:2}),this.angularAcc=P}},o={title:"Moment of force",description:"moment of force"},s=i,c=r("2877");r.d(e,"meta",(function(){return o}));var l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},bff3:function(t,e,r){var n={"./geometry/FiveCircles.vue":"90c0","./methods_of_joint/methods_of_joints.vue":"3dbd","./other/Riemann.vue":"e548","./particles/ParticleEquilibrium.vue":"fb01","./vectors/ForceProjection.vue":"1d51","./vectors/ForceVector2D.vue":"0a73","./vectors/ForceVectorAddition.vue":"1a17","./vectors/momentOfForce.vue":"b085"};function a(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="bff3"},e548:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jxgbox",staticStyle:{width:"100%",height:"90vh"},attrs:{id:"box1"}})},a=[],i=r("2b0e"),o=i["a"].extend({mounted:function(){var t=JXG.JSXGraph.initBoard("box1",{axis:!0,boundingbox:[-8,4,8,-4]}),e=t.create("slider",[[1,3],[5,3],[1,10,50]],{name:"n",snapWidth:1}),r=t.create("slider",[[1,2],[5,2],[-10,-3,0]],{name:"start"}),n=t.create("slider",[[1,1],[5,1],[0,2*Math.PI,10]],{name:"end"}),a=function(t){return Math.sin(t)};t.create("functiongraph",[a,function(){return r.Value()},function(){return n.Value()}]),t.create("riemannsum",[a,function(){return e.Value()},function(){},function(){return r.Value()},function(){return n.Value()}],{fillColor:"#ffff00",fillOpacity:.3}),t.create("text",[-6,-3,function(){return"Sum="+JXG.Math.Numerics.riemannsum(a,e.Value(),"left".value,r.Value(),n.Value()).toFixed(4)}])}}),s={title:"Riemann Sum",description:"Demo copy and pasted from JSXGraph"},c=o,l=r("2877");r.d(e,"meta",(function(){return s}));var u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},fb01:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("\n  Particle Equilibrium\n")])},a=[],i={},o={title:"Particle Equilibrium",description:"Non sense"},s=i,c=r("2877");r.d(e,"meta",(function(){return o}));var l=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports}});
//# sourceMappingURL=app.6e96d1cd.js.map