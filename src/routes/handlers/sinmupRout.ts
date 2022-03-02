//register New user route
import express from 'express'
import { UserIntity } from '../../models/users';

//import { plants, plantsList } from '../../models/plants'

// set up route
export const NewUser = express.Router()
NewUser.get('/', async (req: express.Request, res: express.Response) => {
  try {
    //  res.send("the SingUp Route Here!")

    //get user info input
    interface getUserData  { firstName:String ;lastName:String;username:String; email:String; password:String};
    const getUserData = await req.body;
    //validate user data inputs
    if(getUserData.firstName == null || getUserData.lastName == null || getUserData.username == null || getUserData.email == null   ){
        res.status(400);
        res.json("All input is required");
    }
    // check if user already exist in database or not

      const existUser =  UserIntity.FindUserByEmail(getUserData.email);
      // @ts-ignore
      if (existUser.rows.length) {
        return res.status(409).send("User Already Exist. Please Login");
      }
    
       //Encrypt user password
    // const hash = bcrypt.hashSync(getUserData.password + pepper,parseInt(SALT_ROUNDS));
    // const plants = new plantsList()
    // const result = await plants.index()
    // console.log(result)
  
  } catch (err) {
    res.status(400);
    res.json(err);
  }
})
function SALT_ROUNDS(SALT_ROUNDS: any): string | number {
  throw new Error('Function not implemented.');
}

