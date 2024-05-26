"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PLUGIN_NAME = 'whistle.devtool';
exports.default = (router) => {
    router.post('/cgi-bin/shared/report', (ctx) => {
        const { localStorage } = ctx.req;
        let body = ctx.request.body;
        let shared = localStorage.getProperty(PLUGIN_NAME);
        if (shared && shared !== 'undefined') {
            shared = JSON.parse(shared);
            shared = Object.assign(Object.assign({}, shared), body);
        }
        else {
            shared = body || {};
        }
        localStorage.setProperty(PLUGIN_NAME, JSON.stringify(shared));
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: '操作成功',
            success: true
        };
    });
    router.get('/cgi-bin/shared/get', (ctx) => {
        const { localStorage } = ctx.req;
        const shared = localStorage.getProperty(PLUGIN_NAME);
        const data = JSON.parse(shared);
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: '操作成功',
            success: true,
            data
        };
    });
    router.post('/cgi-bin/shared/delete', (ctx) => {
        const { localStorage } = ctx.req;
        let { id } = ctx.request.body;
        let shared = localStorage.getProperty(PLUGIN_NAME);
        if (shared && shared !== 'undefined') {
            shared = JSON.parse(shared);
            delete shared[id];
            localStorage.setProperty(PLUGIN_NAME, JSON.stringify(shared));
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: '操作成功',
            success: true
        };
    });
};
