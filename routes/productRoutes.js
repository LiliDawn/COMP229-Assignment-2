const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define CRUD routes
router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.addProduct);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProductById);

router.delete('/', productController.deleteAllProducts);

router.get('/search', productController.searchProductsByName);

module.exports = router;
