(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4955],{69997:function(e,n,t){"use strict";function r(e){return null==e?null:o(e)}function o(e){if("function"!=typeof e)throw new Error;return e}t.d(n,{j:function(){return r},C:function(){return o}})},45228:function(e,n,t){"use strict";function r(){return 0}function o(e){return function(){return e}}t.d(n,{G:function(){return r},Z:function(){return o}})},65591:function(e,n,t){"use strict";function r(e){var n=0,t=e.children,r=t&&t.length;if(r)for(;--r>=0;)n+=t[r].value;else n=1;e.value=n}function o(e,n){var t,r,o,a,c,s=new l(e),d=+e.value&&(s.value=e.value),f=[s];for(null==n&&(n=i);t=f.pop();)if(d&&(t.value=+t.data.value),(o=n(t.data))&&(c=o.length))for(t.children=new Array(c),a=c-1;a>=0;--a)f.push(r=t.children[a]=new l(o[a])),r.parent=t,r.depth=t.depth+1;return s.eachBefore(u)}function i(e){return e.children}function a(e){e.data=e.data.data}function u(e){var n=0;do{e.height=n}while((e=e.parent)&&e.height<++n)}function l(e){this.data=e,this.depth=this.height=0,this.parent=null}t.d(n,{ZP:function(){return o}}),l.prototype=o.prototype={constructor:l,count:function(){return this.eachAfter(r)},each:function(e){var n,t,r,o,i=this,a=[i];do{for(n=a.reverse(),a=[];i=n.pop();)if(e(i),t=i.children)for(r=0,o=t.length;r<o;++r)a.push(t[r])}while(a.length);return this},eachAfter:function(e){for(var n,t,r,o=this,i=[o],a=[];o=i.pop();)if(a.push(o),n=o.children)for(t=0,r=n.length;t<r;++t)i.push(n[t]);for(;o=a.pop();)e(o);return this},eachBefore:function(e){for(var n,t,r=this,o=[r];r=o.pop();)if(e(r),n=r.children)for(t=n.length-1;t>=0;--t)o.push(n[t]);return this},sum:function(e){return this.eachAfter((function(n){for(var t=+e(n.data)||0,r=n.children,o=r&&r.length;--o>=0;)t+=r[o].value;n.value=t}))},sort:function(e){return this.eachBefore((function(n){n.children&&n.children.sort(e)}))},path:function(e){for(var n=this,t=function(e,n){if(e===n)return e;var t=e.ancestors(),r=n.ancestors(),o=null;e=t.pop(),n=r.pop();for(;e===n;)o=e,e=t.pop(),n=r.pop();return o}(n,e),r=[n];n!==t;)n=n.parent,r.push(n);for(var o=r.length;e!==t;)r.splice(o,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n},descendants:function(){var e=[];return this.each((function(n){e.push(n)})),e},leaves:function(){var e=[];return this.eachBefore((function(n){n.children||e.push(n)})),e},links:function(){var e=this,n=[];return e.each((function(t){t!==e&&n.push({source:t.parent,target:t})})),n},copy:function(){return o(this).eachBefore(a)}}},18957:function(e,n,t){"use strict";t.d(n,{a:function(){return a}});var r=t(61904),o=t(15050),i=(0,r.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,n){e.setDate(e.getDate()+n)}),(function(e,n){return(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*o.yB)/o.UD}),(function(e){return e.getDate()-1}));n.Z=i;var a=i.range},15050:function(e,n,t){"use strict";t.d(n,{Ym:function(){return r},yB:function(){return o},Y2:function(){return i},UD:function(){return a},iM:function(){return u}});var r=1e3,o=6e4,i=36e5,a=864e5,u=6048e5},61904:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=new Date,o=new Date;function i(e,n,t,a){function u(n){return e(n=0===arguments.length?new Date:new Date(+n)),n}return u.floor=function(n){return e(n=new Date(+n)),n},u.ceil=function(t){return e(t=new Date(t-1)),n(t,1),e(t),t},u.round=function(e){var n=u(e),t=u.ceil(e);return e-n<t-e?n:t},u.offset=function(e,t){return n(e=new Date(+e),null==t?1:Math.floor(t)),e},u.range=function(t,r,o){var i,a=[];if(t=u.ceil(t),o=null==o?1:Math.floor(o),!(t<r&&o>0))return a;do{a.push(i=new Date(+t)),n(t,o),e(t)}while(i<t&&t<r);return a},u.filter=function(t){return i((function(n){if(n>=n)for(;e(n),!t(n);)n.setTime(n-1)}),(function(e,r){if(e>=e)if(r<0)for(;++r<=0;)for(;n(e,-1),!t(e););else for(;--r>=0;)for(;n(e,1),!t(e););}))},t&&(u.count=function(n,i){return r.setTime(+n),o.setTime(+i),e(r),e(o),Math.floor(t(r,o))},u.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?u.filter(a?function(n){return a(n)%e==0}:function(n){return u.count(0,n)%e==0}):u:null}),u}},78077:function(e,n,t){"use strict";t.d(n,{X:function(){return l}});var r=t(76173),o=t(80169),i=t(18907),a=["svg","html","canvas","api"],u=[{key:"data",group:"Base",help:"Chart data, which should be immutable.",flavors:a,description:"\n            Chart data, which must conform to this structure\n            if using the default `id` and `value` accessors:\n\n            ```\n            {\n                // must be unique for the whole dataset\n                id: string | number\n                value: number\n                children: {\n                    id: string | number\n                    value: number\n                    children: ...\n                }[]\n            }\n            ```\n\n            If using a different data structure, you must make sure\n            to adjust both `id` and `value`. Meaning you can provide\n            a completely different data structure as long as `id` and `value`\n            return the appropriate values.\n\n            Immutability of the data is important as re-computations\n            depends on it.\n        ",type:"object",required:!0},{key:"id",group:"Base",flavors:a,help:"Id accessor.",description:"\n            define id accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            id (string | number).\n        ",type:"string | Function",required:!1,defaultValue:r.lG.id},{key:"value",group:"Base",flavors:a,help:"Value accessor",description:"\n            define value accessor, if string given,\n            will use `node[value]`,\n            if function given, it will be invoked\n            for each node and will receive the node as\n            first argument, it must return the node\n            value (number).\n        ",type:"string | Function",required:!1,defaultValue:r.lG.value},{key:"valueFormat",group:"Base",flavors:a,help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",control:{type:"valueFormat"}},{key:"padding",help:"Padding between each circle.",flavors:a,description:"\n            Padding between adjacent circles.\n            Please be aware that when zoomed\n            this value will be affected by the zooming factor\n            and is expressed in pixels. See the\n            [official d3 documentation](https://github.com/d3/d3-hierarchy#pack_padding).\n        ",type:"number",required:!1,defaultValue:r.lG.padding,group:"Base",control:{type:"range",unit:"px",min:0,max:32}},{key:"leavesOnly",help:"Only render leaf nodes (skip parent nodes).",flavors:a,type:"boolean",required:!1,defaultValue:r.lG.leavesOnly,group:"Base",control:{type:"switch"}}].concat((0,i.nk)(a),[(0,o.JR)(["svg","html","canvas"]),(0,i.at)({flavors:a,defaultValue:{scheme:"nivo"}}),{key:"colorBy",help:"Define the property to use to assign a color to circles.",description:"\n            When using `id`, each node will get a new color,\n            and when using `depth` the nodes' color will depend on their depth.\n        ",type:"'id' | 'depth'",required:!1,defaultValue:r.lG.colorBy,flavors:a,group:"Style",control:{type:"radio",choices:[{label:"id",value:"id"},{label:"depth",value:"depth"}]}},{key:"inheritColorFromParent",help:"Inherit color from parent node starting from 2nd level.",type:"boolean",required:!1,flavors:a,defaultValue:r.lG.inheritColorFromParent,control:{type:"switch"},group:"Style"},{key:"childColor",help:"Defines how to compute child nodes color, only used when inheritColorFromParent is enabled.",flavors:a,type:"string | object | Function",required:!1,defaultValue:r.lG.childColor,control:{type:"inheritedColor"},group:"Style"},{key:"borderWidth",help:"Width of circle border.",flavors:a,type:"number",required:!1,defaultValue:r.lG.borderWidth,control:{type:"lineWidth"},group:"Style"},{key:"borderColor",help:"Method to compute border color.",flavors:a,description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.lG.borderColor,control:{type:"inheritedColor"},group:"Style"}],(0,o.uE)("Style",["svg"]),[{key:"circleComponent",help:"Custom circle component.",type:"Component",flavors:["svg"],group:"Style",required:!1},{key:"enableLabels",help:"Enable/disable labels.",flavors:a,type:"boolean",required:!1,defaultValue:r.lG.enableLabels,control:{type:"switch"},group:"Labels"},{key:"label",help:"Label accessor.",flavors:a,description:"\n            Defines how to get label text,\n            can be a string (used to access current node data property)\n            or a function which will receive the actual node data.\n        ",type:"string | Function",required:!1,defaultValue:r.lG.label,group:"Labels",control:{type:"choices",choices:["id","value","formattedValue","d => `${d.id}: ${d.value}`"].map((function(e){return{label:e,value:e}}))}},{key:"labelsFilter",help:"Filter labels using custom conditions.",flavors:a,description:"\n            Please note that at this stage, nodes are already excluded\n            according to `labelsSkipRadius`.\n            \n            This can be used to only show labels at a certain depth for example:\n            \n            ```\n            <CirclePacking\n                labelsFilter={label => label.node.depth == 2}\n                {...props}\n            />\n            ```\n        ",type:"(label) => boolean",required:!1,group:"Labels"},{key:"labelsSkipRadius",help:"Skip label rendering if node radius is lower than given value, 0 to disable.",type:"number",required:!1,flavors:a,defaultValue:r.lG.labelsSkipRadius,group:"Labels",control:{type:"range",unit:"px",min:0,max:32}},{key:"labelTextColor",help:"Method to compute label text color.",flavors:a,description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.lG.labelTextColor,control:{type:"inheritedColor"},group:"Labels"},{key:"labelComponent",help:"Custom label component.",type:"Component",flavors:a,group:"Labels",required:!1},(0,i.y1)({flavors:["svg","html","canvas"],defaultValue:r.lG.isInteractive}),{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",help:"onMouseEnter handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",help:"onMouseMove handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",help:"onMouseLeave handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",help:"onClick handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"zoomedId",flavors:["svg","html","canvas"],help:"Zoom on a specific node.",description:"\n            If provided, zoom on the node having the provided ID,\n            this can be used to build a zoomable circle packing chart\n            when used in conjunction with the `onClick` property.  \n        ",type:"string | null",required:!1,group:"Interactivity"}],(0,o.$j)(["svg","html"],r.lG,"react-spring")),l=(0,o.R2)(u)},38681:function(e,n,t){"use strict";t.d(n,{j2:function(){return v},wQ:function(){return m},aw:function(){return V},x$:function(){return P},ak:function(){return I},UE:function(){return R},$j:function(){return g},BO:function(){return b},Tz:function(){return x},O$:function(){return w},B7:function(){return D},gq:function(){return A},zn:function(){return j},FQ:function(){return L}});var r=t(4215),o=t.n(r),i=t(91311),a=t.n(i),u=t(19193),l=t.n(u),c=t(18957),s=t(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],p=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],v=(Object.freeze({__proto__:null,countryCodes:f,names:h,programmingLanguages:p}),function(e,n,t){var r=void 0===t?{}:t,i=r.title,u=r.subtitle,l=r.rangeCount,c=void 0===l?5:l,s=r.measureCount,d=void 0===s?1:s,f=r.markerCount,h=void 0===f?1:f,p=r.float,v=void 0!==p&&p;return{id:e,title:i,subtitle:u,ranges:o()(c-1).reduce((function(e){var t=n-e[0];return[a()(t,v)].concat(e)}),[n]),measures:o()(d).reduce((function(e){return 0===e.length?[a()(n,v)]:[a()(e[0],v)].concat(e)}),[]),markers:o()(h).map((function(){return.6*n+a()(.4*n)}))}}),m=function(e){var n=void 0===e?{}:e,t=n.keys,r=void 0===t?h:t,i=n.size,u=void 0===i?7:i,l=n.minValue,c=void 0===l?0:l,s=n.maxValue,d=void 0===s?2e3:s,f=Math.min(r.length,u),p=r.slice(0,f);return{matrix:o()(f).map((function(){return o()(f).map((function(){return Math.random()<.66?a()(c,d/4):a()(c,d)}))})),keys:p}},g=function(e){var n=void 0===e?{}:e,t=n.rootNodeRadius,r=void 0===t?12:t,o=n.minMidNodes,i=void 0===o?6:o,u=n.maxMidNodes,l=void 0===u?16:u,c=n.midNodeRadius,s=void 0===c?8:c,d=n.minLeaves,f=void 0===d?4:d,h=n.maxLeaves,p=void 0===h?16:h,v=n.leafRadius,m=void 0===v?4:v,g={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},y=Array.from({length:a()(i,l)},(function(e,n){return{id:""+(n+1),radius:s,depth:1,color:"rgb(97, 205, 187)"}})),b=[],k=[];return y.forEach((function(e){b.push({source:"0",target:e.id,distance:50}),y.forEach((function(n){Math.random()<.04&&b.push({source:e.id,target:n.id,distance:70})})),Array.from({length:a()(f,p)},(function(n,t){return k.push({id:e.id+"."+t,radius:m,depth:2,color:"rgb(232, 193, 160)"}),b.push({source:e.id,target:e.id+"."+t,distance:30}),null}))})),y.push(g),{nodes:y=y.concat(k),links:b}};function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}var b=function(e){var n=void 0===e?{}:e,t=n.size,r=void 0===t?26:t,i=n.keys,u=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return u.reduce((function(e,n){var t,r;return void 0!==n.random?r=a().apply(void 0,n.random):void 0!==n.shuffle&&(r=l()(n.shuffle)[0]),y({},e,((t={})[n.key]=r,t))}),{})}))},k=h.map((function(e){return{id:e}})),C=function e(n,t,r){var o=t.filter((function(e){return e.source===n})).map((function(e){var t=e.target;if(t===n)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+n+" —> "+n);if(null!=r&&r.includes(t))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+t);return t}));return o.reduce((function(o,i){return o.concat(e(i,t,r?[].concat(r,[i]):[n,i]))}),o)},M=function(e){return e.reduce((function(n,t){return n[t.source]||(n[t.source]=C(t.source,e)),n}),{})},w=function(e){var n=void 0===e?{}:e,t=n.nodeCount,r=n.maxIterations,i=void 0===r?3:r,u=k.slice(0,t).map((function(e){return Object.assign({},e,{nodeColor:d()})})),c=[];return l()(u).forEach((function(e){var n=e.id;o()(a()(1,i)).forEach((function(){var e=M(c),t=l()(u.filter((function(e){return e.id!==n})).map((function(e){return e.id})))[0];e[t]&&e[t].includes(n)||e[n]&&e[n].includes(t)||c.push({source:n,target:t,value:a()(5,200)})}))})),{nodes:u,links:c}},B=function(){return a()(0,500)},G=function(){return a()(4,20)},S=function(){return a()(3,17)},A=function(e,n){var t=n.min,r=void 0===t?60:t,i=n.max,u=void 0===i?100:i,l=n.categoryCount,c=void 0===l?0:l;return{groups:e,data:e.reduce((function(e,n,t){return[].concat(e,o()(a()(r,u)).map((function(){return B()})).map((function(e,r){var i={id:t+"."+r,group:n,price:e,volume:G()};return c>0&&(i.categories=o()(c).map(S)),i})))}),[])}},L=function(e){return{groups:e.groups,data:e.data.map((function(n){var t=y({},n,{group:l()(e.groups)[0],price:B(),volume:G()});return void 0!==n.categories&&(t.categories=o()(3).map(S)),t}))}},T=d,x=function(e,n){void 0===e&&(e=!0),void 0===n&&(n=-1);var t=p;return e&&(t=l()(t)),n<1&&(n=1+Math.round(Math.random()*(p.length-1))),t.slice(0,n).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:T()}}))},E=function(e){var n=[];return function(){var t;do{t=e.apply(void 0,arguments)}while(n.includes(t));return n.push(t),t}},F=function(){return l()(f)[0]},I=function(e){void 0===e&&(e=16);var n=["whisky","rhum","gin","vodka","cognac"],t=E(F),r=n.map((function(e){return{id:e,color:T(),data:[]}}));return o()(e).forEach((function(){var e=t();n.forEach((function(n){var t;null==(t=r.find((function(e){return e.id===n})))||t.data.push({color:T(),x:e,y:a()(0,60)})}))})),r},D=function(e,n){return e.map((function(e){return{id:e,color:T(),data:n.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},P=function(e,n,t){void 0===t&&(t=.9);var r=function(e,n){var t=(0,c.a)(e,n),r=(0,s.i$)("%Y-%m-%d");return t.map((function(e){return{value:Math.round(400*Math.random()),day:r(e)}}))}(e,n),o=Math.round(r.length*(.4*t))+Math.round(Math.random()*(r.length*(.6*t)));return l()(r).slice(0,o)},V=function(e,n){var t=void 0===n?{}:n,r=t.size,o=void 0===r?12:r,i=t.min,u=void 0===i?0:i,l=t.max,c=void 0===l?200:l,s=t.withColors,d=void 0===s||s;return f.slice(0,o).map((function(n){var t={country:n};return e.forEach((function(e){t[e]=a()(u,c),!0===d&&(t[e+"Color"]=T())})),t}))},O=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],R=function e(n,t,r){var i;void 0===n&&(n="nivo"),void 0===r&&(r=O),(t=t||r.length)>r.length&&(t=r.length);var a={name:n,color:T()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(t).map((function(n,t){var o,i=r[t];return e(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},N=["chardonay","carmenere","syrah"],q=["fruity","bitter","heavy","strong","sunny"],j=function(e){var n=void 0===e?{}:e,t=n.randMin,r=void 0===t?20:t,o=n.randMax,i=void 0===o?120:o;return{data:q.map((function(e){var n={taste:e};return N.forEach((function(e){n[e]=a()(r,i)})),n})),keys:N}}},55566:function(e,n,t){"use strict";var r=t(62370);n.Z=(0,r.h8)({valueFormat:r.Ld,label:function(e){return"d => `${d.id}: ${d.value}`"===e?function(e){return e.id+": "+e.value}:e}})},89502:function(e,n,t){"use strict";t.r(n);t(27378);var r=t(76173),o=t(38681),i=t(69857),a=t(12875),u=t(55566),l=t(78077),c=t(24246);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var d=function(){return(0,o.UE)()},f={margin:{top:20,right:20,bottom:20,left:20},identity:"name",value:"loc",valueFormat:{format:"",enabled:!1},colors:{scheme:"spectral"},colorBy:"depth",inheritColorFromParent:!1,childColor:{from:"color",modifiers:[["brighter",.4]]},padding:2,leavesOnly:!1,enableLabels:!0,label:"id",labelsFilter:function(e){return 2===e.node.depth},labelsSkipRadius:10,labelTextColor:"#000000",borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},animate:!0,motionConfig:"gentle",isInteractive:!0};n.default=function(){return(0,c.jsx)(i.T,{name:"CirclePackingHtml",meta:a.a4,icon:"circle-packing",flavors:a.Kk,currentFlavor:"html",properties:l.X,initialProperties:f,defaultProperties:r.lG,propertiesMapper:u.Z,generateData:d,dataKey:"root",children:function(e,n,t,o){return(0,c.jsx)(r._3,s({root:n},e,{theme:t,onClick:function(e){o({type:"click",label:e.id+": "+e.value,color:e.color,data:e})}}))}})}},91573:function(e,n,t){var r=t(37561),o=t(74305);e.exports=function(e){return o(r(e))}},76418:function(e){var n=Math.floor,t=Math.random;e.exports=function(e,r){return e+n(t()*(r-e+1))}},16326:function(e,n,t){var r=t(74305),o=t(58185);e.exports=function(e){return r(o(e))}},42231:function(e,n,t){var r=t(66070);e.exports=function(e,n){return r(n,(function(n){return e[n]}))}},74305:function(e,n,t){var r=t(76418);e.exports=function(e,n){var t=-1,o=e.length,i=o-1;for(n=void 0===n?o:n;++t<n;){var a=r(t,i),u=e[a];e[a]=e[t],e[t]=u}return e.length=n,e}},30454:function(e,n,t){var r=t(40699);e.exports=function(e){return r(e,5)}},91311:function(e,n,t){var r=t(76418),o=t(57535),i=t(94919),a=parseFloat,u=Math.min,l=Math.random;e.exports=function(e,n,t){if(t&&"boolean"!=typeof t&&o(e,n,t)&&(n=t=void 0),void 0===t&&("boolean"==typeof n?(t=n,n=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===n?(e=0,n=1):(e=i(e),void 0===n?(n=e,e=0):n=i(n)),e>n){var c=e;e=n,n=c}if(t||e%1||n%1){var s=l();return u(e+s*(n-e+a("1e-"+((s+"").length-1))),n)}return r(e,n)}},19193:function(e,n,t){var r=t(91573),o=t(16326),i=t(19785);e.exports=function(e){return(i(e)?r:o)(e)}},58185:function(e,n,t){var r=t(42231),o=t(50098);e.exports=function(e){return null==e?[]:r(e,o(e))}}}]);
//# sourceMappingURL=component---src-pages-circle-packing-html-js-4f37bf3b8b5dfb92c8dc.js.map