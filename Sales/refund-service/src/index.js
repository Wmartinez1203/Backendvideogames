const express = require('express');
const refundRoutes = require('./routes/refund.routes');
const db = require('./config/db');

const app = express();
const PORT = 3024;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/refunds', refundRoutes);

// Iniciar servidor
app.listen(PORT, async () => {
  try {
    await db.authenticate();
    console.log(`Refund service running on port ${PORT}`);
  } catch (err) {
    console.error('Database connection failed:', err);
  }
});
