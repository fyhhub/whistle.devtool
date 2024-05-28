const win = window as any;
function blobToString(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsText(blob);
  });
}
function reriteConsole(cb) {
  if (win.__whistleRewriteConsole) return;
  const methods = ['log', 'warn', 'error', 'info'];
  methods.forEach(function(method) {
    const originFn = window.console[method];
    window.console[method] = function () {
      cb && cb(method, [].slice.call(arguments))
      originFn.apply(window.console, [].slice.call(arguments));
    }
  });
  win.__whistleRewriteConsole = true;
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
ws.onmessage = (message) => {
  const { data } = message;
  blobToString(data).then((res: any) => {
    res = JSON.parse(res);
    if (res.type === 'eval') {
      const fn = new Function('return ' + res.content);
      ws.send(JSON.stringify({
        type: 'eval',
        content: fn()
      }))
    } else if (res.type === 'html') {
      ws.send(JSON.stringify({
        type: 'html',
        tag: 'html',
        content: document.documentElement.outerHTML
      }))
      ws.send(JSON.stringify({
        type: 'view-wh',
        content: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }))
    }
  })
}

// 重写console
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

// 页面改变同步html
let html = ''
const updateHtml = debounce(() => {
  ws.send(JSON.stringify({
    type: 'html',
    tag: 'body',
    content: html
  }))
  ws.send(JSON.stringify({
    type: 'view-wh',
    content: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }))
}, 300)
const mutationObserver = new MutationObserver((mutations, observer) => {
  html = document.documentElement.outerHTML
  updateHtml();
});



// 事件相关同步
document.addEventListener('DOMContentLoaded', () => {
  ws.send(JSON.stringify({
    type: 'view-wh',
    content: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }))
  ws.send(JSON.stringify({
    type: 'html',
    tag: 'html',
    content: document.documentElement.outerHTML
  }))
  setTimeout(() => {
    mutationObserver.observe(document.body, {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      attributes: true, // 观察属性变动
      subtree: true, // 观察后代节点，默认为 false
    })
  })
})

window.addEventListener('scroll', () => {
  ws.send(JSON.stringify({
    type: 'scrollY',
    content: window.scrollY
  }))
})
