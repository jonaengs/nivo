(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[3108],{15050:function(e,t,r){"use strict";r.d(t,{Ym:function(){return o},yB:function(){return n},Y2:function(){return a},UD:function(){return l},iM:function(){return i}});var o=1e3,n=6e4,a=36e5,l=864e5,i=6048e5},61904:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=new Date,n=new Date;function a(e,t,r,l){function i(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return i.floor=function(t){return e(t=new Date(+t)),t},i.ceil=function(r){return e(r=new Date(r-1)),t(r,1),e(r),r},i.round=function(e){var t=i(e),r=i.ceil(e);return e-t<r-e?t:r},i.offset=function(e,r){return t(e=new Date(+e),null==r?1:Math.floor(r)),e},i.range=function(r,o,n){var a,l=[];if(r=i.ceil(r),n=null==n?1:Math.floor(n),!(r<o&&n>0))return l;do{l.push(a=new Date(+r)),t(r,n),e(r)}while(a<r&&r<o);return l},i.filter=function(r){return a((function(t){if(t>=t)for(;e(t),!r(t);)t.setTime(t-1)}),(function(e,o){if(e>=e)if(o<0)for(;++o<=0;)for(;t(e,-1),!r(e););else for(;--o>=0;)for(;t(e,1),!r(e););}))},r&&(i.count=function(t,a){return o.setTime(+t),n.setTime(+a),e(o),e(n),Math.floor(r(o,n))},i.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?i.filter(l?function(t){return l(t)%e==0}:function(t){return i.count(0,t)%e==0}):i:null}),i}},91991:function(e,t,r){"use strict";r.d(t,{X:function(){return d}});var o=r(53486),n=r(80169),a=r(18907),l=["svg","html","canvas","api"],i=o.Ko,u=[{key:"data",group:"Base",flavors:l,help:"The hierarchical data object.",type:"object",required:!0},{key:"identity",group:"Base",flavors:l,help:"The key or function to use to retrieve nodes identity.",type:"string | Function",required:!1,defaultValue:i.identity},{key:"value",group:"Base",flavors:l,help:"The key or function to use to retrieve nodes value.",type:"string | Function",required:!1,defaultValue:"value"},{key:"valueFormat",help:"\n            Value format supporting d3-format notation, this formatted value\n            will then be used for labels and tooltips.\n        ",flavors:l,type:"string | Function",required:!1,control:{type:"valueFormat"},group:"Base"},{key:"tile",group:"Base",flavors:l,help:"Strategy used to compute nodes.",description:"\n            Strategy used to compute nodes, see\n            [official d3 documentation](https://github.com/mbostock/d3/wiki/Treemap-Layout#mode).\n        ",type:"string",required:!1,defaultValue:"squarify",control:{type:"choices",choices:[{label:"binary",value:"binary"},{label:"squarify",value:"squarify"},{label:"slice",value:"slice"},{label:"dice",value:"dice"},{label:"sliceDice",value:"sliceDice"},{label:"resquarify",value:"resquarify"}]}},{key:"leavesOnly",help:"Only render leaf nodes (no parent).",flavors:l,type:"boolean",required:!1,defaultValue:i.leavesOnly,control:{type:"switch"},group:"Base"},{key:"innerPadding",help:"Padding between parent and child node.",flavors:l,type:"number",required:!1,defaultValue:i.innerPadding,group:"Base",control:{type:"range",unit:"px",min:0,max:32}},{key:"outerPadding",help:"Padding between parent and child node.",flavors:l,type:"number",required:!1,defaultValue:i.outerPadding,group:"Base",control:{type:"range",unit:"px",min:0,max:32}}].concat((0,a.nk)(l),[(0,n.JR)(l),(0,a.at)({flavors:l,defaultValue:i.colors}),{key:"nodeOpacity",help:"Node opacity (0~1).",flavors:l,required:!1,defaultValue:i.nodeOpacity,type:"number",control:{type:"opacity"},group:"Style"},{key:"borderWidth",help:"Control node border width.",flavors:l,type:"number",required:!1,defaultValue:i.borderWidth,control:{type:"lineWidth"},group:"Style"},{key:"borderColor",help:"Method to compute border color.",flavors:l,type:"string | object | Function",required:!1,defaultValue:i.borderColor,control:{type:"inheritedColor"},group:"Style"}],(0,n.uE)("Style",["svg"]),[{key:"enableLabel",help:"Enable/disable labels.",flavors:l,type:"boolean",required:!1,defaultValue:i.enableLabel,control:{type:"switch"},group:"Labels"},{key:"label",help:"Label accessor.",flavors:l,description:"Defines how to get label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,group:"Labels",control:{type:"choices",choices:["formattedValue","id","node => `${node.id} (${node.formattedValue})`"].map((function(e){return{label:e,value:e}}))}},{key:"labelSkipSize",help:"Skip label rendering if node minimal side length is lower than given value, 0 to disable.",flavors:l,type:"number",required:!1,group:"Labels",control:{type:"range",unit:"px",min:0,max:100}},{key:"orientLabel",help:"Orient labels according to max node width/height.",flavors:l,type:"boolean",required:!1,defaultValue:i.orientLabel,control:{type:"switch"},group:"Labels"},{key:"labelTextColor",help:"Method to compute label text color.",flavors:l,type:"string | object | Function",required:!1,control:{type:"inheritedColor"},group:"Labels"},{key:"enableParentLabel",flavors:["svg","html","api"],help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:i.enableParentLabel,control:{type:"switch"},group:"Labels"},{key:"parentLabel",flavors:["svg","html","api"],help:"Parent label accessor.",description:"Defines how to get parent label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,group:"Labels",control:{type:"choices",choices:["id","formattedValue","node => node.pathComponents.join(' / ')"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelSize",flavors:["svg","html","api"],help:"Parent label size.",required:!1,defaultValue:i.parentLabelSize,type:"number",group:"Labels",control:{type:"range",min:10,max:40}},{key:"parentLabelPosition",flavors:["svg","html","api"],help:"Parent label position.",type:"'top' | 'right' | 'bottom' | 'left'",required:!1,group:"Labels",defaultValue:i.parentLabelPosition,control:{type:"choices",choices:["top","right","bottom","left"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelPadding",flavors:["svg","html","api"],help:"Parent label padding.",required:!1,defaultValue:i.parentLabelPadding,type:"number",group:"Labels",control:{type:"range",min:0,max:20}},{key:"parentLabelTextColor",flavors:["svg","html","api"],help:"Method to compute parent label text color.",type:"string | object | Function",required:!1,control:{type:"inheritedColor"},group:"Labels"},(0,a.y1)({flavors:["svg","html","canvas"],defaultValue:i.isInteractive}),{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseEnter handler.",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onMouseMove handler.",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseLeave handler.",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onClick handler.",required:!1}],(0,n.$j)(["svg","html","canvas"],i,"react-spring")),d=(0,n.R2)(u)},9953:function(e,t,r){"use strict";r.d(t,{i:function(){return u},g:function(){return d}});var o=r(38681),n=r(4215),a=r.n(n),l=r(91311),i=r.n(l),u=function(){return{root:(0,o.UE)()}},d=function(){return{root:{id:"root",children:a()(600).map((function(e){return{id:"node."+e,value:i()(10,1e5)}}))},nodeCount:600}}},53944:function(e,t,r){"use strict";var o=r(62370);t.Z=(0,o.h8)({label:function(e){return"node => `${node.id} (${node.formattedValue})`"===e?function(e){return e.id+" ("+e.formattedValue+")"}:e},parentLabel:function(e){return"node => node.pathComponents.join(' / ')"===e?function(e){return e.pathComponents.join(" / ")}:e},valueFormat:o.Ld})},17641:function(e,t,r){"use strict";r.r(t);r(27378);var o=r(53486),n=r(95546),a=r(73447),l=r(91991),i=r(53944),u=r(9953),d=r(5692),s=r(24246),c=(0,u.i)().root;t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{title:"TreeMap HTTP API",keywords:[].concat(d.SY.tags,["HTTP API"])}),(0,s.jsx)(a.Z,{componentName:"TreeMap",chartClass:"treemap",apiPath:"/charts/treemap",flavors:d.Kk,dataProperty:"data",controlGroups:l.X,propsMapper:i.Z,defaultProps:{data:JSON.stringify(c,null,"  "),identity:"name",value:"loc",valueFormat:{format:".02s",enabled:!0},tile:o.Ko.tile,leavesOnly:o.Ko.leavesOnly,innerPadding:o.Ko.innerPadding,outerPadding:o.Ko.outerPadding,width:800,height:560,margin:{top:10,right:10,bottom:10,left:10},enableLabel:o.Ko.enableLabel,label:o.Ko.label,labelSkipSize:12,labelTextColor:{from:"color",modifiers:[["darker",1.2]]},orientLabel:o.Ko.orientLabel,enableParentLabel:o.Ko.enableParentLabel,parentLabel:o.Ko.parentLabel,parentLabelSize:o.Ko.parentLabelSize,parentLabelPosition:o.Ko.parentLabelPosition,parentLabelPadding:o.Ko.parentLabelPadding,parentLabelTextColor:{from:"color",modifiers:[["darker",2]]},colors:o.Ko.colors,colorBy:o.Ko.colorBy,nodeOpacity:o.Ko.nodeOpacity,borderWidth:o.Ko.borderWidth,borderColor:{from:"color",modifiers:[["darker",.1]]}}})]})}},34981:function(e,t,r){var o=r(68267),n=r(76744),a=o((function(e,t,r){return e+(r?" ":"")+n(t)}));e.exports=a}}]);
//# sourceMappingURL=component---src-pages-treemap-api-js-e3f6b75f379c48084fb3.js.map