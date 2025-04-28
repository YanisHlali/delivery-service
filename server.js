const express = require('express');
const bodyParser = require('body-parser');
const deliveryRoutes = require('./routes/deliveryRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/', deliveryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Delivery service running on port ${PORT}`);
});

module.exports = app;