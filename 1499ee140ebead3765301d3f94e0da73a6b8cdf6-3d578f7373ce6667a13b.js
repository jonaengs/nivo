"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4313],{52729:function(e,n,t){t.d(n,{O:function(){return D},R5:function(){return ee},y8:function(){return _},lG:function(){return R}});var o=t(27378),i=t(45434),r=t(44365),a=t(14035),u=t(89193),l=t(24246),s=t(79234),c=t(54358),d=t(78581),v=t.n(d),f=t(40861),h=t.n(f),g=t(47206),p=t.n(g),y=t(99729),x=t.n(y),m=t(19183),M=t(9841),S=t(73138),b=t(14670),w=t(81998);function C(e){return e.x+e.vx}function k(e){return e.y+e.vy}function z(e){var n,t,o,i=(0,b.Z)(.1);function r(e){for(var i,r=0,a=n.length;r<a;++r)(i=n[r]).vx+=(o[r]-i.x)*t[r]*e}function a(){if(n){var r,a=n.length;for(t=new Array(a),o=new Array(a),r=0;r<a;++r)t[r]=isNaN(o[r]=+e(n[r],r,n))?0:+i(n[r],r,n)}}return"function"!=typeof e&&(e=(0,b.Z)(null==e?0:+e)),r.initialize=function(e){n=e,a()},r.strength=function(e){return arguments.length?(i="function"==typeof e?e:(0,b.Z)(+e),a(),r):i},r.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,b.Z)(+n),a(),r):e},r}function W(e){var n,t,o,i=(0,b.Z)(.1);function r(e){for(var i,r=0,a=n.length;r<a;++r)(i=n[r]).vy+=(o[r]-i.y)*t[r]*e}function a(){if(n){var r,a=n.length;for(t=new Array(a),o=new Array(a),r=0;r<a;++r)t[r]=isNaN(o[r]=+e(n[r],r,n))?0:+i(n[r],r,n)}}return"function"!=typeof e&&(e=(0,b.Z)(null==e?0:+e)),r.initialize=function(e){n=e,a()},r.strength=function(e){return arguments.length?(i="function"==typeof e?e:(0,b.Z)(+e),a(),r):i},r.y=function(n){return arguments.length?(e="function"==typeof n?n:(0,b.Z)(+n),a(),r):e},r}var I=t(72102),B=t(20217),E=t(58493);function j(){return j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},j.apply(this,arguments)}function L(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}var Z,R={id:"id",value:"value",valueScale:{type:"linear",min:0,max:"auto"},groupBy:"group",size:6,spacing:2,layout:"vertical",gap:0,forceStrength:1,simulationIterations:120,colors:{scheme:"nivo"},colorBy:"group",borderWidth:0,borderColor:"rgba(0, 0, 0, 0)",layers:["grid","axes","circles","annotations","mesh"],enableGridX:!0,enableGridY:!0,axisTop:{},axisRight:{},axisBottom:{},axisLeft:{},isInteractive:!0,useMesh:!1,debugMesh:!1,tooltip:function(e){var n=e.id,t=e.formattedValue,o=e.color;return(0,l.jsx)(u._5,{id:n,value:t,enableChip:!0,color:o})},animate:!0,motionConfig:"gentle",annotations:[],role:"img",pixelRatio:"undefined"!=typeof window&&null!=(Z=window.devicePixelRatio)?Z:1},F=function(e){var n,t,o=e.axis,i=e.valueScale,r=e.ordinalScale,a=e.spacing,u=e.forceStrength,l=function(e){var n,t,o,i=1,r=1;function a(){for(var e,a,l,s,c,d,v,f=n.length,h=0;h<r;++h)for(a=(0,S.Z)(n,C,k).visitAfter(u),e=0;e<f;++e)l=n[e],d=t[l.index],v=d*d,s=l.x+l.vx,c=l.y+l.vy,a.visit(g);function g(e,n,t,r,a){var u=e.data,f=e.r,h=d+f;if(!u)return n>s+h||r<s-h||t>c+h||a<c-h;if(u.index>l.index){var g=s-u.x-u.vx,p=c-u.y-u.vy,y=g*g+p*p;y<h*h&&(0===g&&(y+=(g=(0,w.Z)(o))*g),0===p&&(y+=(p=(0,w.Z)(o))*p),y=(h-(y=Math.sqrt(y)))/y*i,l.vx+=(g*=y)*(h=(f*=f)/(v+f)),l.vy+=(p*=y)*h,u.vx-=g*(h=1-h),u.vy-=p*h)}}}function u(e){if(e.data)return e.r=t[e.data.index];for(var n=e.r=0;n<4;++n)e[n]&&e[n].r>e.r&&(e.r=e[n].r)}function l(){if(n){var o,i,r=n.length;for(t=new Array(r),o=0;o<r;++o)i=n[o],t[i.index]=+e(i,o,n)}}return"function"!=typeof e&&(e=(0,b.Z)(null==e?1:+e)),a.initialize=function(e,t){n=e,o=t,l()},a.iterations=function(e){return arguments.length?(r=+e,a):r},a.strength=function(e){return arguments.length?(i=+e,a):i},a.radius=function(n){return arguments.length?(e="function"==typeof n?n:(0,b.Z)(+n),l(),a):e},a}((function(e){return e.size/2+a/2}));if("x"===o)n=z((function(e){return i(e.value)})).strength(u),t=W((function(e){return r(e.group)}));else{if("y"!==o)throw new Error("Invalid axis provided: "+o);n=z((function(e){return r(e.group)})),t=W((function(e){return i(e.value)})).strength(u)}return{x:n,y:t,collision:l}},A=function(e){var n=e.width,t=e.height,i=e.axis,r=e.getValue,a=e.scale,u=e.data;return(0,o.useMemo)((function(){return function(e){var n=e.width,t=e.height,o=e.axis,i=e.getValue,r=e.scale,a=e.data.map(i);if("time"===r.type){var u=[{data:a.map((function(e){var n;return{data:(n={x:null,y:null},n[o]=e,n)}}))}],l=(0,B.OO)(u,o,r);return(0,B.ZN)(r,l,"x"===o?n:t,o)}var s=Math.min.apply(Math,a),c=Math.max.apply(Math,a);return(0,B.ZN)(r,{all:a,min:s,max:c},"x"===o?n:t,o)}({width:n,height:t,axis:i,getValue:r,scale:a,data:u})}),[n,t,i,r,a,u])},V=function(e){var n=e.width,t=e.height,i=e.axis,r=e.groups,a=e.gap;return(0,o.useMemo)((function(){return function(e){var n=e.width,t=e.height,o=e.axis,i=e.groups,r=e.gap;if(!Array.isArray(i)||0===i.length)throw new Error("'groups' should be an array containing at least one item");var a,u=i.length;"x"===o?a=(t-r*(u-1))/u:"y"===o&&(a=(n-r*(u-1))/u);var l=i.map((function(e,n){return n*(a+r)+a/2}));return(0,m.Z)(l).domain(i)}({width:n,height:t,axis:i,groups:r,gap:a})}),[n,t,i,r,a])},T=function(e){var n=e.data,t=e.width,r=e.height,a=e.id,u=e.value,l=e.valueFormat,c=e.valueScale,d=e.groups,f=e.groupBy,g=e.size,y=e.spacing,m=e.layout,S=e.gap,b=e.forceStrength,w=e.simulationIterations,C=e.colors,k=e.colorBy,z="horizontal"===m?"x":"y",W=(0,i.LR)(a),E=(0,i.LR)(u),L=(0,i.O_)(l),Z=(0,i.LR)(f),R=function(e){return(0,o.useMemo)((function(){return function(e){if("function"==typeof e)return e;if(v()(e))return function(){return e};if(h()(e)){if(!p()(e.key))throw new Error("Size is invalid, key should be a string pointing to the property to use to determine node size");if(!Array.isArray(e.values)||2!==e.values.length)throw new Error("Size is invalid, values spec should be an array containing two values, min and max");if(!Array.isArray(e.sizes)||2!==e.sizes.length)throw new Error("Size is invalid, sizes spec should be an array containing two values, min and max");var n=(0,M.Z)().domain([e.values[0],e.values[1]]).range([e.sizes[0],e.sizes[1]]);return function(t){return n(x()(t,e.key))}}throw new Error("Size is invalid, it should be either a function, a number or an object")}(e)}),[e])}(g),T=(0,i.LR)(k),G=(0,s.U)(C,T),H=A({width:t,height:r,axis:z,getValue:E,scale:c,data:n}),O=V({width:t,height:r,axis:z,groups:d,gap:S}),N=function(e){var n=e.axis,t=e.valueScale,i=e.ordinalScale,r=e.spacing,a=e.forceStrength;return(0,o.useMemo)((function(){return F({axis:n,valueScale:t,ordinalScale:i,spacing:r,forceStrength:a})}),[n,t,i,r,a])}({axis:z,valueScale:H,ordinalScale:O,spacing:y,forceStrength:b}),P=(0,o.useMemo)((function(){return function(e){var n,t,o=e.data,i=e.getId,r=e.layout,a=e.getValue,u=e.valueScale,l=e.getGroup,s=e.ordinalScale,c=e.getSize,d=e.forces,v=e.simulationIterations,f={horizontal:["x","y"],vertical:["y","x"]},h="time"===(t=e.valueScaleConfig).type&&"native"!==t.format?(0,B.KD)(t):function(e){return e},g=o.map((function(e){return{id:i(e),group:l(e),value:h(a(e)),size:c(e),data:j({},e)}})),p=(0,I.Z)(g).force("x",d.x).force("y",d.y).force("collide",d.collision).stop();return p.tick(v),(n={})[f[r][0]+"Scale"]=u,n[f[r][1]+"Scale"]=s,n.nodes=p.nodes(),n}({data:n,getId:W,layout:m,getValue:E,valueScale:H,getGroup:Z,ordinalScale:O,getSize:R,forces:N,simulationIterations:w,valueScaleConfig:c})}),[n,W,m,E,H,Z,O,R,N,w,c]),X=P.nodes,Y=P.xScale,q=P.yScale;return{nodes:(0,o.useMemo)((function(){return X.map((function(e){return j({},e,{formattedValue:L(e.value),color:G(e)})}))}),[X,L,G]),xScale:Y,yScale:q,getColor:G}},G=function(e){return{x:e.x,y:e.y}},H=function(e){return{size:e.size,width:e.size,height:e.size}},O=function(e){var n,t=e.nodes,r=e.borderWidth,a=e.borderColor,c=e.component,d=e.isInteractive,v=e.onMouseEnter,f=e.onMouseMove,h=e.onMouseLeave,g=e.onClick,p=e.tooltip,y=(0,u.lL)(),x=y.showTooltipFromEvent,m=y.hideTooltip,M=(0,o.useMemo)((function(){if(d)return function(e,n){x((0,o.createElement)(p,e),n),null==v||v(e,n)}}),[d,x,p,v]),S=(0,o.useMemo)((function(){if(d)return function(e,n){x((0,o.createElement)(p,e),n),null==f||f(e,n)}}),[d,x,p,f]),b=(0,o.useMemo)((function(){if(d)return function(e,n){m(),null==h||h(e,n)}}),[d,m,h]),w=(0,o.useMemo)((function(){if(d)return function(e,n){null==g||g(e,n)}}),[d,g]),C=(0,i.tf)(),k=C.animate,z=C.config,W=(0,i.Fg)(),I=(n=r,(0,o.useMemo)((function(){return"function"==typeof n?n:function(){return n}}),[n])),B=(0,s.Bf)(a,W),L=(0,o.useMemo)((function(){return function(e){return{enter:function(n){return{x:n.x,y:n.y,radius:0,color:n.color,borderColor:e(n),opacity:0}},update:function(n){return{x:n.x,y:n.y,radius:n.size/2,color:n.color,borderColor:e(n),opacity:1}},leave:function(n){return{x:n.x,y:n.y,radius:0,color:n.color,borderColor:e(n),opacity:0}}}}(B)}),[B]),Z=(0,E.useTransition)(t,{keys:function(e){return e.id},initial:L.update,from:L.enter,enter:L.update,update:L.update,leave:L.leave,config:z,immediate:!k});return(0,l.jsx)(l.Fragment,{children:Z((function(e,n){return o.createElement(c,{key:n.id,node:n,style:j({},e,{radius:(t=e.radius,(0,E.to)([t],(function(e){return Math.max(0,e)}))),borderWidth:I(n)}),onMouseEnter:M,onMouseMove:S,onMouseLeave:b,onClick:w});var t}))})},N=function(e){var n=e.node,t=e.style,o=e.onMouseEnter,i=e.onMouseMove,r=e.onMouseLeave,a=e.onClick;return(0,l.jsx)(E.q.circle,{cx:t.x,cy:t.y,r:t.radius,fill:t.color,stroke:t.borderColor,strokeWidth:t.borderWidth,opacity:t.opacity,onMouseEnter:function(e){return null==o?void 0:o(n,e)},onMouseMove:function(e){return null==i?void 0:i(n,e)},onMouseLeave:function(e){return null==r?void 0:r(n,e)},onClick:function(e){return null==a?void 0:a(n,e)}},n.id)},P=function(e){var n=function(e,n){return(0,c.O2)({data:e,annotations:n,getPosition:G,getDimensions:H})}(e.nodes,e.annotations);return(0,l.jsx)(l.Fragment,{children:n.map((function(e,n){return(0,l.jsx)(c.q6,j({},e),n)}))})},X=["nodes"],Y=["theme","isInteractive","animate","motionConfig","renderWrapper"],q=function(e){var n=e.data,t=e.width,s=e.height,c=e.margin,d=e.id,v=void 0===d?R.id:d,f=e.value,h=void 0===f?R.value:f,g=e.valueScale,p=void 0===g?R.valueScale:g,y=e.valueFormat,x=e.groups,m=e.groupBy,M=void 0===m?R.groupBy:m,S=e.size,b=void 0===S?R.size:S,w=e.forceStrength,C=void 0===w?R.forceStrength:w,k=e.simulationIterations,z=void 0===k?R.simulationIterations:k,W=e.colors,I=void 0===W?R.colors:W,B=e.colorBy,E=void 0===B?R.colorBy:B,j=e.borderColor,Z=void 0===j?R.borderColor:j,F=e.borderWidth,A=void 0===F?R.borderWidth:F,V=e.layout,G=void 0===V?R.layout:V,H=e.spacing,Y=void 0===H?R.spacing:H,q=e.gap,_=void 0===q?R.gap:q,D=e.layers,K=void 0===D?R.layers:D,U=e.circleComponent,$=void 0===U?N:U,J=e.useMesh,Q=void 0===J?R.useMesh:J,ee=e.debugMesh,ne=void 0===ee?R.debugMesh:ee,te=e.enableGridX,oe=void 0===te?R.enableGridX:te,ie=e.gridXValues,re=e.enableGridY,ae=void 0===re?R.enableGridY:re,ue=e.gridYValues,le=e.axisTop,se=void 0===le?R.axisTop:le,ce=e.axisRight,de=void 0===ce?R.axisRight:ce,ve=e.axisBottom,fe=void 0===ve?R.axisBottom:ve,he=e.axisLeft,ge=void 0===he?R.axisLeft:he,pe=e.isInteractive,ye=e.onMouseEnter,xe=e.onMouseMove,me=e.onMouseLeave,Me=e.onClick,Se=e.tooltip,be=void 0===Se?R.tooltip:Se,we=e.annotations,Ce=void 0===we?R.annotations:we,ke=e.role,ze=void 0===ke?R.role:ke,We=(0,i.Bs)(t,s,c),Ie=We.outerWidth,Be=We.outerHeight,Ee=We.margin,je=We.innerWidth,Le=We.innerHeight,Ze=T({width:je,height:Le,data:n,id:v,value:h,valueFormat:y,valueScale:p,groups:x,groupBy:M,size:b,spacing:Y,layout:G,gap:_,colors:I,colorBy:E,forceStrength:C,simulationIterations:z}),Re=Ze.nodes,Fe=L(Ze,X),Ae=Fe.xScale,Ve=Fe.yScale,Te=function(e){var n=e.isInteractive,t=e.onClick,i=e.onMouseEnter,r=e.onMouseLeave,a=e.onMouseMove,l=e.tooltip,s=(0,u.lL)(),c=s.showTooltipFromEvent,d=s.hideTooltip;return{onMouseEnter:(0,o.useCallback)((function(e,t){n&&(c(l(e),t),null==i||i(e,t))}),[n,i,c,l]),onMouseMove:(0,o.useCallback)((function(e,t){n&&(c(l(e),t),null==a||a(e,t))}),[n,a,c,l]),onMouseLeave:(0,o.useCallback)((function(e,t){n&&(d(),null==r||r(e,t))}),[n,d,r]),onClick:(0,o.useCallback)((function(e,o){n&&(null==t||t(e,o))}),[n,t])}}({isInteractive:pe,onClick:Me,onMouseEnter:ye,onMouseLeave:me,onMouseMove:xe,tooltip:be}),Ge={grid:null,axes:null,circles:null,annotations:null,mesh:null};K.includes("grid")&&(Ge.grid=(0,l.jsx)(r.rj,{width:je,height:Le,xScale:oe?Ae:null,xValues:ie,yScale:ae?Ve:null,yValues:ue},"grid")),K.includes("axes")&&(Ge.axes=(0,l.jsx)(r.dk,{xScale:Ae,yScale:Ve,width:je,height:Le,top:null!=se?se:void 0,right:null!=de?de:void 0,bottom:null!=fe?fe:void 0,left:null!=ge?ge:void 0},"axes")),K.includes("circles")&&(Ge.circles=(0,l.jsx)(O,{nodes:Re,borderWidth:A,borderColor:Z,isInteractive:pe,tooltip:be,component:$,onMouseEnter:ye,onMouseMove:xe,onMouseLeave:me,onClick:Me},"circles")),K.includes("annotations")&&(Ge.annotations=(0,l.jsx)(P,{nodes:Re,annotations:Ce},"annotations")),pe&&Q&&(Ge.mesh=(0,l.jsx)(a.Kj,{nodes:Re,width:je,height:Le,onMouseEnter:Te.onMouseEnter,onMouseMove:Te.onMouseMove,onMouseLeave:Te.onMouseLeave,onClick:Te.onClick,debug:ne},"mesh"));var He=function(e){var n=e.nodes,t=e.xScale,i=e.yScale,r=e.innerWidth,a=e.innerHeight,u=e.outerWidth,l=e.outerHeight,s=e.margin;return(0,o.useMemo)((function(){return{nodes:n,xScale:t,yScale:i,innerWidth:r,innerHeight:a,outerWidth:u,outerHeight:l,margin:s}}),[n,t,i,r,a,u,l,s])}({nodes:Re,xScale:Ae,yScale:Ve,innerWidth:je,innerHeight:Le,outerWidth:Ie,outerHeight:Be,margin:Ee});return(0,l.jsx)(i.tM,{width:Ie,height:Be,margin:Ee,role:ze,children:K.map((function(e,n){return void 0!==Ge[e]?Ge[e]:"function"==typeof e?(0,l.jsx)(o.Fragment,{children:(0,o.createElement)(e,He)},n):null}))})},_=function(e){var n=e.theme,t=e.isInteractive,o=void 0===t?R.isInteractive:t,r=e.animate,a=void 0===r?R.animate:r,u=e.motionConfig,s=void 0===u?R.motionConfig:u,c=e.renderWrapper,d=L(e,Y);return(0,l.jsx)(i.W2,{isInteractive:o,animate:a,motionConfig:s,theme:n,renderWrapper:c,children:(0,l.jsx)(q,j({isInteractive:o},d))})},D=function(e){return(0,l.jsx)(i.d,{children:function(n){var t=n.width,o=n.height;return(0,l.jsx)(_,j({width:t,height:o},e))}})},K=["nodes"],U=["theme","isInteractive","animate","motionConfig","renderWrapper"],$=function(e,n){var t=n.node,o=n.getBorderWidth,i=n.getBorderColor,r=o(t);r>0&&(e.strokeStyle=i(t),e.lineWidth=r),e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.fillStyle=t.color,e.fill(),r>0&&e.stroke()},J=function(e){var n=e.data,t=e.width,c=e.height,d=e.margin,f=e.id,h=void 0===f?R.id:f,g=e.value,p=void 0===g?R.value:g,y=e.valueFormat,x=e.valueScale,m=void 0===x?R.valueScale:x,M=e.groups,S=e.groupBy,b=void 0===S?R.groupBy:S,w=e.size,C=void 0===w?R.size:w,k=e.forceStrength,z=void 0===k?R.forceStrength:k,W=e.simulationIterations,I=void 0===W?R.simulationIterations:W,B=e.colors,E=void 0===B?R.colors:B,j=e.colorBy,Z=void 0===j?R.colorBy:j,F=e.borderColor,A=void 0===F?R.borderColor:F,V=e.layout,G=void 0===V?R.layout:V,H=e.spacing,O=void 0===H?R.spacing:H,N=e.gap,P=void 0===N?R.gap:N,X=e.layers,Y=void 0===X?R.layers:X,q=e.renderCircle,_=void 0===q?$:q,D=e.debugMesh,U=void 0===D?R.debugMesh:D,J=e.enableGridX,Q=e.gridXValues,ee=e.enableGridY,ne=e.gridYValues,te=e.axisTop,oe=void 0===te?R.axisTop:te,ie=e.axisRight,re=void 0===ie?R.axisRight:ie,ae=e.axisBottom,ue=void 0===ae?R.axisBottom:ae,le=e.axisLeft,se=void 0===le?R.axisLeft:le,ce=e.isInteractive,de=e.onMouseMove,ve=e.onClick,fe=e.tooltip,he=void 0===fe?R.tooltip:fe,ge=e.role,pe=void 0===ge?R.role:ge,ye=e.pixelRatio,xe=void 0===ye?R.pixelRatio:ye,me=(0,o.useRef)(null),Me=(0,i.Fg)(),Se=(0,o.useState)(null),be=Se[0],we=Se[1],Ce=(0,i.Bs)(t,c,d),ke=Ce.outerWidth,ze=Ce.outerHeight,We=Ce.margin,Ie=Ce.innerWidth,Be=Ce.innerHeight,Ee=T({width:Ie,height:Be,data:n,id:h,value:p,valueFormat:y,valueScale:m,groups:M,groupBy:b,size:C,spacing:O,layout:G,gap:P,colors:E,colorBy:Z,forceStrength:z,simulationIterations:I}),je=Ee.nodes,Le=L(Ee,K),Ze=Le.xScale,Re=Le.yScale,Fe=(0,a.ZR)({points:je,width:Ie,height:Be,debug:U}),Ae=Fe.delaunay,Ve=Fe.voronoi,Te=(0,s.Bf)(A,Me),Ge=function(){return 1};(0,o.useEffect)((function(){if(me.current){me.current.width=ke*xe,me.current.height=ze*xe;var e=me.current.getContext("2d");e&&(e.scale(xe,xe),e.fillStyle=Me.background,e.fillRect(0,0,ke,ze),e.save(),e.translate(We.left,We.top),Y.forEach((function(n){"grid"===n&&v()(Me.grid.line.strokeWidth)&&Me.grid.line.strokeWidth>0&&(e.lineWidth=Me.grid.line.strokeWidth,e.strokeStyle=Me.grid.line.stroke,J&&(0,r.FA)(e,{width:Ie,height:Be,scale:Ze,axis:"x",values:Q}),ee&&(0,r.FA)(e,{width:Ie,height:Be,scale:Re,axis:"y",values:ne})),"axes"===n&&(0,r.DZ)(e,{xScale:Ze,yScale:Re,width:Ie,height:Be,top:oe,right:re,bottom:ue,left:se,theme:Me}),"circles"===n&&je.forEach((function(n){_(e,{node:n,getBorderWidth:Ge,getBorderColor:Te})})),"mesh"===n&&U&&Ve&&((0,a.qF)(e,Ve),be&&(0,a.r$)(e,Ve,be.index))})))}}),[me,ke,ze,Ie,Be,xe,We,Me,Y,Ze,Re,J,Q,ee,ne,oe,re,ue,se,Ve,U,be,je,_,Ge,Te]);var He=(0,o.useCallback)((function(e){if(!me.current)return null;var n=(0,i.P6)(me.current,e),t=n[0],o=n[1];if(!(0,i.zn)(We.left,We.top,Ie,Be,t,o))return null;var r=Ae.find(t-We.left,o-We.top);return je[r]}),[me,We,Ie,Be,Ae,je]),Oe=(0,u.lL)(),Ne=Oe.showTooltipFromEvent,Pe=Oe.hideTooltip,Xe=(0,o.useCallback)((function(e,n){Ne((0,o.createElement)(he,e),n)}),[Ne,he]),Ye=(0,o.useCallback)((function(e){var n=He(e);we(n),n?(null==de||de(n,e),Xe(n,e)):Pe()}),[He,we,de,Xe,Pe]),qe=(0,o.useCallback)((function(){Pe(),we(null)}),[Pe,we]),_e=(0,o.useCallback)((function(e){var n=He(e);n&&(null==ve||ve(n,e))}),[He,ve]);return(0,l.jsx)("canvas",{ref:me,width:ke*xe,height:ze*xe,style:{width:ke,height:ze,cursor:ce?"auto":"normal"},role:pe,onMouseEnter:ce?Ye:void 0,onMouseMove:ce?Ye:void 0,onMouseLeave:ce?qe:void 0,onClick:ce?_e:void 0})},Q=function(e){var n=e.theme,t=e.isInteractive,o=void 0===t?R.isInteractive:t,r=e.animate,a=void 0===r?R.animate:r,u=e.motionConfig,s=void 0===u?R.motionConfig:u,c=e.renderWrapper,d=L(e,U);return(0,l.jsx)(i.W2,{isInteractive:o,animate:a,motionConfig:s,theme:n,renderWrapper:c,children:(0,l.jsx)(J,j({isInteractive:o},d))})},ee=function(e){return(0,l.jsx)(i.d,{children:function(n){var t=n.width,o=n.height;return(0,l.jsx)(Q,j({width:t,height:o},e))}})}}}]);
//# sourceMappingURL=1499ee140ebead3765301d3f94e0da73a6b8cdf6-3d578f7373ce6667a13b.js.map