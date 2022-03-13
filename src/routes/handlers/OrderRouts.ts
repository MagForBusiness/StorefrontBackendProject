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
  const orderId = req.params.id
  try {
    const vordersList = new ordersList()
    const orderout = await vordersList.show(orderId)
    res.status(201)
    res.json(orderout)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})

export const NewOrder = express.Router()
NewOrder.post('/', async (req: express.Request, res: express.Response) => {
  type getorderData = {
    user_id: Number
    status_of_order: String 
  }
  const getorderData = await req.body

  try {
    const vordersList = new ordersList()
    const product = await vordersList.creatOrder(getorderData)
    res.status(201)
    res.json(product)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
export const deletOrder = express.Router()
deletOrder.delete('/', async (req: express.Request, res: express.Response) => {
   const getorderData = req.params.id

  try {
    const vordersList = new ordersList()
    const product = await vordersList.delete(getorderData)
    res.status(201)
    res.json(product)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})