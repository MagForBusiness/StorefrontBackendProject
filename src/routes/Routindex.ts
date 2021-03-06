import express from 'express'
import { ShowUser, IndexUser } from './handlers/usersRoute'
import { NewUser } from './handlers/singupRout'
import { LoginUser } from './handlers/signinRoute'
import verifyAuthToken from '../middleware/verifyAuthToken'
import { ProductRout, Productshow, NewProduct } from './handlers/ProductRouts'
import { productsInActiveOrder } from './handlers/dashboardRouts'
import {ordershow,OrderRout,NewOrder,deletOrder} from './handlers/OrderRouts'

var router = express.Router()

/* GET  user index route. */
router.use('/user-index', verifyAuthToken, IndexUser)

/* GET  user show route. */
router.use('/user/:id', verifyAuthToken, ShowUser)

// get user register (NewUser) route
router.use('/signup', NewUser)

// get Login (NewUser) route
router.use('/signin', LoginUser)

//Products
/* GET  products index route. */
router.use('/products-index', ProductRout)

/* GET  products show route. */
router.use('/product/:id', Productshow)

/* GET  Creat New product  route. */
router.use('/add-product', verifyAuthToken, NewProduct)

//orders
/* GET  order show route. */
router.use('/orders/:id', ordershow)
/* GET  order index route. */
router.use('/orders-index', OrderRout)
/* GET  order index route. */
router.use('/NewOrder', NewOrder)
/* GET  order delete route. */
router.use('/deletOrder/:id',deletOrder )


/* get productsInActiveOrderby user id */
router.use('/ActiveorderbyuserId/:id', verifyAuthToken, productsInActiveOrder)

//show msg Main router Connect
router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main router Connect!')
})

export default router
