//register New user route
import express from 'express'
import { UserIntity, users } from '../../models/users'
import jwt from 'jsonwebtoken'

//import { plants, plantsList } from '../../models/plants'

// set up route
export const NewUser = express.Router()
NewUser.post('/', async (req: express.Request, res: express.Response) => {
  try {
    //get user info input
    interface getUserData {
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
      token: String
    }
    const getUserData = await req.body
    console.log(`new user is loging ${getUserData.username}`)
    //validate user data inputs
    if (
      getUserData.firstName == null ||
      getUserData.lastName == null ||
      getUserData.username == null ||
      getUserData.email == null ||
      getUserData.password == null
    ) {
      res.status(400)
      res.json('All input is required')
    } else {
      // check if user already exist in database or not
      // const existUser =await UserIntity.FindUserByEmail(getUserData.email);
      const userIntity = new UserIntity()
      const existUser = await userIntity.FindUserByEmailandUsername(getUserData.email, getUserData.username)
      // @ts-ignore
      if (existUser.length > 0) {
        // @ts-ignore
        console.log(`return row [${existUser.length}]`)
        res.status(400)
        res.json('User Already Exist. Please Login')
      } else {
        //create user

        const newUser = await userIntity.CreatUser(getUserData)

        //creat jwt and return it to user
        // @ts-ignore
        var token = jwt.sign({ user: newUser.username, email: newUser.email }, process.env.TOKEN_SECRET)
        //save user token
        // @ts-ignore
        newUser.token = token
        //return new user token
        // @ts-ignore
        res.status(201).json(newUser.token)
      }
    }
  } catch (err) {
    res.status(400)
    res.json(err)
  }
})
