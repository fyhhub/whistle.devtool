!function(){var e={429:function(){var e,t;let n=window,o=new WebSocket("wss://local.whistlejs.com/whistle.devtool?from=sdk");o.onopen=()=>{console.log("Connected to server")},o.onclose=()=>{console.log("Disconnected from server")},o.onmessage=e=>{var t;let{data:n}=e;(t=n,new Promise((e,n)=>{let o=new FileReader;o.onload=()=>{e(o.result)},o.onerror=e=>{n(e)},o.readAsText(t)})).then(e=>{if("eval"===(e=JSON.parse(e)).type){let t=Function("return "+e.content);o.send(JSON.stringify({type:"eval",content:t()}))}else"html"===e.type&&(o.send(JSON.stringify({type:"html",tag:"html",content:document.documentElement.outerHTML})),o.send(JSON.stringify({type:"view-wh",content:{width:window.innerWidth,height:window.innerHeight}})))})},!function(e){if(!n.__whistleRewriteConsole)["log","warn","error","info"].forEach(function(t){let n=window.console[t];window.console[t]=function(){e&&e(t,[].slice.call(arguments)),n.apply(window.console,[].slice.call(arguments))}}),n.__whistleRewriteConsole=!0}((e,t)=>{o.readyState===o.OPEN&&o.send(JSON.stringify({type:"console",content:[{method:e,args:t}]}))});let i="";let r=(e=()=>{o.send(JSON.stringify({type:"html",tag:"body",content:i})),o.send(JSON.stringify({type:"view-wh",content:{width:window.innerWidth,height:window.innerHeight}}))},function(){var n=this,o=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(n,o)},300)}),s=new MutationObserver((e,t)=>{i=document.documentElement.outerHTML,r()});document.addEventListener("DOMContentLoaded",()=>{o.send(JSON.stringify({type:"view-wh",content:{width:window.innerWidth,height:window.innerHeight}})),o.send(JSON.stringify({type:"html",tag:"html",content:document.documentElement.outerHTML})),setTimeout(()=>{s.observe(document.body,{childList:!0,attributes:!0,subtree:!0})})}),window.addEventListener("scroll",()=>{o.send(JSON.stringify({type:"scrollY",content:window.scrollY}))})}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}("429")}();