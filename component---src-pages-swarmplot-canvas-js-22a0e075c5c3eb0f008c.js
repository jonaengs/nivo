"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7433],{54122:function(e,i,t){t.r(i);t(27378);var o=t(52729),r=t(69857),a=t(29003),n=t(32097),l=t(77269),d=t(54426),c=t(25414),s=t(24246);function p(){return p=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(this,arguments)}var u=Object.freeze({pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,groupBy:"group",identity:"id",value:"price",valueFormat:{format:"$.2f",enabled:!0},valueScale:{type:"linear",min:0,max:500,reverse:!1},size:{key:"volume",values:[4,20],sizes:[4,12]},spacing:1,layout:o.lG.layout,gap:o.lG.gap,forceStrength:1,simulationIterations:60,colors:{scheme:"paired"},colorBy:"group",borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.6]]},margin:{top:80,right:100,bottom:80,left:100},enableGridX:!0,enableGridY:!0,axisTop:{enable:!0,orient:"top",tickSize:10,tickPadding:5,tickRotation:0,legend:"group if vertical, price if horizontal",legendPosition:"middle",legendOffset:-46},axisRight:{enable:!0,orient:"right",tickSize:10,tickPadding:5,tickRotation:0,legend:"price if vertical, group if horizontal",legendPosition:"middle",legendOffset:76},axisBottom:{enable:!0,orient:"bottom",tickSize:10,tickPadding:5,tickRotation:0,legend:"group if vertical, price if horizontal",legendPosition:"middle",legendOffset:46},axisLeft:{enable:!0,orient:"left",tickSize:10,tickPadding:5,tickRotation:0,legend:"price if vertical, group if horizontal",legendPosition:"middle",legendOffset:-76},isInteractive:!0,useMesh:!0,debugMesh:!1});i.default=function(){var e=(0,c.useStaticQuery)("2849452879").image.childImageSharp.gatsbyImageData;return(0,s.jsx)(r.T,{name:"SwarmPlotCanvas",meta:a.Zp,icon:"swarmplot",flavors:a.Kk,currentFlavor:"canvas",properties:l.X,initialProperties:u,defaultProperties:o.lG,propertiesMapper:n.Z,codePropertiesMapper:function(e,i){return p({groups:i.groups},e)},generateData:d.g,getTabData:function(e){return e.data},getDataSize:function(e){return e.data.length},image:e,children:function(e,i,t,r){return(0,s.jsx)(o.R5,p({data:i.data,groups:i.groups},e,{theme:t,onClick:function(e){r({type:"click",label:"[node] id: "+e.id+", group: "+e.group+", value: "+e.value,color:e.color,data:e})}}))}})}}}]);
//# sourceMappingURL=component---src-pages-swarmplot-canvas-js-22a0e075c5c3eb0f008c.js.map