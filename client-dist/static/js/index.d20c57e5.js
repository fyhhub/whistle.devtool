!function(){var e,n,t,o,r={5147:function(e,n,t){"use strict";t("2464"),t("7403");let o=new WebSocket("wss://local.whistlejs.com/whistle.devtool");o.onopen=()=>{console.log("Connected to server")},o.onclose=()=>{console.log("Disconnected from server"),location.reload()};o.onmessage=async function(e){var n;let{data:t}=e;let o=await (n=t,new Promise((e,t)=>{let o=new FileReader;o.onload=()=>{e(o.result)},o.onerror=e=>{t(e)},o.readAsText(n)}));"html"===(o=JSON.parse(o)).type?document.body.innerHTML=`
<div id="whistle-devtool-preview">
${o.content}
</div>
    `:"console"===o.type?console[o.content[0].method](...o.content[0].args):"eval"===o.type&&console.log(o.content)},window.parent.ev=function(e){o.send(JSON.stringify({type:"eval",content:e}))}},7403:function(e,n,t){"use strict";t.r(e.exports={})}},i={};function l(e){var n=i[e];if(void 0!==n)return n.exports;var t=i[e]={exports:{}};return r[e].call(t.exports,t,t.exports,l),t.exports}l.m=r,l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,{a:n}),n},l.d=function(e,n){for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.k=function(e){return""+e+".css"},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],l.O=function(n,t,o,r){if(t){r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,o,r];return}for(var c=1/0,i=0;i<e.length;i++){for(var t=e[i][0],o=e[i][1],r=e[i][2],u=!0,s=0;s<t.length;s++)c>=r&&Object.keys(l.O).every(function(e){return l.O[e](t[s])})?t.splice(s--,1):(u=!1,r<c&&(c=r));if(u){e.splice(i--,1);var f=o();void 0!==f&&(n=f)}}return n},l.p="/",n={980:0},l.O.j=function(e){return 0===n[e]},t=function(e,t){var o=t[0],r=t[1],i=t[2],c,u,s=0;if(o.some(function(e){return 0!==n[e]})){for(c in r)l.o(r,c)&&(l.m[c]=r[c]);if(i)var f=i(l)}for(e&&e(t);s<o.length;s++)u=o[s],l.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return l.O(f)},(o=self.webpackChunkwhistle_devtool=self.webpackChunkwhistle_devtool||[]).forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o));var c=l.O(void 0,["126"],function(){return l("5147")});l.O(c)}();