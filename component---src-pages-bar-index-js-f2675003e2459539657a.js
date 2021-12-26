(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[917],{3583:function(e,t,a){"use strict";function r(e){return function(){return e}}a.d(t,{Z:function(){return r}})},18957:function(e,t,a){"use strict";a.d(t,{a:function(){return i}});var r=a(61904),n=a(15050),o=(0,r.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*n.yB)/n.UD}),(function(e){return e.getDate()-1}));t.Z=o;var i=o.range},10016:function(e,t,a){"use strict";a.d(t,{X:function(){return u}});var r=a(74186),n=a(80169),o=a(18907),i=["svg","canvas","api"],l=[{key:"data",group:"Base",help:"Chart data.",type:"object[]",required:!0,flavors:i},{key:"indexBy",group:"Base",help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n\n            You can also provide a function which will\n            receive the data item and must return the desired index.\n        ",type:"string | (datum: RawDatum): string | number",flavors:i,required:!1,defaultValue:r.XB.indexBy},{key:"keys",group:"Base",help:"Keys to use to determine each serie.",type:"string[]",flavors:i,required:!1,defaultValue:r.XB.keys},{key:"groupMode",group:"Base",help:"How to group bars.",type:"'grouped' | 'stacked'",flavors:i,required:!1,defaultValue:r.XB.groupMode,control:{type:"radio",choices:[{label:"stacked",value:"stacked"},{label:"grouped",value:"grouped"}]}},{key:"layout",group:"Base",help:"How to display bars.",type:"'horizontal' | 'vertical'",flavors:i,required:!1,defaultValue:r.XB.layout,control:{type:"radio",choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"valueScale",group:"Base",type:"object",help:"value scale configuration.",defaultValue:r.XB.valueScale,flavors:i,required:!1,control:{type:"object",props:[{key:"type",help:"Scale type.",type:"string",required:!0,flavors:i,control:{type:"choices",disabled:!0,choices:["linear","symlog"].map((function(e){return{label:e,value:e}}))}}]}},{key:"indexScale",group:"Base",type:"object",help:"index scale configuration.",defaultValue:r.XB.indexScale,flavors:i,required:!1,control:{type:"object",props:[{key:"type",help:"Scale type.",type:"string",required:!0,flavors:["svg","canvas","api"],control:{type:"choices",disabled:!0,choices:["band"].map((function(e){return{label:e,value:e}}))}},{key:"round",required:!0,flavors:["svg","canvas","api"],help:"Toggle index scale (for bar width) rounding.",type:"boolean",control:{type:"switch"}}]}},{key:"reverse",group:"Base",help:"Reverse bars, starts on top instead of bottom for vertical layout and right instead of left for horizontal one.",type:"boolean",required:!1,flavors:i,defaultValue:r.XB.reverse,control:{type:"switch"}},{key:"minValue",group:"Base",help:"Minimum value.",description:"\n            Minimum value, if 'auto',\n            will use min value from the provided data.\n        ",required:!1,flavors:i,defaultValue:r.XB.minValue,type:"number | 'auto'",control:{type:"switchableRange",disabledValue:"auto",defaultValue:-1e3,min:-1e3,max:0}},{key:"maxValue",group:"Base",help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from the provided data.\n        ",required:!1,flavors:i,defaultValue:r.XB.maxValue,type:"number | 'auto'",control:{type:"switchableRange",disabledValue:"auto",defaultValue:1e3,min:0,max:1e3}},{key:"valueFormat",group:"Base",help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,flavors:i,type:"string | (value: number) => string | number",control:{type:"valueFormat"}},{key:"padding",help:"Padding between each bar (ratio).",type:"number",required:!1,flavors:i,defaultValue:r.XB.padding,group:"Base",control:{type:"range",min:0,max:.9,step:.05}},{key:"innerPadding",help:"Padding between grouped/stacked bars.",type:"number",required:!1,flavors:i,defaultValue:r.XB.innerPadding,group:"Base",control:{type:"range",unit:"px",min:0,max:10}}].concat((0,o.nk)(i),[(0,n.JR)(i),(0,o.at)({flavors:i,defaultValue:r.XB.colors}),{key:"colorBy",type:"'id' | 'indexValue'",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n        ",flavors:i,required:!1,defaultValue:r.XB.colorBy,group:"Style",control:{type:"choices",choices:[{label:"id",value:"id"},{label:"indexValue",value:"indexValue"}]}},{key:"borderRadius",help:"Rectangle border radius.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.borderRadius,group:"Style",control:{type:"range",unit:"px",min:0,max:36}},{key:"borderWidth",help:"Width of bar border.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.borderWidth,group:"Style",control:{type:"lineWidth"}},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.borderColor,group:"Style",control:{type:"inheritedColor"}}],(0,n.uE)("Style",["svg"]),[{key:"layers",flavors:["svg","canvas"],help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `grid`, `axes`, `bars`, `markers`, `legends`,\n            `annotations`. The `markers` layer is not available\n            in the canvas flavor.\n\n            You can also use this to insert extra layers to the chart,\n            this extra layer must be a function which will receive\n            the chart computed data and must return a valid SVG\n            element.\n        ",type:"Array<string | Function>",required:!1,defaultValue:r.XB.layers,group:"Customization"},{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.enableLabel,group:"Labels",control:{type:"switch"}},{key:"label",group:"Labels",help:"Define how bar labels are computed.",description:"\n            Define how bar labels are computed.\n\n            By default it will use the bar's value.\n            It accepts a string which will be used to access\n            a specific bar data property, such as\n            `'value'` or `'id'`.\n\n            You can also use a funtion if you want to\n            add more logic, this function will receive\n            the current bar's data and must return\n            the computed label which, depending on the context,\n            should return a string or an svg element (Bar) or\n            a string (BarCanvas). For example let's say you want\n            to use a label with both the id and the value,\n            you can achieve this with:\n            ```\n            label={d => `${d.id}: ${d.value}`}\n            ```\n        ",type:"string | Function",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.label},{key:"labelSkipWidth",help:"Skip label if bar width is lower than provided value, ignored if 0.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.labelSkipWidth,group:"Labels",control:{type:"range",unit:"px",min:0,max:36}},{key:"labelSkipHeight",help:"Skip label if bar height is lower than provided value, ignored if 0.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.labelSkipHeight,group:"Labels",control:{type:"range",unit:"px",min:0,max:36}},{key:"labelTextColor",help:"Defines how to compute label text color.",type:"string | object | Function",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.labelTextColor,control:{type:"inheritedColor"},group:"Labels"}],(0,o.yW)({flavors:i,xDefault:r.XB.enableGridX,yDefault:r.XB.enableGridY,values:!0}),(0,o.Do)({flavors:i}),[(0,o.y1)({flavors:["svg","canvas"],defaultValue:r.XB.isInteractive}),{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"Tooltip custom component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following data:\n            ```\n            {\n                bar: {\n                    id:             string | number,\n                    value:          number,\n                    formattedValue: string,\n                    index:          number,\n                    indexValue:     string | number,\n                    // datum associated to the current index (raw data)\n                    data:           object\n                },\n                color: string,\n                label: string\n            }\n            ```\n            You can also customize the style of the tooltip\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],group:"Interactivity",help:"Showcase custom tooltip component.",type:"boolean",required:!1,control:{type:"switch"}},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"onClick handler",description:"\n            onClick handler, will receive node data as first argument\n            & event as second one. The node data has the following shape:\n\n            ```\n            {\n                id:             string | number,\n                value:          number,\n                formattedValue: string,\n                index:          number,\n                indexValue:     string | number,\n                color:          string,\n                // datum associated to the current index (raw data)\n                data:           object\n            }\n            ```\n        "},{key:"legends",flavors:["svg","canvas"],type:"object[]",help:"Optional chart's legends.",group:"Legends",required:!1,control:{type:"array",props:(0,n.y0)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},svgDefaultProps:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){console.log(JSON.stringify(e,null,"    "))}}}}],(0,n.$j)(["svg"],r.XB,"react-spring"),[{key:"isFocusable",flavors:["svg"],required:!1,group:"Accessibility",help:"Make the root SVG element and each bar item focusable, for keyboard navigation.",description:"\n            If enabled, focusing will also reveal the tooltip if `isInteractive` is `true`,\n            when a bar gains focus and hide it on blur.\n            \n            Also note that if this option is enabled, focusing a bar will reposition the tooltip\n            at a fixed location.\n        ",type:"boolean",control:{type:"switch"}},{key:"ariaLabel",flavors:["svg"],required:!1,group:"Accessibility",help:"Main element [aria-label](https://www.w3.org/TR/wai-aria/#aria-label).",type:"string"},{key:"ariaLabelledBy",flavors:["svg"],required:!1,group:"Accessibility",help:"Main element [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby).",type:"string"},{key:"ariaDescribedBy",flavors:["svg"],required:!1,group:"Accessibility",help:"Main element [aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby).",type:"string"},{key:"barAriaLabel",flavors:["svg"],required:!1,group:"Accessibility",help:"[aria-label](https://www.w3.org/TR/wai-aria/#aria-label) for bar items.",type:"(data) => string"},{key:"barAriaLabelledBy",flavors:["svg"],required:!1,group:"Accessibility",help:"[aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby) for bar items.",type:"(data) => string"},{key:"barAriaDescribedBy",flavors:["svg"],required:!1,group:"Accessibility",help:"[aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby) for bar items.",type:"(data) => string"}]),u=(0,n.R2)(l)},38681:function(e,t,a){"use strict";a.d(t,{j2:function(){return v},wQ:function(){return g},aw:function(){return P},x$:function(){return q},ak:function(){return G},UE:function(){return E},$j:function(){return m},BO:function(){return b},Tz:function(){return L},O$:function(){return B},B7:function(){return O},gq:function(){return V},zn:function(){return F},FQ:function(){return T}});var r=a(4215),n=a.n(r),o=a(91311),i=a.n(o),l=a(19193),u=a.n(l),s=a(18957),d=a(6164),c=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},p=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],f=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],h=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],v=(Object.freeze({__proto__:null,countryCodes:p,names:f,programmingLanguages:h}),function(e,t,a){var r=void 0===a?{}:a,o=r.title,l=r.subtitle,u=r.rangeCount,s=void 0===u?5:u,d=r.measureCount,c=void 0===d?1:d,p=r.markerCount,f=void 0===p?1:p,h=r.float,v=void 0!==h&&h;return{id:e,title:o,subtitle:l,ranges:n()(s-1).reduce((function(e){var a=t-e[0];return[i()(a,v)].concat(e)}),[t]),measures:n()(c).reduce((function(e){return 0===e.length?[i()(t,v)]:[i()(e[0],v)].concat(e)}),[]),markers:n()(f).map((function(){return.6*t+i()(.4*t)}))}}),g=function(e){var t=void 0===e?{}:e,a=t.keys,r=void 0===a?f:a,o=t.size,l=void 0===o?7:o,u=t.minValue,s=void 0===u?0:u,d=t.maxValue,c=void 0===d?2e3:d,p=Math.min(r.length,l),h=r.slice(0,p);return{matrix:n()(p).map((function(){return n()(p).map((function(){return Math.random()<.66?i()(s,c/4):i()(s,c)}))})),keys:h}},m=function(e){var t=void 0===e?{}:e,a=t.rootNodeRadius,r=void 0===a?12:a,n=t.minMidNodes,o=void 0===n?6:n,l=t.maxMidNodes,u=void 0===l?16:l,s=t.midNodeRadius,d=void 0===s?8:s,c=t.minLeaves,p=void 0===c?4:c,f=t.maxLeaves,h=void 0===f?16:f,v=t.leafRadius,g=void 0===v?4:v,m={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},y=Array.from({length:i()(o,u)},(function(e,t){return{id:""+(t+1),radius:d,depth:1,color:"rgb(97, 205, 187)"}})),b=[],k=[];return y.forEach((function(e){b.push({source:"0",target:e.id,distance:50}),y.forEach((function(t){Math.random()<.04&&b.push({source:e.id,target:t.id,distance:70})})),Array.from({length:i()(p,h)},(function(t,a){return k.push({id:e.id+"."+a,radius:g,depth:2,color:"rgb(232, 193, 160)"}),b.push({source:e.id,target:e.id+"."+a,distance:30}),null}))})),y.push(m),{nodes:y=y.concat(k),links:b}};function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},y.apply(this,arguments)}var b=function(e){var t=void 0===e?{}:e,a=t.size,r=void 0===a?26:a,o=t.keys,l=void 0===o?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:o;return n()(r).map((function(){return l.reduce((function(e,t){var a,r;return void 0!==t.random?r=i().apply(void 0,t.random):void 0!==t.shuffle&&(r=u()(t.shuffle)[0]),y({},e,((a={})[t.key]=r,a))}),{})}))},k=f.map((function(e){return{id:e}})),x=function e(t,a,r){var n=a.filter((function(e){return e.source===t})).map((function(e){var a=e.target;if(a===t)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+t+" —> "+t);if(null!=r&&r.includes(a))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+a);return a}));return n.reduce((function(n,o){return n.concat(e(o,a,r?[].concat(r,[o]):[t,o]))}),n)},w=function(e){return e.reduce((function(t,a){return t[a.source]||(t[a.source]=x(a.source,e)),t}),{})},B=function(e){var t=void 0===e?{}:e,a=t.nodeCount,r=t.maxIterations,o=void 0===r?3:r,l=k.slice(0,a).map((function(e){return Object.assign({},e,{nodeColor:c()})})),s=[];return u()(l).forEach((function(e){var t=e.id;n()(i()(1,o)).forEach((function(){var e=w(s),a=u()(l.filter((function(e){return e.id!==t})).map((function(e){return e.id})))[0];e[a]&&e[a].includes(t)||e[t]&&e[t].includes(a)||s.push({source:t,target:a,value:i()(5,200)})}))})),{nodes:l,links:s}},M=function(){return i()(0,500)},C=function(){return i()(4,20)},S=function(){return i()(3,17)},V=function(e,t){var a=t.min,r=void 0===a?60:a,o=t.max,l=void 0===o?100:o,u=t.categoryCount,s=void 0===u?0:u;return{groups:e,data:e.reduce((function(e,t,a){return[].concat(e,n()(i()(r,l)).map((function(){return M()})).map((function(e,r){var o={id:a+"."+r,group:t,price:e,volume:C()};return s>0&&(o.categories=n()(s).map(S)),o})))}),[])}},T=function(e){return{groups:e.groups,data:e.data.map((function(t){var a=y({},t,{group:u()(e.groups)[0],price:M(),volume:C()});return void 0!==t.categories&&(a.categories=n()(3).map(S)),a}))}},A=c,L=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=-1);var a=h;return e&&(a=u()(a)),t<1&&(t=1+Math.round(Math.random()*(h.length-1))),a.slice(0,t).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:A()}}))},R=function(e){var t=[];return function(){var a;do{a=e.apply(void 0,arguments)}while(t.includes(a));return t.push(a),a}},j=function(){return u()(p)[0]},G=function(e){void 0===e&&(e=16);var t=["whisky","rhum","gin","vodka","cognac"],a=R(j),r=t.map((function(e){return{id:e,color:A(),data:[]}}));return n()(e).forEach((function(){var e=a();t.forEach((function(t){var a;null==(a=r.find((function(e){return e.id===t})))||a.data.push({color:A(),x:e,y:i()(0,60)})}))})),r},O=function(e,t){return e.map((function(e){return{id:e,color:A(),data:t.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},q=function(e,t,a){void 0===a&&(a=.9);var r=function(e,t){var a=(0,s.a)(e,t),r=(0,d.i$)("%Y-%m-%d");return a.map((function(e){return{value:Math.round(400*Math.random()),day:r(e)}}))}(e,t),n=Math.round(r.length*(.4*a))+Math.round(Math.random()*(r.length*(.6*a)));return u()(r).slice(0,n)},P=function(e,t){var a=void 0===t?{}:t,r=a.size,n=void 0===r?12:r,o=a.min,l=void 0===o?0:o,u=a.max,s=void 0===u?200:u,d=a.withColors,c=void 0===d||d;return p.slice(0,n).map((function(t){var a={country:t};return e.forEach((function(e){a[e]=i()(l,s),!0===c&&(a[e+"Color"]=A())})),a}))},D=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],E=function e(t,a,r){var o;void 0===t&&(t="nivo"),void 0===r&&(r=D),(a=a||r.length)>r.length&&(a=r.length);var i={name:t,color:A()};return(null==(o=r)?void 0:o.length)>0?i.children=n()(a).map((function(t,a){var n,o=r[a];return e(o[0],null,null!=(n=o[1])?n:[])})):i.loc=Math.round(2e5*Math.random()),i},X=["chardonay","carmenere","syrah"],I=["fruity","bitter","heavy","strong","sunny"],F=function(e){var t=void 0===e?{}:e,a=t.randMin,r=void 0===a?20:a,n=t.randMax,o=void 0===n?120:n;return{data:I.map((function(e){var t={taste:e};return X.forEach((function(e){t[e]=i()(r,o)})),t})),keys:X}}},47885:function(e,t,a){"use strict";a.d(t,{i:function(){return o},g:function(){return i}});var r=a(38681),n=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],o=function(){return{data:(0,r.aw)(n.slice(0,6),{size:7,max:200}),keys:n.slice(0,6)}},i=function(){return{data:(0,r.aw)(n,{size:21,max:200}),keys:n}}},22726:function(e,t,a){"use strict";a(27378);var r=a(91542),n=a(62370),o=a(24246),i=["color"];var l=r.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-ix4uwo-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),u=r.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-ix4uwo-1"})(["font-weight:600;"]),s=r.default.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-ix4uwo-2"})([""]),d=function(e){var t=e.color,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i);return(0,o.jsxs)(l,{style:{color:t},children:[(0,o.jsx)(u,{children:"id"}),(0,o.jsx)(s,{children:a.id}),(0,o.jsx)(u,{children:"value"}),(0,o.jsx)(s,{children:a.value}),(0,o.jsx)(u,{children:"formattedValue"}),(0,o.jsx)(s,{children:a.formattedValue}),(0,o.jsx)(u,{children:"index"}),(0,o.jsx)(s,{children:a.index}),(0,o.jsx)(u,{children:"indexValue"}),(0,o.jsx)(s,{children:a.indexValue}),(0,o.jsx)(u,{children:"color"}),(0,o.jsx)(s,{children:t})]})};t.Z=(0,n.h8)({valueFormat:n.Ld,axisTop:(0,n.h6)("top"),axisRight:(0,n.h6)("right"),axisBottom:(0,n.h6)("bottom"),axisLeft:(0,n.h6)("left"),tooltip:function(e,t){if(t["custom tooltip example"])return d}},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft","custom tooltip example"]})},66907:function(e,t,a){"use strict";a.r(t);a(27378);var r=a(45434),n=a(74186),o=a(69857),i=a(8029),l=a(47885),u=a(22726),s=a(10016),d=a(24246);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}var p=function(){},f={indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,innerPadding:0,minValue:"auto",maxValue:"auto",groupMode:"stacked",layout:"vertical",reverse:!1,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},valueFormat:{format:"",enabled:!1},colors:{scheme:"nivo"},colorBy:"id",defs:[(0,r.Qr)("dots",{background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0}),(0,r.l0)("lines",{background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10})],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderRadius:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,enableLabel:!0,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemOpacity:1}}]}],isInteractive:!0,"custom tooltip example":!1,tooltip:null,animate:!0,motionConfig:"default",role:"application",isFocusable:!1,ariaLabel:"Nivo bar chart demo",barAriaLabel:function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}};t.default=function(){return(0,d.jsx)(o.T,{name:"Bar",meta:i.$Q,icon:"bar",flavors:i.Kk,currentFlavor:"svg",properties:s.X,initialProperties:f,defaultProperties:n.XB,propertiesMapper:u.Z,codePropertiesMapper:function(e,t){return c({keys:t.keys},e,{tooltip:e.tooltip?p:void 0})},generateData:l.i,getTabData:function(e){return e.data},children:function(e,t,a,r){return(0,d.jsx)(n.jM,c({data:t.data,keys:t.keys},e,{theme:a,onClick:function(e){return r({type:"click",label:"[bar] "+e.id+" - "+e.indexValue+": "+e.value,color:e.color,data:e})}}))}})}},91573:function(e,t,a){var r=a(37561),n=a(74305);e.exports=function(e){return n(r(e))}},76418:function(e){var t=Math.floor,a=Math.random;e.exports=function(e,r){return e+t(a()*(r-e+1))}},16326:function(e,t,a){var r=a(74305),n=a(58185);e.exports=function(e){return r(n(e))}},42231:function(e,t,a){var r=a(66070);e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},74305:function(e,t,a){var r=a(76418);e.exports=function(e,t){var a=-1,n=e.length,o=n-1;for(t=void 0===t?n:t;++a<t;){var i=r(a,o),l=e[i];e[i]=e[a],e[a]=l}return e.length=t,e}},91311:function(e,t,a){var r=a(76418),n=a(57535),o=a(94919),i=parseFloat,l=Math.min,u=Math.random;e.exports=function(e,t,a){if(a&&"boolean"!=typeof a&&n(e,t,a)&&(t=a=void 0),void 0===a&&("boolean"==typeof t?(a=t,t=void 0):"boolean"==typeof e&&(a=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=o(e),void 0===t?(t=e,e=0):t=o(t)),e>t){var s=e;e=t,t=s}if(a||e%1||t%1){var d=u();return l(e+d*(t-e+i("1e-"+((d+"").length-1))),t)}return r(e,t)}},19193:function(e,t,a){var r=a(91573),n=a(16326),o=a(19785);e.exports=function(e){return(o(e)?r:n)(e)}},58185:function(e,t,a){var r=a(42231),n=a(50098);e.exports=function(e){return null==e?[]:r(e,n(e))}}}]);
//# sourceMappingURL=component---src-pages-bar-index-js-f2675003e2459539657a.js.map