const express = require("express");
const router = express.Router();
const controller = require("../controllers/refund.controller");

router.post("/", controller.createRefund);
router.get("/", controller.getAllRefunds);
router.get("/:id", controller.getRefundById);
router.put("/:id/status", controller.updateRefundStatus);

module.exports = router;
