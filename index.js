
const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const seeds = require('./seeds')




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))



app.get('/products', async (req,res) =>{
  const products = await Product.find({})
  console.log(products)
  res.render('products/index', {products})
})

app.get('/products/new', (req, res) => {
  res.render('products/new')
})

app.post('/products', async (req, res)=> {
  const newProduct =  new Product(req.body);
  await newProduct.save();
  console.log(newProduct)
  res.redirect('products')
})


app.get('/products/:id', async (req, res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
  console.log(product)
  res.render('products/show', {product})
})







app.listen('3000',()=>{
  console.log('listening to port 3000')
})