// import client from "./database"
import {plants,plantsList} from "../src/models/plants"
var client = require('./database')
// const client = new Client({
//   host: "localhost",
//   port : 5432,
//   user: "postgres",
//   password: "1234",
//   database: "plants_dev"
// })

client.connect();

// let query = `Select * from "plants"`;
const plants =new plantsList();
const result=  plants.index();
console.log(result);
