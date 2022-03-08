import express from 'express'
import {DashboardQueries} from '../../Services/dashboard'

export const productsInActiveOrder = express.Router()
productsInActiveOrder.get('/', async (req: express.Request, res: express.Response) => {
    const userId = String(req.query.id);
    try {
      const productIntity = new DashboardQueries();
      const orderActive = await productIntity.productsInActiveOrdersbyuser(userId);
      res.status(201)
      res.json(orderActive)
    } catch (err) {
      res.status(400)
      res.json(err)
    }
  })