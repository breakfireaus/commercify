import express from 'express'
const router = express.Router()
import Product from '../models/product.js'
import asyncHandler from 'express-async-handler'

// fetch all products
// Get /api/products
// public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// fetch all products
// Get /api/products/:id
// public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'product is not found on database' })
    }
  })
)

export default router
