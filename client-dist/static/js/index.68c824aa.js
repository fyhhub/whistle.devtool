!function(){var e,t,n,r,o,l,s={8473:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}}),n("4541"),n("8174"),n("3118"),n("2464"),n("8936"),n("4335"),n("7475");var r=n("2676"),o=n("5271"),l=n("3094"),s=n("2705"),i=n("5210"),c=n("3623");function a(){var e,t,n,a,u,d,f,h,y,p,v;let[b,m]=(0,o.useState)({});(0,o.useEffect)(()=>{let e=new URL(location.href).searchParams.get("shareId");fetch("/cgi-bin/shared/get").then(e=>e.json()).then(t=>{let n=t.data[e];"POST"===n.req.method&&(n.req.body=(0,l.Jx)(n.req.base64),n.res.body=(0,l.Jx)(n.res.base64)),m(n)})},[]);let g=[{key:"1",label:"\u8BF7\u6C42url",children:b.url},{key:"2",label:"\u8BF7\u6C42method",children:null===(e=b.req)||void 0===e?void 0:e.method},{key:"4",label:"\u8BF7\u6C42Header",children:(null===(t=b.req)||void 0===t?void 0:t.headers)?(0,r.jsx)(s.ZP,{value:null===(n=b.req)||void 0===n?void 0:n.headers,style:i.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null},(null===(a=b.req)||void 0===a?void 0:a.method)==="POST"?{key:"4",label:"\u8BF7\u6C42body",children:(null===(u=b.req)||void 0===u?void 0:u.body)?(0,r.jsx)(s.ZP,{collapsed:3,value:JSON.parse(null===(d=b.req)||void 0===d?void 0:d.body),style:i.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null}:null].filter(Boolean),w=[{key:"1",label:"\u72B6\u6001\u7801",children:null===(f=b.res)||void 0===f?void 0:f.statusCode},{key:"2",label:"\u54CD\u5E94Header",children:(null===(h=b.res)||void 0===h?void 0:h.headers)?(0,r.jsx)(s.ZP,{value:null===(y=b.res)||void 0===y?void 0:y.headers,style:i.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null},{key:"3",label:"\u54CD\u5E94body",children:(null===(p=b.res)||void 0===p?void 0:p.body)?(0,r.jsx)(s.ZP,{collapsed:3,value:JSON.parse(null===(v=b.res)||void 0===v?void 0:v.body),style:i.W,displayDataTypes:!1,shortenTextAfterLength:1/0}):null}].filter(Boolean);return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"share-container",children:[(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{size:"small",bordered:!0,items:g,column:1})}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{size:"small",bordered:!0,items:w,column:1})})]})})}},5147:function(e,t,n){"use strict";n("4541"),n("8174"),n("3118");var r=n("6437"),o=n("741");n("7403"),new URL(location.href).searchParams.get("shareId")?(0,o.O)():(0,r.m)()},741:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var r=n("2676"),o=n("8751"),l=n("8473");function s(){(0,o.createRoot)(document.getElementById("root")).render((0,r.jsx)(l.Z,{}))}},6437:function(e,t,n){"use strict";n.d(t,{m:function(){return p}}),n("6972"),n("6879"),n("1540"),n("638"),n("4910"),n("126"),n("886"),n("3605"),n("540"),n("1558"),n("3845"),n("9388"),n("3522"),n("294"),n("8522"),n("9200"),n("1911"),n("5615"),n("9526"),n("8774"),n("9191"),n("3848"),n("2768"),n("1160"),n("5698"),n("7475"),n("4210"),n("2464");var r=n("669"),o=n("5947"),l=n("8825"),s=n("2662");let i=new Set,c=new Set;function a(e){let t=new DOMParser().parseFromString(e,"text/html"),n=[];return t.querySelectorAll('link[rel="stylesheet"]').forEach(function(e){!c.has(e.getAttribute("href"))&&(n.push({type:"link",content:e.getAttribute("href")}),c.add(e.getAttribute("href")))}),t.querySelectorAll("style").forEach(function(e){!i.has(e.textContent)&&(n.push({type:"style",content:e.textContent}),i.add(e.textContent))}),[n,t.body.outerHTML]}let u=new WebSocket("wss://local.whistlejs.com/whistle.devtool"),d=new r.G,f=new o.Q(u),h=new s.K,y=new l.l;function p(){u.onopen=()=>{var e;console.log("Connected to server"),u.send(JSON.stringify({type:"html",content:void 0}))},u.onclose=()=>{console.log("Disconnected from server"),location.reload()},u.onmessage=async function(e){var t;let{data:n}=e;let r=await (t=n,new Promise((e,n)=>{let r=new FileReader;r.onload=()=>{e(r.result)},r.onerror=e=>{n(e)},r.readAsText(t)}));if("html"===(r=JSON.parse(r)).type){if("html"===r.tag){i.clear(),c.clear();let[e,t]=a(r.content);e.forEach(e=>{if("link"===e.type){let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e.content),document.head.appendChild(t)}else{let t=document.createElement("style");t.innerText=e.content,document.head.appendChild(t)}}),document.body.outerHTML=t}else{let[e,t]=a(r.content);console.log("[ styles ] >",e),e.forEach(e=>{if("link"===e.type){let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e.content),document.head.appendChild(t)}else{let t=document.createElement("style");t.innerText=e.content,document.head.appendChild(t)}}),document.body.outerHTML=t}}else"console"===r.type?d.handleMessage(r):"eval"===r.type?f.handleMessage(r):"view-wh"===r.type?h.handleMessage(r):"scrollY"===r.type&&y.handleMessage(r)}}},669:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});class r{handleMessage(e){let{content:t}=e;console[t[0].method](...t[0].args)}}},5947:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});class r{handleMessage(e){console.log(e.content)}constructor(e){window.parent.ev=function(t){e.send(JSON.stringify({type:"eval",content:t}))}}}},8825:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});class r{handleMessage(e){window.scrollTo(0,e.content)}}},2662:function(e,t,n){"use strict";n.d(t,{K:function(){return r}}),n("1160"),n("5698"),n("7475"),n("1056");class r{handleMessage(e){let t=window.parent.document.querySelectorAll("iframe");t&&Array.from(t).forEach(t=>{t.src.includes("plugin.devtool")&&(t.style.maxWidth=e.content.width+"px",t.style.maxHeight=e.content.height+"px",t.scrolling="yes")})}}},7403:function(e,t,n){"use strict";n.r(e.exports={})}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return s[e].call(n.exports,n,n.exports,c),n.exports}c.m=s,c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(n,r){if(1&r&&(n=this(n)),8&r||"object"==typeof n&&n&&(4&r&&n.__esModule||16&r&&"function"==typeof n.then))return n;var o=Object.create(null);c.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){l[e]=function(){return n[e]}});return l.default=function(){return n},c.d(o,l),o},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.k=function(e){return""+e+".css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n=[],c.O=function(e,t,r,o){if(t){o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[t,r,o];return}for(var s=1/0,l=0;l<n.length;l++){for(var t=n[l][0],r=n[l][1],o=n[l][2],i=!0,a=0;a<t.length;a++)s>=o&&Object.keys(c.O).every(function(e){return c.O[e](t[a])})?t.splice(a--,1):(i=!1,o<s&&(s=o));if(i){n.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e},c.p="/",r={980:0},c.O.j=function(e){return 0===r[e]},o=function(e,t){var n=t[0],o=t[1],l=t[2],s,i,a=0;if(n.some(function(e){return 0!==r[e]})){for(s in o)c.o(o,s)&&(c.m[s]=o[s]);if(l)var u=l(c)}for(e&&e(t);a<n.length;a++)i=n[a],c.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return c.O(u)},(l=self.webpackChunkwhistle_devtool=self.webpackChunkwhistle_devtool||[]).forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l));var a=c.O(void 0,["126","361","83"],function(){return c("5147")});c.O(a)}();