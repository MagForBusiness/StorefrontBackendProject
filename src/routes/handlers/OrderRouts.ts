import express from 'express'
import { ordersList, orders } from '../../models/orders'

// set up route for orders
export const OrderRout = express.Router()
OrderRout.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const vordersList = new ordersList()
    const ordersindex = await vordersList.index()
    res.status(201)
    res.json(ordersindex)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
export const ordershow = express.Router()
ordershow.get('/', async (req: express.Request, res: express.Response) => {
  const productId = String(req.query.id)
  try {
    const vordersList = new ordersList()
    const product = await vordersList.show(productId)
    res.status(201)
    res.json(product)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})

export const NewOrder = express.Router()
NewOrder.post('/', async (req: express.Request, res: express.Response) => {
  type getpoductData = {
    name: String
    price: Number
    category: Number
  }
  const getpoductData = await req.body

  try {
    const vordersList = new ordersList()
    const product = await vordersList.creatOrder(getpoductData)
    res.status(201)
    res.json(product)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
