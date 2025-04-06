const express = require('express');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/product.routes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files
app.use('/api/products', productRoutes); // Register product routes

module.exports=app;