(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[665],{41584:function(e,t){"use strict";var n=Math.PI,i=2*n,r=1e-6,o=i-r;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new a}a.prototype=u.prototype={constructor:a,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,i){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(e,t,n,i,r,o){this._+="C"+ +e+","+ +t+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(e,t,i,o,a){e=+e,t=+t,i=+i,o=+o,a=+a;var u=this._x1,s=this._y1,l=i-e,c=o-t,d=u-e,f=s-t,h=d*d+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(h>r)if(Math.abs(f*l-c*d)>r&&a){var p=i-u,y=o-s,v=l*l+c*c,g=p*p+y*y,m=Math.sqrt(v),x=Math.sqrt(h),k=a*Math.tan((n-Math.acos((v+h-g)/(2*m*x)))/2),b=k/x,M=k/m;Math.abs(b-1)>r&&(this._+="L"+(e+b*d)+","+(t+b*f)),this._+="A"+a+","+a+",0,0,"+ +(f*p>d*y)+","+(this._x1=e+M*l)+","+(this._y1=t+M*c)}else this._+="L"+(this._x1=e)+","+(this._y1=t);else;},arc:function(e,t,a,u,s,l){e=+e,t=+t,l=!!l;var c=(a=+a)*Math.cos(u),d=a*Math.sin(u),f=e+c,h=t+d,p=1^l,y=l?u-s:s-u;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+f+","+h:(Math.abs(this._x1-f)>r||Math.abs(this._y1-h)>r)&&(this._+="L"+f+","+h),a&&(y<0&&(y=y%i+i),y>o?this._+="A"+a+","+a+",0,1,"+p+","+(e-c)+","+(t-d)+"A"+a+","+a+",0,1,"+p+","+(this._x1=f)+","+(this._y1=h):y>r&&(this._+="A"+a+","+a+",0,"+ +(y>=n)+","+p+","+(this._x1=e+a*Math.cos(s))+","+(this._y1=t+a*Math.sin(s))))},rect:function(e,t,n,i){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}},t.Z=u},3583:function(e,t,n){"use strict";function i(e){return function(){return e}}n.d(t,{Z:function(){return i}})},18091:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(41584),r=n(3583),o=n(30964),a=n(92519);function u(){var e=a.x,t=a.y,n=(0,r.Z)(!0),u=null,s=o.Z,l=null;function c(r){var o,a,c,d=r.length,f=!1;for(null==u&&(l=s(c=(0,i.Z)())),o=0;o<=d;++o)!(o<d&&n(a=r[o],o,r))===f&&((f=!f)?l.lineStart():l.lineEnd()),f&&l.point(+e(a,o,r),+t(a,o,r));if(c)return l=null,c+""||null}return c.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,r.Z)(+t),c):e},c.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,r.Z)(+e),c):t},c.defined=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(!!e),c):n},c.curve=function(e){return arguments.length?(s=e,null!=u&&(l=s(u)),c):s},c.context=function(e){return arguments.length?(null==e?u=l=null:l=s(u=e),c):u},c}},92519:function(e,t,n){"use strict";function i(e){return e[0]}function r(e){return e[1]}n.d(t,{x:function(){return i},y:function(){return r}})},18957:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var i=n(61904),r=n(15050),o=(0,i.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*r.yB)/r.UD}),(function(e){return e.getDate()-1}));t.Z=o;var a=o.range},78194:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var i=n(45434),r=n(7274),o=n(80169),a=n(18907),u=["svg","canvas"],s=[{key:"data",group:"Base",flavors:u,help:"Chart data.",type:"Array<object | Array>",required:!0},{key:"variables",type:"object[]",flavors:u,help:"Variables configuration.",description:"\n            Variables configuration, define accessor (`key`)\n            and variable type. Type must be one of\n            `linear` or `point`, `linear`\n            variables are suitable for continuous numerical\n            data such as age or cost while\n            `point` variables are suitable for\n            discrete values such as gender.\n        ",group:"Variables",required:!0,control:{type:"array",shouldCreate:!1,shouldRemove:!1,getItemTitle:function(e,t){return t.key+" ("+t.type+")"},props:[{key:"key",help:"Variable key, used to access to corresponding datum value.",flavors:u,type:"string",required:!0,control:{type:"text",disabled:!0}},{key:"type",help:"Variable type, must be one of: 'linear', 'point'.",flavors:u,type:"'linear' | 'point'",required:!0,control:{type:"text",disabled:!0}},{key:"min",help:"Min value of linear scale.",flavors:u,type:"number | 'auto'",required:!1,when:function(e){return"linear"===e.type},control:{type:"switchableRange",disabledValue:"auto",defaultValue:0,min:-100,max:100}},{key:"max",help:"Max value of linear scale.",flavors:u,type:"number | 'auto'",required:!1,when:function(e){return"linear"===e.type},control:{type:"switchableRange",disabledValue:"auto",defaultValue:1e3,min:-100,max:100}}]}},{key:"layout",help:"Chart layout.",flavors:u,type:"string",required:!1,defaultValue:r.Pq.layout,group:"Base",control:{type:"radio",choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"curve",help:"Curve interpolation.",flavors:u,description:"\n            Defines the curve factory to use for the line generator.\n        ",type:"string",required:!1,defaultValue:r.Pq.curve,group:"Base",control:{type:"choices",choices:i.mp.map((function(e){return{label:e,value:e}}))}},{key:"axesPlan",help:"Axes plan.",flavors:u,type:"string",required:!1,defaultValue:r.Pq.axesPlan,group:"Base",control:{type:"radio",choices:[{label:"foreground",value:"foreground"},{label:"background",value:"background"}]}},{key:"axesTicksPosition",help:"Axes ticks position.",flavors:u,type:"string",required:!1,defaultValue:r.Pq.axesTicksPosition,group:"Base",control:{type:"radio",choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}}].concat((0,a.nk)(u),[(0,o.JR)(["svg","canvas"]),(0,a.at)({flavors:u,defaultValue:r.Pq.colors}),{key:"strokeWidth",help:"Lines stroke width.",flavors:u,type:"number",required:!1,defaultValue:r.Pq.strokeWidth,control:{type:"lineWidth"},group:"Style"},{key:"lineOpacity",help:"Lines opacity.",flavors:u,type:"number",required:!1,defaultValue:r.Pq.lineOpacity,control:{type:"opacity"},group:"Style"}],(0,o.$j)(["svg"],r.Pq,"react-spring")),l=(0,o.R2)(s)},45783:function(e,t){"use strict";t.Z=[{key:"temp",type:"linear",min:"auto",max:"auto",ticksPosition:"before",legend:"temperature",legendPosition:"start",legendOffset:20},{key:"cost",type:"linear",min:0,max:"auto",ticksPosition:"before",legend:"cost",legendPosition:"start",legendOffset:20},{key:"color",type:"point",padding:1,values:["red","yellow","green"],legend:"color",legendPosition:"start",legendOffset:-20},{key:"target",type:"point",padding:0,values:["A","B","C","D","E"],legend:"target",legendPosition:"start",legendOffset:-20},{key:"volume",type:"linear",min:0,max:"auto",legend:"volume",legendPosition:"start",legendOffset:-20}]},44365:function(e,t,n){"use strict";n.d(t,{dk:function(){return b},RD:function(){return g},rj:function(){return T},VT:function(){return x},DZ:function(){return R},RN:function(){return O},FA:function(){return S}});var i=n(27378),r=n(58493),o=n(45434),a=n(6164),u=n(16935),s=n(20217),l=n(24246),c=n(23615),d=n.n(c);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var h=function(e){var t,n=e.axis,i=e.scale,r=e.ticksPosition,a=e.tickValues,u=e.tickSize,l=e.tickPadding,c=e.tickRotation,d=e.engine,h=void 0===d?"svg":d,p=(0,s.xX)(i,a),y=o.a6[h],v="bandwidth"in i?(0,s.Gv)(i):i,g={lineX:0,lineY:0},m={textX:0,textY:0},x="object"==typeof document&&"rtl"===document.dir,k=y.align.center,b=y.baseline.center;return"x"===n?(t=function(e){var t;return{x:null!=(t=v(e))?t:0,y:0}},g.lineY=u*("after"===r?1:-1),m.textY=(u+l)*("after"===r?1:-1),b="after"===r?y.baseline.top:y.baseline.bottom,0===c?k=y.align.center:"after"===r&&c<0||"before"===r&&c>0?(k=y.align[x?"left":"right"],b=y.baseline.center):("after"===r&&c>0||"before"===r&&c<0)&&(k=y.align[x?"right":"left"],b=y.baseline.center)):(t=function(e){var t;return{x:0,y:null!=(t=v(e))?t:0}},g.lineX=u*("after"===r?1:-1),m.textX=(u+l)*("after"===r?1:-1),k="after"===r?y.align.left:y.align.right),{ticks:p.map((function(e){return f({key:"number"==typeof e||"string"==typeof e?e:""+e,value:e},t(e),g,m)})),textAlign:k,textBaseline:b}},p=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var n=(0,a.i$)(e);return function(e){return n(e instanceof Date?e:new Date(e))}}return(0,u.WU)(e)},y=function(e){var t,n=e.width,i=e.height,r=e.scale,o=e.axis,a=e.values,u=(t=a,(Array.isArray(t)?a:void 0)||(0,s.xX)(r,a)),l="bandwidth"in r?(0,s.Gv)(r):r,c="x"===o?u.map((function(e){var t,n;return{key:""+e,x1:null!=(t=l(e))?t:0,x2:null!=(n=l(e))?n:0,y1:0,y2:i}})):u.map((function(e){var t,i;return{key:""+e,x1:0,x2:n,y1:null!=(t=l(e))?t:0,y2:null!=(i=l(e))?i:0}}));return c},v=(0,i.memo)((function(e){var t,n=e.value,a=e.format,u=e.lineX,s=e.lineY,c=e.onClick,d=e.textBaseline,h=e.textAnchor,p=e.animatedProps,y=(0,o.Fg)(),v=null!=(t=null==a?void 0:a(n))?t:n,g=(0,i.useMemo)((function(){var e={opacity:p.opacity};return c?{style:f({},e,{cursor:"pointer"}),onClick:function(e){return c(e,v)}}:{style:e}}),[p.opacity,c,v]);return(0,l.jsxs)(r.q.g,f({transform:p.transform},g,{children:[(0,l.jsx)("line",{x1:0,x2:u,y1:0,y2:s,style:y.axis.ticks.line}),(0,l.jsx)(r.q.text,{dominantBaseline:d,textAnchor:h,transform:p.textTransform,style:y.axis.ticks.text,children:v})]}))})),g=(0,i.memo)((function(e){var t=e.axis,n=e.scale,a=e.x,u=void 0===a?0:a,s=e.y,c=void 0===s?0:s,d=e.length,y=e.ticksPosition,g=e.tickValues,m=e.tickSize,x=void 0===m?5:m,k=e.tickPadding,b=void 0===k?5:k,M=e.tickRotation,P=void 0===M?0:M,T=e.format,O=e.renderTick,R=void 0===O?v:O,S=e.legend,C=e.legendPosition,A=void 0===C?"end":C,q=e.legendOffset,w=void 0===q?0:q,_=e.onClick,B=e.ariaHidden,W=(0,o.Fg)(),j=(0,i.useMemo)((function(){return p(T,n)}),[T,n]),E=h({axis:t,scale:n,ticksPosition:y,tickValues:g,tickSize:x,tickPadding:b,tickRotation:P}),V=E.ticks,L=E.textAlign,G=E.textBaseline,z=null;if(void 0!==S){var N,Z=0,D=0,F=0;"y"===t?(F=-90,Z=w,"start"===A?(N="start",D=d):"middle"===A?(N="middle",D=d/2):"end"===A&&(N="end")):(D=w,"start"===A?N="start":"middle"===A?(N="middle",Z=d/2):"end"===A&&(N="end",Z=d)),z=(0,l.jsx)("text",{transform:"translate("+Z+", "+D+") rotate("+F+")",textAnchor:N,style:f({dominantBaseline:"central"},W.axis.legend.text),children:S})}var H=(0,o.tf)(),I=H.animate,Y=H.config,K=(0,r.useSpring)({transform:"translate("+u+","+c+")",lineX2:"x"===t?d:0,lineY2:"x"===t?0:d,config:Y,immediate:!I}),X=(0,r.useTransition)(V,{keys:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+P+")"}},from:function(e){return{opacity:0,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+P+")"}},enter:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+P+")"}},update:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+P+")"}},leave:{opacity:0},config:Y,immediate:!I});return(0,l.jsxs)(r.q.g,{transform:K.transform,"aria-hidden":B,children:[X((function(e,t,n,r){return i.createElement(R,f({tickIndex:r,format:j,rotate:P,textBaseline:G,textAnchor:L,animatedProps:e},t,_?{onClick:_}:{}))})),(0,l.jsx)(r.q.line,{style:W.axis.domain.line,x1:0,x2:K.lineX2,y1:0,y2:K.lineY2}),z]})})),m={ticksPosition:d().oneOf(["before","after"]),tickValues:d().oneOfType([d().number,d().arrayOf(d().oneOfType([d().number,d().string,d().instanceOf(Date)])),d().string]),tickSize:d().number,tickPadding:d().number,tickRotation:d().number,format:d().oneOfType([d().func,d().string]),renderTick:d().func,legend:d().node,legendPosition:d().oneOf(["start","middle","end"]),legendOffset:d().number,ariaHidden:d().bool},x=d().shape(m),k=["top","right","bottom","left"],b=(0,i.memo)((function(e){var t=e.xScale,n=e.yScale,i=e.width,r=e.height,o={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return(0,l.jsx)(l.Fragment,{children:k.map((function(e){var a=o[e];if(!a)return null;var u="top"===e||"bottom"===e;return(0,l.jsx)(g,f({},a,{axis:u?"x":"y",x:"right"===e?i:0,y:"bottom"===e?r:0,scale:u?t:n,length:u?i:r,ticksPosition:"top"===e||"left"===e?"before":"after"}),e)}))})})),M=(0,i.memo)((function(e){var t=e.animatedProps,n=(0,o.Fg)();return(0,l.jsx)(r.q.line,f({},t,n.grid.line))})),P=(0,i.memo)((function(e){var t=e.lines,n=(0,o.tf)(),a=n.animate,u=n.config,s=(0,r.useTransition)(t,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:u,immediate:!a});return(0,l.jsx)("g",{children:s((function(e,t){return(0,i.createElement)(M,f({},t,{key:t.key,animatedProps:e}))}))})})),T=(0,i.memo)((function(e){var t=e.width,n=e.height,r=e.xScale,o=e.yScale,a=e.xValues,u=e.yValues,s=(0,i.useMemo)((function(){return!!r&&y({width:t,height:n,scale:r,axis:"x",values:a})}),[r,a,t,n]),c=(0,i.useMemo)((function(){return!!o&&y({width:t,height:n,scale:o,axis:"y",values:u})}),[n,t,o,u]);return(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)(P,{lines:s}),c&&(0,l.jsx)(P,{lines:c})]})})),O=function(e,t){var n,i=t.axis,r=t.scale,a=t.x,u=void 0===a?0:a,s=t.y,l=void 0===s?0:s,c=t.length,d=t.ticksPosition,f=t.tickValues,p=t.tickSize,y=void 0===p?5:p,v=t.tickPadding,g=void 0===v?5:v,m=t.tickRotation,x=void 0===m?0:m,k=t.format,b=t.legend,M=t.legendPosition,P=void 0===M?"end":M,T=t.legendOffset,O=void 0===T?0:T,R=t.theme,S=h({axis:i,scale:r,ticksPosition:d,tickValues:f,tickSize:y,tickPadding:g,tickRotation:x,engine:"canvas"}),C=S.ticks,A=S.textAlign,q=S.textBaseline;e.save(),e.translate(u,l),e.textAlign=A,e.textBaseline=q,e.font=(R.axis.ticks.text.fontWeight?R.axis.ticks.text.fontWeight+" ":"")+R.axis.ticks.text.fontSize+"px "+R.axis.ticks.text.fontFamily,(null!=(n=R.axis.domain.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(R.axis.domain.line.strokeWidth),e.lineCap="square",R.axis.domain.line.stroke&&(e.strokeStyle=R.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===i?c:0,"x"===i?0:c),e.stroke());var w="function"==typeof k?k:function(e){return""+e};if(C.forEach((function(t){var n;(null!=(n=R.axis.ticks.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(R.axis.ticks.line.strokeWidth),e.lineCap="square",R.axis.ticks.line.stroke&&(e.strokeStyle=R.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var i=w(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate((0,o.Ht)(x)),R.axis.ticks.text.fill&&(e.fillStyle=R.axis.ticks.text.fill),e.fillText(String(i),0,0),e.restore()})),void 0!==b){var _=0,B=0,W=0,j="center";"y"===i?(W=-90,_=O,"start"===P?(j="start",B=c):"middle"===P?(j="center",B=c/2):"end"===P&&(j="end")):(B=O,"start"===P?j="start":"middle"===P?(j="center",_=c/2):"end"===P&&(j="end",_=c)),e.translate(_,B),e.rotate((0,o.Ht)(W)),e.font=(R.axis.legend.text.fontWeight?R.axis.legend.text.fontWeight+" ":"")+R.axis.legend.text.fontSize+"px "+R.axis.legend.text.fontFamily,R.axis.legend.text.fill&&(e.fillStyle=R.axis.legend.text.fill),e.textAlign=j,e.textBaseline="middle",e.fillText(b,0,0)}e.restore()},R=function(e,t){var n=t.xScale,i=t.yScale,r=t.width,o=t.height,a=t.top,u=t.right,s=t.bottom,l=t.left,c=t.theme,d={top:a,right:u,bottom:s,left:l};k.forEach((function(t){var a=d[t];if(!a)return null;var u="top"===t||"bottom"===t,s="top"===t||"left"===t?"before":"after",l=u?n:i,h=p(a.format,l);O(e,f({},a,{axis:u?"x":"y",x:"right"===t?r:0,y:"bottom"===t?o:0,scale:l,format:h,length:u?r:o,ticksPosition:s,theme:c}))}))},S=function(e,t){var n=t.width,i=t.height,r=t.scale,o=t.axis,a=t.values;y({width:n,height:i,scale:r,axis:o,values:a}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}},38681:function(e,t,n){"use strict";n.d(t,{j2:function(){return y},wQ:function(){return v},aw:function(){return E},x$:function(){return j},ak:function(){return B},UE:function(){return L},$j:function(){return g},BO:function(){return x},Tz:function(){return q},O$:function(){return P},B7:function(){return W},gq:function(){return S},zn:function(){return N},FQ:function(){return C}});var i=n(4215),r=n.n(i),o=n(91311),a=n.n(o),u=n(19193),s=n.n(u),l=n(18957),c=n(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],p=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],y=(Object.freeze({__proto__:null,countryCodes:f,names:h,programmingLanguages:p}),function(e,t,n){var i=void 0===n?{}:n,o=i.title,u=i.subtitle,s=i.rangeCount,l=void 0===s?5:s,c=i.measureCount,d=void 0===c?1:c,f=i.markerCount,h=void 0===f?1:f,p=i.float,y=void 0!==p&&p;return{id:e,title:o,subtitle:u,ranges:r()(l-1).reduce((function(e){var n=t-e[0];return[a()(n,y)].concat(e)}),[t]),measures:r()(d).reduce((function(e){return 0===e.length?[a()(t,y)]:[a()(e[0],y)].concat(e)}),[]),markers:r()(h).map((function(){return.6*t+a()(.4*t)}))}}),v=function(e){var t=void 0===e?{}:e,n=t.keys,i=void 0===n?h:n,o=t.size,u=void 0===o?7:o,s=t.minValue,l=void 0===s?0:s,c=t.maxValue,d=void 0===c?2e3:c,f=Math.min(i.length,u),p=i.slice(0,f);return{matrix:r()(f).map((function(){return r()(f).map((function(){return Math.random()<.66?a()(l,d/4):a()(l,d)}))})),keys:p}},g=function(e){var t=void 0===e?{}:e,n=t.rootNodeRadius,i=void 0===n?12:n,r=t.minMidNodes,o=void 0===r?6:r,u=t.maxMidNodes,s=void 0===u?16:u,l=t.midNodeRadius,c=void 0===l?8:l,d=t.minLeaves,f=void 0===d?4:d,h=t.maxLeaves,p=void 0===h?16:h,y=t.leafRadius,v=void 0===y?4:y,g={id:"0",radius:i,depth:0,color:"rgb(244, 117, 96)"},m=Array.from({length:a()(o,s)},(function(e,t){return{id:""+(t+1),radius:c,depth:1,color:"rgb(97, 205, 187)"}})),x=[],k=[];return m.forEach((function(e){x.push({source:"0",target:e.id,distance:50}),m.forEach((function(t){Math.random()<.04&&x.push({source:e.id,target:t.id,distance:70})})),Array.from({length:a()(f,p)},(function(t,n){return k.push({id:e.id+"."+n,radius:v,depth:2,color:"rgb(232, 193, 160)"}),x.push({source:e.id,target:e.id+"."+n,distance:30}),null}))})),m.push(g),{nodes:m=m.concat(k),links:x}};function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m.apply(this,arguments)}var x=function(e){var t=void 0===e?{}:e,n=t.size,i=void 0===n?26:n,o=t.keys,u=void 0===o?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:o;return r()(i).map((function(){return u.reduce((function(e,t){var n,i;return void 0!==t.random?i=a().apply(void 0,t.random):void 0!==t.shuffle&&(i=s()(t.shuffle)[0]),m({},e,((n={})[t.key]=i,n))}),{})}))},k=h.map((function(e){return{id:e}})),b=function e(t,n,i){var r=n.filter((function(e){return e.source===t})).map((function(e){var n=e.target;if(n===t)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+t+" —> "+t);if(null!=i&&i.includes(n))throw new Error("[sankey] found cyclic dependency:\n  link: "+i.join(" —> ")+" —> "+n);return n}));return r.reduce((function(r,o){return r.concat(e(o,n,i?[].concat(i,[o]):[t,o]))}),r)},M=function(e){return e.reduce((function(t,n){return t[n.source]||(t[n.source]=b(n.source,e)),t}),{})},P=function(e){var t=void 0===e?{}:e,n=t.nodeCount,i=t.maxIterations,o=void 0===i?3:i,u=k.slice(0,n).map((function(e){return Object.assign({},e,{nodeColor:d()})})),l=[];return s()(u).forEach((function(e){var t=e.id;r()(a()(1,o)).forEach((function(){var e=M(l),n=s()(u.filter((function(e){return e.id!==t})).map((function(e){return e.id})))[0];e[n]&&e[n].includes(t)||e[t]&&e[t].includes(n)||l.push({source:t,target:n,value:a()(5,200)})}))})),{nodes:u,links:l}},T=function(){return a()(0,500)},O=function(){return a()(4,20)},R=function(){return a()(3,17)},S=function(e,t){var n=t.min,i=void 0===n?60:n,o=t.max,u=void 0===o?100:o,s=t.categoryCount,l=void 0===s?0:s;return{groups:e,data:e.reduce((function(e,t,n){return[].concat(e,r()(a()(i,u)).map((function(){return T()})).map((function(e,i){var o={id:n+"."+i,group:t,price:e,volume:O()};return l>0&&(o.categories=r()(l).map(R)),o})))}),[])}},C=function(e){return{groups:e.groups,data:e.data.map((function(t){var n=m({},t,{group:s()(e.groups)[0],price:T(),volume:O()});return void 0!==t.categories&&(n.categories=r()(3).map(R)),n}))}},A=d,q=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=-1);var n=p;return e&&(n=s()(n)),t<1&&(t=1+Math.round(Math.random()*(p.length-1))),n.slice(0,t).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:A()}}))},w=function(e){var t=[];return function(){var n;do{n=e.apply(void 0,arguments)}while(t.includes(n));return t.push(n),n}},_=function(){return s()(f)[0]},B=function(e){void 0===e&&(e=16);var t=["whisky","rhum","gin","vodka","cognac"],n=w(_),i=t.map((function(e){return{id:e,color:A(),data:[]}}));return r()(e).forEach((function(){var e=n();t.forEach((function(t){var n;null==(n=i.find((function(e){return e.id===t})))||n.data.push({color:A(),x:e,y:a()(0,60)})}))})),i},W=function(e,t){return e.map((function(e){return{id:e,color:A(),data:t.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},j=function(e,t,n){void 0===n&&(n=.9);var i=function(e,t){var n=(0,l.a)(e,t),i=(0,c.i$)("%Y-%m-%d");return n.map((function(e){return{value:Math.round(400*Math.random()),day:i(e)}}))}(e,t),r=Math.round(i.length*(.4*n))+Math.round(Math.random()*(i.length*(.6*n)));return s()(i).slice(0,r)},E=function(e,t){var n=void 0===t?{}:t,i=n.size,r=void 0===i?12:i,o=n.min,u=void 0===o?0:o,s=n.max,l=void 0===s?200:s,c=n.withColors,d=void 0===c||c;return f.slice(0,r).map((function(t){var n={country:t};return e.forEach((function(e){n[e]=a()(u,l),!0===d&&(n[e+"Color"]=A())})),n}))},V=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],L=function e(t,n,i){var o;void 0===t&&(t="nivo"),void 0===i&&(i=V),(n=n||i.length)>i.length&&(n=i.length);var a={name:t,color:A()};return(null==(o=i)?void 0:o.length)>0?a.children=r()(n).map((function(t,n){var r,o=i[n];return e(o[0],null,null!=(r=o[1])?r:[])})):a.loc=Math.round(2e5*Math.random()),a},G=["chardonay","carmenere","syrah"],z=["fruity","bitter","heavy","strong","sunny"],N=function(e){var t=void 0===e?{}:e,n=t.randMin,i=void 0===n?20:n,r=t.randMax,o=void 0===r?120:r;return{data:z.map((function(e){var t={taste:e};return G.forEach((function(e){t[e]=a()(i,o)})),t})),keys:G}}},7274:function(e,t,n){"use strict";n.d(t,{If:function(){return S},Lj:function(){return C},z0:function(){return w},Pq:function(){return x}});var i=n(45434),r=n(44365),o=n(23615),a=n.n(o),u=n(79234),s=n(27378),l=n(18091),c=n(46448),d=n(9841),f=n(58493),h=n(89193),p=n(24246);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},y.apply(this,arguments)}var v={key:a().string.isRequired,ticksPosition:a().oneOf(["before","after"]),tickSize:a().number,tickPadding:a().number,tickRotation:a().number,format:a().oneOfType([a().func,a().string]),legend:a().node,legendPosition:a().oneOf(["start","middle","end"]),legendOffset:a().number},g={data:a().arrayOf(a().object).isRequired,variables:a().arrayOf(a().oneOfType([a().shape(y({},v,{key:a().string.isRequired,type:a().oneOf(["point"]).isRequired,padding:a().number,values:a().arrayOf(a().oneOfType([a().string,a().number])),tickValues:a().arrayOf(a().oneOfType([a().string,a().number]))})),a().shape(y({},v,{type:a().oneOf(["linear"]).isRequired,min:a().oneOfType([a().number,a().oneOf(["auto"])]),max:a().oneOfType([a().number,a().oneOf(["auto"])]),tickValues:a().oneOfType([a().number,a().arrayOf(a().number)])}))])).isRequired,layout:a().oneOf(["horizontal","vertical"]).isRequired,curve:i.VZ.isRequired,strokeWidth:a().number.isRequired,lineOpacity:a().number.isRequired,axesPlan:a().oneOf(["foreground","background"]).isRequired,axesTicksPosition:a().oneOf(["before","after"]).isRequired,colors:u.qi.isRequired},m=y({},g,{role:a().string.isRequired}),x={layout:"horizontal",curve:"linear",colors:{scheme:"yellow_orange_red"},strokeWidth:2,lineOpacity:.35,axesPlan:"foreground",axesTicksPosition:"after",animate:!0,motionConfig:"gentle"},k=y({},x,{role:"img"}),b=function(e){var t=e.width,n=e.height,r=e.data,o=e.variables,a=e.layout,f=e.colors,h=e.curve,p=(0,u.U)(f,"index"),v=(0,s.useMemo)((function(){return(0,l.Z)().x((function(e){return e.x})).y((function(e){return e.y})).curve((0,i.Bg)(h))}),[h]),g=(0,s.useMemo)((function(){return function(e){var t=e.width,n=e.height,i=e.data,r=e.variables,o=e.layout,a=(0,c.x)().range("horizontal"===o?[0,t]:[n,0]).domain(r.map((function(e){return e.key}))),u="horizontal"===o?[n,0]:[0,t],s=r.map((function(e){var t,n=new Set;if(i.forEach((function(t){return n.add(t[e.key])})),"linear"===e.type){var r=void 0!==e.min&&"auto"!==e.min?e.min:Math.min.apply(Math,Array.from(n)),o=void 0!==e.max&&"auto"!==e.max?e.max:Math.max.apply(Math,Array.from(n));t=(0,d.Z)().rangeRound(u).domain([r,o])}return"point"===e.type&&(t=(0,c.x)().range(u).domain(e.values||n),void 0!==e.padding&&t.padding(e.padding)),y({},e,{scale:t,values:Array.from(n)})})),l=i.map((function(e,t){var n=s.map((function(t){return{x:"horizontal"===o?a(t.key):t.scale(e[t.key]),y:"horizontal"===o?t.scale(e[t.key]):a(t.key)}}));return y({index:t},e,{points:n})}));return{variablesScale:a,variablesWithScale:s,dataWithPoints:l}}({width:t,height:n,data:r,variables:o,layout:a})}),[t,n,r,o,a]);return{variablesScale:g.variablesScale,variablesWithScale:g.variablesWithScale,dataWithPoints:g.dataWithPoints,getLineColor:p,lineGenerator:v}},M=function(e){var t=e.data,n=e.variables;return(0,p.jsx)(h.zI,{rows:n.map((function(e){return[e.key,(0,p.jsx)("strong",{children:t[e.key]})]}))})};M.propTypes={data:a().object.isRequired,variables:a().arrayOf(a().shape({key:a().oneOfType([a().string,a().number]).isRequired})).isRequired};var P=(0,s.memo)(M),T=function(e){var t=e.data,n=e.variables,r=e.lineGenerator,o=e.points,a=e.strokeWidth,u=e.color,l=e.opacity,c=(0,h.lL)(),d=c.showTooltipFromEvent,y=c.hideTooltip,v=(0,s.useCallback)((function(e){d((0,p.jsx)(P,{data:t,variables:n}),e)}),[t,n]),g=(0,i.tf)(),m=g.animate,x=g.config,k=(0,i.NS)(r(o)),b=(0,f.useSpring)({color:u,opacity:l,config:x,immediate:!m});return(0,p.jsx)(f.q.path,{d:k,stroke:b.color,strokeWidth:a,strokeLinecap:"round",opacity:b.opacity,fill:"none",onMouseEnter:v,onMouseMove:v,onMouseLeave:y})};T.propTypes={data:a().object.isRequired,variables:a().arrayOf(a().shape({key:a().oneOfType([a().string,a().number]).isRequired})).isRequired,lineGenerator:a().func.isRequired,points:a().arrayOf(a().shape({x:a().number.isRequired,y:a().number.isRequired})).isRequired,strokeWidth:a().number.isRequired,color:a().string.isRequired,opacity:a().number.isRequired};var O=(0,s.memo)(T),R=function(e){var t=e.data,n=e.variables,o=e.layout,a=e.width,u=e.height,s=e.margin,l=e.axesPlan,c=e.axesTicksPosition,d=e.strokeWidth,f=e.lineOpacity,h=e.curve,y=e.colors,v=e.role,g=(0,i.Bs)(a,u,s),m=g.margin,x=g.innerWidth,k=g.innerHeight,M=g.outerWidth,P=g.outerHeight,T=b({width:x,height:k,data:t,variables:n,layout:o,colors:y,curve:h}),R=T.variablesScale,S=T.variablesWithScale,C=T.dataWithPoints,A=T.lineGenerator,q=T.getLineColor,w=S.map((function(e){return(0,p.jsx)(r.RD,{axis:"horizontal"===o?"y":"x",length:"horizontal"===o?k:x,x:"horizontal"===o?R(e.key):0,y:"horizontal"===o?0:R(e.key),scale:e.scale,ticksPosition:e.ticksPosition||c,tickValues:e.tickValues,tickSize:e.tickSize,tickPadding:e.tickPadding,tickRotation:e.tickRotation,format:e.tickFormat,legend:e.legend,legendPosition:e.legendPosition,legendOffset:e.legendOffset},e.key)}));return(0,p.jsxs)(i.tM,{width:M,height:P,margin:m,role:v,children:["background"===l&&w,C.map((function(e){return(0,p.jsx)(O,{data:e,variables:n,lineGenerator:A,points:e.points,strokeWidth:d,opacity:f,color:q(e)},e.index)})),"foreground"===l&&w]})};R.propTypes=m;var S=(0,i.li)(R);S.defaultProps=k;var C=function(e){return(0,p.jsx)(i.d,{children:function(t){var n=t.width,i=t.height;return(0,p.jsx)(S,y({width:n,height:i},e))}})},A=function(e){var t=e.data,n=e.layout,o=e.variables,a=e.width,u=e.height,l=e.margin,c=e.curve,d=e.colors,f=e.lineOpacity,h=e.strokeWidth,y=e.axesTicksPosition,v=e.pixelRatio,g=(0,s.useRef)(null),m=(0,i.Bs)(a,u,l),x=m.margin,k=m.innerWidth,M=m.innerHeight,P=m.outerWidth,T=m.outerHeight,O=b({width:k,height:M,data:t,variables:o,layout:n,colors:d,curve:c}),R=O.variablesScale,S=O.variablesWithScale,C=O.dataWithPoints,A=O.lineGenerator,q=O.getLineColor,w=(0,i.Fg)();return(0,s.useEffect)((function(){g.current.width=P*v,g.current.height=T*v;var e=g.current.getContext("2d");e.scale(v,v),e.fillStyle=w.background,e.fillRect(0,0,P,T),e.translate(x.left,x.top),A.context(e),C.forEach((function(t){e.save(),e.globalAlpha=f,e.beginPath(),A(t.points),e.strokeStyle=q(t),e.lineWidth=h,e.stroke(),e.restore()})),S.map((function(t){(0,r.RN)(e,{axis:"horizontal"===n?"y":"x",scale:t.scale,x:"horizontal"===n?R(t.key):0,y:"horizontal"===n?0:R(t.key),length:"horizontal"===n?M:k,ticksPosition:y,theme:w})}))}),[g,P,T,k,M,x,A,q,f,h,C,S,n,y,w,v]),(0,p.jsx)("canvas",{ref:g,width:P*v,height:T*v,style:{width:P,height:T}})};A.propTypes=y({},g,{pixelRatio:a().number.isRequired});var q=(0,i.li)(A);q.defaultProps=y({},x,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1});var w=function(e){return(0,p.jsx)(i.d,{children:function(t){var n=t.width,i=t.height;return(0,p.jsx)(q,y({width:n,height:i},e))}})}},82068:function(e,t,n){"use strict";var i=n(62370);t.Z=(0,i.h8)({})},91573:function(e,t,n){var i=n(37561),r=n(74305);e.exports=function(e){return r(i(e))}},76418:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,i){return e+t(n()*(i-e+1))}},16326:function(e,t,n){var i=n(74305),r=n(58185);e.exports=function(e){return i(r(e))}},42231:function(e,t,n){var i=n(66070);e.exports=function(e,t){return i(t,(function(t){return e[t]}))}},74305:function(e,t,n){var i=n(76418);e.exports=function(e,t){var n=-1,r=e.length,o=r-1;for(t=void 0===t?r:t;++n<t;){var a=i(n,o),u=e[a];e[a]=e[n],e[n]=u}return e.length=t,e}},91311:function(e,t,n){var i=n(76418),r=n(57535),o=n(94919),a=parseFloat,u=Math.min,s=Math.random;e.exports=function(e,t,n){if(n&&"boolean"!=typeof n&&r(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=o(e),void 0===t?(t=e,e=0):t=o(t)),e>t){var l=e;e=t,t=l}if(n||e%1||t%1){var c=s();return u(e+c*(t-e+a("1e-"+((c+"").length-1))),t)}return i(e,t)}},19193:function(e,t,n){var i=n(91573),r=n(16326),o=n(19785);e.exports=function(e){return(o(e)?i:r)(e)}},58185:function(e,t,n){var i=n(42231),r=n(50098);e.exports=function(e){return null==e?[]:i(e,r(e))}}}]);
//# sourceMappingURL=8a08e82b418a1d26bd365445dd4625425eed4154-69a242e56b8fd60f6c31.js.map