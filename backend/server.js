const express = require('express');
const app = express();
const products = require('./data/products');
const PORT = process.env.PORT || 5000;

//todo ROUTES 
app.get('/', (req, res) => {
    res.send("Api is running, arde papi ")
});

app.get('/api/products', (req, res)=>{
    res.json(products)
})

//todo this route is unsing the ID
app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})
















// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });