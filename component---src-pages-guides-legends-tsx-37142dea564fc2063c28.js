(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[77],{45395:function(e,t,n){"use strict";var r,o,i=n(91542),a=n(51302);function l(e,t){return t||(t=e.slice(0)),e.raw=t,e}t.Z=i.default.div.withConfig({displayName:"PageContent",componentId:"sc-5c9r0p-0"})(["margin:0 50px;position:relative;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 30px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px;\n        }\n    "]))))},80500:function(e,t,n){"use strict";n.d(t,{Xh:function(){return c},rm:function(){return s},Zb:function(){return d}});var r,o,i=n(91542),a=n(51302);function l(e,t){return t||(t=e.slice(0)),e.raw=t,e}var c=i.default.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1aonzv1-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(e){return e.theme.colors.cardBackground})),s=i.default.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1aonzv1-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "])))),d=i.default.div.withConfig({displayName:"styled__Card",componentId:"sc-1aonzv1-2"})(["background:",";box-shadow:",";"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.cardShadow}))},61450:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(27378),o=n(45434),i=n(90230),a=n(24632),l=n(95546),c=n(45395),s=n(48159),d=n.n(s),u=n(47425),h=n(24246);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var b=["top-left","top","top-right","right","bottom-right","bottom","bottom-left","left","center"],p=[{anchor:"top",translateX:-160,translateY:-30},{anchor:"left",translateX:-30,translateY:50},{anchor:"right",translateX:-30,translateY:-60},{anchor:"bottom",translateX:160,translateY:30}],m=30,g={containerWidth:740,containerHeight:240,itemWidth:120,itemHeight:16,itemsSpacing:4,direction:"column"},y=function(){var e=(0,i.F)();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Legend position"}),(0,h.jsxs)("p",{children:["The legend can be positioned in your chart area using the ",(0,h.jsx)("code",{children:"anchor"})," ","property.",(0,h.jsx)("br",{}),"You have 9 available directives:"]}),(0,h.jsxs)("svg",{width:g.containerWidth+60,height:g.containerHeight+60,style:{background:e.colors.cardBackground},children:[(0,h.jsx)("text",{x:g.containerWidth/2+m,y:15,textAnchor:"middle",style:{alignmentBaseline:"middle",fill:e.colors.textLight,fontSize:"14px"},children:"margin"}),(0,h.jsxs)("g",{transform:"translate(30,30)",children:[(0,h.jsx)("rect",{fill:e.colors.background,width:g.containerWidth,height:g.containerHeight}),b.map((function(t){return(0,r.createElement)(u.$6,f({},g,{itemTextColor:e.colors.text,key:t,anchor:t,data:[{id:"a",label:t,color:e.colors.accent},{id:"b",label:"...",color:e.colors.accent},{id:"c",label:"...",color:e.colors.accent}]}))}))]})]}),(0,h.jsxs)("p",{children:["The legend's anchor is relative to the inner chart area (with margin applied), but depending on the chart type, you'll probably want to move it outside of this area.",(0,h.jsx)("br",{}),"That's where ",(0,h.jsx)("code",{children:"translateX"})," & ",(0,h.jsx)("code",{children:"translateY"})," come into play, allowing to adjust the legend position from its original anchor."]}),(0,h.jsxs)("svg",{width:g.containerWidth+60,height:g.containerHeight+60,style:{background:e.colors.cardBackground},children:[(0,h.jsx)("text",{x:g.containerWidth/2+m,y:15,textAnchor:"middle",style:{alignmentBaseline:"middle",fill:e.colors.textLight,fontSize:"14px"},children:"margin"}),(0,h.jsxs)("g",{transform:"translate(30,30)",children:[(0,h.jsx)("rect",{fill:e.colors.background,width:g.containerWidth,height:g.containerHeight}),p.map((function(t,n){return(0,h.jsx)(u.$6,f({},g,d()(t,["translateX","translateY"]),{itemTextColor:e.colors.text,data:[{id:t.anchor,label:t.anchor+" (regular)",color:e.colors.text}]}),n)})),p.map((function(t,n){return(0,h.jsx)(u.$6,f({},g,t,{itemTextColor:e.colors.text,data:[{id:"a",label:t.anchor+" (translated)",color:e.colors.accent},{id:"b",label:"translateX: "+t.translateX,color:e.colors.accent},{id:"c",label:"translateY: "+t.translateY,color:e.colors.accent}]}),n)}))]})]})]})};function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var v={containerWidth:800,containerHeight:90,itemWidth:70,itemHeight:24},j=function(){var e=(0,i.F)();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Legend direction"}),(0,h.jsxs)("p",{children:["Legends support two directions, using the ",(0,h.jsx)("code",{children:"direction"})," property,"," ",(0,h.jsx)("code",{children:"column"})," or ",(0,h.jsx)("code",{children:"row"}),"."]}),(0,h.jsxs)("svg",{width:v.containerWidth,height:v.containerHeight,children:[(0,h.jsx)(u.$6,x({},v,{itemTextColor:e.colors.text,anchor:"left",direction:"column",data:[{id:"a",label:"column",color:e.colors.accent},{id:"b",label:"column",color:e.colors.accent},{id:"c",label:"column",color:e.colors.accent}]})),(0,h.jsx)(u.$6,x({},v,{itemTextColor:e.colors.text,anchor:"left",translateX:260,direction:"row",data:[{id:"a",label:"row",color:e.colors.accent},{id:"b",label:"row",color:e.colors.accent},{id:"c",label:"row",color:e.colors.accent}]}))]})]})};function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var S=["left-to-right","right-to-left","top-to-bottom","bottom-to-top"],k=function(){var e=(0,i.F)(),t={x:0,y:0,width:160,height:40,data:{id:"demo",color:e.colors.accent}};return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Legend item direction"}),(0,h.jsxs)("p",{children:["The ",(0,h.jsx)("code",{children:"itemDirection"})," property defines how symbol and label are positioned.",(0,h.jsx)("br",{}),"You have 4 available directives:"]}),(0,h.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:S.map((function(n){return(0,h.jsx)("div",{style:{background:e.colors.cardBackground,padding:"10px 15px",borderRadius:2,display:"flex",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:(0,h.jsx)("svg",{width:t.width,height:t.height,children:(0,h.jsx)(u.Ae,w({},t,{textColor:e.colors.text,data:w({},t.data,{label:n}),direction:n}))})},n)}))}),(0,h.jsxs)("p",{children:["The behavior is slightly different if you set ",(0,h.jsx)("code",{children:"justify"})," to"," ",(0,h.jsx)("code",{children:"true"})," as the label will be positioned at the opposite of the symbol, filling up the whole width/height of the legend's item."]}),(0,h.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:S.map((function(n){return(0,h.jsx)("div",{style:{background:e.colors.cardBackground,padding:"9px 12px",display:"flex",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.1)"},children:(0,h.jsx)("svg",{width:t.width,height:t.height,children:(0,h.jsx)(u.Ae,w({},t,{textColor:e.colors.text,data:w({},t.data,{label:n}),direction:n,justify:!0}))},n)},n)}))})]})},C=n(80398);function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var B=["square","circle","triangle","diamond"],A="\nconst CustomSymbolShape = ({\n    x, y, size, fill, borderWidth, borderColor\n}) => (\n    <rect\n        x={x}\n        y={y}\n        transform={`rotate(45 ${size/2} ${size/2})`}\n        fill={fill}\n        strokeWidth={borderWidth}\n        stroke={borderColor}\n        width={size}\n        height={size}\n        style={{ pointerEvents: 'none' }}\n    />\n)\n".trim(),O=function(){var e=(0,i.F)(),t={x:0,y:0,width:160,height:40,data:{id:"demo",color:e.colors.accent}};return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Symbol shape"}),(0,h.jsxs)("p",{children:["You can customize symbols using ",(0,h.jsx)("code",{children:"symbolShape"})," property."]}),(0,h.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:B.map((function(n){return(0,h.jsx)("div",{style:{background:e.colors.cardBackground,padding:"10px 15px",borderRadius:2,display:"flex",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:(0,h.jsx)("svg",{width:t.width,height:t.height,children:(0,h.jsx)(u.Ae,W({},t,{textColor:e.colors.text,data:W({},t.data,{label:n}),direction:"left-to-right",symbolShape:n}))})},n)}))}),(0,h.jsxs)("p",{children:["You can also use a custom shape passing a component to ",(0,h.jsx)("code",{children:"symbolShape"}),":"]}),(0,h.jsx)(C.y,{code:A,language:"jsx"})]})},z=n(80500),L=function(){var e=(0,i.F)();return(0,h.jsx)(a.Z,{children:(0,h.jsxs)(o.nN.Provider,{value:e.nivo,children:[(0,h.jsx)(l.p,{title:"Legends Guide"}),(0,h.jsx)(c.Z,{children:(0,h.jsx)("div",{className:"guide__header",children:(0,h.jsx)("h1",{children:"Legends"})})}),(0,h.jsxs)(z.rm,{children:[(0,h.jsx)("p",{children:"Let's see how to add legends to your charts."}),(0,h.jsxs)("p",{children:["Legend components are available via the ",(0,h.jsx)("code",{children:"@nivo/legends"})," package, however it's added as a dependency for most chart packages supporting them, in most cases you won't have to add it as a direct dependency."]}),(0,h.jsx)(y,{}),(0,h.jsx)(j,{}),(0,h.jsx)(k,{}),(0,h.jsx)(O,{})]})]})})}},47425:function(e,t,n){"use strict";n.d(t,{$6:function(){return m},iQ:function(){return v},Ae:function(){return b},as:function(){return y},_i:function(){return x}});var r=n(24246),o=n(27378),i=n(45434),a=n(23615),l=n.n(a);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s={top:0,right:0,bottom:0,left:0},d=function(e){var t,n=e.direction,r=e.itemsSpacing,o=e.padding,i=e.itemCount,a=e.itemWidth,l=e.itemHeight;if("number"!=typeof o&&("object"!=typeof(t=o)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var d="number"==typeof o?{top:o,right:o,bottom:o,left:o}:c({},s,o),u=d.left+d.right,h=d.top+d.bottom,f=a+u,b=l+h,p=(i-1)*r;return"row"===n?f=a*i+p+u:"column"===n&&(b=l*i+p+h),{width:f,height:b,padding:d}},u=function(e){var t=e.anchor,n=e.translateX,r=e.translateY,o=e.containerWidth,i=e.containerHeight,a=e.width,l=e.height,c=n,s=r;switch(t){case"top":c+=(o-a)/2;break;case"top-right":c+=o-a;break;case"right":c+=o-a,s+=(i-l)/2;break;case"bottom-right":c+=o-a,s+=i-l;break;case"bottom":c+=(o-a)/2,s+=i-l;break;case"bottom-left":s+=i-l;break;case"left":s+=(i-l)/2;break;case"center":c+=(o-a)/2,s+=(i-l)/2}return{x:c,y:s}},h=function(e){var t,n,r,o,i,a,l=e.direction,c=e.justify,s=e.symbolSize,d=e.symbolSpacing,u=e.width,h=e.height;switch(l){case"left-to-right":t=0,n=(h-s)/2,o=h/2,a="central",!0===c?(r=u,i="end"):(r=s+d,i="start");break;case"right-to-left":t=u-s,n=(h-s)/2,o=h/2,a="central",!0===c?(r=0,i="start"):(r=u-s-d,i="end");break;case"top-to-bottom":t=(u-s)/2,n=0,r=u/2,i="middle",!0===c?(o=h,a="alphabetic"):(o=s+d,a="text-before-edge");break;case"bottom-to-top":t=(u-s)/2,n=h-s,r=u/2,i="middle",!0===c?(o=0,a="text-before-edge"):(o=h-s-d,a="alphabetic")}return{symbolX:t,symbolY:n,labelX:r,labelY:o,labelAnchor:i,labelAlignment:a}},f={circle:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,l=void 0===a?1:a,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return(0,r.jsx)("circle",{r:o/2,cx:t+o/2,cy:n+o/2,fill:i,opacity:l,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})},diamond:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,l=void 0===a?1:a,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return(0,r.jsx)("g",{transform:"translate("+t+","+n+")",children:(0,r.jsx)("path",{d:"\n                    M"+o/2+" 0\n                    L"+.8*o+" "+o/2+"\n                    L"+o/2+" "+o+"\n                    L"+.2*o+" "+o/2+"\n                    L"+o/2+" 0\n                ",fill:i,opacity:l,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})},square:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,l=void 0===a?1:a,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return(0,r.jsx)("rect",{x:t,y:n,fill:i,opacity:l,strokeWidth:s,stroke:void 0===d?"transparent":d,width:o,height:o,style:{pointerEvents:"none"}})},triangle:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,l=void 0===a?1:a,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return(0,r.jsx)("g",{transform:"translate("+t+","+n+")",children:(0,r.jsx)("path",{d:"\n                M"+o/2+" 0\n                L"+o+" "+o+"\n                L0 "+o+"\n                L"+o/2+" 0\n            ",fill:i,opacity:l,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})}},b=function(e){var t,n,a,l,s,d,u,b,p,m,g,y=e.x,x=e.y,v=e.width,j=e.height,w=e.data,S=e.direction,k=void 0===S?"left-to-right":S,C=e.justify,W=void 0!==C&&C,B=e.textColor,A=e.background,O=void 0===A?"transparent":A,z=e.opacity,L=void 0===z?1:z,Y=e.symbolShape,E=void 0===Y?"square":Y,H=e.symbolSize,M=void 0===H?16:H,X=e.symbolSpacing,T=void 0===X?8:X,F=e.symbolBorderWidth,I=void 0===F?0:F,D=e.symbolBorderColor,R=void 0===D?"transparent":D,_=e.onClick,q=e.onMouseEnter,P=e.onMouseLeave,$=e.toggleSerie,N=e.effects,U=(0,o.useState)({}),Z=U[0],G=U[1],V=(0,i.Fg)(),Q=(0,o.useCallback)((function(e){if(N){var t=N.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return c({},e,t.style)}),{});G(t)}null==q||q(w,e)}),[q,w,N]),J=(0,o.useCallback)((function(e){if(N){var t=N.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return c({},e,t.style)}),{});G(t)}null==P||P(w,e)}),[P,w,N]),K=h({direction:k,justify:W,symbolSize:null!=(t=Z.symbolSize)?t:M,symbolSpacing:T,width:v,height:j}),ee=K.symbolX,te=K.symbolY,ne=K.labelX,re=K.labelY,oe=K.labelAnchor,ie=K.labelAlignment,ae=[_,q,P,$].some((function(e){return void 0!==e})),le="function"==typeof E?E:f[E];return(0,r.jsxs)("g",{transform:"translate("+y+","+x+")",style:{opacity:null!=(n=Z.itemOpacity)?n:L},children:[(0,r.jsx)("rect",{width:v,height:j,fill:null!=(a=Z.itemBackground)?a:O,style:{cursor:ae?"pointer":"auto"},onClick:function(e){null==_||_(w,e),null==$||$(w.id)},onMouseEnter:Q,onMouseLeave:J}),o.createElement(le,c({id:w.id,x:ee,y:te,size:null!=(l=Z.symbolSize)?l:M,fill:null!=(s=null!=(d=w.fill)?d:w.color)?s:"black",borderWidth:null!=(u=Z.symbolBorderWidth)?u:I,borderColor:null!=(b=Z.symbolBorderColor)?b:R},w.hidden?V.legends.hidden.symbol:void 0)),(0,r.jsx)("text",{textAnchor:oe,style:c({},V.legends.text,{fill:null!=(p=null!=(m=null!=(g=Z.itemTextColor)?g:B)?m:V.legends.text.fill)?p:"black",dominantBaseline:ie,pointerEvents:"none",userSelect:"none"},w.hidden?V.legends.hidden.text:void 0),x:ne,y:re,children:w.label})]})},p=function(e){var t=e.data,n=e.x,o=e.y,i=e.direction,a=e.padding,l=void 0===a?0:a,c=e.justify,s=e.effects,u=e.itemWidth,h=e.itemHeight,f=e.itemDirection,p=void 0===f?"left-to-right":f,m=e.itemsSpacing,g=void 0===m?0:m,y=e.itemTextColor,x=e.itemBackground,v=void 0===x?"transparent":x,j=e.itemOpacity,w=void 0===j?1:j,S=e.symbolShape,k=e.symbolSize,C=e.symbolSpacing,W=e.symbolBorderWidth,B=e.symbolBorderColor,A=e.onClick,O=e.onMouseEnter,z=e.onMouseLeave,L=e.toggleSerie,Y=d({itemCount:t.length,itemWidth:u,itemHeight:h,itemsSpacing:g,direction:i,padding:l}).padding,E="row"===i?u+g:0,H="column"===i?h+g:0;return(0,r.jsx)("g",{transform:"translate("+n+","+o+")",children:t.map((function(e,t){return(0,r.jsx)(b,{data:e,x:t*E+Y.left,y:t*H+Y.top,width:u,height:h,direction:p,justify:c,effects:s,textColor:y,background:v,opacity:w,symbolShape:S,symbolSize:k,symbolSpacing:C,symbolBorderWidth:W,symbolBorderColor:B,onClick:A,onMouseEnter:O,onMouseLeave:z,toggleSerie:L},t)}))})},m=function(e){var t=e.data,n=e.containerWidth,o=e.containerHeight,i=e.translateX,a=void 0===i?0:i,l=e.translateY,c=void 0===l?0:l,s=e.anchor,h=e.direction,f=e.padding,b=void 0===f?0:f,m=e.justify,g=e.itemsSpacing,y=void 0===g?0:g,x=e.itemWidth,v=e.itemHeight,j=e.itemDirection,w=e.itemTextColor,S=e.itemBackground,k=e.itemOpacity,C=e.symbolShape,W=e.symbolSize,B=e.symbolSpacing,A=e.symbolBorderWidth,O=e.symbolBorderColor,z=e.onClick,L=e.onMouseEnter,Y=e.onMouseLeave,E=e.toggleSerie,H=e.effects,M=d({itemCount:t.length,itemsSpacing:y,itemWidth:x,itemHeight:v,direction:h,padding:b}),X=M.width,T=M.height,F=u({anchor:s,translateX:a,translateY:c,containerWidth:n,containerHeight:o,width:X,height:T}),I=F.x,D=F.y;return(0,r.jsx)(p,{data:t,x:I,y:D,direction:h,padding:b,justify:m,effects:H,itemsSpacing:y,itemWidth:x,itemHeight:v,itemDirection:j,itemTextColor:w,itemBackground:S,itemOpacity:k,symbolShape:C,symbolSize:W,symbolSpacing:B,symbolBorderWidth:A,symbolBorderColor:O,onClick:z,onMouseEnter:L,onMouseLeave:Y,toggleSerie:"boolean"==typeof E?void 0:E})},g={start:"left",middle:"center",end:"right"},y=function(e,t){var n=t.data,r=t.containerWidth,o=t.containerHeight,i=t.translateX,a=void 0===i?0:i,l=t.translateY,c=void 0===l?0:l,s=t.anchor,f=t.direction,b=t.padding,p=void 0===b?0:b,m=t.justify,y=void 0!==m&&m,x=t.itemsSpacing,v=void 0===x?0:x,j=t.itemWidth,w=t.itemHeight,S=t.itemDirection,k=void 0===S?"left-to-right":S,C=t.itemTextColor,W=t.symbolSize,B=void 0===W?16:W,A=t.symbolSpacing,O=void 0===A?8:A,z=t.theme,L=d({itemCount:n.length,itemWidth:j,itemHeight:w,itemsSpacing:v,direction:f,padding:p}),Y=L.width,E=L.height,H=L.padding,M=u({anchor:s,translateX:a,translateY:c,containerWidth:r,containerHeight:o,width:Y,height:E}),X=M.x,T=M.y,F="row"===f?j+v:0,I="column"===f?w+v:0;e.save(),e.translate(X,T),e.font=z.legends.text.fontSize+"px "+(z.legends.text.fontFamily||"sans-serif"),n.forEach((function(t,n){var r,o,i=n*F+H.left,a=n*I+H.top,l=h({direction:k,justify:y,symbolSize:B,symbolSpacing:O,width:j,height:w}),c=l.symbolX,s=l.symbolY,d=l.labelX,u=l.labelY,f=l.labelAnchor,b=l.labelAlignment;e.fillStyle=null!=(r=t.color)?r:"black",e.fillRect(i+c,a+s,B,B),e.textAlign=g[f],"central"===b&&(e.textBaseline="middle"),e.fillStyle=null!=(o=null!=C?C:z.legends.text.fill)?o:"black",e.fillText(String(t.label),i+d,a+u)})),e.restore()},x=function(e){var t=e.scale,n=e.domain,r=e.reverse,i=void 0!==r&&r,a=e.valueFormat,l=void 0===a?function(e){return e}:a,c=e.separator,s=void 0===c?" - ":c;return(0,o.useMemo)((function(){var e=(null!=n?n:t.range()).map((function(e,n){var r=t.invertExtent(e),o=r[0],i=r[1];return{id:e,index:n,extent:[o,i],label:""+l(o)+s+l(i),value:t(o),color:e}}));return!0===i&&e.reverse(),e}),[n,t,i])},v={data:l().arrayOf(l().object),anchor:l().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:l().number,translateY:l().number,direction:l().oneOf(["row","column"]).isRequired,itemsSpacing:l().number,itemWidth:l().number.isRequired,itemHeight:l().number.isRequired,itemDirection:l().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:l().string,itemBackground:l().string,itemOpacity:l().number,symbolShape:l().oneOfType([l().oneOf(["circle","diamond","square","triangle"]),l().func]),symbolSize:l().number,symbolSpacing:l().number,symbolBorderWidth:l().number,symbolBorderColor:l().string,onClick:l().func,onMouseEnter:l().func,onMouseLeave:l().func,effects:l().arrayOf(l().shape({on:l().oneOfType([l().oneOf(["hover"])]).isRequired,style:l().shape({itemTextColor:l().string,itemBackground:l().string,itemOpacity:l().number,symbolSize:l().number,symbolBorderWidth:l().number,symbolBorderColor:l().string}).isRequired}))}},80594:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},41876:function(e,t,n){var r=n(35159),o=n(50098);e.exports=function(e,t){return e&&r(t,o(t),e)}},5947:function(e,t,n){var r=n(35159),o=n(53893);e.exports=function(e,t){return e&&r(t,o(t),e)}},40699:function(e,t,n){var r=n(23694),o=n(80594),i=n(71928),a=n(41876),l=n(5947),c=n(2734),s=n(37561),d=n(31102),u=n(37048),h=n(51385),f=n(39759),b=n(3533),p=n(86541),m=n(2078),g=n(97635),y=n(19785),x=n(43854),v=n(98247),j=n(11611),w=n(47614),S=n(50098),k=n(53893),C="[object Arguments]",W="[object Function]",B="[object Object]",A={};A[C]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object DataView]"]=A["[object Boolean]"]=A["[object Date]"]=A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Map]"]=A["[object Number]"]=A[B]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object Symbol]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A["[object Error]"]=A[W]=A["[object WeakMap]"]=!1,e.exports=function e(t,n,O,z,L,Y){var E,H=1&n,M=2&n,X=4&n;if(O&&(E=L?O(t,z,L,Y):O(t)),void 0!==E)return E;if(!j(t))return t;var T=y(t);if(T){if(E=p(t),!H)return s(t,E)}else{var F=b(t),I=F==W||"[object GeneratorFunction]"==F;if(x(t))return c(t,H);if(F==B||F==C||I&&!L){if(E=M||I?{}:g(t),!H)return M?u(t,l(E,t)):d(t,a(E,t))}else{if(!A[F])return L?t:{};E=m(t,F,H)}}Y||(Y=new r);var D=Y.get(t);if(D)return D;Y.set(t,E),w(t)?t.forEach((function(r){E.add(e(r,n,O,r,t,Y))})):v(t)&&t.forEach((function(r,o){E.set(o,e(r,n,O,o,t,Y))}));var R=T?void 0:(X?M?f:h:M?k:S)(t);return o(R||t,(function(r,o){R&&(r=t[o=r]),i(E,o,e(r,n,O,o,t,Y))})),E}},57657:function(e,t,n){var r=n(3533),o=n(92360);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},26903:function(e,t,n){var r=n(3533),o=n(92360);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}},70830:function(e,t,n){var r=n(76747),o=n(31159),i=n(64373),a=n(37948);e.exports=function(e,t){return t=r(t,e),null==(e=i(e,t))||delete e[a(o(t))]}},61859:function(e,t,n){var r=n(95825);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},9377:function(e){var t=/\w*$/;e.exports=function(e){var n=new e.constructor(e.source,t.exec(e));return n.lastIndex=e.lastIndex,n}},24116:function(e,t,n){var r=n(96539),o=r?r.prototype:void 0,i=o?o.valueOf:void 0;e.exports=function(e){return i?Object(i.call(e)):{}}},31102:function(e,t,n){var r=n(35159),o=n(83080);e.exports=function(e,t){return r(e,o(e),t)}},37048:function(e,t,n){var r=n(35159),o=n(54568);e.exports=function(e,t){return r(e,o(e),t)}},97820:function(e,t,n){var r=n(40861);e.exports=function(e){return r(e)?void 0:e}},39759:function(e,t,n){var r=n(11324),o=n(54568),i=n(53893);e.exports=function(e){return r(e,i,o)}},54568:function(e,t,n){var r=n(97141),o=n(2173),i=n(83080),a=n(15937),l=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,i(e)),e=o(e);return t}:a;e.exports=l},86541:function(e){var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=e.length,r=new e.constructor(n);return n&&"string"==typeof e[0]&&t.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},2078:function(e,t,n){var r=n(95825),o=n(61859),i=n(9377),a=n(24116),l=n(63428);e.exports=function(e,t,n){var c=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new c(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return l(e,n);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(e);case"[object RegExp]":return i(e);case"[object Symbol]":return a(e)}}},64373:function(e,t,n){var r=n(79867),o=n(75733);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},98247:function(e,t,n){var r=n(57657),o=n(39334),i=n(18125),a=i&&i.isMap,l=a?o(a):r;e.exports=l},47614:function(e,t,n){var r=n(26903),o=n(39334),i=n(18125),a=i&&i.isSet,l=a?o(a):r;e.exports=l},48159:function(e,t,n){var r=n(66070),o=n(40699),i=n(70830),a=n(76747),l=n(35159),c=n(97820),s=n(24288),d=n(39759),u=s((function(e,t){var n={};if(null==e)return n;var s=!1;t=r(t,(function(t){return t=a(t,e),s||(s=t.length>1),t})),l(e,d(e),n),s&&(n=o(n,7,c));for(var u=t.length;u--;)i(n,t[u]);return n}));e.exports=u}}]);
//# sourceMappingURL=component---src-pages-guides-legends-tsx-37142dea564fc2063c28.js.map