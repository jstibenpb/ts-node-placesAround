"use strict";
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.status(200).json({ status: 200 });
});
module.exports = router;