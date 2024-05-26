
export class ScrollDevTool {
  handleMessage(message: any) {
    window.scrollTo(0, message.content)
  }
}
