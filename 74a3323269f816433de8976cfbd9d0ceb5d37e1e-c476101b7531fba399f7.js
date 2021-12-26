"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8606],{32204:function(e,t,i){i.d(t,{X:function(){return s}});var r=i(64548),n=i(80169),o=i(18907),l=["svg","canvas","api"],a=[{key:"data",group:"Base",flavors:l,help:"Chart data.",type:"object[]",required:!0},{key:"indexBy",group:"Base",flavors:l,help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n            You can also provide a function which will\n            receive the data item and must return\n            the desired index\n        ",type:"string | Function",required:!1,defaultValue:r.JD.indexBy},{key:"keys",group:"Base",flavors:l,help:"Keys to use to determine each serie.",type:"string[]",required:!1,defaultValue:r.JD.keys},{key:"minValue",help:"Minimum value.",flavors:l,description:"\n            Minimum value.\n            If 'auto', will pick the lowest value\n            in the provided data set. Should be overriden\n            if your data set does not contain desired\n            lower bound value.\n        ",required:!1,defaultValue:r.JD.minValue,type:"number | 'auto'",group:"Base",control:{type:"switchableRange",disabledValue:"auto",defaultValue:0,min:-100,max:100}},{key:"maxValue",help:"Maximum value.",flavors:l,description:"\n            Maximum value. If 'auto', will pick the highest value\n            in the provided data set. Should be overriden\n            if your data set does not contain desired\n            higher bound value.\n        ",required:!1,defaultValue:r.JD.maxValue,type:"number | 'auto'",group:"Base",control:{type:"switchableRange",disabledValue:"auto",defaultValue:100,min:-100,max:100}},{key:"forceSquare",help:"Force square cells (width = height).",flavors:l,required:!1,defaultValue:r.JD.forceSquare,type:"boolean",control:{type:"switch"},group:"Base"},{key:"sizeVariation",help:"Cell size variation.",flavors:l,description:"Size variation (0~1), if value is 0 size won't be affected. If you use for example the value 0.3, cell width/height will vary between 0.7~1 according to its corresponding value.",required:!1,defaultValue:r.JD.sizeVariation,type:"number",group:"Base",control:{type:"range",min:0,max:1,step:.02}},{key:"padding",help:"Padding.",flavors:l,required:!1,defaultValue:r.JD.padding,type:"number",group:"Base",control:{type:"range",min:0,max:36,unit:"px"}}].concat((0,o.nk)(l),[(0,n.JR)(["svg","canvas","api"]),{key:"cellShape",help:"Cell shape/component.",flavors:l,description:"\n            Cell shape, can be one of: `'rect'`, `'circle'`,\n            if a function is provided, it must return\n            a valid SVG element and will receive\n            the following props:\n            ```\n            {\n                value:       number,\n                x:           number,\n                y:           number,\n                width:       number,\n                height:      number,\n                color:       string,\n                opacity:     number,\n                borderWidth: number,\n                borderColor: string,\n                textColor:   string,\n            }\n            ```\n        ",type:"string | Function",required:!1,defaultValue:r.JD.cellShape,group:"Style",control:{type:"choices",choices:["rect","circle","Custom(props) => (…)"].map((function(e){return{label:e,value:e}}))}},{key:"colors",help:"Defines color range.",flavors:l,type:"string | Function | string[]",required:!1,defaultValue:"nivo",control:{type:"quantizeColors"},group:"Style"},{key:"cellOpacity",help:"Cell opacity (0~1).",flavors:l,required:!1,defaultValue:r.JD.cellOpacity,type:"number",control:{type:"opacity"},group:"Style"},{key:"cellBorderWidth",help:"Cell border width.",flavors:l,required:!1,defaultValue:r.JD.cellBorderWidth,type:"number",control:{type:"lineWidth"},group:"Style"},{key:"cellBorderColor",help:"Method to compute cell border color.",flavors:l,description:"\n            how to compute cell border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.JD.cellBorderColor,control:{type:"inheritedColor"},group:"Style"},{key:"enableLabels",help:"Enable/disable labels.",flavors:l,type:"boolean",required:!1,defaultValue:r.JD.enableLabels,control:{type:"switch"},group:"Labels"},{key:"labelTextColor",help:"Method to compute label text color.",flavors:l,description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.JD.labelTextColor,control:{type:"inheritedColor"},group:"Labels"}],(0,o.yW)({flavors:l,xDefault:r.JD.enableGridX,yDefault:r.JD.enableGridY}),(0,o.Do)({flavors:l}),[(0,o.y1)({flavors:["svg","canvas"],defaultValue:r.JD.isInteractive}),{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"(cell, event) => void",required:!1,help:"onClick handler.",description:"\n            onClick handler, will receive node data\n            as first argument & event as second one.\n            The node data has the following shape:\n            ```\n            {\n                key:        string,\n                value:      number,\n                x:          number,\n                xKey:       {string|number},\n                y:          number,\n                yKey:       {string|number},\n                width:      number,\n                height:     number,\n                opacity:    number\n            }\n            ```\n        "},{key:"hoverTarget",flavors:["svg","canvas"],help:"Defines hover behavior.",description:"\n            Defines hover behavior:\n\n            - **cell**: highlight the current cell\n            - **row**: highlight the current cell's row\n            - **column**: highlight the current cell's column\n            - **rowColumn**: highlight the current cell's row & column\n        ",required:!1,defaultValue:r.JD.hoverTarget,type:"string",group:"Interactivity",control:{type:"choices",choices:["cell","row","column","rowColumn"].map((function(e){return{label:e,value:e}}))}},{key:"cellHoverOpacity",flavors:["svg","canvas"],help:"Cell opacity on hover.",required:!1,defaultValue:r.JD.cellHoverOpacity,type:"number",control:{type:"opacity"},group:"Interactivity"},{key:"cellHoverOthersOpacity",flavors:["svg","canvas"],help:"Cell opacity when not hovered.",required:!1,defaultValue:r.JD.cellHoverOthersOpacity,type:"number",control:{type:"opacity"},group:"Interactivity"}],(0,n.$j)(["svg"],r.JD,"react-spring")),s=(0,n.R2)(a)},44365:function(e,t,i){i.d(t,{dk:function(){return k},RD:function(){return m},rj:function(){return w},VT:function(){return v},DZ:function(){return T},RN:function(){return O},FA:function(){return R}});var r=i(27378),n=i(58493),o=i(45434),l=i(6164),a=i(16935),s=i(770),c=i(24246),u=i(23615),d=i.n(u);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},f.apply(this,arguments)}var h=function(e){var t,i=e.axis,r=e.scale,n=e.ticksPosition,l=e.tickValues,a=e.tickSize,c=e.tickPadding,u=e.tickRotation,d=e.engine,h=void 0===d?"svg":d,y=(0,s.xX)(r,l),p=o.a6[h],x="bandwidth"in r?(0,s.Gv)(r):r,m={lineX:0,lineY:0},g={textX:0,textY:0},v="object"==typeof document&&"rtl"===document.dir,b=p.align.center,k=p.baseline.center;return"x"===i?(t=function(e){var t;return{x:null!=(t=x(e))?t:0,y:0}},m.lineY=a*("after"===n?1:-1),g.textY=(a+c)*("after"===n?1:-1),k="after"===n?p.baseline.top:p.baseline.bottom,0===u?b=p.align.center:"after"===n&&u<0||"before"===n&&u>0?(b=p.align[v?"left":"right"],k=p.baseline.center):("after"===n&&u>0||"before"===n&&u<0)&&(b=p.align[v?"right":"left"],k=p.baseline.center)):(t=function(e){var t;return{x:0,y:null!=(t=x(e))?t:0}},m.lineX=a*("after"===n?1:-1),g.textX=(a+c)*("after"===n?1:-1),b="after"===n?p.align.left:p.align.right),{ticks:y.map((function(e){return f({key:"number"==typeof e||"string"==typeof e?e:""+e,value:e},t(e),m,g)})),textAlign:b,textBaseline:k}},y=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var i=(0,l.i$)(e);return function(e){return i(e instanceof Date?e:new Date(e))}}return(0,a.WU)(e)},p=function(e){var t,i=e.width,r=e.height,n=e.scale,o=e.axis,l=e.values,a=(t=l,(Array.isArray(t)?l:void 0)||(0,s.xX)(n,l)),c="bandwidth"in n?(0,s.Gv)(n):n,u="x"===o?a.map((function(e){var t,i;return{key:""+e,x1:null!=(t=c(e))?t:0,x2:null!=(i=c(e))?i:0,y1:0,y2:r}})):a.map((function(e){var t,r;return{key:""+e,x1:0,x2:i,y1:null!=(t=c(e))?t:0,y2:null!=(r=c(e))?r:0}}));return u},x=(0,r.memo)((function(e){var t,i=e.value,l=e.format,a=e.lineX,s=e.lineY,u=e.onClick,d=e.textBaseline,h=e.textAnchor,y=e.animatedProps,p=(0,o.Fg)(),x=null!=(t=null==l?void 0:l(i))?t:i,m=(0,r.useMemo)((function(){var e={opacity:y.opacity};return u?{style:f({},e,{cursor:"pointer"}),onClick:function(e){return u(e,x)}}:{style:e}}),[y.opacity,u,x]);return(0,c.jsxs)(n.q.g,f({transform:y.transform},m,{children:[(0,c.jsx)("line",{x1:0,x2:a,y1:0,y2:s,style:p.axis.ticks.line}),(0,c.jsx)(n.q.text,{dominantBaseline:d,textAnchor:h,transform:y.textTransform,style:p.axis.ticks.text,children:x})]}))})),m=(0,r.memo)((function(e){var t=e.axis,i=e.scale,l=e.x,a=void 0===l?0:l,s=e.y,u=void 0===s?0:s,d=e.length,p=e.ticksPosition,m=e.tickValues,g=e.tickSize,v=void 0===g?5:g,b=e.tickPadding,k=void 0===b?5:b,C=e.tickRotation,q=void 0===C?0:C,w=e.format,O=e.renderTick,T=void 0===O?x:O,R=e.legend,S=e.legendPosition,V=void 0===S?"end":S,B=e.legendOffset,j=void 0===B?0:B,M=e.onClick,L=e.ariaHidden,W=(0,o.Fg)(),H=(0,r.useMemo)((function(){return y(w,i)}),[w,i]),D=h({axis:t,scale:i,ticksPosition:p,tickValues:m,tickSize:v,tickPadding:k,tickRotation:q}),P=D.ticks,z=D.textAlign,F=D.textBaseline,K=null;if(void 0!==R){var X,I=0,J=0,Y=0;"y"===t?(Y=-90,I=j,"start"===V?(X="start",J=d):"middle"===V?(X="middle",J=d/2):"end"===V&&(X="end")):(J=j,"start"===V?X="start":"middle"===V?(X="middle",I=d/2):"end"===V&&(X="end",I=d)),K=(0,c.jsx)("text",{transform:"translate("+I+", "+J+") rotate("+Y+")",textAnchor:X,style:f({dominantBaseline:"central"},W.axis.legend.text),children:R})}var A=(0,o.tf)(),E=A.animate,G=A.config,Z=(0,n.useSpring)({transform:"translate("+a+","+u+")",lineX2:"x"===t?d:0,lineY2:"x"===t?0:d,config:G,immediate:!E}),N=(0,n.useTransition)(P,{keys:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+q+")"}},from:function(e){return{opacity:0,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+q+")"}},enter:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+q+")"}},update:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+q+")"}},leave:{opacity:0},config:G,immediate:!E});return(0,c.jsxs)(n.q.g,{transform:Z.transform,"aria-hidden":L,children:[N((function(e,t,i,n){return r.createElement(T,f({tickIndex:n,format:H,rotate:q,textBaseline:F,textAnchor:z,animatedProps:e},t,M?{onClick:M}:{}))})),(0,c.jsx)(n.q.line,{style:W.axis.domain.line,x1:0,x2:Z.lineX2,y1:0,y2:Z.lineY2}),K]})})),g={ticksPosition:d().oneOf(["before","after"]),tickValues:d().oneOfType([d().number,d().arrayOf(d().oneOfType([d().number,d().string,d().instanceOf(Date)])),d().string]),tickSize:d().number,tickPadding:d().number,tickRotation:d().number,format:d().oneOfType([d().func,d().string]),renderTick:d().func,legend:d().node,legendPosition:d().oneOf(["start","middle","end"]),legendOffset:d().number,ariaHidden:d().bool},v=d().shape(g),b=["top","right","bottom","left"],k=(0,r.memo)((function(e){var t=e.xScale,i=e.yScale,r=e.width,n=e.height,o={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return(0,c.jsx)(c.Fragment,{children:b.map((function(e){var l=o[e];if(!l)return null;var a="top"===e||"bottom"===e;return(0,c.jsx)(m,f({},l,{axis:a?"x":"y",x:"right"===e?r:0,y:"bottom"===e?n:0,scale:a?t:i,length:a?r:n,ticksPosition:"top"===e||"left"===e?"before":"after"}),e)}))})})),C=(0,r.memo)((function(e){var t=e.animatedProps,i=(0,o.Fg)();return(0,c.jsx)(n.q.line,f({},t,i.grid.line))})),q=(0,r.memo)((function(e){var t=e.lines,i=(0,o.tf)(),l=i.animate,a=i.config,s=(0,n.useTransition)(t,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:a,immediate:!l});return(0,c.jsx)("g",{children:s((function(e,t){return(0,r.createElement)(C,f({},t,{key:t.key,animatedProps:e}))}))})})),w=(0,r.memo)((function(e){var t=e.width,i=e.height,n=e.xScale,o=e.yScale,l=e.xValues,a=e.yValues,s=(0,r.useMemo)((function(){return!!n&&p({width:t,height:i,scale:n,axis:"x",values:l})}),[n,l,t,i]),u=(0,r.useMemo)((function(){return!!o&&p({width:t,height:i,scale:o,axis:"y",values:a})}),[i,t,o,a]);return(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(q,{lines:s}),u&&(0,c.jsx)(q,{lines:u})]})})),O=function(e,t){var i,r=t.axis,n=t.scale,l=t.x,a=void 0===l?0:l,s=t.y,c=void 0===s?0:s,u=t.length,d=t.ticksPosition,f=t.tickValues,y=t.tickSize,p=void 0===y?5:y,x=t.tickPadding,m=void 0===x?5:x,g=t.tickRotation,v=void 0===g?0:g,b=t.format,k=t.legend,C=t.legendPosition,q=void 0===C?"end":C,w=t.legendOffset,O=void 0===w?0:w,T=t.theme,R=h({axis:r,scale:n,ticksPosition:d,tickValues:f,tickSize:p,tickPadding:m,tickRotation:v,engine:"canvas"}),S=R.ticks,V=R.textAlign,B=R.textBaseline;e.save(),e.translate(a,c),e.textAlign=V,e.textBaseline=B,e.font=(T.axis.ticks.text.fontWeight?T.axis.ticks.text.fontWeight+" ":"")+T.axis.ticks.text.fontSize+"px "+T.axis.ticks.text.fontFamily,(null!=(i=T.axis.domain.line.strokeWidth)?i:0)>0&&(e.lineWidth=Number(T.axis.domain.line.strokeWidth),e.lineCap="square",T.axis.domain.line.stroke&&(e.strokeStyle=T.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===r?u:0,"x"===r?0:u),e.stroke());var j="function"==typeof b?b:function(e){return""+e};if(S.forEach((function(t){var i;(null!=(i=T.axis.ticks.line.strokeWidth)?i:0)>0&&(e.lineWidth=Number(T.axis.ticks.line.strokeWidth),e.lineCap="square",T.axis.ticks.line.stroke&&(e.strokeStyle=T.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var r=j(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate((0,o.Ht)(v)),T.axis.ticks.text.fill&&(e.fillStyle=T.axis.ticks.text.fill),e.fillText(String(r),0,0),e.restore()})),void 0!==k){var M=0,L=0,W=0,H="center";"y"===r?(W=-90,M=O,"start"===q?(H="start",L=u):"middle"===q?(H="center",L=u/2):"end"===q&&(H="end")):(L=O,"start"===q?H="start":"middle"===q?(H="center",M=u/2):"end"===q&&(H="end",M=u)),e.translate(M,L),e.rotate((0,o.Ht)(W)),e.font=(T.axis.legend.text.fontWeight?T.axis.legend.text.fontWeight+" ":"")+T.axis.legend.text.fontSize+"px "+T.axis.legend.text.fontFamily,T.axis.legend.text.fill&&(e.fillStyle=T.axis.legend.text.fill),e.textAlign=H,e.textBaseline="middle",e.fillText(k,0,0)}e.restore()},T=function(e,t){var i=t.xScale,r=t.yScale,n=t.width,o=t.height,l=t.top,a=t.right,s=t.bottom,c=t.left,u=t.theme,d={top:l,right:a,bottom:s,left:c};b.forEach((function(t){var l=d[t];if(!l)return null;var a="top"===t||"bottom"===t,s="top"===t||"left"===t?"before":"after",c=a?i:r,h=y(l.format,c);O(e,f({},l,{axis:a?"x":"y",x:"right"===t?n:0,y:"bottom"===t?o:0,scale:c,format:h,length:a?n:o,ticksPosition:s,theme:u}))}))},R=function(e,t){var i=t.width,r=t.height,n=t.scale,o=t.axis,l=t.values;p({width:i,height:r,scale:n,axis:o,values:l}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}},64548:function(e,t,i){i.d(t,{Br:function(){return V},JD:function(){return m},Pm:function(){return W},Tu:function(){return H}});var r=i(27378),n=i(45434),o=i(44365),l=i(89193),a=i(23615),s=i.n(a),c=i(79234),u=i(19183),d=i(9841),f=i(58493),h=i(24246);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},y.apply(this,arguments)}var p={data:s().arrayOf(s().object).isRequired,indexBy:s().oneOfType([s().string,s().func]).isRequired,keys:s().arrayOf(s().string).isRequired,minValue:s().oneOfType([s().oneOf(["auto"]),s().number]).isRequired,maxValue:s().oneOfType([s().oneOf(["auto"]),s().number]).isRequired,forceSquare:s().bool.isRequired,sizeVariation:s().number.isRequired,padding:s().number.isRequired,cellShape:s().oneOfType([s().oneOf(["rect","circle"]),s().func]).isRequired,cellOpacity:s().number.isRequired,cellBorderWidth:s().number.isRequired,cellBorderColor:c.UO.isRequired,axisTop:o.VT,axisRight:o.VT,axisBottom:o.VT,axisLeft:o.VT,enableGridX:s().bool.isRequired,enableGridY:s().bool.isRequired,enableLabels:s().bool.isRequired,label:s().func.isRequired,labelTextColor:c.UO.isRequired,colors:n.Dd.isRequired,nanColor:s().string,isInteractive:s().bool,onClick:s().func.isRequired,hoverTarget:s().oneOf(["cell","row","column","rowColumn"]).isRequired,cellHoverOpacity:s().number.isRequired,cellHoverOthersOpacity:s().number.isRequired,tooltipFormat:s().oneOfType([s().func,s().string]),tooltip:s().func,pixelRatio:s().number.isRequired},x=y({},p,{role:s().string.isRequired}),m={indexBy:"id",minValue:"auto",maxValue:"auto",forceSquare:!1,sizeVariation:0,padding:0,cellShape:"rect",cellOpacity:.85,cellBorderWidth:0,cellBorderColor:{from:"color"},axisTop:{},axisLeft:{},enableGridX:!1,enableGridY:!1,enableLabels:!0,label:function(e,t){return e[t]},labelTextColor:{from:"color",modifiers:[["darker",1.4]]},colors:"nivo",nanColor:"#000000",isInteractive:!0,onClick:n.ZT,hoverTarget:"rowColumn",cellHoverOpacity:1,cellHoverOthersOpacity:.35,pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1},g=y({},m,{role:"img"}),v={cell:function(e,t){return e.xKey===t.xKey&&e.yKey===t.yKey},row:function(e,t){return e.yKey===t.yKey},column:function(e,t){return e.xKey===t.xKey},rowColumn:function(e,t){return e.xKey===t.xKey||e.yKey===t.yKey}},b=function(e){var t=e.data,i=e.keys,o=e.indexBy,l=e.minValue,a=void 0===l?"auto":l,s=e.maxValue,f=void 0===s?"auto":s,h=e.width,p=e.height,x=e.padding,m=e.forceSquare,g=e.sizeVariation,b=e.colors,k=e.nanColor,C=e.cellOpacity,q=e.cellBorderColor,w=e.label,O=e.labelTextColor,T=e.hoverTarget,R=e.cellHoverOpacity,S=e.cellHoverOthersOpacity,V=(0,r.useState)(null),B=V[0],j=V[1],M=(0,n.LR)(o),L=(0,r.useMemo)((function(){return t.map(M)}),[t,M]),W=(0,r.useMemo)((function(){return(0,n.ji)(w)}),[w]),H=(0,r.useMemo)((function(){var e=i.length,r=t.length,n=Math.max((h-x*(e+1))/e,0),o=Math.max((p-x*(r+1))/r,0),l=0,a=0;if(!0===m){var s=Math.min(n,o);l=(h-(((n=s)+x)*e+x))/2,a=(p-(((o=s)+x)*r+x))/2}return{cellWidth:n,cellHeight:o,offsetX:l,offsetY:a}}),[t,i,h,p,x,m]),D=(0,r.useMemo)((function(){return{x:(0,u.Z)(i.map((function(e,t){return function(e,t,i){return e*t+.5*t+i*e+i}(t,H.cellWidth,x)}))).domain(i),y:(0,u.Z)(L.map((function(e,t){return function(e,t,i){return e*t+.5*t+i*e+i}(t,H.cellHeight,x)}))).domain(L)}}),[L,i,H,x]),P=(0,r.useMemo)((function(){var e=a,r=f;if("auto"===e||"auto"===r){var n=t.reduce((function(e,t){return e.concat(i.map((function(e){return t[e]})))}),[]);"auto"===e&&(e=Math.min.apply(Math,n)),"auto"===r&&(r=Math.max.apply(Math,n))}return{min:Math.min(e,r),max:Math.max(r,e)}}),[t,i,a,f]),z=(0,r.useMemo)((function(){if(g>0)return(0,d.Z)().range([1-g,1]).domain([P.min,P.max])}),[g,P]),F=(0,r.useMemo)((function(){return(0,n.om)(b).domain([P.min,P.max])}),[b,P]),K=(0,n.Fg)(),X=(0,c.Bf)(q,K),I=(0,c.Bf)(O,K),J=(0,r.useMemo)((function(){return function(e){var t=e.keys,i=e.getIndex,r=e.xScale,n=e.yScale,o=e.sizeScale,l=e.cellOpacity,a=e.cellWidth,s=e.cellHeight,c=e.colorScale,u=e.nanColor,d=e.getLabel,f=e.getLabelTextColor,h=[];return e.data.forEach((function(e){t.forEach((function(t){var y=e[t],p=d(e,t),x=i(e),m=o?o(y):1,g=m*a,v=m*s,b={id:t+"."+x,xKey:t,yKey:x,x:r(t),y:n(x),width:g,height:v,value:y,label:p,color:isNaN(y)?u:c(y),opacity:l};b.labelTextColor=f(b),h.push(b)}))})),h}({data:t,keys:i,getIndex:M,xScale:D.x,yScale:D.y,sizeScale:z,cellOpacity:C,cellWidth:H.cellWidth,cellHeight:H.cellHeight,colorScale:F,nanColor:k,getLabel:W,getLabelTextColor:I})}),[t,i,M,D,z,C,H,F,k,W,I]),Y=(0,r.useMemo)((function(){if(null===B)return J;var e=v[T],t=J.find((function(e){return e.id===B}));return J.map((function(i){var r=e(i,t)?R:S;return r===i.opacity?i:y({},i,{opacity:r})}))}),[J,B,T,R,S]);return y({cells:Y,getIndex:M,xScale:D.x,yScale:D.y},H,{sizeScale:z,currentCellId:B,setCurrentCellId:j,colorScale:F,getCellBorderColor:X,getLabelTextColor:I})},k=function(e){var t=e.cells,i=e.cellComponent,n=e.cellBorderWidth,o=e.getCellBorderColor,l=e.enableLabels,a=e.getLabelTextColor,s=e.handleCellHover,c=e.handleCellLeave,u=e.onClick;return t.map((function(e){return(0,r.createElement)(i,{key:e.id,data:e,label:e.label,x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:e.opacity,borderWidth:n,borderColor:o(e),enableLabel:l,textColor:a(e),onHover:s?function(t){return s(e,t)}:void 0,onLeave:c,onClick:u})}))};k.propTypes={};var C=function(e){var t=e.data,i=e.label,r=e.x,o=e.y,l=e.width,a=e.height,s=e.color,c=e.opacity,u=e.borderWidth,d=e.borderColor,p=e.enableLabel,x=e.textColor,m=e.onHover,g=e.onLeave,v=e.onClick,b=(0,n.Fg)(),k=(0,n.tf)(),C=k.animate,q=k.config,w=(0,f.useSpring)({transform:"translate("+r+", "+o+")",width:l,height:a,xOffset:-.5*l,yOffset:-.5*a,color:s,opacity:c,textColor:x,borderWidth:u,borderColor:d,config:q,immediate:!C});return(0,h.jsxs)(f.q.g,{transform:w.transform,style:{cursor:"pointer"},onMouseEnter:m,onMouseMove:m,onMouseLeave:g,onClick:v?function(e){return v(t,e)}:void 0,children:[(0,h.jsx)(f.q.rect,{x:w.xOffset,y:w.yOffset,width:w.width,height:w.height,fill:w.color,fillOpacity:w.opacity,strokeWidth:w.borderWidth,stroke:w.borderColor,strokeOpacity:w.opacity}),p&&(0,h.jsx)(f.q.text,{dominantBaseline:"central",textAnchor:"middle",style:y({},b.labels.text,{fill:w.textColor}),fillOpacity:w.opacity,children:i})]})};C.propTypes={data:s().object.isRequired,label:s().oneOfType([s().number,s().string]).isRequired,x:s().number.isRequired,y:s().number.isRequired,width:s().number.isRequired,height:s().number.isRequired,color:s().string.isRequired,opacity:s().number.isRequired,borderWidth:s().number.isRequired,borderColor:s().string.isRequired,enableLabel:s().bool.isRequired,textColor:s().string.isRequired,onHover:s().func,onLeave:s().func,onClick:s().func};var q=(0,r.memo)(C),w=function(e){var t=e.data,i=e.label,r=e.x,o=e.y,l=e.width,a=e.height,s=e.color,c=e.opacity,u=e.borderWidth,d=e.borderColor,p=e.enableLabel,x=e.textColor,m=e.onHover,g=e.onLeave,v=e.onClick,b=(0,n.Fg)(),k=(0,n.tf)(),C=k.animate,q=k.config,w=(0,f.useSpring)({transform:"translate("+r+", "+o+")",radius:Math.min(l,a)/2,color:s,opacity:c,textColor:x,borderWidth:u,borderColor:d,config:q,immediate:!C});return(0,h.jsxs)(f.q.g,{transform:w.transform,style:{cursor:"pointer"},onMouseEnter:m,onMouseMove:m,onMouseLeave:g,onClick:v?function(e){return v(t,e)}:void 0,children:[(0,h.jsx)(f.q.circle,{r:w.radius,fill:w.color,fillOpacity:w.opacity,strokeWidth:w.borderWidth,stroke:w.borderColor,strokeOpacity:w.opacity}),p&&(0,h.jsx)(f.q.text,{dominantBaseline:"central",textAnchor:"middle",style:y({},b.labels.text,{fill:w.textColor}),fillOpacity:w.opacity,children:i})]})};w.propTypes={data:s().object.isRequired,label:s().oneOfType([s().number,s().string]).isRequired,x:s().number.isRequired,y:s().number.isRequired,width:s().number.isRequired,height:s().number.isRequired,color:s().string.isRequired,opacity:s().number.isRequired,borderWidth:s().number.isRequired,borderColor:s().string.isRequired,enableLabel:s().bool.isRequired,textColor:s().string.isRequired,onHover:s().func,onLeave:s().func,onClick:s().func};var O=(0,r.memo)(w),T=function(e){var t=e.cell,i=e.format,r=e.tooltip;return(0,h.jsx)(l._5,{id:t.yKey+" - "+t.xKey,value:t.value,enableChip:!0,color:t.color,format:i,renderContent:"function"==typeof r?r.bind(null,y({},t)):null})};T.propTypes={cell:s().shape({xKey:s().string.isRequired,yKey:s().string.isRequired,value:s().number.isRequired,color:s().string.isRequired}).isRequired,format:s().func,tooltip:s().func};var R=(0,r.memo)(T),S=function(e){var t,i=e.data,a=e.keys,s=e.indexBy,c=e.minValue,u=e.maxValue,d=e.width,f=e.height,y=e.margin,p=e.forceSquare,x=e.padding,m=e.sizeVariation,g=e.cellShape,v=e.cellOpacity,C=e.cellBorderWidth,w=e.cellBorderColor,T=e.axisTop,S=e.axisRight,V=e.axisBottom,B=e.axisLeft,j=e.enableGridX,M=e.enableGridY,L=e.enableLabels,W=e.label,H=e.labelTextColor,D=e.colors,P=e.nanColor,z=e.isInteractive,F=e.onClick,K=e.hoverTarget,X=e.cellHoverOpacity,I=e.cellHoverOthersOpacity,J=e.tooltipFormat,Y=e.tooltip,A=e.role,E=(0,n.Bs)(d,f,y),G=E.margin,Z=E.innerWidth,N=E.innerHeight,U=E.outerWidth,_=E.outerHeight,$=b({data:i,keys:a,indexBy:s,minValue:c,maxValue:u,width:Z,height:N,padding:x,forceSquare:p,sizeVariation:m,colors:D,nanColor:P,cellOpacity:v,cellBorderColor:w,label:W,labelTextColor:H,hoverTarget:K,cellHoverOpacity:X,cellHoverOthersOpacity:I}),Q=$.cells,ee=$.xScale,te=$.yScale,ie=$.offsetX,re=$.offsetY,ne=$.setCurrentCellId,oe=$.getCellBorderColor,le=$.getLabelTextColor,ae=(0,l.lL)(),se=ae.showTooltipFromEvent,ce=ae.hideTooltip,ue=(0,r.useCallback)((function(e,t){ne(e.id),se((0,h.jsx)(R,{cell:e,format:J,tooltip:Y}),t)}),[ne,se,J,Y]),de=(0,r.useCallback)((function(){ne(null),ce()}),[ne,ce]);return t="rect"===g?q:"circle"===g?O:g,(0,h.jsxs)(n.tM,{width:U,height:_,margin:Object.assign({},G,{top:G.top+re,left:G.left+ie}),role:A,children:[(0,h.jsx)(o.rj,{width:Z-2*ie,height:N-2*re,xScale:j?ee:null,yScale:M?te:null}),(0,h.jsx)(o.dk,{xScale:ee,yScale:te,width:Z-2*ie,height:N-2*re,top:T,right:S,bottom:V,left:B}),(0,h.jsx)(k,{cells:Q,cellComponent:t,cellBorderWidth:C,getCellBorderColor:oe,enableLabels:L,getLabelTextColor:le,handleCellHover:z?ue:void 0,handleCellLeave:z?de:void 0,onClick:z?F:void 0})]})};S.propTypes=x;var V=(0,n.li)(S);V.defaultProps=g;var B=function(e,t,i){var r=t.enableLabels,n=t.theme,o=i.x,l=i.y,a=i.width,s=i.height,c=i.color,u=i.opacity,d=i.labelTextColor,f=i.label;e.save(),e.globalAlpha=u,e.fillStyle=c,e.fillRect(o-a/2,l-s/2,a,s),!0===r&&(e.fillStyle=d,e.font=n.labels.text.fontSize+"px "+n.labels.text.fontFamily,e.fillText(f,o,l)),e.restore()},j=function(e,t,i){var r=t.enableLabels,n=t.theme,o=i.x,l=i.y,a=i.width,s=i.height,c=i.color,u=i.opacity,d=i.labelTextColor,f=i.label;e.save(),e.globalAlpha=u;var h=Math.min(a,s)/2;e.fillStyle=c,e.beginPath(),e.arc(o,l,h,0,2*Math.PI),e.fill(),!0===r&&(e.fillStyle=d,e.font=n.labels.text.fontSize+"px "+n.labels.text.fontFamily,e.fillText(f,o,l)),e.restore()},M=function(e){var t=e.data,i=e.keys,a=e.indexBy,s=e.minValue,c=e.maxValue,u=e.width,d=e.height,f=e.margin,y=e.forceSquare,p=e.padding,x=e.sizeVariation,m=e.cellShape,g=e.cellOpacity,v=e.cellBorderColor,k=e.axisTop,C=e.axisRight,q=e.axisBottom,w=e.axisLeft,O=e.enableLabels,T=e.label,S=e.labelTextColor,V=e.colors,M=e.nanColor,L=e.isInteractive,W=e.onClick,H=e.hoverTarget,D=e.cellHoverOpacity,P=e.cellHoverOthersOpacity,z=e.tooltipFormat,F=e.tooltip,K=e.pixelRatio,X=(0,r.useRef)(null),I=(0,n.Bs)(u,d,f),J=I.margin,Y=I.innerWidth,A=I.innerHeight,E=I.outerWidth,G=I.outerHeight,Z=b({data:t,keys:i,indexBy:a,minValue:s,maxValue:c,width:Y,height:A,padding:p,forceSquare:y,sizeVariation:x,colors:V,nanColor:M,cellOpacity:g,cellBorderColor:v,label:T,labelTextColor:S,hoverTarget:H,cellHoverOpacity:D,cellHoverOthersOpacity:P}),N=Z.cells,U=Z.xScale,_=Z.yScale,$=Z.offsetX,Q=Z.offsetY,ee=Z.currentCellId,te=Z.setCurrentCellId,ie=(0,n.Fg)();(0,r.useEffect)((function(){X.current.width=E*K,X.current.height=G*K;var e,t=X.current.getContext("2d");t.scale(K,K),t.fillStyle=ie.background,t.fillRect(0,0,E,G),t.translate(J.left+$,J.top+Q),(0,o.DZ)(t,{xScale:U,yScale:_,width:Y-2*$,height:A-2*Q,top:k,right:C,bottom:q,left:w,theme:ie}),t.textAlign="center",t.textBaseline="middle",e="rect"===m?B:j,N.forEach((function(i){e(t,{enableLabels:O,theme:ie},i)}))}),[X,N,E,G,Y,A,J,$,Q,m,k,C,q,w,U,_,ie,O,K]);var re=(0,l.lL)(),ne=re.showTooltipFromEvent,oe=re.hideTooltip,le=(0,r.useCallback)((function(e){var t=(0,n.P6)(X.current,e),i=t[0],r=t[1],o=N.find((function(e){return(0,n.zn)(e.x+J.left+$-e.width/2,e.y+J.top+Q-e.height/2,e.width,e.height,i,r)}));void 0!==o?(te(o.id),ne((0,h.jsx)(R,{cell:o,tooltip:F,format:z}),e)):(te(null),oe())}),[X,N,J,$,Q,te,ne,oe,F,z]),ae=(0,r.useCallback)((function(){te(null),oe()}),[te,oe]),se=(0,r.useCallback)((function(e){if(null!==ee){var t=N.find((function(e){return e.id===ee}));t&&W(t,e)}}),[N,ee,W]);return(0,h.jsx)("canvas",{ref:X,width:E*K,height:G*K,style:{width:E,height:G},onMouseEnter:L?le:void 0,onMouseMove:L?le:void 0,onMouseLeave:L?ae:void 0,onClick:L?se:void 0})};M.propTypes=p;var L=(0,n.li)(M);L.defaultProps=m;var W=function(e){return(0,h.jsx)(n.d,{children:function(t){var i=t.width,r=t.height;return(0,h.jsx)(V,y({width:i,height:r},e))}})},H=function(e){return(0,h.jsx)(n.d,{children:function(t){var i=t.width,r=t.height;return(0,h.jsx)(L,y({width:i,height:r},e))}})}},28122:function(e,t,i){i.d(t,{i:function(){return o},g:function(){return l}});var r=i(38681),n=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],o=function(){return{data:(0,r.aw)(n.slice(0,11),{size:9,min:0,max:100}),keys:n.slice(0,11)}},l=function(){return{data:(0,r.aw)(n,{size:22,min:0,max:100}),keys:n}}},89220:function(e,t,i){i(27378);var r=i(62370),n=i(24246),o=function(e){var t=e.value,i=e.x,r=e.y,o=e.width,l=e.height,a=e.color,s=e.opacity,c=e.borderWidth,u=e.borderColor,d=e.textColor;return(0,n.jsxs)("g",{transform:"translate("+i+", "+r+")",children:[(0,n.jsx)("path",{transform:"rotate("+(t<50?180:0)+")",fill:a,fillOpacity:s,strokeWidth:c,stroke:u,d:"\n                M0 -"+Math.round(l/2)+"\n                L"+Math.round(o/2)+" "+Math.round(l/2)+"\n                L-"+Math.round(o/2)+" "+Math.round(l/2)+"\n                L0 -"+Math.round(l/2)+"\n            "}),(0,n.jsx)("text",{alignmentBaseline:"central",textAnchor:"middle",style:{fill:d},dy:t<50?-6:6,children:t})]})};t.Z=(0,r.h8)({cellShape:function(e){return"Custom(props) => (…)"===e?o:e},axisTop:(0,r.h6)("top"),axisRight:(0,r.h6)("right"),axisBottom:(0,r.h6)("bottom"),axisLeft:(0,r.h6)("left")},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft"]})}}]);
//# sourceMappingURL=74a3323269f816433de8976cfbd9d0ceb5d37e1e-c476101b7531fba399f7.js.map