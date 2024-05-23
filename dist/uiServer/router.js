"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PLUGIN_NAME = 'whistle.devtool';
exports.default = (router) => {
    router.post('/cgi-bin/console/report', (ctx) => {
        const { localStorage } = ctx.req;
        let { data } = ctx.request.body;
        let consoleList = localStorage.getProperty(PLUGIN_NAME);
        if (consoleList && consoleList !== 'undefined') {
            consoleList = JSON.parse(consoleList || '[]');
            consoleList.push(...data);
        }
        else {
            consoleList = data;
        }
        localStorage.setProperty(PLUGIN_NAME, JSON.stringify(consoleList));
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: '操作成功',
            success: true
        };
    });
    router.get('/cgi-bin/console/list', (ctx) => {
        const { localStorage } = ctx.req;
        let consoleList = localStorage.getProperty(PLUGIN_NAME);
        if (consoleList) {
            consoleList = JSON.parse(consoleList || '[]');
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: '操作成功',
            success: true,
            data: consoleList || []
        };
    });
    router.get('/cgi-bin/console/clear', (ctx) => {
        const { localStorage } = ctx.req;
        localStorage.setProperty(PLUGIN_NAME, '');
        ctx.status = 200;
        ctx.body = {
            code: 200,
            message: '操作成功',
            success: true,
        };
    });
};
