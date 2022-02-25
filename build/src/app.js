"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import client from "./database"
var plants_1 = require("../src/models/plants");
var client = require('./database');
// const client = new Client({
//   host: "localhost",
//   port : 5432,
//   user: "postgres",
//   password: "1234",
//   database: "plants_dev"
// })
client.connect();
// let query = `Select * from "plants"`;
var plants = new plants_1.plantsList();
var result = plants.index();
console.log(result);
