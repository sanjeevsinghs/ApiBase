// import express from 'express'
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const Product = require('./Models/product.model.js');
const productRoutes = require('./routes/product.route.js');

// midleware 
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
  res.send('hello from node api server')
})


mongoose.connect("mongodb+srv://sanjeevsingh9517_db_user:ZpCEbq6YXIT1c5qf@mongodb.p3iktig.mongodb.net/Node-API?appName=mongodb").then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err)
})