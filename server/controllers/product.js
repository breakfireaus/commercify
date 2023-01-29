import Product from '../models/product.js'
import asyncHandler from 'express-async-handler'

// fetch all products
// Get /api/products
// public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('product is not found on database')
  }
})

export { getProducts, getProductById }
