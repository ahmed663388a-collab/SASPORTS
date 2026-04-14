/**
 * SA SPORTS – Simple Express Server (Optional)
 * Run: npm install express && node server.js
 * Access: http://localhost:3000
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Simulated order storage
const orders = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkout.html'));
});

// Demo order endpoint
app.post('/api/order', (req, res) => {
  const { name, email, address, items, total } = req.body;
  if (!name || !email || !items) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }
  const order = {
    id: `SA-${Date.now()}`,
    name, email, address, items, total,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };
  orders.push(order);
  console.log('New order:', order.id, '–', name);
  res.json({ success: true, orderId: order.id, message: 'Order placed (demo)' });
});

// Demo payment simulation
app.post('/api/payment/stripe', (req, res) => {
  const { amount, currency = 'eur' } = req.body;
  // Demo: always succeeds
  setTimeout(() => {
    res.json({
      success: true,
      paymentIntent: `pi_demo_${Date.now()}`,
      amount,
      currency,
      status: 'succeeded',
      message: 'Demo payment processed'
    });
  }, 800);
});

// Get orders (demo admin)
app.get('/api/orders', (req, res) => {
  res.json({ orders, total: orders.length });
});

app.listen(PORT, () => {
  console.log(`\n✅ Sa Sports server running at http://localhost:${PORT}`);
  console.log(`📦 Open http://localhost:${PORT} to view your store\n`);
});
