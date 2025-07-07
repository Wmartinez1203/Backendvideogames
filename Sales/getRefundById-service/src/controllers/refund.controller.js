const Refund = require("../models/refund.model");

exports.getRefundById = async (req, res) => {
  try {
    const refund = await Refund.findByPk(req.params.id);
    if (!refund) return res.status(404).json({ message: "Refund not found" });
    res.json(refund);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

