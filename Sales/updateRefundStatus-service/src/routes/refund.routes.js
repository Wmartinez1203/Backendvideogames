const express = require("express");
const router = express.Router();
const controller = require("../controllers/refund.controller");

router.put("/:id/status", controller.updateRefundStatus);

module.exports = router;
