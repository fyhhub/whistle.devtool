import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import onerror from 'koa-onerror';
import serve from 'koa-static';
import path from 'path';
import Router from 'koa-router';
import setupRouter from './router';
import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
import url from 'url';
// @ts-ignore
import cors from '@koa/cors';
const MAX_AGE = 1000 * 60 * 5;

export default (server: Whistle.PluginServer, options: Whistle.PluginOptions) => {
  const app = new Koa();
  app.proxy = true;
  app.silent = true;
  onerror(app);
  app.use(bodyParser({
    jsonLimit: '20mb',
    formLimit: '20mb',
    textLimit: '20mb'
  }));
  const router = new Router();
  setupRouter(router);
  app.use(router.routes());
  app.use(serve(path.join(__dirname, '../../client-dist'), { maxage: MAX_AGE }));
  app.use(router.allowedMethods());
  app.use(cors({
      origin: '*', // 允许的域名，可以用 '*' 允许所有域名
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization'],
      credentials: true // 如果需要携带cookie，设置为true
  }));
  const wss = new WebSocket.Server({ server });
  const clients = new Map();
  wss.on('connection', (ws: any, request) => {
    // 存储客户端ws
    const parameters = url.parse(request.url, true).query;
    const id = uuidv4();
    if (parameters.from !== 'sdk') {
      clients.set(id, ws);
    }
    console.log('Client connected');
    // 接收sdk发来的消息
    ws.on('message', (message: string) => {
      for (const [_id, _ws] of clients) {
        _ws.send(message);
      }
    });
    ws.on('close', () => {
      clients.delete(id);
      console.log('Client disconnected');
    });
  });
  server.on('request', app.callback());
};
