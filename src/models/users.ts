// @ts-ignore
import client from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
const { BCRYPT_PASSWORD,SALT_ROUNDS,TOKEN_SECRET } = process.env 

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
     
      const sql = 'INSERT INTO users (firstName, lastName, username, email,userpassword,token) VALUES($1, $2, $3, $4, $5,$6) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
      // @ts-ignore
      const hash = bcrypt.hashSync(u.password + BCRYPT_PASSWORD ,parseInt(SALT_ROUNDS));
      // @ts-ignore
      const token=jwt.sign(u.token, TOKEN_SECRET)
      const result = await conn.query(sql,[u.firstName,u.lastName,u.username,u.email,hash,token])
      conn.release()
      const users= result.rows[0]
      console.log(result.rows)
      return users
    } catch (error) {
      throw new Error(`Cannont get users table ${error}`)
    }
  } 

  async authenticate(username: string, password: string): Promise<users | null> {
    // @ts-ignore
    const conn = await client.connect()
    const sql = 'SELECT userpassword FROM users WHERE username=($1)'

    const result = await conn.query(sql, [username])

    conn.release()

    console.log(password+BCRYPT_PASSWORD)

    if(result.rows.length) {

      const users = result.rows[0]

      console.log(users)

      if (bcrypt.compareSync(password+BCRYPT_PASSWORD, users.password)) {
        return users
      }
    }

    return null
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
 
}

