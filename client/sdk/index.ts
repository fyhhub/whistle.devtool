
// function ajax(options) {
//   // 存储的是默认值
//   const defaults = {
//       type: 'get',
//       url: '',
//       data: {},
//       header: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       success: function (text?, xhr?) { },
//       error: function (text?, xhr?) { }
//   };

//   // 使用options对象中的属性覆盖defaults对象中的属性
//   Object.assign(defaults, options);

//   // 创建ajax对象
//   // 拼接请求参数的变量
//   let params = '';
//   // 循环用户传递进来的对象格式参数
//   for (let attr in defaults.data) {
//       // 将参数转换为字符串格式
//       params += attr + '=' + defaults.data[attr] + '&';
//   }
//   // 将参数最后面的&截取掉
//   // 将截取的结果重新赋值给params变量
//   params = params.substr(0, params.length - 1);

//   // 判断请求方式
//   if (defaults.type == 'get') {
//       defaults.url = defaults.url + '?' + params;
//   }

//   /*
//       {
//           name: 'zhangsan',
//           age: 20
//       }

//       name=zhangsan&age=20

//    */
//   const xhr = new XMLHttpRequest();
//   // 配置ajax对象
//   xhr.open(defaults.type, defaults.url);
//   // 如果请求方式为post
//   if (defaults.type == 'post') {
//       // 用户希望的向服务器端传递的请求参数的类型
//       var contentType = defaults.header['Content-Type']
//       // 设置请求参数格式的类型
//       xhr.setRequestHeader('Content-Type', contentType);
//       // 判断用户希望的请求参数格式的类型
//       // 如果类型为json
//       if (contentType == 'application/json') {
//           // 向服务器端传递json数据格式的参数
//           xhr.send(JSON.stringify(defaults.data))
//       } else {
//           // 向服务器端传递普通类型的请求参数
//           xhr.send(params);
//       }

//   } else {
//       // 发送请求
//       xhr.send();
//   }
//   // 监听xhr对象下面的onload事件
//   // 当xhr对象接收完响应数据后触发
//   xhr.onload = function () {

//       // xhr.getResponseHeader()
//       // 获取响应头中的数据
//       const contentType: any = xhr.getResponseHeader('Content-Type');
//       // 服务器端返回的数据
//       let responseText = xhr.responseText;

//       // 如果响应类型中包含applicaition/json
//       if (contentType.includes('application/json')) {
//           // 将json字符串转换为json对象
//           responseText = JSON.parse(responseText)
//       }

//       // 当http状态码等于200的时候
//       if (xhr.status == 200) {
//           // 请求成功 调用处理成功情况的函数
//           defaults.success(responseText, xhr);
//       } else {
//           // 请求失败 调用处理失败情况的函数
//           defaults.error(responseText, xhr);
//       }
//   }
// }
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
setInterval(() => {
  if (html === document.documentElement.outerHTML) {
    return
  } else {
    html = document.documentElement.outerHTML
    ws.send(JSON.stringify({
      type: 'html',
      content: html
    }))
  }
}, 500)
