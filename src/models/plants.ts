// @ts-ignore
import client from "../database";
// let client = require('../database')

export type plants={
    id:Number;
    descripition:String;
    individuals:Number;
    sighting_date:Date;

}
export class plantsList{
    async index():Promise<plants[]>{
        try{
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM plants'
            const result =await conn.query(sql)
            conn.release()
            return result.rows
            console.log(result.rows);
        } catch(error){
            throw new Error(`Cannont get plants ${error}`)
        }
        
    }
}