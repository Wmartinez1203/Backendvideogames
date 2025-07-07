const express = require("express");
const router = express.Router();
const controller = require("../controllers/refund.controller");

router.get("/", controller.getAllRefunds);

module.exports = router;
