
export class ConsoleDevTool {
  handleMessage(message: any) {
    const { content } = message;
    // @ts-ignore
    console[content[0].method](...content[0].args);
  }
}
