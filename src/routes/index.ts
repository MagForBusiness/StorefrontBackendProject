import express from 'express'
import { ShowUser,IndexUser } from './handlers/usersRoute'
import { NewUser } from './handlers/singupRout'
import { LoginUser } from './handlers/signinRoute'
import verifyAuthToken from '../middleware/verifyAuthToken'

var router = express.Router()

/* GET  user index route. */
router.use('/user-index',verifyAuthToken, IndexUser)

/* GET  user show route. */
router.use('/user',verifyAuthToken, ShowUser)

// get user register (NewUser) route
router.use('/signup', NewUser)

// get Login (NewUser) route
router.use('/signin', LoginUser)

//show msg Main router Connect
router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main router Connect!')
})

export default router
