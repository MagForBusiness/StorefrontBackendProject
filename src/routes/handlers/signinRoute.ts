//login user route
import express from 'express'
import { UserIntity, users } from '../../models/users'
import jwt from 'jsonwebtoken'

// set up route
export const LoginUser = express.Router()
LoginUser.get('/', async (req: express.Request, res: express.Response) => {
  // @ts-ignore
  const userWhologin: users = {
    username: req.body.username,
    userpassword: req.body.password,
  }
  try {
    const userIntity = new UserIntity()
    const userloged = await userIntity.authenticate(String(userWhologin.username), String(userWhologin.userpassword))
    // @ts-ignore
    var token = jwt.sign({ user: userloged }, process.env.TOKEN_SECRET)
    res.status(201).json(token)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
