!function(){var e,t,o,n,r,l,s={8473:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}}),o("4541"),o("8174"),o("3118"),o("2464"),o("8936"),o("4335"),o("7475");var n=o("2676"),r=o("5271"),l=o("3094"),s=o("2705"),a=o("5210"),i=o("3623");function c(){var e,t,o,c,d,u,f,h,p,y,v;let[g,b]=(0,r.useState)({});(0,r.useEffect)(()=>{let e=new URL(location.href).searchParams.get("shareId");fetch("/cgi-bin/shared/get").then(e=>e.json()).then(t=>{let o=t.data[e];"POST"===o.req.method&&(o.req.body=(0,l.Jx)(o.req.base64)),o.res.base64&&(o.res.body=(0,l.Jx)(o.res.base64)),b(o)})},[]);let m=[{key:"1",label:"\u8BF7\u6C42url",children:g.url},{key:"2",label:"\u8BF7\u6C42method",children:null===(e=g.req)||void 0===e?void 0:e.method},{key:"4",label:"\u8BF7\u6C42Header",children:(null===(t=g.req)||void 0===t?void 0:t.headers)?(0,n.jsx)(s.ZP,{value:null===(o=g.req)||void 0===o?void 0:o.headers,style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null},(null===(c=g.req)||void 0===c?void 0:c.method)==="POST"?{key:"4",label:"\u8BF7\u6C42body",children:(null===(d=g.req)||void 0===d?void 0:d.body)?(0,n.jsx)(s.ZP,{collapsed:3,value:JSON.parse(null===(u=g.req)||void 0===u?void 0:u.body),style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null}:null].filter(Boolean),w=[{key:"1",label:"\u72B6\u6001\u7801",children:null===(f=g.res)||void 0===f?void 0:f.statusCode},{key:"2",label:"\u54CD\u5E94Header",children:(null===(h=g.res)||void 0===h?void 0:h.headers)?(0,n.jsx)(s.ZP,{value:null===(p=g.res)||void 0===p?void 0:p.headers,style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null},{key:"3",label:"\u54CD\u5E94body",children:(null===(y=g.res)||void 0===y?void 0:y.body)?(0,n.jsx)(s.ZP,{collapsed:3,value:JSON.parse(null===(v=g.res)||void 0===v?void 0:v.body),style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null}].filter(Boolean);return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"share-container",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{size:"small",bordered:!0,items:m,column:1})}),(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{size:"small",bordered:!0,items:w,column:1})})]})})}},5147:function(e,t,o){"use strict";o("4541"),o("8174"),o("3118");var n=o("6437"),r=o("741");o("7403"),new URL(location.href).searchParams.get("shareId")?(0,r.O)():(0,n.m)()},741:function(e,t,o){"use strict";o.d(t,{O:function(){return s}});var n=o("2676"),r=o("8751"),l=o("8473");function s(){(0,r.createRoot)(document.getElementById("root")).render((0,n.jsx)(l.Z,{}))}},6437:function(e,t,o){"use strict";o.d(t,{m:function(){return i}}),o("2464");var n=o("669"),r=o("5947"),l=o("5338"),s=o("8825"),a=o("2662");function i(){let e=new WebSocket("wss://local.whistlejs.com/whistle.devtool"),t=new n.G,o=new r.Q(e),i=new a.K,c=new s.l,d=new l.r(e);e.onclose=()=>{console.log("Disconnected from server"),location.reload()},e.onmessage=async function(e){var n;let{data:r}=e;let l=await (n=r,new Promise((e,t)=>{let o=new FileReader;o.onload=()=>{e(o.result)},o.onerror=e=>{t(e)},o.readAsText(n)}));"html"===(l=JSON.parse(l)).type?d.handleMessage(l):"console"===l.type||"connected"===l.type?t.handleMessage(l):"eval"===l.type?o.handleMessage(l):"view-wh"===l.type?i.handleMessage(l):"scrollY"===l.type&&c.handleMessage(l)}}},669:function(e,t,o){"use strict";o.d(t,{G:function(){return n}}),o("2979");class n{handleMessage(e){if("console"===e.type){let{content:t}=e;console[t[0].method](...t[0].args)}"connected"===e.type&&(console.group("\u5F53\u524D\u9875\u9762\u4FE1\u606F"),console.log("%c URL","font-size:12px; background:#3b76d8; color:#fff;",e.content.url),console.log("%c UA","font-size:12px; background:#3b76d8; color:#fff;",e.content.ua),console.groupEnd())}}},1428:function(e,t,o){"use strict";o.d(t,{v:function(){return n}}),o("4210"),o("1160"),o("5698"),o("7475"),o("3610");class n{observe(){let e={attributes:[],addedNodes:[],removedNodes:[],characterData:[]},t=e=>{this.ws.send(JSON.stringify({type:"mutation",content:e}))},o=new MutationObserver(o=>{for(let n of o){console.log("%c [ mutation.target ]-29","font-size:15px; background:#eb5305; color:#ff9749;",n.target);let o=this.getPathTo(n.target);if("attributes"===n.type){let r={path:o,attributeName:n.attributeName,oldValue:n.oldValue,newValue:n.target.getAttribute(n.attributeName)};e.attributes.push(r),t(r),console.log(`Attribute ${n.attributeName} was modified.`),console.log("Change:",r)}else if("childList"===n.type)n.addedNodes.length>0&&n.addedNodes.forEach(t=>{if(1===t.nodeType){let o={path:this.getPathTo(t),node:t};e.addedNodes.push(o),console.log("Node added:",t),console.log("Path:",o.path)}}),n.removedNodes.length>0&&n.removedNodes.forEach(t=>{if(1===t.nodeType){let o={path:this.getPathTo(t),node:t};e.removedNodes.push(o),console.log("Node removed:",t),console.log("Path:",o.path)}});else if("characterData"===n.type){let r={path:o,oldValue:n.oldValue,newValue:n.target.data};e.characterData.push(r),t(r),console.log("Character data modified:",n.target),console.log("Change:",r)}}});o.observe(document.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.observer=o}disconnect(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}handleMessage(e){console.log(e.content)}getPathTo(e){console.log("%c [ element ]-103","font-size:15px; background:#5c1a93; color:#a05ed7;",e);let t=[];for(;e&&e!==document.body;){console.log("%c [ element.parentNode ]-107","font-size:15px; background:#06aaf8; color:#4aeeff;",e.parentNode);let o=Array.from(e.parentNode.childNodes).indexOf(e);t.unshift(o),e=e.parentNode}return t}constructor(e){this.ws=e,this.observer=void 0}}},5947:function(e,t,o){"use strict";o.d(t,{Q:function(){return n}});class n{handleMessage(e){console.log(e.content)}constructor(e){window.parent.ev=function(t){e.send(JSON.stringify({type:"eval",content:t}))}}}},5338:function(e,t,o){"use strict";o.d(t,{r:function(){return c}}),o("6972"),o("6879"),o("1540"),o("638"),o("4910"),o("126"),o("886"),o("3605"),o("540"),o("1558"),o("3845"),o("9388"),o("3522"),o("294"),o("8522"),o("9200"),o("1911"),o("5615"),o("9526"),o("8774"),o("9191"),o("3848"),o("2768"),o("1160"),o("5698"),o("7475"),o("4210");var n=o("1428");let r=new Set,l=new Set,s=[],a=[],i="";class c{handleMessage(e){"html"===e.tag&&(r.clear(),l.clear(),a.forEach(e=>e.remove()),s.forEach(e=>e.remove()));let[t,o]=function(e){let t;let o=new DOMParser().parseFromString(e,"text/html"),n=[];return o.querySelectorAll('link[rel="stylesheet"]').forEach(function(e){!l.has(e.getAttribute("href"))&&(n.push({type:"link",content:e.getAttribute("href")}),l.add(e.getAttribute("href")))}),o.querySelectorAll("style").forEach(function(e){!r.has(e.textContent)&&(n.push({type:"style",content:e.textContent}),r.add(e.textContent))}),i!==o.body.innerHTML&&(i=o.body.innerHTML,t=o.body),[n,t]}(e.content);t.forEach(e=>{if("link"===e.type){let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e.content),a.push(t),document.head.appendChild(t)}else{let t=document.createElement("style");t.innerHTML=e.content,s.push(t),document.head.appendChild(t)}}),o&&document.body.replaceWith(o),this.elementDevTool.disconnect(),setTimeout(()=>{this.elementDevTool.observe()})}constructor(e){this.elementDevTool=new n.v(e),e.onopen=()=>{console.log("Connected to server"),e.send(JSON.stringify({type:"html"})),e.send(JSON.stringify({type:"connected"}))}}}},8825:function(e,t,o){"use strict";o.d(t,{l:function(){return n}});class n{handleMessage(e){window.scrollTo(0,e.content)}}},2662:function(e,t,o){"use strict";o.d(t,{K:function(){return n}}),o("1160"),o("5698"),o("7475"),o("1056");class n{handleMessage(e){let t=window.parent.document.querySelectorAll("iframe");t&&Array.from(t).forEach(t=>{t.src.includes("plugin.devtool")&&(t.style.maxWidth=e.content.width+"px",t.style.maxHeight=e.content.height+"px",t.scrolling="yes")})}}},7403:function(e,t,o){"use strict";o.r(e.exports={})}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return s[e].call(o.exports,o,o.exports,i),o.exports}i.m=s,i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(o,n){if(1&n&&(o=this(o)),8&n||"object"==typeof o&&o&&(4&n&&o.__esModule||16&n&&"function"==typeof o.then))return o;var r=Object.create(null);i.r(r);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){l[e]=function(){return o[e]}});return l.default=function(){return o},i.d(r,l),r},i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.k=function(e){return""+e+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o=[],i.O=function(e,t,n,r){if(t){r=r||0;for(var l=o.length;l>0&&o[l-1][2]>r;l--)o[l]=o[l-1];o[l]=[t,n,r];return}for(var s=1/0,l=0;l<o.length;l++){for(var t=o[l][0],n=o[l][1],r=o[l][2],a=!0,c=0;c<t.length;c++)s>=r&&Object.keys(i.O).every(function(e){return i.O[e](t[c])})?t.splice(c--,1):(a=!1,r<s&&(s=r));if(a){o.splice(l--,1);var d=n();void 0!==d&&(e=d)}}return e},i.p="/",n={980:0},i.O.j=function(e){return 0===n[e]},r=function(e,t){var o=t[0],r=t[1],l=t[2],s,a,c=0;if(o.some(function(e){return 0!==n[e]})){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(l)var d=l(i)}for(e&&e(t);c<o.length;c++)a=o[c],i.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return i.O(d)},(l=self.webpackChunkwhistle_devtool=self.webpackChunkwhistle_devtool||[]).forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l));var c=i.O(void 0,["126","361","83"],function(){return i("5147")});i.O(c)}();