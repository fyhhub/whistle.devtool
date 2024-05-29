


export class ElementDevTool {
  public ws: WebSocket;
  public observer?: MutationObserver;
  constructor(ws: WebSocket) {
    this.ws = ws;
    this.observer = undefined;
  }
  observe() {
    const sendMutation = (data: any) => {
      this.ws.send(JSON.stringify({
        type: 'mutation',
        content: data
      }))
    }
    // 创建一个MutationObserver实例
    const observer = new MutationObserver((mutationsList: any[]) => {
        for (const mutation of mutationsList) {
          const path = this.getPathTo(mutation.target);
            if (mutation.type === 'attributes') {
                const attributeChange = {
                    type: 'attributes',
                    path,
                    attributeName: mutation.attributeName,
                    oldValue: mutation.oldValue,
                    newValue: mutation.target.getAttribute(mutation.attributeName)
                };
                sendMutation(attributeChange);
                console.log(`Attribute ${mutation.attributeName} was modified.`);
                console.log('Change:', attributeChange);
            } else if (mutation.type === 'childList') {
                if (mutation.addedNodes.length > 0) {
                  mutation.addedNodes.forEach((node: any) => {
                    sendMutation({
                      type: 'addedNode',
                      path: this.getPathTo(mutation.target),
                      html: mutation.target.innerHTML
                    })
                  });
                }
                if (mutation.removedNodes.length > 0) {
                  console.log('Removed:', mutation);
                  mutation.removedNodes.forEach((node: any) => {
                    sendMutation({
                      type: 'removedNode',
                      path: this.getPathTo(mutation.target),
                      html: mutation.target.innerHTML
                    })
                  });
                }
            } else if (mutation.type === 'characterData') {
                const characterDataChange = {
                    type: 'characterData',
                    path,
                    oldValue: mutation.oldValue,
                    newValue: mutation.target.data
                };
                sendMutation(characterDataChange);
                console.log('Character data modified:', mutation.target);
                console.log('Change:', characterDataChange);
            }
        }
    });
    // 配置对象，指定要观察的变化类型
    const config = {
        attributes: true,      // 监听属性变化
        childList: true,       // 监听子节点的变化（新增或删除）
        subtree: true,         // 监听整个子树
        characterData: true,   // 监听节点内容或文本的变化
        attributeOldValue: true, // 缓存旧的属性值
        characterDataOldValue: true // 缓存旧的文本内容
    };
    // 开始观察body及其子树
    observer.observe(document.body, config);
    this.observer = observer;

  }
  disconnect() {
    this.observer?.disconnect();
  }
  handleMessage(message: any) {
    console.log(message.content);
  }

  getPathTo(element: any) {
    const path = [];
    while (element && element !== document.body) {
      let index = Array.from(element.parentNode.childNodes).indexOf(element);
        path.unshift(index);
        element = element.parentNode;
    }
    return path;
  }
}
