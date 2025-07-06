const express = require("express");
const app = express();
const refundRoutes = require("./routes/refund.routes");
const sequelize = require("./config/db");
require("dotenv").config();

app.use(express.json());
app.use("/api/refunds", refundRoutes);

sequelize.sync().then(() => {
  console.log("🗃️ DB connected and models synced");
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
}).catch((err) => {
  console.error("❌ Failed to connect to DB:", err);
});
