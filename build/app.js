"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./routes"));
var loggers_1 = require("./middlewares/loggers");
// Create a new express application instance
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(loggers_1.loggerMiddleware);
routes_1.default(app);
module.exports = app;
