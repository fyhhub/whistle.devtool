import { ConsoleDevTool } from "./modules/console";
import { EvalDevTool } from "./modules/eval";
import { PreviewDevTool } from "./modules/preview";
import { ScrollDevTool } from "./modules/scroll";
import { VhDevTool } from "./modules/vh";


export function initSocket() {
  const ws = new WebSocket(`wss://local.whistlejs.com/whistle.devtool`);
  const consoleDevTool = new ConsoleDevTool();
  const evalDevTool = new EvalDevTool(ws);
  const vhDevTool = new VhDevTool();
  const scrollDevTool = new ScrollDevTool();
  const previewDevTool = new PreviewDevTool(ws);
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
  ws.onclose = () => {
    console.log('Disconnected from server');
    location.reload();
  };
  ws.onmessage = async function(message) {
    const { data } = message;
    let res: any = await blobToString(data);
    res = JSON.parse(res);
    if (res.type === 'html') {
      previewDevTool.handleMessage(res)
    } else if (res.type === 'console' || res.type === 'connected') {
      consoleDevTool.handleMessage(res);
    } else if (res.type === 'eval') {
      evalDevTool.handleMessage(res)
    } else if (res.type === 'view-wh') {
      vhDevTool.handleMessage(res)
    } else if (res.type === 'scrollY') {
      scrollDevTool.handleMessage(res)
    }
  };
}
