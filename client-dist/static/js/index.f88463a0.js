!function(){var e,t,n,o,r,l,s={8473:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}}),n("4541"),n("8174"),n("3118"),n("2464"),n("8936"),n("4335"),n("7475");var o=n("2676"),r=n("5271"),l=n("3094"),s=n("2705"),a=n("5210"),i=n("3623");function c(){var e,t,n,c,d,u,f,h,p,y,v;let[b,g]=(0,r.useState)({});(0,r.useEffect)(()=>{let e=new URL(location.href).searchParams.get("shareId");fetch("/cgi-bin/shared/get").then(e=>e.json()).then(t=>{let n=t.data[e];"POST"===n.req.method&&(n.req.body=(0,l.Jx)(n.req.base64)),n.res.base64&&(n.res.body=(0,l.Jx)(n.res.base64)),g(n)})},[]);let m=[{key:"1",label:"\u8BF7\u6C42url",children:b.url},{key:"2",label:"\u8BF7\u6C42method",children:null===(e=b.req)||void 0===e?void 0:e.method},{key:"4",label:"\u8BF7\u6C42Header",children:(null===(t=b.req)||void 0===t?void 0:t.headers)?(0,o.jsx)(s.ZP,{value:null===(n=b.req)||void 0===n?void 0:n.headers,style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null},(null===(c=b.req)||void 0===c?void 0:c.method)==="POST"?{key:"4",label:"\u8BF7\u6C42body",children:(null===(d=b.req)||void 0===d?void 0:d.body)?(0,o.jsx)(s.ZP,{collapsed:3,value:JSON.parse(null===(u=b.req)||void 0===u?void 0:u.body),style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null}:null].filter(Boolean),w=[{key:"1",label:"\u72B6\u6001\u7801",children:null===(f=b.res)||void 0===f?void 0:f.statusCode},{key:"2",label:"\u54CD\u5E94Header",children:(null===(h=b.res)||void 0===h?void 0:h.headers)?(0,o.jsx)(s.ZP,{value:null===(p=b.res)||void 0===p?void 0:p.headers,style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null},{key:"3",label:"\u54CD\u5E94body",children:(null===(y=b.res)||void 0===y?void 0:y.body)?(0,o.jsx)(s.ZP,{collapsed:3,value:JSON.parse(null===(v=b.res)||void 0===v?void 0:v.body),style:a.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null}].filter(Boolean);return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"share-container",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.Z,{size:"small",bordered:!0,items:m,column:1})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.Z,{size:"small",bordered:!0,items:w,column:1})})]})})}},5147:function(e,t,n){"use strict";n("4541"),n("8174"),n("3118");var o=n("6437"),r=n("741");n("7403"),new URL(location.href).searchParams.get("shareId")?(0,r.O)():(0,o.m)()},741:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var o=n("2676"),r=n("8751"),l=n("8473");function s(){(0,r.createRoot)(document.getElementById("root")).render((0,o.jsx)(l.Z,{}))}},6437:function(e,t,n){"use strict";n.d(t,{m:function(){return i}}),n("2464");var o=n("669"),r=n("5947"),l=n("5338"),s=n("8825"),a=n("2662");function i(){let e=new WebSocket("wss://local.whistlejs.com/whistle.devtool"),t=new o.G,n=new r.Q(e),i=new a.K,c=new s.l,d=new l.r(e);e.onclose=()=>{console.log("Disconnected from server"),location.reload()},e.onmessage=async function(e){var o;let{data:r}=e;let l=await (o=r,new Promise((e,t)=>{let n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=e=>{t(e)},n.readAsText(o)}));"html"===(l=JSON.parse(l)).type?d.handleMessage(l):"console"===l.type||"connected"===l.type?t.handleMessage(l):"eval"===l.type?n.handleMessage(l):"view-wh"===l.type?i.handleMessage(l):"scrollY"===l.type&&c.handleMessage(l)}}},669:function(e,t,n){"use strict";n.d(t,{G:function(){return o}}),n("2979");class o{handleMessage(e){if("console"===e.type){let{content:t}=e;console[t[0].method](...t[0].args)}"connected"===e.type&&(console.group("\u5F53\u524D\u9875\u9762\u4FE1\u606F"),console.log("%c URL","font-size:12px; background:#3b76d8; color:#fff;",e.content.url),console.log("%c UA","font-size:12px; background:#3b76d8; color:#fff;",e.content.ua),console.groupEnd())}}},1428:function(e,t,n){"use strict";n.d(t,{v:function(){return o}}),n("4210"),n("1160"),n("5698"),n("7475"),n("3610");class o{observe(){let e={attributes:[],addedNodes:[],characterData:[]},t=e=>{this.ws.send(JSON.stringify({type:"mutation",content:e}))},n=new MutationObserver(n=>{for(let o of n){let n=this.getPathTo(o.target);if("attributes"===o.type){let r={type:"attributes",path:n,attributeName:o.attributeName,oldValue:o.oldValue,newValue:o.target.getAttribute(o.attributeName)};e.attributes.push(r),t(r),console.log(`Attribute ${o.attributeName} was modified.`),console.log("Change:",r)}else if("childList"===o.type)o.addedNodes.length>0&&o.addedNodes.forEach(t=>{if(1===t.nodeType){let n={path:this.getPathTo(t),node:t};e.addedNodes.push(n),console.log("Node added:",t),console.log("Path:",n.path)}}),o.removedNodes.length>0&&(console.log("%c [ mutation ]-56","font-size:15px; background:#d10246; color:#ff468a;",o),console.log("%c [ mutation.removedNodes ]-57","font-size:15px; background:#0a13b3; color:#4e57f7;",o.removedNodes),o.removedNodes.forEach(e=>{console.log(e.parentNode),console.log(e.parentNode.childNodes),t({type:"removedNode"})}));else if("characterData"===o.type){let r={type:"characterData",path:n,oldValue:o.oldValue,newValue:o.target.data};e.characterData.push(r),t(r),console.log("Character data modified:",o.target),console.log("Change:",r)}}});n.observe(document.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.observer=n}disconnect(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}handleMessage(e){console.log(e.content)}getPathTo(e){let t=[];for(;e&&e!==document.body;){let n=Array.from(e.parentNode.childNodes).indexOf(e);t.unshift(n),e=e.parentNode}return t}constructor(e){this.ws=e,this.observer=void 0}}},5947:function(e,t,n){"use strict";n.d(t,{Q:function(){return o}});class o{handleMessage(e){console.log(e.content)}constructor(e){window.parent.ev=function(t){e.send(JSON.stringify({type:"eval",content:t}))}}}},5338:function(e,t,n){"use strict";n.d(t,{r:function(){return c}}),n("6972"),n("6879"),n("1540"),n("638"),n("4910"),n("126"),n("886"),n("3605"),n("540"),n("1558"),n("3845"),n("9388"),n("3522"),n("294"),n("8522"),n("9200"),n("1911"),n("5615"),n("9526"),n("8774"),n("9191"),n("3848"),n("2768"),n("1160"),n("5698"),n("7475"),n("4210");var o=n("1428");let r=new Set,l=new Set,s=[],a=[],i="";class c{handleMessage(e){"html"===e.tag&&(r.clear(),l.clear(),a.forEach(e=>e.remove()),s.forEach(e=>e.remove()));let[t,n]=function(e){let t;let n=new DOMParser().parseFromString(e,"text/html"),o=[];return n.querySelectorAll('link[rel="stylesheet"]').forEach(function(e){!l.has(e.getAttribute("href"))&&(o.push({type:"link",content:e.getAttribute("href")}),l.add(e.getAttribute("href")))}),n.querySelectorAll("style").forEach(function(e){!r.has(e.textContent)&&(o.push({type:"style",content:e.textContent}),r.add(e.textContent))}),i!==n.body.innerHTML&&(i=n.body.innerHTML,t=n.body),[o,t]}(e.content);t.forEach(e=>{if("link"===e.type){let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e.content),a.push(t),document.head.appendChild(t)}else{let t=document.createElement("style");t.innerHTML=e.content,s.push(t),document.head.appendChild(t)}}),n&&document.body.replaceWith(n),this.elementDevTool.disconnect(),setTimeout(()=>{this.elementDevTool.observe()})}constructor(e){this.elementDevTool=new o.v(e),e.onopen=()=>{console.log("Connected to server"),e.send(JSON.stringify({type:"html"})),e.send(JSON.stringify({type:"connected"}))}}}},8825:function(e,t,n){"use strict";n.d(t,{l:function(){return o}});class o{handleMessage(e){window.scrollTo(0,e.content)}}},2662:function(e,t,n){"use strict";n.d(t,{K:function(){return o}}),n("1160"),n("5698"),n("7475"),n("1056");class o{handleMessage(e){let t=window.parent.document.querySelectorAll("iframe");t&&Array.from(t).forEach(t=>{t.src.includes("plugin.devtool")&&(t.style.maxWidth=e.content.width+"px",t.style.maxHeight=e.content.height+"px",t.scrolling="yes")})}}},7403:function(e,t,n){"use strict";n.r(e.exports={})}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return s[e].call(n.exports,n,n.exports,i),n.exports}i.m=s,i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(n,o){if(1&o&&(n=this(n)),8&o||"object"==typeof n&&n&&(4&o&&n.__esModule||16&o&&"function"==typeof n.then))return n;var r=Object.create(null);i.r(r);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){l[e]=function(){return n[e]}});return l.default=function(){return n},i.d(r,l),r},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.k=function(e){return""+e+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n=[],i.O=function(e,t,o,r){if(t){r=r||0;for(var l=n.length;l>0&&n[l-1][2]>r;l--)n[l]=n[l-1];n[l]=[t,o,r];return}for(var s=1/0,l=0;l<n.length;l++){for(var t=n[l][0],o=n[l][1],r=n[l][2],a=!0,c=0;c<t.length;c++)s>=r&&Object.keys(i.O).every(function(e){return i.O[e](t[c])})?t.splice(c--,1):(a=!1,r<s&&(s=r));if(a){n.splice(l--,1);var d=o();void 0!==d&&(e=d)}}return e},i.p="/",o={980:0},i.O.j=function(e){return 0===o[e]},r=function(e,t){var n=t[0],r=t[1],l=t[2],s,a,c=0;if(n.some(function(e){return 0!==o[e]})){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(l)var d=l(i)}for(e&&e(t);c<n.length;c++)a=n[c],i.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return i.O(d)},(l=self.webpackChunkwhistle_devtool=self.webpackChunkwhistle_devtool||[]).forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l));var c=i.O(void 0,["126","361","83"],function(){return i("5147")});i.O(c)}();