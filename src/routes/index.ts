import express from 'express'
import { showPlants } from './handlers/plantsRout'

var router = express.Router()

/* GET 1- show  plant route. */
router.use('/show-plants', showPlants)
/* GET 2-delete plant route. */

//show msg Main router Connect
router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main router Connect!')
})

export default router
