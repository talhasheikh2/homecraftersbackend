const Product = require('../model/product.model');
const path = require('path');
const  uploadOnCloudinary  = require('../utils/cloudinary');

// Create a product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;

    // Log uploaded file info (for debugging)
    // console.log(req.file);
    // console.log("hello");

    // Check if all required fields are present
    if (!name || !price || !description || !category || !stock) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Get image file path if uploaded
    const imagePath = req.file ? req.file.path : null;
    console.log(imagePath);
     const imageurl=await uploadOnCloudinary(imagePath)
    // Create new product
    const product = new Product({
      name,
      price,
      description,
      category,
      stock,
      image: imageurl?.url, // Save image file path to database
    });

    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // Include full image URL in response
    
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Export all handlers as a single object
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
};
