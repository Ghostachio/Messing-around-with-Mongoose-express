// setting up express
const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const seeds = require('./seeds')
//



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// index page to list all products
app.get('/products', async (req,res) =>{
  const products = await Product.find({})
  console.log(products)
  res.render('products/index', {products})
})

// page to show details about a spesific product
app.get('/products/:id', async (req, res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
  console.log(product)
  res.render('products/show', {product})
})

app.listen('3000',()=>{
  console.log('listening to port 3000')
})