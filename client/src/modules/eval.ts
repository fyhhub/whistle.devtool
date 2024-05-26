
export class EvalDevTool {
  constructor(ws: WebSocket) {
    (window as any).parent.ev = function(str: string) {
      ws.send(JSON.stringify({
        type: 'eval',
        content: str
      }))
    }
  }
  handleMessage(message: any) {
    console.log(message.content);
  }
}
