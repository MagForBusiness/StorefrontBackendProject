import express from 'express'
import { showPlants } from './handlers/plantsRout'
import { NewUser } from './handlers/singupRout'
import { LoginUser } from './handlers/signinRoute'
var router = express.Router()

/* GET 1- show  plant route. */
router.use('/show-plants', showPlants)
/* GET 2-delete plant route. */


// get register (NewUser) route
router.use('/signup', NewUser)
// get Login (NewUser) route
router.use('/signin', LoginUser)
//show msg Main router Connect
router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main router Connect!')
})

export default router
