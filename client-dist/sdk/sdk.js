!function(){var e={429:function(){var e,t;let n=new WebSocket("wss://local.whistlejs.com/whistle.devtool?from=sdk");n.onopen=()=>{console.log("Connected to server")},n.onclose=()=>{console.log("Disconnected from server")},n.onmessage=e=>{var t;let{data:o}=e;(t=o,new Promise((e,n)=>{let o=new FileReader;o.onload=()=>{e(o.result)},o.onerror=e=>{n(e)},o.readAsText(t)})).then(e=>{if("eval"===(e=JSON.parse(e)).type){let t=Function("return "+e.content);n.send(JSON.stringify({type:"eval",content:t()}))}})},!function(e){if(!window.__whistleRewriteConsole)["log","warn","error","info"].forEach(function(t){let n=window.console[t];window.console[t]=function(){e&&e(t,[].slice.call(arguments)),n.apply(window.console,[].slice.call(arguments))}}),window.__whistleRewriteConsole=!0}((e,t)=>{n.readyState===n.OPEN&&n.send(JSON.stringify({type:"console",content:[{method:e,args:t}]}))});let o="";let r=(e=()=>{n.send(JSON.stringify({type:"html",content:o}))},function(){var n=this,o=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(n,o)},300)}),s=new MutationObserver((e,t)=>{o=document.documentElement.outerHTML,r()});window.addEventListener("load",()=>{n.readyState===n.OPEN&&n.send(JSON.stringify({type:"html",content:document.documentElement.outerHTML})),s.observe(document.body,{childList:!0,attributes:!0,subtree:!0})})}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}("429")}();