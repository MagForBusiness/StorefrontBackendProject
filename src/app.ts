import  { Client } from "pg"

const client = new Client({
  host: "localhost",
  port : 5432,
  user: "postgres",
  password: "1234",
  database: "plants_dev"
})

client.connect();

let query = `Select * from "plants"`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    client.end;
})