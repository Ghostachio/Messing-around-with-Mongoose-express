//requiring Express
const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const seeds = require('./seeds')
const methodOverride = require('method-override');



// setting views path, engine, middleware and url encoder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'))

categories = ["fruit", "vegetables", "dairy"]


// index page showing all products
app.get('/products', async (req,res) =>{
  const products = await Product.find({})
  console.log(products)
  res.render('products/index', {products})
})
//form to create new product
app.get('/products/new', (req, res) => {
  res.render('products/new', {categories})
})
// getting daat from form and going back to index
app.post('/products', async (req, res)=> {
  const newProduct =  new Product(req.body);
  await newProduct.save();
  console.log(newProduct)
  res.redirect('products')
})

// form to edit one product
app.get('/products/:id/edit', async(req, res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
  res.render("products/edit", {product, categories})
})
// submiting the edited product
app.put('/products/:id', async (req, res)=> {
  const {id} = req.params;
  const updateProduct = await Product.findByIdAndUpdate(id, req.body, {runValidators: true})
  console.log(updateProduct)
  res.redirect(`/products/${updateProduct._id}`)
})

// deleting product 
app.delete('/products/:id', async (req, res) => {
  const {id} = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products')
})

// showing details of one selected product  
app.get('/products/:id', async (req, res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
  console.log(product)
  res.render('products/show', {product})
})







app.listen('3000',()=>{
  console.log('listening to port 3000')
})