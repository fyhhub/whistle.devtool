"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (server, options) => {
    server.on('request', (req, res) => {
        res.end();
    });
};
