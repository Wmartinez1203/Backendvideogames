const Refund = require("../models/refund.model");

exports.createRefund = async (req, res) => {
  try {
    const refund = await Refund.create(req.body);
    res.status(201).json(refund);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
