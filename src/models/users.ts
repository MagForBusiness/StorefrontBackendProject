// @ts-ignore
import client from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()
const { BCRYPT_PASSWORD,SALT_ROUNDS } = process.env 

// let client = require('../database')

export type users = { 
    id?: string;
    firstName:String ;
    lastName:String;
    username:String; 
    email:String; 
    userpassword:String;
    token:String
   };
export class UserIntity {

  async CreatUser(u:users): Promise<users[] | null> {
    try {
     
      const sql = 'INSERT INTO users (firstName, lastName, username, email,userpassword) VALUES($1, $2, $3, $4, $5) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
      // @ts-ignore
      const hash = bcrypt.hashSync(u.userpassword + BCRYPT_PASSWORD ,parseInt(SALT_ROUNDS));
     
      const result = await conn.query(sql,[u.firstName,u.lastName,u.username,u.email,hash])
      conn.release()
      const users= result.rows[0]
      console.log(result.rows)
      return users
    } catch (error) {
      throw new Error(`Cannont get users table ${error}`)
    }
  } 

  async authenticate(username: string, password: string): Promise<users[] | null> {
    // @ts-ignore
    const conn = await client.connect()
    const sql = 'SELECT userpassword FROM users WHERE username=($1)'

    const result = await conn.query(sql, [username])

    conn.release()

   // console.log(password+BCRYPT_PASSWORD)

    if(result.rows.length) {

      const users = result.rows[0]

      console.log(users)

      if (bcrypt.compareSync(password + BCRYPT_PASSWORD, users.userpassword)) {
        return users
      }
    }

    return null
  }

  async index(): Promise<users[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM users'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get users: ${err}`)
    } 
  }

  async show(id: string): Promise<users> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)'
      //@ts-ignoreX$
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`unable show user ${id}: ${err}`)
    }
  }


  async FindUserByEmailandUsername(email:string,username:String): Promise<users[] | null> {
    try {
      
      const sql = 'SELECT * FROM users where email = ($1) or username =($2)'
      // @ts-ignore
      const conn = await client.connect()
      const result = await conn.query(sql,[email,username])
      conn.release()
      return result.rows
      console.log(result.rows.length)
    } catch (error) {
      throw new Error(`Cannont get users table ${error}`)
    }
  }
 
}

