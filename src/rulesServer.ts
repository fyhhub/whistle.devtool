import Koa from 'koa';
import url from 'url';
const PLUGIN_NAME = 'whistle.mockall'

export default (server: Whistle.PluginServer, options: Whistle.PluginOptions) => {
  const app = new Koa();
  const storage = options.storage;
  app.use(async (ctx) => {
    // let mockData = storage.getProperty(PLUGIN_NAME);
  })

  server.on('request', app.callback());
};
