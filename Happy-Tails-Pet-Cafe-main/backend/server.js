const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running 🚀" });
});

// TEMP in-memory orders (later connect to DB)
const orders = [];

app.post("/api/orders", (req, res) => {
  const order = req.body;

  if (!order?.items?.length) {
    return res.status(400).json({ error: "Order must include items." });
  }

  const orderId = `HT-${Date.now()}`;
  const saved = { ...order, orderId };

  orders.push(saved);

  res.json({ success: true, orderId });
});

app.get("/api/orders", (req, res) => {
  res.json({ count: orders.length, orders });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));