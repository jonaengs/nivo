(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[2546],{42970:function(e){(function(){var t,r,n,a,o,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-o)/1e6},r=process.hrtime,a=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})(),u=1e9*process.uptime(),o=a-u):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},71639:function(e,t,r){for(var n=r(42970),a="undefined"==typeof window?r.g:window,o=["moz","webkit"],u="AnimationFrame",i=a["request"+u],l=a["cancel"+u]||a["cancelRequest"+u],s=0;!i&&s<o.length;s++)i=a[o[s]+"Request"+u],l=a[o[s]+"Cancel"+u]||a[o[s]+"CancelRequest"+u];if(!i||!l){var c=0,f=0,p=[];i=function(e){if(0===p.length){var t=n(),r=Math.max(0,16.666666666666668-(t-c));c=r+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(r){setTimeout((function(){throw r}),0)}}),Math.round(r))}return p.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){l.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=i,e.cancelAnimationFrame=l}},7139:function(e,t,r){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var u=o(r(84006)),i=o(r(5660)),l=o(r(74242)),s=o(r(43291)),c=o(r(71639)),f=o(r(78184)),p=o(r(27378)),d=o(r(23615)),y=1e3/60,m=function(e){function t(r){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,r=a.state,o=r.currentStyle,u=r.currentVelocity,i=r.lastIdealStyle,l=r.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,o=n({},o),u=n({},u),i=n({},i),l=n({},l)),o[s]=c,u[s]=0,i[s]=c,l[s]=0)}t&&a.setState({currentStyle:o,currentVelocity:u,lastIdealStyle:i,lastIdealVelocity:l})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var r=e||s.default(),n=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+n,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,u=Math.floor(a.accumulatedTime/y),i={},c={},p={},d={};for(var m in t)if(Object.prototype.hasOwnProperty.call(t,m)){var h=t[m];if("number"==typeof h)p[m]=h,d[m]=0,i[m]=h,c[m]=0;else{for(var v=a.state.lastIdealStyle[m],b=a.state.lastIdealVelocity[m],g=0;g<u;g++){var w=l.default(y/1e3,v,b,h.val,h.stiffness,h.damping,h.precision);v=w[0],b=w[1]}var S=l.default(y/1e3,v,b,h.val,h.stiffness,h.damping,h.precision),_=S[0],I=S[1];p[m]=v+(_-v)*o,d[m]=b+(I-b)*o,i[m]=v,c[m]=b}}a.animationID=null,a.accumulatedTime-=u*y,a.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:i,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,r=e.style,n=t||i.default(r),a=u.default(n);return{currentStyle:n,currentVelocity:a,lastIdealStyle:n,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},34530:function(e,t,r){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var u=o(r(84006)),i=o(r(5660)),l=o(r(74242)),s=o(r(43291)),c=o(r(71639)),f=o(r(78184)),p=o(r(27378)),d=o(r(23615)),y=1e3/60;var m=function(e){function t(r){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,r=t.currentStyles,o=t.currentVelocities,u=t.lastIdealStyles,i=t.lastIdealVelocities,l=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,l=!0,r[s]=n({},r[s]),o[s]=n({},o[s]),u[s]=n({},u[s]),i[s]=n({},i[s])),r[s][p]=d,o[s][p]=0,u[s][p]=d,i[s][p]=0)}}l&&a.setState({currentStyles:r,currentVelocities:o,lastIdealStyles:u,lastIdealVelocities:i})},this.startAnimationIfNecessary=function(){a.animationID=c.default((function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,r){for(var n=0;n<e.length;n++)if(!f.default(e[n],t[n],r[n]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var r=e||s.default(),n=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+n,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,u=Math.floor(a.accumulatedTime/y),i=[],c=[],p=[],d=[],m=0;m<t.length;m++){var h=t[m],v={},b={},g={},w={};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var _=h[S];if("number"==typeof _)v[S]=_,b[S]=0,g[S]=_,w[S]=0;else{for(var I=a.state.lastIdealStyles[m][S],O=a.state.lastIdealVelocities[m][S],T=0;T<u;T++){var P=l.default(y/1e3,I,O,_.val,_.stiffness,_.damping,_.precision);I=P[0],O=P[1]}var M=l.default(y/1e3,I,O,_.val,_.stiffness,_.damping,_.precision),k=M[0],x=M[1];v[S]=I+(k-I)*o,b[S]=O+(x-O)*o,g[S]=I,w[S]=O}}p[m]=v,d[m]=b,i[m]=g,c[m]=w}a.animationID=null,a.accumulatedTime-=u*y,a.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:i,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,r=e.styles,n=t||r().map(i.default),a=n.map((function(e){return u.default(e)}));return{currentStyles:n,currentVelocities:a,lastIdealStyles:n,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},17669:function(e,t,r){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var u=o(r(84006)),i=o(r(5660)),l=o(r(74242)),s=o(r(72655)),c=o(r(43291)),f=o(r(71639)),p=o(r(78184)),d=o(r(27378)),y=o(r(23615)),m=1e3/60;function h(e,t,r){var n=t;return null==n?e.map((function(e,t){return{key:e.key,data:e.data,style:r[t]}})):e.map((function(e,t){for(var a=0;a<n.length;a++)if(n[a].key===e.key)return{key:n[a].key,data:n[a].data,style:r[t]};return{key:e.key,data:e.data,style:r[t]}}))}function v(e,t,r,n,a,o,i,l,c){for(var f=s.default(n,a,(function(e,n){var a=t(n);return null==a||p.default(o[e],a,i[e])?(r({key:n.key,data:n.data}),null):{key:n.key,data:n.data,style:a}})),d=[],y=[],m=[],h=[],v=0;v<f.length;v++){for(var b=f[v],g=null,w=0;w<n.length;w++)if(n[w].key===b.key){g=w;break}if(null==g){var S=e(b);d[v]=S,m[v]=S;var _=u.default(b.style);y[v]=_,h[v]=_}else d[v]=o[g],m[v]=l[g],y[v]=i[g],h[v]=c[g]}return[f,d,y,m,h]}var b=function(e){function t(r){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),r=t[0],o=t[1],u=t[2],i=t[3],l=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,o[s]=n({},o[s]),u[s]=n({},u[s]),i[s]=n({},i[s]),l[s]=n({},l[s]),r[s]={key:r[s].key,data:r[s].data,style:n({},r[s].style)}),o[s][p]=d,u[s][p]=0,i[s][p]=d,l[s][p]=0,r[s].style[p]=d)}}a.setState({currentStyles:o,currentVelocities:u,mergedPropsStyles:r,lastIdealStyles:i,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default((function(e){if(!a.unmounting){var t=a.props.styles,r="function"==typeof t?t(h(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,r,n){if(n.length!==t.length)return!1;for(var a=0;a<n.length;a++)if(n[a].key!==t[a].key)return!1;for(a=0;a<n.length;a++)if(!p.default(e[a],t[a].style,r[a]))return!1;return!0}(a.state.currentStyles,r,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var n=e||c.default(),o=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+o,a.accumulatedTime>10*m&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var u=(a.accumulatedTime-Math.floor(a.accumulatedTime/m)*m)/m,i=Math.floor(a.accumulatedTime/m),s=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,r,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],d=s[1],y=s[2],b=s[3],g=s[4],w=0;w<f.length;w++){var S=f[w].style,_={},I={},O={},T={};for(var P in S)if(Object.prototype.hasOwnProperty.call(S,P)){var M=S[P];if("number"==typeof M)_[P]=M,I[P]=0,O[P]=M,T[P]=0;else{for(var k=b[w][P],x=g[w][P],j=0;j<i;j++){var Z=l.default(m/1e3,k,x,M.val,M.stiffness,M.damping,M.precision);k=Z[0],x=Z[1]}var D=l.default(m/1e3,k,x,M.val,M.stiffness,M.damping,M.precision),A=D[0],V=D[1];_[P]=k+(A-k)*u,I[P]=x+(V-x)*u,O[P]=k,T[P]=x}}b[w]=O,g[w]=T,d[w]=_,y[w]=I}a.animationID=null,a.accumulatedTime-=i*m,a.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:b,lastIdealVelocities:g,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}})))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.number).isRequired})),styles:y.default.oneOfType([y.default.func,y.default.arrayOf(y.default.shape({key:y.default.string.isRequired,data:y.default.any,style:y.default.objectOf(y.default.oneOfType([y.default.number,y.default.object])).isRequired}))]).isRequired,children:y.default.func.isRequired,willEnter:y.default.func,willLeave:y.default.func,didLeave:y.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return i.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,r=e.styles,n=e.willEnter,a=e.willLeave,o=e.didLeave,l="function"==typeof r?r(t):r,s=void 0;s=null==t?l:t.map((function(e){for(var t=0;t<l.length;t++)if(l[t].key===e.key)return l[t];return e}));var c=null==t?l.map((function(e){return i.default(e.style)})):t.map((function(e){return i.default(e.style)})),f=null==t?l.map((function(e){return u.default(e.style)})):t.map((function(e){return u.default(e.style)})),p=v(n,a,o,s,l,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=b,e.exports=t.default},84006:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=0);return t},e.exports=t.default},72655:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t,r){for(var n={},a=0;a<e.length;a++)n[e[a].key]=a;var o={};for(a=0;a<t.length;a++)o[t[a].key]=a;var u=[];for(a=0;a<t.length;a++)u[a]=t[a];for(a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(o,e[a].key)){var i=r(a,e[a]);null!=i&&u.push(i)}return u.sort((function(e,r){var a=o[e.key],u=o[r.key],i=n[e.key],l=n[r.key];if(null!=a&&null!=u)return o[e.key]-o[r.key];if(null!=i&&null!=l)return n[e.key]-n[r.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(n,c)){if(a<o[c]&&l>n[c])return-1;if(a>o[c]&&l<n[c])return 1}}return 1}for(s=0;s<t.length;s++){c=t[s].key;if(Object.prototype.hasOwnProperty.call(n,c)){if(u<o[c]&&i>n[c])return 1;if(u>o[c]&&i<n[c])return-1}}return-1}))},e.exports=t.default},33210:function(e,t){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},88692:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e.default:e}n(r(7139)),n(r(34530));var a=r(17669);t.bg=n(a);var o=r(40050);t.ST=n(o),n(r(33210)),n(r(5660)),n(r(20030))},20030:function(e,t){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},78184:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t,r){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(0!==r[n])return!1;var a="number"==typeof t[n]?t[n]:t[n].val;if(e[n]!==a)return!1}return!0},e.exports=t.default},40050:function(e,t,r){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e,t){return n({},i,t,{val:e})};var a,o=r(33210),u=(a=o)&&a.__esModule?a:{default:a},i=n({},u.default.noWobble,{precision:.01});e.exports=t.default},74242:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,o,u,i){var l=n+(-o*(t-a)+-u*n)*e,s=t+l*e;if(Math.abs(l)<i&&Math.abs(s-a)<i)return r[0]=a,r[1]=0,r;return r[0]=s,r[1]=l,r};var r=[0,0];e.exports=t.default},5660:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]="number"==typeof e[r]?e[r]:e[r].val);return t},e.exports=t.default},43291:function(e){(function(){var t,r,n;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-n)/1e6},r=process.hrtime,n=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},79234:function(e,t,r){"use strict";r.d(t,{uU:function(){return re},mQ:function(){return me},Ne:function(){return ye},t:function(){return Ie},HY:function(){return ce},BN:function(){return se},u6:function(){return ae},B3:function(){return he},Tf:function(){return ge},Kc:function(){return we},UO:function(){return Oe},BM:function(){return be},wR:function(){return fe},Jw:function(){return pe},nH:function(){return de},qi:function(){return _e},qE:function(){return ie},Bf:function(){return ve},U:function(){return Se}});var n=r(32925),a=r(65880),o=r(59427),u=r(41646),i=r(23480),l=r(8992),s=r(51596),c=r(73837),f=r(2524),p=r(58474),d=r(26039),y=r(86455),m=r(94821),h=r(53565),v=r(46125),b=r(48946),g=r(10406),w=r(89234),S=r(18291),_=r(10905),I=r(79776),O=r(20375),T=r(64240),P=r(8343),M=r(37580),k=r(39476),x=r(31766),j=r(43648),Z=r(19906),D=r(13796),A=r(15374),V=r(37096),R=r(52006),q=r(52238),N=r(38711),E=r(1125),z=r(22576),C=r(28392),U=r(84385),L=r(44622),B=r(40861),W=r.n(B),G=r(99729),$=r.n(G),F=r(27378),H=r(3221),J=r(88692),K=r(19183),Q=r(23615),X=r.n(Q);function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(this,arguments)}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var te={nivo:["#e8c1a0","#f47560","#f1e15b","#e8a838","#61cdbb","#97e3d5"],category10:n.Z,accent:a.Z,dark2:o.Z,paired:u.Z,pastel1:i.Z,pastel2:l.Z,set1:s.Z,set2:c.Z,set3:f.Z},re=Object.keys(te),ne={brown_blueGreen:p.r,purpleRed_green:d.r,pink_yellowGreen:y.r,purple_orange:m.r,red_blue:h.r,red_grey:v.r,red_yellow_blue:b.r,red_yellow_green:g.r,spectral:w.r},ae=Object.keys(ne),oe={brown_blueGreen:p.Z,purpleRed_green:d.Z,pink_yellowGreen:y.Z,purple_orange:m.Z,red_blue:h.Z,red_grey:v.Z,red_yellow_blue:b.Z,red_yellow_green:g.Z,spectral:w.Z},ue={blues:S.r,greens:_.r,greys:I.r,oranges:O.r,purples:T.r,reds:P.r,blue_green:M.r,blue_purple:k.r,green_blue:x.r,orange_red:j.r,purple_blue_green:Z.r,purple_blue:D.r,purple_red:A.r,red_purple:V.r,yellow_green_blue:R.r,yellow_green:q.r,yellow_orange_brown:N.r,yellow_orange_red:E.r},ie=Object.keys(ue),le={blues:S.Z,greens:_.Z,greys:I.Z,oranges:O.Z,purples:T.Z,reds:P.Z,turbo:function(e){return e=Math.max(0,Math.min(1,e)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+e*(1172.33-e*(10793.56-e*(33300.12-e*(38394.49-14825.05*e)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+e*(557.33+e*(1225.33-e*(3574.96-e*(1073.77+707.56*e)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+e*(3211.1-e*(15327.97-e*(27814-e*(22569.18-6838.66*e)))))))+")"},viridis:z.ZP,inferno:z.yy,magma:z.uX,plasma:z.zD,cividis:function(e){return e=Math.max(0,Math.min(1,e)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-e*(35.34-e*(2381.73-e*(6402.7-e*(7024.72-2710.57*e)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+e*(170.73+e*(52.82-e*(131.46-e*(176.58-67.37*e)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+e*(442.36-e*(2482.43-e*(6167.24-e*(6614.94-2475.67*e)))))))+")"},warm:C.s7,cool:C.H7,cubehelixDefault:U.Z,blue_green:M.Z,blue_purple:k.Z,green_blue:x.Z,orange_red:j.Z,purple_blue_green:Z.Z,purple_blue:D.Z,purple_red:A.Z,red_purple:V.Z,yellow_green_blue:R.Z,yellow_green:q.Z,yellow_orange_brown:N.Z,yellow_orange_red:E.Z},se=Y({},te,ne,ue),ce=Object.keys(se),fe=function(e){return re.includes(e)},pe=function(e){return ae.includes(e)},de=function(e){return ie.includes(e)},ye=Y({},oe,le,{rainbow:C.ZP,sinebow:L.Z}),me=Object.keys(ye),he=function(e,t){if("function"==typeof e)return e;if(W()(e)){if(function(e){return void 0!==e.theme}(e)){if(void 0===t)throw new Error("Unable to use color from theme as no theme was provided");var r=$()(t,e.theme);if(void 0===r)throw new Error("Color from theme is undefined at path: '"+e.theme+"'");return function(){return r}}if(function(e){return void 0!==e.from}(e)){var n=function(t){return $()(t,e.from)};if(Array.isArray(e.modifiers)){for(var a,o=[],u=function(){var e=a.value,t=e[0],r=e[1];if("brighter"===t)o.push((function(e){return e.brighter(r)}));else if("darker"===t)o.push((function(e){return e.darker(r)}));else{if("opacity"!==t)throw new Error("Invalid color modifier: '"+t+"', must be one of: 'brighter', 'darker', 'opacity'");o.push((function(e){return e.opacity=r,e}))}},i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ee(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e.modifiers);!(a=i()).done;)u();return 0===o.length?n:function(e){return o.reduce((function(e,t){return t(e)}),(0,H.B8)(n(e))).toString()}}return n}throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object")}return function(){return e}},ve=function(e,t){return(0,F.useMemo)((function(){return he(e,t)}),[e,t])},be=function(e,t){var r=(0,H.B8)(e);if(!t)return{colorR:r.r,colorG:r.g,colorB:r.b};var n=Y({},t,{precision:1});return{colorR:(0,J.ST)(r.r,n),colorG:(0,J.ST)(r.g,n),colorB:(0,J.ST)(r.b,n)}},ge=function(e){var t=e.colorR,r=e.colorG,n=e.colorB;return"rgb("+Math.round(Math.max(t,0))+","+Math.round(Math.max(r,0))+","+Math.round(Math.max(n,0))+")"},we=function(e,t){if("function"==typeof e)return e;var r="function"==typeof t?t:function(e){return $()(e,t)};if(Array.isArray(e)){var n=(0,K.Z)(e),a=function(e){return n(r(e))};return a.scale=n,a}if(W()(e)){if(function(e){return void 0!==e.datum}(e))return function(t){return $()(t,e.datum)};if(function(e){return void 0!==e.scheme}(e)){if(fe(e.scheme)){var o=(0,K.Z)(se[e.scheme]),u=function(e){return o(r(e))};return u.scale=o,u}if(pe(e.scheme)){if(void 0!==e.size&&(e.size<3||e.size>11))throw new Error("Invalid size '"+e.size+"' for diverging color scheme '"+e.scheme+"', must be between 3~11");var i=(0,K.Z)(se[e.scheme][e.size||11]),l=function(e){return i(r(e))};return l.scale=i,l}if(de(e.scheme)){if(void 0!==e.size&&(e.size<3||e.size>9))throw new Error("Invalid size '"+e.size+"' for sequential color scheme '"+e.scheme+"', must be between 3~9");var s=(0,K.Z)(se[e.scheme][e.size||9]),c=function(e){return s(r(e))};return c.scale=s,c}}throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property")}return function(){return e}},Se=function(e,t){return(0,F.useMemo)((function(){return we(e,t)}),[e,t])},_e=X().oneOfType([X().func,X().arrayOf(X().string),X().shape({scheme:X().oneOf(ce).isRequired,size:X().number}),X().shape({datum:X().string.isRequired}),X().string]),Ie=X().oneOfType([X().func,X().string]),Oe=X().oneOfType([X().string,X().func,X().shape({theme:X().string.isRequired}),X().shape({from:X().string.isRequired,modifiers:X().arrayOf(X().array)})])},18365:function(e){var t=Math.ceil,r=Math.max;e.exports=function(e,n,a,o){for(var u=-1,i=r(t((n-e)/(a||1)),0),l=Array(i);i--;)l[o?i:++u]=e,e+=a;return l}},75733:function(e){e.exports=function(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(r=r>a?a:r)<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(a);++n<a;)o[n]=e[n+t];return o}},74833:function(e,t,r){var n=r(56127),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},92198:function(e,t,r){var n=r(52485),a=r(58095),o=r(21796),u=r(65581),i=r(47111),l=r(43735);e.exports=function(e,t,r){var s=-1,c=a,f=e.length,p=!0,d=[],y=d;if(r)p=!1,c=o;else if(f>=200){var m=t?null:i(e);if(m)return l(m);p=!1,c=u,y=new n}else y=t?[]:d;e:for(;++s<f;){var h=e[s],v=t?t(h):h;if(h=r||0!==h?h:0,p&&v==v){for(var b=y.length;b--;)if(y[b]===v)continue e;t&&y.push(v),d.push(h)}else c(y,v,r)||(y!==d&&y.push(v),d.push(h))}return d}},55294:function(e,t,r){var n=r(18365),a=r(57535),o=r(94919);e.exports=function(e){return function(t,r,u){return u&&"number"!=typeof u&&a(t,r,u)&&(r=u=void 0),t=o(t),void 0===r?(r=t,t=0):r=o(r),u=void 0===u?t<r?1:-1:o(u),n(t,r,u,e)}}},47111:function(e,t,r){var n=r(46151),a=r(50344),o=r(43735),u=n&&1/o(new n([,-0]))[1]==1/0?function(e){return new n(e)}:a;e.exports=u},56127:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},78581:function(e,t,r){var n=r(99736),a=r(92360);e.exports=function(e){return"number"==typeof e||a(e)&&"[object Number]"==n(e)}},50344:function(e){e.exports=function(){}},4215:function(e,t,r){var n=r(55294)();e.exports=n},94919:function(e,t,r){var n=r(91936),a=1/0;e.exports=function(e){return e?(e=n(e))===a||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},91936:function(e,t,r){var n=r(74833),a=r(11611),o=r(55193),u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=i.test(e);return r||l.test(e)?s(e.slice(2),r?2:8):u.test(e)?NaN:+e}},83766:function(e,t,r){var n=r(92198);e.exports=function(e){return e&&e.length?n(e):[]}}}]);
//# sourceMappingURL=97d7711cf61156f30002b2ff7461bfed72aa929f-1b260c60040ae5e2c720.js.map