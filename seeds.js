const mongoose = require('mongoose');
const Product = require('./models/product')

// setting up mongoose
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
  console.log('connected');
})
.catch((e)=> {
  console.log('oups something is wrong');
  console.log(e);
})
//


// const p = new Product({
//   name : 'grapeFruit',
//   price : 5.99,
//   category : 'fruit',
// })

// const seedProducts = [
//   {name : 'apple', price: 10.99, category: 'fruit'},
//   {name : 'egg plant', price: 3.99, category: 'vegetables'},
//   {name : 'melon', price: 6.99, category: 'fruit'},
//   {name : 'celery', price: 10.99, category: 'vegetables'},
//   {name : 'milk', price: 1.99, category: 'diary'},
// ]

// Product.insertMany(seedProducts)
// .then(res => {
//   console.log(res)
// }).catch ((e) => {
//   console.log(e)
// })

// p.save().then((p) => {
//   console.log(p)
// }).catch((e) => {
//   console.log(e)
// });