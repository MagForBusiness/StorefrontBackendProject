import express from 'express'
import { UserIntity, users } from '../../models/users'

// set up route for index users
export const IndexUser = express.Router()
IndexUser.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const userIntity = new UserIntity()
    const Userslist = await userIntity.index()
    res.status(201)
    res.json(Userslist)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
// set up route for show user
export const ShowUser = express.Router()
ShowUser.get('/', async (req: express.Request, res: express.Response) => {
  const userid = req.params.id
  try {
    const userIntity = new UserIntity()
    const UserByid = await userIntity.show(userid)
    res.status(201)
    res.json(UserByid)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
