// @ts-ignore
import client from '../database'
// let client = require('../database')

export type users = { 
    firstName:String ;
    lastName:String;
    username:String; 
    email:String; 
    password:String};
export class UserIntity {
  static FindUserByEmail(email: any) {
    throw new Error('Method not implemented.');
  }
  async index(): Promise<users[] | null> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT * FROM users'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
      console.log(result.rows)
    } catch (error) {
      throw new Error(`Cannont get users table ${error}`)
    }
  }
  async FindUserByEmail(email:string): Promise<users[] | null> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = `SELECT * FROM users where email = '${email}'`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
      console.log(result.rows)
    } catch (error) {
      throw new Error(`Cannont get users table ${error}`)
    }
  }
}

