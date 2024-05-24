import Koa from 'koa';

export default (server: Whistle.PluginServer, options: Whistle.PluginOptions) => {
  const app = new Koa();
  app.use(async (ctx) => {
    // let mockData = storage.getProperty(PLUGIN_NAME);
  })

  server.on('request', app.callback());
};
