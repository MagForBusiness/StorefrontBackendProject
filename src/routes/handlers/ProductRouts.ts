import express from 'express'
import { ProductsList, products } from '../../models/Product'

// set up route for products
export const ProductRout = express.Router()
ProductRout.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const productIntity = new ProductsList()
    const productindex = await productIntity.index()
    res.status(201)
    res.json(productindex)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
export const Productshow = express.Router()
Productshow.get('/', async (req: express.Request, res: express.Response) => {
  const productId =req.params.id
  try {
    const productIntity = new ProductsList()
    const product = await productIntity.show(productId)
    res.status(201)
    res.json(product)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})

export const NewProduct = express.Router()
NewProduct.post('/', async (req: express.Request, res: express.Response) => {
  type getpoductData = {
    name: String
    price: Number
    category: Number
  }
  const getpoductData = await req.body

  try {
    const productIntity = new ProductsList()
    const product = await productIntity.creatProduct(getpoductData)
    res.status(201)
    res.json(product)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
