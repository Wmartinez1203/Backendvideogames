const Refund = require("../models/refund.model");

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
