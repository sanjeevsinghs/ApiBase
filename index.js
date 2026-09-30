// import express from 'express'
const express = require('express');

const mongoose = require('mongoose');

const app = express()

const Product = require('./Models/product.model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('hello from node api server')
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// update product
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product =await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

app.delete("/api/product/:id",async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect("mongodb+srv://sanjeevsingh9517_db_user:ZpCEbq6YXIT1c5qf@mongodb.p3iktig.mongodb.net/Node-API?appName=mongodb").then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err)
})