!function(){var e={429:function(){var e,o;let t=new WebSocket("wss://local.whistlejs.com/whistle.devtool?from=sdk");t.onopen=()=>{console.log("Connected to server")},t.onclose=()=>{console.log("Disconnected from server")},!function(e){if(!window.__whistleRewriteConsole)["log","warn","error","info"].forEach(function(o){let t=window.console[o];window.console[o]=function(){e&&e(o,[].slice.call(arguments)),t.apply(window.console,[].slice.call(arguments))}}),window.__whistleRewriteConsole=!0}((e,o)=>{t.readyState===t.OPEN&&t.send(JSON.stringify({type:"console",content:[{method:e,args:o}]}))});let n="";let i=(e=()=>{t.send(JSON.stringify({type:"html",content:n}))},function(){var t=this,n=arguments;clearTimeout(o),o=setTimeout(function(){e.apply(t,n)},300)}),r=new MutationObserver((e,o)=>{n=document.documentElement.outerHTML,i()});window.addEventListener("load",()=>{t.readyState===t.OPEN&&t.send(JSON.stringify({type:"html",content:document.documentElement.outerHTML})),r.observe(document.body,{childList:!0,attributes:!0,subtree:!0})})}},o={};!function t(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}("429")}();