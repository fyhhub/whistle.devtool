



export function initSocket() {
  const ws = new WebSocket(`wss://local.whistlejs.com/whistle.devtool`);
  type MessageType = 'html' | 'console' | 'eval' | 'scrollY' | 'click';
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

  function debounce(fn: any, wait: number) {
    let timer: any;
    return function (this: any) {
      var context = this ;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }

  function send(type: MessageType, content?: any) {
    ws.send(JSON.stringify({
      type,
      content
    }))
  }


  ws.onopen = () => {
    console.log('Connected to server');
    send('html')
  };

  ws.onclose = () => {
    console.log('Disconnected from server');
    location.reload();
  };

  ws.onmessage = async function(message) {
    const { data } = message;
    let res: any = await blobToString(data);
    res = JSON.parse(res);
    if (res.type === 'html') {
      if (res.tag === 'html') {
        document.documentElement.innerHTML = `
          <meta name="referrer" content="never">
          <style>::-webkit-scrollbar {display: none!important;</style>
          ${res.content}
          </div>
              `;
      } else {
        document.body.outerHTML = `
        <meta name="referrer" content="never">
        <style>::-webkit-scrollbar {display: none!important;</style>
        ${res.content}
        `;
      }
    } else if (res.type === 'console') {
      // @ts-ignore
      console[res.content[0].method](...res.content[0].args);
    } else if (res.type === 'eval') {
      console.log(res.content);
    } else if (res.type === 'view-wh') {
      const parentDoc = (window as any).parent.document;
      const iframes = parentDoc.querySelectorAll('iframe');
      iframes && Array.from(iframes).forEach((frame: any) => {
        if (frame.src.includes('plugin.devtool')) {
          frame.style.maxWidth = res.content.width + 'px';
          frame.style.maxHeight = res.content.height + 'px';
          frame.scrolling = 'yes';
        }
      })
    }
  };

  (window as any).parent.ev = function(str: string) {
    send('eval', str)
  }



  document.addEventListener('click', function(event) {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    console.log(`点击位置：X=${x}, Y=${y}`);
    send('click', {
      x,
      y
    })
  });
  window.addEventListener('scroll', () => {
    send('scrollY', window.scrollY)
  })
}
