import {plants,plantsList} from "../src/models/plants";
import bodyParser from 'body-parser';
import express  from 'express';
import cors from 'cors';

//Create  application object with express()

const app = express();

const address:string = "0.0.0.0:3000";
const corsOptions ={
    origin: 'http://some3ddomian.com',
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));
// app.get ('/test-cors' , cors(corsOptions) , (req: express.Request, res: express.Response,next) => {
//      res.json ({msg:`cors with the middle ware`);
//      next();
// })
// ;

app.use(bodyParser.json());

app.get ('/' ,async (req: express.Request, res: express.Response) => {
    const plants =new plantsList();
    const result= await plants.index();
    console.log(result);
    res.send (result);
})
;

app.listen (3000,function(){
    console.log(`server started at localhost:${address}`);
})
;

