(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8858],{69997:function(e,n,t){"use strict";function r(e){return null==e?null:o(e)}function o(e){if("function"!=typeof e)throw new Error;return e}t.d(n,{j:function(){return r},C:function(){return o}})},45228:function(e,n,t){"use strict";function r(){return 0}function o(e){return function(){return e}}t.d(n,{G:function(){return r},Z:function(){return o}})},65591:function(e,n,t){"use strict";function r(e){var n=0,t=e.children,r=t&&t.length;if(r)for(;--r>=0;)n+=t[r].value;else n=1;e.value=n}function o(e,n){var t,r,o,i,s,d=new u(e),c=+e.value&&(d.value=e.value),p=[d];for(null==n&&(n=a);t=p.pop();)if(c&&(t.value=+t.data.value),(o=n(t.data))&&(s=o.length))for(t.children=new Array(s),i=s-1;i>=0;--i)p.push(r=t.children[i]=new u(o[i])),r.parent=t,r.depth=t.depth+1;return d.eachBefore(l)}function a(e){return e.children}function i(e){e.data=e.data.data}function l(e){var n=0;do{e.height=n}while((e=e.parent)&&e.height<++n)}function u(e){this.data=e,this.depth=this.height=0,this.parent=null}t.d(n,{ZP:function(){return o}}),u.prototype=o.prototype={constructor:u,count:function(){return this.eachAfter(r)},each:function(e){var n,t,r,o,a=this,i=[a];do{for(n=i.reverse(),i=[];a=n.pop();)if(e(a),t=a.children)for(r=0,o=t.length;r<o;++r)i.push(t[r])}while(i.length);return this},eachAfter:function(e){for(var n,t,r,o=this,a=[o],i=[];o=a.pop();)if(i.push(o),n=o.children)for(t=0,r=n.length;t<r;++t)a.push(n[t]);for(;o=i.pop();)e(o);return this},eachBefore:function(e){for(var n,t,r=this,o=[r];r=o.pop();)if(e(r),n=r.children)for(t=n.length-1;t>=0;--t)o.push(n[t]);return this},sum:function(e){return this.eachAfter((function(n){for(var t=+e(n.data)||0,r=n.children,o=r&&r.length;--o>=0;)t+=r[o].value;n.value=t}))},sort:function(e){return this.eachBefore((function(n){n.children&&n.children.sort(e)}))},path:function(e){for(var n=this,t=function(e,n){if(e===n)return e;var t=e.ancestors(),r=n.ancestors(),o=null;e=t.pop(),n=r.pop();for(;e===n;)o=e,e=t.pop(),n=r.pop();return o}(n,e),r=[n];n!==t;)n=n.parent,r.push(n);for(var o=r.length;e!==t;)r.splice(o,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n},descendants:function(){var e=[];return this.each((function(n){e.push(n)})),e},leaves:function(){var e=[];return this.eachBefore((function(n){n.children||e.push(n)})),e},links:function(){var e=this,n=[];return e.each((function(t){t!==e&&n.push({source:t.parent,target:t})})),n},copy:function(){return o(this).eachBefore(i)}}},78077:function(e,n,t){"use strict";t.d(n,{X:function(){return u}});var r=t(76173),o=t(80169),a=t(18907),i=["svg","html","canvas","api"],l=[{key:"data",group:"Base",help:"Chart data, which should be immutable.",flavors:i,description:"\n            Chart data, which must conform to this structure\n            if using the default `id` and `value` accessors:\n\n            ```\n            {\n                // must be unique for the whole dataset\n                id: string | number\n                value: number\n                children: {\n                    id: string | number\n                    value: number\n                    children: ...\n                }[]\n            }\n            ```\n\n            If using a different data structure, you must make sure\n            to adjust both `id` and `value`. Meaning you can provide\n            a completely different data structure as long as `id` and `value`\n            return the appropriate values.\n\n            Immutability of the data is important as re-computations\n            depends on it.\n        ",type:"object",required:!0},{key:"id",group:"Base",flavors:i,help:"Id accessor.",description:"\n            define id accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            id (string | number).\n        ",type:"string | Function",required:!1,defaultValue:r.lG.id},{key:"value",group:"Base",flavors:i,help:"Value accessor",description:"\n            define value accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            value (number).\n        ",type:"string | Function",required:!1,defaultValue:r.lG.value},{key:"valueFormat",group:"Base",flavors:i,help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",control:{type:"valueFormat"}},{key:"padding",help:"Padding between each circle.",flavors:i,description:"\n            Padding between adjacent circles.\n            Please be aware that when zoomed\n            this value will be affected by the zooming factor\n            and is expressed in pixels. See the\n            [official d3 documentation](https://github.com/d3/d3-hierarchy#pack_padding).\n        ",type:"number",required:!1,defaultValue:r.lG.padding,group:"Base",control:{type:"range",unit:"px",min:0,max:32}},{key:"leavesOnly",help:"Only render leaf nodes (skip parent nodes).",flavors:i,type:"boolean",required:!1,defaultValue:r.lG.leavesOnly,group:"Base",control:{type:"switch"}}].concat((0,a.nk)(i),[(0,o.JR)(["svg","html","canvas"]),(0,a.at)({flavors:i,defaultValue:{scheme:"nivo"}}),{key:"colorBy",help:"Define the property to use to assign a color to circles.",description:"\n            When using `id`, each node will get a new color,\n            and when using `depth` the nodes' color will depend on their depth.\n        ",type:"'id' | 'depth'",required:!1,defaultValue:r.lG.colorBy,flavors:i,group:"Style",control:{type:"radio",choices:[{label:"id",value:"id"},{label:"depth",value:"depth"}]}},{key:"inheritColorFromParent",help:"Inherit color from parent node starting from 2nd level.",type:"boolean",required:!1,flavors:i,defaultValue:r.lG.inheritColorFromParent,control:{type:"switch"},group:"Style"},{key:"childColor",help:"Defines how to compute child nodes color, only used when inheritColorFromParent is enabled.",flavors:i,type:"string | object | Function",required:!1,defaultValue:r.lG.childColor,control:{type:"inheritedColor"},group:"Style"},{key:"borderWidth",help:"Width of circle border.",flavors:i,type:"number",required:!1,defaultValue:r.lG.borderWidth,control:{type:"lineWidth"},group:"Style"},{key:"borderColor",help:"Method to compute border color.",flavors:i,description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.lG.borderColor,control:{type:"inheritedColor"},group:"Style"}],(0,o.uE)("Style",["svg"]),[{key:"circleComponent",help:"Custom circle component.",type:"Component",flavors:["svg"],group:"Style",required:!1},{key:"enableLabels",help:"Enable/disable labels.",flavors:i,type:"boolean",required:!1,defaultValue:r.lG.enableLabels,control:{type:"switch"},group:"Labels"},{key:"label",help:"Label accessor.",flavors:i,description:"\n            Defines how to get label text,\n            can be a string (used to access current node data property)\n            or a function which will receive the actual node data.\n        ",type:"string | Function",required:!1,defaultValue:r.lG.label,group:"Labels",control:{type:"choices",choices:["id","value","formattedValue","d => `${d.id}: ${d.value}`"].map((function(e){return{label:e,value:e}}))}},{key:"labelsFilter",help:"Filter labels using custom conditions.",flavors:i,description:"\n            Please note that at this stage, nodes are already excluded\n            according to `labelsSkipRadius`.\n            \n            This can be used to only show labels at a certain depth for example:\n            \n            ```\n            <CirclePacking\n                labelsFilter={label => label.node.depth == 2}\n                {...props}\n            />\n            ```\n        ",type:"(label) => boolean",required:!1,group:"Labels"},{key:"labelsSkipRadius",help:"Skip label rendering if node radius is lower than given value, 0 to disable.",type:"number",required:!1,flavors:i,defaultValue:r.lG.labelsSkipRadius,group:"Labels",control:{type:"range",unit:"px",min:0,max:32}},{key:"labelTextColor",help:"Method to compute label text color.",flavors:i,description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.lG.labelTextColor,control:{type:"inheritedColor"},group:"Labels"},{key:"labelComponent",help:"Custom label component.",type:"Component",flavors:i,group:"Labels",required:!1},(0,a.y1)({flavors:["svg","html","canvas"],defaultValue:r.lG.isInteractive}),{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",help:"onMouseEnter handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",help:"onMouseMove handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",help:"onMouseLeave handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",help:"onClick handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"zoomedId",flavors:["svg","html","canvas"],help:"Zoom on a specific node.",description:"\n            If provided, zoom on the node having the provided ID,\n            this can be used to build a zoomable circle packing chart\n            when used in conjunction with the `onClick` property.  \n        ",type:"string | null",required:!1,group:"Interactivity"}],(0,o.$j)(["svg","html"],r.lG,"react-spring")),u=(0,o.R2)(l)},55566:function(e,n,t){"use strict";var r=t(62370);n.Z=(0,r.h8)({valueFormat:r.Ld,label:function(e){return"d => `${d.id}: ${d.value}`"===e?function(e){return e.id+": "+e.value}:e}})},45208:function(e,n,t){"use strict";t.r(n);t(27378);var r=t(4215),o=t.n(r),a=t(91311),i=t.n(a),l=t(76173),u=t(69857),s=t(12875),d=t(55566),c=t(78077),p=t(25414),h=t(24246);function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}var v=function(){return{name:"root",children:o()(800).map((function(e){return{name:"node."+e,value:i()(1,100)}}))}},g={margin:{top:20,right:20,bottom:20,left:20},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,id:"name",value:"value",valueFormat:{format:"",enabled:!1},colors:{scheme:"spectral"},colorBy:"id",inheritColorFromParent:!1,childColor:{from:"color",modifiers:[["brighter",.4]]},padding:1,leavesOnly:!0,enableLabels:!0,label:"value",labelsSkipRadius:8,labelTextColor:{from:"color",modifiers:[["darker",2.4]]},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},isInteractive:!0,animate:!1};n.default=function(){var e=(0,p.useStaticQuery)("701007200").image.childImageSharp.gatsbyImageData;return(0,h.jsx)(u.T,{name:"CirclePackingCanvas",meta:s.ou,icon:"circle-packing",flavors:s.Kk,currentFlavor:"canvas",properties:c.X,initialProperties:g,defaultProperties:l.lG,propertiesMapper:d.Z,generateData:v,getDataSize:function(){return 800},image:e,children:function(e,n,t,r){return(0,h.jsx)(l.yI,f({data:n},e,{theme:t,onClick:function(e){r({type:"click",label:e.id+": "+e.value,color:e.color,data:e})}}))}})}},76418:function(e){var n=Math.floor,t=Math.random;e.exports=function(e,r){return e+n(t()*(r-e+1))}},30454:function(e,n,t){var r=t(40699);e.exports=function(e){return r(e,5)}},91311:function(e,n,t){var r=t(76418),o=t(57535),a=t(94919),i=parseFloat,l=Math.min,u=Math.random;e.exports=function(e,n,t){if(t&&"boolean"!=typeof t&&o(e,n,t)&&(n=t=void 0),void 0===t&&("boolean"==typeof n?(t=n,n=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===n?(e=0,n=1):(e=a(e),void 0===n?(n=e,e=0):n=a(n)),e>n){var s=e;e=n,n=s}if(t||e%1||n%1){var d=u();return l(e+d*(n-e+i("1e-"+((d+"").length-1))),n)}return r(e,n)}}}]);
//# sourceMappingURL=component---src-pages-circle-packing-canvas-js-a6f9b7d246578c51598b.js.map