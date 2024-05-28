
export class ConsoleDevTool {
  handleMessage(message: any) {
    if (message.type === 'console') {
      const { content } = message;
      // @ts-ignore
      console[content[0].method](...content[0].args);
    }
    if (message.type === 'connected') {
      console.group('当前页面信息')
      console.log('%c URL', 'font-size:12px; background:#3b76d8; color:#fff;', message.content.url);
      console.log('%c UA', 'font-size:12px; background:#3b76d8; color:#fff;', message.content.ua);
      console.groupEnd();
    }
  }
}
