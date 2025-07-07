const Refund = require("../models/refund.model");

exports.getAllRefunds = async (req, res) => {
  try {
    const refunds = await Refund.findAll();
    res.json(refunds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
