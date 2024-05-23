function reriteConsole(cb) {
  if (window.__whistleRewriteConsole) return;
  const methods = ['log', 'warn', 'error', 'info'];
  methods.forEach(function(method) {
    const originFn = window.console[method];
    window.console[method] = function () {
      cb && cb(method, [].slice.call(arguments))
      originFn.apply(window.console, [].slice.call(arguments));
    }
  });
  window.__whistleRewriteConsole = true;
}

function debounce(fn, wait) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

const ws = new WebSocket('wss://local.whistlejs.com/whistle.devtool?from=sdk');

ws.onopen = () => {
  console.log('Connected to server');
};

ws.onclose = () => {
  console.log('Disconnected from server');
};

reriteConsole((method, args) => {
  if (ws.readyState === ws.OPEN) {
    ws.send(JSON.stringify({
      type: 'console',
      content: [{
        method,
        args
      }]
    }))
  }
})
let html = ''

const updateHtml = debounce(() => {
  ws.send(JSON.stringify({
    type: 'html',
    content: html
  }))
}, 300)
const mutationObserver = new MutationObserver((mutations, observer) => {
  html = document.documentElement.outerHTML
  updateHtml();
});
window.addEventListener('load', () => {
  if (ws.readyState === ws.OPEN) {
    ws.send(JSON.stringify({
      type: 'html',
      content: document.documentElement.outerHTML
    }))
  }
  mutationObserver.observe(document.body, {
    childList: true, // 观察目标子节点的变化，是否有添加或者删除
    attributes: true, // 观察属性变动
    subtree: true, // 观察后代节点，默认为 false
  })
})
