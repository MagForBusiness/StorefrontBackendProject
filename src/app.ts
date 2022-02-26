import {plants,plantsList} from "../src/models/plants";
import bodyParser from 'body-parser';
import express  from 'express';

//Create  application object with express()

const app = express();

const address:string = "0.0.0.0:3000";

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

