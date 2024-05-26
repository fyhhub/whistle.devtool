import Router from 'koa-router';

const PLUGIN_NAME = 'whistle.devtool'
// For help see https://github.com/ZijianHe/koa-router#api-reference
export default (router: Router) => {
  router.post('/cgi-bin/shared/report', (ctx) => {
    const { localStorage } = ctx.req as any;
    let body = ctx.request.body as any;
    let shared = localStorage.getProperty(PLUGIN_NAME);
    if (shared && shared !== 'undefined') {
      shared = JSON.parse(shared)
      shared = {
        ...shared,
        ...body
      }
    } else {
      shared = body || {}
    }
    localStorage.setProperty(PLUGIN_NAME, JSON.stringify(shared))
    ctx.status = 200;
    ctx.body = {
      code: 200,
      message: '操作成功',
      success: true
    };
  });

  router.get('/cgi-bin/shared/get', (ctx) => {
    const { localStorage } = ctx.req as any;
    const shared = localStorage.getProperty(PLUGIN_NAME);
    const data = JSON.parse(shared)
    ctx.status = 200;
    ctx.body = {
      code: 200,
      message: '操作成功',
      success: true,
      data
    };
  });

  router.post('/cgi-bin/shared/delete', (ctx) => {
    const { localStorage } = ctx.req as any;
    let { id } = ctx.request.body as any;
    let shared = localStorage.getProperty(PLUGIN_NAME);
    if (shared && shared !== 'undefined') {
      shared = JSON.parse(shared)
      delete shared[id];
      localStorage.setProperty(PLUGIN_NAME, JSON.stringify(shared))
    }
    ctx.status = 200;
    ctx.body = {
      code: 200,
      message: '操作成功',
      success: true
    };
  });
};
