"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
var router = express_1.default.Router();
router.get('/', function (req, res) {
    controller_1.getStatus(res);
});
module.exports = router;
