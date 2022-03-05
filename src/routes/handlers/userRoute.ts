import express from 'express'
import { UserIntity,users } from '../../models/users';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// set up route for show users
export const ShowUser = express.Router()
ShowUser.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const userIntity = new UserIntity();
    const Userslist = await userIntity.index();
    res.status(201)
    res.json(Userslist)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
  
  
})
