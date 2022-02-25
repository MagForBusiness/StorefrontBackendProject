"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("./database"));
var plants_1 = require("../src/models/plants");
// const client = new Client({
//   host: "localhost",
//   port : 5432,
//   user: "postgres",
//   password: "1234",
//   database: "plants_dev"
// })
database_1.default.connect();
// let query = `Select * from "plants"`;
var plants = new plants_1.plantsList();
var result = plants.index();
console.log(result);
