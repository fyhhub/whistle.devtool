
export class VhDevTool {
  handleMessage(message: any) {
    const parentDoc = (window as any).parent.document;
    const iframes = parentDoc.querySelectorAll('iframe');
    iframes && Array.from(iframes).forEach((frame: any) => {
      if (frame.src.includes('plugin.devtool')) {
        frame.style.maxWidth = message.content.width + 'px';
        frame.style.maxHeight = message.content.height + 'px';
        frame.scrolling = 'yes';
      }
    })
  }
}
