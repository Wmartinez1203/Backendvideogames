const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Refund = sequelize.define("Refund", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING(36),
    allowNull: false,
  },
  orderId: {
    type: DataTypes.STRING(36),
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "approved", "rejected"),
    defaultValue: "pending",
  },
}, {
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

module.exports = Refund;
