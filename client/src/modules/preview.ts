

const styleSet = new Set();
const linkSet = new Set()

const styleList: HTMLStyleElement[] = [];
const linkList: HTMLLinkElement[] = [];
let bodyHTML = '';
function extractCSS(htmlString: string) {
  // 创建一个新的DOMParser实例
  const parser = new DOMParser();
  // 使用parseFromString方法解析HTML字符串
  const doc = parser.parseFromString(htmlString, 'text/html');
  // 初始化结果数组
  const result: any[] = [];

  // 提取link标签中的CSS地址
  const linkTags = doc.querySelectorAll('link[rel="stylesheet"]');
  linkTags.forEach(function(link) {
    if (!linkSet.has(link.getAttribute('href')!)) {
      result.push({
        type: 'link',
        content: link.getAttribute('href')!
      });
      linkSet.add(link.getAttribute('href')!)
    }
  });

  // 提取style标签中的样式
  const styleTags = doc.querySelectorAll('style');
  styleTags.forEach(function(style) {
    if (!styleSet.has(style.textContent!)) {
      result.push({
        type: 'style',
        content: style.textContent!
      });
      styleSet.add(style.textContent!)
    }
  });
  let body;
  if (bodyHTML !== doc.body.innerHTML) {
    bodyHTML = doc.body.innerHTML;
    body = doc.body;
  }
  return [result, body];
}


export class PreviewDevTool {
  constructor(ws: WebSocket) {
    ws.onopen = () => {
      console.log('Connected to server');
      ws.send(JSON.stringify({
        type: 'html',
      }))
    };
  }
  handleMessage(res: any) {
    if (res.tag === 'html') {
      styleSet.clear()
      linkSet.clear()
      linkList.forEach(link => link.remove())
      styleList.forEach(style => style.remove())
    }
    const [styles, body]: any = extractCSS(res.content);
    styles.forEach((item: any) => {
      if (item.type === 'link') {
        const link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', item.content)
        linkList.push(link)
        document.head.appendChild(link)
      } else {
        const style = document.createElement('style')
        style.innerHTML = item.content;
        styleList.push(style)
        document.head.appendChild(style)
      }
    })
    body && document.body.replaceWith(body);
  }
}
