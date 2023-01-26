import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import products from './data/products.js'

dotenv.config()

connectDb()

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

const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))
