import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import router from './routes/index'

//Create  application object with express()

const app = express()

const address: string = '0.0.0.0:3000'
const corsOptions = {
  origin: 'http://some3ddomian.com',
  optionsSuccessStatus: 200,
}
//cors
app.use(cors(corsOptions))
// app.get ('/test-cors' , cors(corsOptions) , (req: express.Request, res: express.Response,next) => {
//      res.json ({msg:`cors with the middle ware`);
//      next();
// })
// ;

//Routs map
app.use(bodyParser.json())
app.use('/', router)

app.listen(3000, function () {
  console.log(`server started at localhost:${address}`)
})
