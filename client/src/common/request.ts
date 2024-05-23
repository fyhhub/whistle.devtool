
export const request = async (config: any, data?: any) => {
  return new Promise((resolve, reject) => {
    const wb = (window as any).whistleBridge;
    const fn = wb.createRequest(config)

    fn(data || {}, function(data: any) {
      if (!data) {
        reject();
      }
      resolve(data);
    })
  })
}
