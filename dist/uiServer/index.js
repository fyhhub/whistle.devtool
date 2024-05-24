"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_onerror_1 = __importDefault(require("koa-onerror"));
const koa_static_1 = __importDefault(require("koa-static"));
const path_1 = __importDefault(require("path"));
const koa_router_1 = __importDefault(require("koa-router"));
const router_1 = __importDefault(require("./router"));
const ws_1 = __importDefault(require("ws"));
const uuid_1 = require("uuid");
const url_1 = __importDefault(require("url"));
const cors_1 = __importDefault(require("@koa/cors"));
const MAX_AGE = 1000 * 60 * 5;
exports.default = (server, options) => {
    const app = new koa_1.default();
    app.proxy = true;
    app.silent = true;
    (0, koa_onerror_1.default)(app);
    app.use((0, koa_bodyparser_1.default)({
        jsonLimit: '20mb',
        formLimit: '20mb',
        textLimit: '20mb'
    }));
    const router = new koa_router_1.default();
    (0, router_1.default)(router);
    app.use(router.routes());
    app.use((0, koa_static_1.default)(path_1.default.join(__dirname, '../../client-dist'), { maxage: MAX_AGE }));
    app.use(router.allowedMethods());
    app.use((0, cors_1.default)({
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }));
    const wss = new ws_1.default.Server({ server });
    const clients = new Map();
    const sdks = new Map();
    wss.on('connection', (ws, request) => {
        const parameters = url_1.default.parse(request.url, true).query;
        const id = (0, uuid_1.v4)();
        const isSDK = parameters.from === 'sdk';
        if (!isSDK) {
            clients.set(id, ws);
        }
        else {
            sdks.set(id, ws);
        }
        console.log('Client connected');
        ws.on('message', (message) => {
            if (isSDK) {
                for (const [_id, _ws] of clients) {
                    _ws.send(message);
                }
            }
            else {
                for (const [_id, _ws] of sdks) {
                    _ws.send(message);
                }
            }
        });
        ws.on('close', () => {
            clients.delete(id);
            console.log('Client disconnected');
        });
    });
    server.on('request', app.callback());
};
