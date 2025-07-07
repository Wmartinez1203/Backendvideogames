const express = require("express");
const router = express.Router();
const controller = require("../controllers/refund.controller");

router.post("/", controller.createRefund);

module.exports = router;
