"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var routes_1 = __importDefault(require("../src/api/status/routes"));
function routes(app) {
    app.use('/status', routes_1.default);
    // app.use('/users', getGeoip, users);
    // app.use('/places', getGeoip, checkBlacklist, checkIfAuthenticated, places);
    app.use('*', function (req, res) {
        res.send('Not found!!!');
    });
}
;
module.exports = routes;
