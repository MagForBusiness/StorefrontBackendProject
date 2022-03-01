//login user route

import express from 'express'
//import { plants, plantsList } from '../../models/plants'

// set up route
export const LoginUser = express.Router()
LoginUser.get('/', async (req: express.Request, res: express.Response) => {
  try {
    // const plants = new plantsList()
    // const result = await plants.index()
    // console.log(result)
    res.send("the signin Route Here!")
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
