import express from 'express'
import { plants, plantsList } from '../../models/plants'

// set up route
export const showPlants = express.Router()
showPlants.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const plants = new plantsList()
    const result = await plants.index()
    console.log(result)
    res.send(result)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
