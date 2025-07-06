const Refund = require("../models/refund.model");

exports.createRefund = async (req, res) => {
  try {
    const refund = await Refund.create(req.body);
    res.status(201).json(refund);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllRefunds = async (req, res) => {
  try {
    const refunds = await Refund.findAll();
    res.json(refunds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRefundById = async (req, res) => {
  try {
    const refund = await Refund.findByPk(req.params.id);
    if (!refund) return res.status(404).json({ message: "Refund not found" });
    res.json(refund);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRefundStatus = async (req, res) => {
  try {
    const refund = await Refund.findByPk(req.params.id);
    if (!refund) return res.status(404).json({ message: "Refund not found" });

    refund.status = req.body.status;
    await refund.save();
    res.json(refund);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
