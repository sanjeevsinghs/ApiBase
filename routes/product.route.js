const express = require('express');
const router = express.Router();
const Product = require('../Models/product.model.js'); 
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../Controllers/product.controller.js');

// Get all products
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;