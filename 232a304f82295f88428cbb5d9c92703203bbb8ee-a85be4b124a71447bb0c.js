(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[9110],{65591:function(e,n,r){"use strict";function t(e){var n=0,r=e.children,t=r&&r.length;if(t)for(;--t>=0;)n+=r[t].value;else n=1;e.value=n}function o(e,n){var r,t,o,a,s,c=new u(e),d=+e.value&&(c.value=e.value),h=[c];for(null==n&&(n=i);r=h.pop();)if(d&&(r.value=+r.data.value),(o=n(r.data))&&(s=o.length))for(r.children=new Array(s),a=s-1;a>=0;--a)h.push(t=r.children[a]=new u(o[a])),t.parent=r,t.depth=r.depth+1;return c.eachBefore(l)}function i(e){return e.children}function a(e){e.data=e.data.data}function l(e){var n=0;do{e.height=n}while((e=e.parent)&&e.height<++n)}function u(e){this.data=e,this.depth=this.height=0,this.parent=null}r.d(n,{ZP:function(){return o}}),u.prototype=o.prototype={constructor:u,count:function(){return this.eachAfter(t)},each:function(e){var n,r,t,o,i=this,a=[i];do{for(n=a.reverse(),a=[];i=n.pop();)if(e(i),r=i.children)for(t=0,o=r.length;t<o;++t)a.push(r[t])}while(a.length);return this},eachAfter:function(e){for(var n,r,t,o=this,i=[o],a=[];o=i.pop();)if(a.push(o),n=o.children)for(r=0,t=n.length;r<t;++r)i.push(n[r]);for(;o=a.pop();)e(o);return this},eachBefore:function(e){for(var n,r,t=this,o=[t];t=o.pop();)if(e(t),n=t.children)for(r=n.length-1;r>=0;--r)o.push(n[r]);return this},sum:function(e){return this.eachAfter((function(n){for(var r=+e(n.data)||0,t=n.children,o=t&&t.length;--o>=0;)r+=t[o].value;n.value=r}))},sort:function(e){return this.eachBefore((function(n){n.children&&n.children.sort(e)}))},path:function(e){for(var n=this,r=function(e,n){if(e===n)return e;var r=e.ancestors(),t=n.ancestors(),o=null;e=r.pop(),n=t.pop();for(;e===n;)o=e,e=r.pop(),n=t.pop();return o}(n,e),t=[n];n!==r;)n=n.parent,t.push(n);for(var o=t.length;e!==r;)t.splice(o,0,e),e=e.parent;return t},ancestors:function(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n},descendants:function(){var e=[];return this.each((function(n){e.push(n)})),e},leaves:function(){var e=[];return this.eachBefore((function(n){n.children||e.push(n)})),e},links:function(){var e=this,n=[];return e.each((function(r){r!==e&&n.push({source:r.parent,target:r})})),n},copy:function(){return o(this).eachBefore(a)}}},66118:function(e,n,r){"use strict";function t(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}r.d(n,{Z:function(){return t}})},15050:function(e,n,r){"use strict";r.d(n,{Ym:function(){return t},yB:function(){return o},Y2:function(){return i},UD:function(){return a},iM:function(){return l}});var t=1e3,o=6e4,i=36e5,a=864e5,l=6048e5},61904:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=new Date,o=new Date;function i(e,n,r,a){function l(n){return e(n=0===arguments.length?new Date:new Date(+n)),n}return l.floor=function(n){return e(n=new Date(+n)),n},l.ceil=function(r){return e(r=new Date(r-1)),n(r,1),e(r),r},l.round=function(e){var n=l(e),r=l.ceil(e);return e-n<r-e?n:r},l.offset=function(e,r){return n(e=new Date(+e),null==r?1:Math.floor(r)),e},l.range=function(r,t,o){var i,a=[];if(r=l.ceil(r),o=null==o?1:Math.floor(o),!(r<t&&o>0))return a;do{a.push(i=new Date(+r)),n(r,o),e(r)}while(i<r&&r<t);return a},l.filter=function(r){return i((function(n){if(n>=n)for(;e(n),!r(n);)n.setTime(n-1)}),(function(e,t){if(e>=e)if(t<0)for(;++t<=0;)for(;n(e,-1),!r(e););else for(;--t>=0;)for(;n(e,1),!r(e););}))},r&&(l.count=function(n,i){return t.setTime(+n),o.setTime(+i),e(t),e(o),Math.floor(r(t,o))},l.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?l.filter(a?function(n){return a(n)%e==0}:function(n){return l.count(0,n)%e==0}):l:null}),l}},54008:function(e,n,r){"use strict";r.d(n,{X:function(){return s}});var t=r(15697),o=r(30042),i=r(80169),a=r(18907),l=["svg","api"],u=[{key:"data",group:"Base",flavors:l,help:"Chart data, which should be immutable.",description:"\n            Chart data, which must conform to this structure\n            if using the default `id` and `value` accessors:\n\n            ```\n            {\n                // must be unique for the whole dataset\n                id: string | number\n                value: number\n                children: {\n                    id: string | number\n                    value: number\n                    children: ...\n                }[]\n            }\n            ```\n\n            If using a different data structure, you must make sure\n            to adjust both `id` and `value`. Meaning you can provide\n            a completely different data structure as long as `id` and `value`\n            return the appropriate values.\n\n            Immutability of the data is important as re-computations\n            depends on it.\n        ",type:"object",required:!0},{key:"id",group:"Base",flavors:l,help:"Id accessor.",description:"\n            define id accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            id (string | number).\n        ",type:"string | Function",required:!1,defaultValue:t.lG.id},{key:"value",group:"Base",flavors:l,help:"Value accessor",description:"\n            define value accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            value (number).\n        ",type:"string | Function",required:!1,defaultValue:t.lG.value},{key:"valueFormat",group:"Base",flavors:l,help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",control:{type:"valueFormat"}},{key:"cornerRadius",help:"Round node shape.",flavors:l,type:"number",required:!1,defaultValue:t.lG.cornerRadius,group:"Base",control:{type:"range",unit:"px",min:0,max:45,step:1}}].concat((0,a.nk)(l),[(0,i.JR)(["svg","api"]),(0,a.at)({flavors:l,defaultValue:t.lG.colors}),{key:"colorBy",help:"Define the property to use to assign a color to arcs.",flavors:l,description:"\n            When using `id`, each node will get a new color,\n            and when using `depth` the nodes' color will depend on their depth.\n        ",type:"'id' | 'depth'",required:!1,defaultValue:t.lG.colorBy,group:"Style",control:{type:"radio",choices:[{label:"id",value:"id"},{label:"depth",value:"depth"}]}},{key:"inheritColorFromParent",help:"Inherit color from parent node starting from 2nd level.",flavors:l,type:"boolean",required:!1,defaultValue:t.lG.inheritColorFromParent,control:{type:"switch"},group:"Style"},{key:"childColor",help:"Defines how to compute child nodes color.",flavors:l,type:"string | object | Function",required:!1,defaultValue:t.lG.childColor,control:{type:"inheritedColor"},group:"Style"},{key:"borderWidth",help:"Node border width.",flavors:l,type:"number",required:!1,defaultValue:t.lG.borderWidth,control:{type:"lineWidth"},group:"Style"},{key:"borderColor",help:"Defines how to compute arcs color.",flavors:l,type:"string | object | Function",required:!1,defaultValue:t.lG.borderColor,control:{type:"inheritedColor"},group:"Style"}],(0,i.uE)("Style",["svg","api"]),[{key:"showcase pattern usage",flavors:["svg"],help:"Patterns.",description:"\n            You can use `defs` and `fill` properties\n            to use patterns, see\n            [dedicated guide](self:/guides/patterns)\n            for further information.\n        ",required:!1,type:"boolean",control:{type:"switch"},group:"Style"},{key:"enableArcLabels",help:"Enable/disable arc labels.",flavors:l,type:"boolean",required:!1,defaultValue:t.lG.enableArcLabels,control:{type:"switch"},group:"Arc labels"},{key:"arcLabel",help:"Defines how to get label text, can be a string (used to access current node data property) or a function which will receive the actual node data.",flavors:l,type:"string | Function",required:!1,defaultValue:t.lG.arcLabel,group:"Arc labels",control:{type:"choices",choices:["id","value","formattedValue","d => `${d.id} (${d.value})`"].map((function(e){return{label:e,value:e}}))}},{key:"arcLabelsRadiusOffset",help:"\n            Define the radius to use to determine the label position, starting from inner radius,\n            this is expressed as a ratio.\n        ",flavors:l,type:"number",required:!1,defaultValue:t.lG.arcLabelsRadiusOffset,group:"Arc labels",control:{type:"range",min:0,max:2,step:.05}},{key:"arcLabelsSkipAngle",help:"Skip label if corresponding arc's angle is lower than provided value.",flavors:l,type:"number",required:!1,defaultValue:t.lG.arcLabelsSkipAngle,group:"Arc labels",control:{type:"range",unit:"°",min:0,max:45,step:1}},{key:"arcLabelsTextColor",help:"Defines how to compute arc label text color.",flavors:l,type:"string | object | Function",required:!1,defaultValue:t.lG.arcLabelsTextColor,control:{type:"inheritedColor"},group:"Arc labels"},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",flavors:["svg"],description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer must be a function.\n\n            The layer component which will receive the chart's\n            context & computed data and must return a valid SVG element\n            for the `Sunburst` component.\n\n            The context passed to layers has the following structure:\n\n            ```\n            {\n                nodes:  ComputedDatum<RawDatum>[],\n                arcGenerator: Function\n                centerX:      number\n                centerY:      number\n                radius:       number\n            }\n            ```\n        ",required:!1,type:"Array<string | Function>",defaultValue:t.lG.layers},(0,a.y1)({flavors:["svg"],defaultValue:t.lG.isInteractive})],(0,i.$j)(["svg"],t.lG,"react-spring"),[{key:"transitionMode",flavors:["svg"],help:"Define how transitions behave.",type:"string",required:!1,defaultValue:t.lG.transitionMode,group:"Motion",control:{type:"choices",choices:o.UV.map((function(e){return{label:e,value:e}}))}},{key:"tooltip",flavors:["svg"],group:"Interactivity",type:"Function",required:!1,help:"Tooltip custom component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following data:\n            ```\n            {\n                id:         string | number,\n                value:      number,\n                depth:      number,\n                color:      string,\n                name:       string\n                loc:        number\n                percentage: number\n                // the parent datum\n                ancestor:   object\n            }\n            ```\n            You can also customize the style of the tooltip\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg"],group:"Interactivity",required:!1,help:"Showcase custom tooltip component.",type:"boolean",control:{type:"switch"}},{key:"onClick",flavors:["svg"],group:"Interactivity",type:"Function",required:!1,help:"onClick handler",description:"\n            onClick handler, will receive node data as first argument\n            & event as second one. The node data has the following shape:\n\n            ```\n            {\n                id:         string | number,\n                value:      number,\n                depth:      number,\n                color:      string,\n                name:       string\n                loc:        number\n                percentage: number\n                // the parent datum\n                ancestor:   object\n            }\n            ```\n        "}]),s=(0,i.R2)(u)},15697:function(e,n,r){"use strict";r.d(n,{hq:function(){return M},lG:function(){return b}});var t=r(27378),o=r(45434),i=r(30042),a=r(89193),l=r(24246),u=r(66118),s=r(30955);function c(){var e=1,n=1,r=0,t=!1;function o(o){var i=o.height+1;return o.x0=o.y0=r,o.x1=e,o.y1=n/i,o.eachBefore(function(e,n){return function(t){t.children&&(0,s.Z)(t,t.x0,e*(t.depth+1)/n,t.x1,e*(t.depth+2)/n);var o=t.x0,i=t.y0,a=t.x1-r,l=t.y1-r;a<o&&(o=a=(o+a)/2),l<i&&(i=l=(i+l)/2),t.x0=o,t.y0=i,t.x1=a,t.y1=l}}(n,i)),t&&o.eachBefore(u.Z),o}return o.round=function(e){return arguments.length?(t=!!e,o):t},o.size=function(r){return arguments.length?(e=+r[0],n=+r[1],o):[e,n]},o.padding=function(e){return arguments.length?(r=+e,o):r},o}var d=r(65591),h=r(30454),f=r.n(h),p=r(95099),v=r.n(p),m=r(79234);function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},g.apply(this,arguments)}var b={id:"id",value:"value",cornerRadius:0,layers:["arcs","arcLabels"],colors:{scheme:"nivo"},colorBy:"id",inheritColorFromParent:!0,childColor:{from:"color"},borderWidth:1,borderColor:"white",enableArcLabels:!1,arcLabel:"formattedValue",arcLabelsRadiusOffset:.5,arcLabelsSkipAngle:0,arcLabelsTextColor:{theme:"labels.text.fill"},animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",isInteractive:!0,defs:[],fill:[],tooltip:function(e){var n=e.id,r=e.formattedValue,t=e.color;return(0,l.jsx)(a._5,{id:n,value:r,enableChip:!0,color:t})},role:"img"},y=function(e){var n=e.center,r=e.data,o=e.arcGenerator,u=e.borderWidth,s=e.borderColor,c=e.isInteractive,d=e.onClick,h=e.onMouseEnter,f=e.onMouseMove,p=e.onMouseLeave,v=e.tooltip,m=e.transitionMode,g=(0,a.lL)(),b=g.showTooltipFromEvent,y=g.hideTooltip,w=(0,t.useMemo)((function(){if(c)return function(e,n){null==d||d(e,n)}}),[c,d]),x=(0,t.useMemo)((function(){if(c)return function(e,n){b((0,t.createElement)(v,e),n),null==h||h(e,n)}}),[c,b,v,h]),C=(0,t.useMemo)((function(){if(c)return function(e,n){b((0,t.createElement)(v,e),n),null==f||f(e,n)}}),[c,b,v,f]),M=(0,t.useMemo)((function(){if(c)return function(e,n){y(),null==p||p(e,n)}}),[c,y,p]);return(0,l.jsx)(i.Bs,{center:n,data:r,arcGenerator:o,borderWidth:u,borderColor:s,transitionMode:m,onClick:w,onMouseEnter:x,onMouseMove:C,onMouseLeave:M})},w=["isInteractive","animate","motionConfig","theme","renderWrapper"],x=function(e){var n=e.data,r=e.id,a=void 0===r?b.id:r,u=e.value,s=void 0===u?b.value:u,h=e.valueFormat,p=e.cornerRadius,g=void 0===p?b.cornerRadius:p,w=e.layers,x=void 0===w?b.layers:w,C=e.colors,M=void 0===C?b.colors:C,k=e.colorBy,L=void 0===k?b.colorBy:k,j=e.inheritColorFromParent,G=void 0===j?b.inheritColorFromParent:j,F=e.childColor,q=void 0===F?b.childColor:F,V=e.borderWidth,A=void 0===V?b.borderWidth:V,B=e.borderColor,R=void 0===B?b.borderColor:B,I=e.margin,D=e.width,T=e.height,W=e.enableArcLabels,S=void 0===W?b.enableArcLabels:W,O=e.arcLabel,P=void 0===O?b.arcLabel:O,Y=e.arcLabelsRadiusOffset,E=void 0===Y?b.arcLabelsRadiusOffset:Y,_=e.arcLabelsSkipAngle,X=void 0===_?b.arcLabelsSkipAngle:_,Z=e.arcLabelsTextColor,z=void 0===Z?b.arcLabelsTextColor:Z,U=e.arcLabelsComponent,$=e.defs,K=void 0===$?b.defs:$,N=e.fill,H=void 0===N?b.fill:N,J=e.transitionMode,Q=void 0===J?b.transitionMode:J,ee=e.isInteractive,ne=void 0===ee?b.isInteractive:ee,re=e.onClick,te=e.onMouseEnter,oe=e.onMouseLeave,ie=e.onMouseMove,ae=e.tooltip,le=void 0===ae?b.tooltip:ae,ue=e.role,se=void 0===ue?b.role:ue,ce=(0,o.Bs)(D,T,I),de=ce.innerHeight,he=ce.innerWidth,fe=ce.margin,pe=ce.outerHeight,ve=ce.outerWidth,me=(0,t.useMemo)((function(){return{radius:Math.min(he,de)/2,centerX:he/2,centerY:de/2}}),[de,he]),ge=me.centerX,be=me.centerY,ye=me.radius,we=function(e){var n=e.data,r=e.id,a=void 0===r?b.id:r,l=e.value,u=void 0===l?b.value:l,s=e.valueFormat,h=e.radius,p=e.cornerRadius,g=void 0===p?b.cornerRadius:p,y=e.colors,w=void 0===y?b.colors:y,x=e.colorBy,C=void 0===x?b.colorBy:x,M=e.inheritColorFromParent,k=void 0===M?b.inheritColorFromParent:M,L=e.childColor,j=void 0===L?b.childColor:L,G=(0,o.Fg)(),F=(0,m.U)(w,C),q=(0,m.Bf)(j,G),V=(0,o.LR)(a),A=(0,o.LR)(u),B=(0,o.O_)(s),R=(0,t.useMemo)((function(){var e,r=f()(n),t=(0,d.ZP)(r).sum(A),o=c().size([2*Math.PI,h*h])(t).descendants().slice(1),i=null!=(e=t.value)?e:0;return v()(o,"depth").reduce((function(e,n){var r,t=V(n.data),o=n.value,a=100*o/i,l=n.ancestors().map((function(e){return V(e.data)})),u={startAngle:n.x0,endAngle:n.x1,innerRadius:Math.sqrt(n.y0),outerRadius:Math.sqrt(n.y1)};n.parent&&(r=e.find((function(e){return e.id===V(n.parent.data)})));var c={id:t,path:l,value:o,percentage:a,formattedValue:s?B(o):a.toFixed(2)+"%",color:"",arc:u,data:n.data,depth:n.depth,height:n.height};return k&&r&&c.depth>1?c.color=q(r,c):c.color=F(c),[].concat(e,[c])}),[])}),[n,h,A,V,s,B,F,k,q]);return{arcGenerator:(0,i.aG)({cornerRadius:g}),nodes:R}}({data:n,id:a,value:s,valueFormat:h,radius:ye,cornerRadius:g,colors:M,colorBy:L,inheritColorFromParent:G,childColor:q}),xe=we.arcGenerator,Ce=we.nodes,Me=(0,o.yU)(K,Ce,H,{dataKey:".",colorKey:"color",targetKey:"fill"}),ke={arcs:null,arcLabels:null};x.includes("arcs")&&(ke.arcs=(0,l.jsx)(y,{center:[ge,be],data:Ce,arcGenerator:xe,borderWidth:A,borderColor:R,transitionMode:Q,isInteractive:ne,tooltip:le,onClick:re,onMouseEnter:te,onMouseLeave:oe,onMouseMove:ie},"arcs")),S&&x.includes("arcLabels")&&(ke.arcLabels=(0,l.jsx)(i.Xr,{center:[ge,be],data:Ce,label:P,radiusOffset:E,skipAngle:X,textColor:z,transitionMode:Q,component:U},"arcLabels"));var Le=function(e){var n=e.nodes,r=e.arcGenerator,o=e.centerX,i=e.centerY,a=e.radius;return(0,t.useMemo)((function(){return{nodes:n,arcGenerator:r,centerX:o,centerY:i,radius:a}}),[n,r,o,i,a])}({nodes:Ce,arcGenerator:xe,centerX:ge,centerY:be,radius:ye});return(0,l.jsx)(o.tM,{width:ve,height:pe,defs:Me,margin:fe,role:se,children:x.map((function(e,n){return void 0!==ke[e]?ke[e]:"function"==typeof e?(0,l.jsx)(t.Fragment,{children:(0,t.createElement)(e,Le)},n):null}))})},C=function(e){var n=e.isInteractive,r=void 0===n?b.isInteractive:n,t=e.animate,i=void 0===t?b.animate:t,a=e.motionConfig,u=void 0===a?b.motionConfig:a,s=e.theme,c=e.renderWrapper,d=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,w);return(0,l.jsx)(o.W2,{isInteractive:r,animate:i,motionConfig:u,theme:s,renderWrapper:c,children:(0,l.jsx)(x,g({isInteractive:r},d))})},M=function(e){return(0,l.jsx)(o.d,{children:function(n){var r=n.width,t=n.height;return(0,l.jsx)(C,g({width:r,height:t},e))}})}},32181:function(e,n,r){"use strict";r(27378);var t=r(91542),o=r(45434),i=r(62370),a=r(24246),l=t.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-1y9jta-0"})(["display:grid;background:#fff;grid-template-columns:1fr 1fr;grid-column-gap:12px;font-size:12px;border-radius:2px;box-shadow:1px 1px 0 rgba(0,0,0,0.15);"]),u=t.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-1y9jta-1"})(["font-weight:600;"]),s=t.default.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-1y9jta-2"})([""]),c=function(e){return(0,a.jsxs)(l,{style:{color:e.color},children:[(0,a.jsx)(u,{children:"id"}),(0,a.jsx)(s,{children:e.id}),(0,a.jsx)(u,{children:"value"}),(0,a.jsx)(s,{children:e.value}),(0,a.jsx)(u,{children:"percentage"}),(0,a.jsxs)(s,{children:[Math.round(100*e.percentage)/100,"%"]}),(0,a.jsx)(u,{children:"color"}),(0,a.jsx)(s,{children:e.color})]})};n.Z=(0,i.h8)({valueFormat:i.Ld,arcLabel:function(e){return"d => `${d.id} (${d.value})`"===e?function(e){return e.id+" ("+e.value+")"}:e},tooltip:function(e,n){if(n["custom tooltip example"])return c},defs:function(e,n){if(n["showcase pattern usage"])return[(0,o.l0)("lines",{background:"rgba(0, 0, 0, 0)",color:"inherit",rotation:-45,lineWidth:4,spacing:8})]},fill:function(e,n){if(n["showcase pattern usage"])return[{match:{id:"set"},id:"lines"},{match:{id:"misc"},id:"lines"}]}},{exclude:["custom tooltip example","showcase pattern usage"]})},30454:function(e,n,r){var t=r(40699);e.exports=function(e){return t(e,5)}}}]);
//# sourceMappingURL=232a304f82295f88428cbb5d9c92703203bbb8ee-a85be4b124a71447bb0c.js.map