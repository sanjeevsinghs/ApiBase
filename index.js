require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');


const app = express()

const productRoutes = require('./src/routes/product.route.js');
const authRoutes = require('./src/routes/auth.route.js');


// midleware 
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
  res.send('hello from node api server')
})



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB')

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err)
})
