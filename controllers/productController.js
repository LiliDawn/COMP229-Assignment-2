const Product = require('../models/product');

// Get all products

exports.getAllProducts = async (req, res) => {
  try {

    const products = await Product.find();
    res.status(200).json(products);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

// Get product by ID
exports.getProductById = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

// Add new product
exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {

    const newProduct = await product.save();
    res.status(201).json(newProduct);

  } catch (err) {

    res.status(400).json({ message: err.message });

  }
};

// Update product by ID
exports.updateProductById = async (req, res) => {

  try {

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

// Delete product by ID
exports.deleteProductById = async (req, res) => {
  try {

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
  try {

    await Product.deleteMany();
    res.status(200).json({ message: 'All products deleted' });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }
};

// Search products by name
exports.searchProductsByName = async (req, res) => {

  const name = req.query.name;

  try {
    const products = await Product.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).json(products);
    
  } catch (err) {

    res.status(500).json({ message: err.message });
  }
};
