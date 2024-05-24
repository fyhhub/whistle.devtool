import './index.less';
const ws = new WebSocket('wss://local.whistlejs.com/whistle.devtool');
ws.onopen = () => {
  console.log('Connected to server');
};

ws.onclose = () => {
  console.log('Disconnected from server');
  location.reload();
};

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

ws.onmessage = async function(message) {
  const { data } = message;
  let res: any = await blobToString(data);
  res = JSON.parse(res);
  if (res.type === 'html') {
    document.body.innerHTML = `
<div id="whistle-devtool-preview">
<input id="whistle-devtool-preview__path"/>
${res.content}
</div>
    `;
  } else if (res.type === 'console') {
    // @ts-ignore
    console[res.content[0].method](...res.content[0].args);
  } else if (res.type === 'eval') {
    console.log(res.content);
  }
};


(window as any).parent.ev = function(str: string) {
  ws.send(JSON.stringify({
    type: 'eval',
    content: str
  }))
}
