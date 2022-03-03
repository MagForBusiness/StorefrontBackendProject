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
  async CreatUser(u:users): Promise<users[] | null> {
    try {
      const sql = 'INSERT INTO users (firstName, lastName, username, email,password) VALUES($1, $2, $3, $4, $5) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
      const result = await conn.query(sql,[u.firstName,u.lastName,u.username,u.email,u.password])
      conn.release()
      const users= result.rows[0]
      console.log(result.rows)
      return users
    } catch (error) {
      throw new Error(`Cannont get users table ${error}`)
    }
  } 
  async index(): Promise<users[] | null> {
    try {
      const sql = 'SELECT * FROM users'
      // @ts-ignore
      const conn = await client.connect()
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
      
      const sql = 'SELECT * FROM users where email = ($1)'
      // @ts-ignore
      const conn = await client.connect()
      const result = await conn.query(sql,[email])
      conn.release()
      return result.rows
      console.log(result.rows.length)
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

