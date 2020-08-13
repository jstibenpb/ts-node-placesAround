"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
function getStatus(res) {
    return res.status(200).json({ healthy: true });
}
exports.getStatus = getStatus;
;
