import express from 'express';


//Create  application object with express()

const app = express();

//Set a port

const port: number = 3000;
//Add an API endpoint to get a route, then send a response to the browser


app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;