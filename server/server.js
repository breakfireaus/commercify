const express = require('express')
const products = require('./data/products')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/product', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(PORT, console.log('Server running on port 5000'))
