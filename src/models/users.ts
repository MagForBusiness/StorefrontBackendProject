// @ts-ignore
import client from '../database'
// let client = require('../database')

export type users = { 
    firstName:String ;
    lastName:String;
    username:String; 
    email:String; 
    password:String;
    token :String;
   };
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
  // async CreateNewUser(u:users): Promise<users> {
  //   try {
  //     // @ts-ignore
  //     const conn = await client.connect()
  //     const sql = `INSERT INTO users (firstName,lastName,username,email,userpassword,token)
  //                   values ()`
  //     const result = await conn.query(sql)
  //     conn.release()
  //     return result.rows
  //     console.log(result.rows)
  //   } catch (error) {
  //     throw new Error(`Cannont get users table ${error}`)
  //   }
  // }
}

