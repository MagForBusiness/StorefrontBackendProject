//register New user route
import express from 'express'
import { UserIntity,users } from '../../models/users';

//import { plants, plantsList } from '../../models/plants'

// set up route
export const NewUser = express.Router()
 NewUser.get('/', async (req: express.Request, res: express.Response) => {
  try {
    

    //get user info input
    interface getUserData  { firstName:String ;lastName:String;username:String; email:String; password:String};
    const getUserData =await req.body;
    console.log(`new user is loging ${getUserData.username}`)
    //validate user data inputs
    if(getUserData.firstName == null || getUserData.lastName == null || getUserData.username == null || getUserData.email == null || getUserData.password == null   ){
        res.status(400);
        res.json("All input is required");
    }else{
    // check if user already exist in database or not
    // const existUser =await UserIntity.FindUserByEmail(getUserData.email);
    const users = new UserIntity();
    const existUser= await users.FindUserByEmail(getUserData.email);
    // @ts-ignore
    if (existUser.length > 0) {
     // @ts-ignore
    console.log(`return row [${existUser.length}]`)
    res.status(400);
    res.json("User Already Exist. Please Login");
     
    }else{
    //Encrypt user password
    // const hash = bcrypt.hashSync(getUserData.password + pepper,parseInt(SALT_ROUNDS));
    
    const newUser = await users.CreatUser(getUserData)
    }
 
  }
  } catch (err) {
    res.status(400);
    res.json(err);
  }
})
