import client from '../database'
// let client = require('../database')

export type orders = {
  id?: Number
  user_id: Number
  status_of_order:String
 }
export class ordersList {
  async index(): Promise<orders[]> {
    try {
      const conn = await client.connect()
      const sql = 'SELECT * FROM "Orders";'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
      console.log(result.rows)
    } catch (error) {
      throw new Error(`Can not get orders ${error}`)
    }
  }
  async show(id: string): Promise<orders[]> {
    try {
      const sql = 'SELECT * FROM "Orders" WHERE id =($1)'

      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
      console.log(result.rows)
    } catch (err) {
      throw new Error(`unable show product ${id}: ${err}`)
    }
  }

  async creatOrder(p: orders): Promise<orders[]> {
    try {
      const sql = 'INSERT INTO Orders ( user_id,status_of_order) VALUES($1,$2) RETURNING *'
      const conn = await client.connect()
      const result = await conn.query(sql, [p.user_id,p.status_of_order])
      conn.release()
      const newOrder = result.rows[0]
      console.log(result.rows)
      return newOrder
    } catch (error) {
      throw new Error(`Cannont get Orders table for creat ${error}`)
    }
  }
  async delete(id: string): Promise<orders> {
    try {
      const sql = 'DELETE FROM Orders  WHERE id=($1)'
      const conn = await client.connect()
      const result = await conn.query(sql, [id])
      conn.release()
      const newOrder = result.rows[0]
      return newOrder
    } catch (error) {
      throw new Error(`Cannont get Orders table for creat ${error}`)
    }
  }
  // this function used to testing purpose
  async resetproudctIdSequences(): Promise<orders> {
    try {
      const sql = 'ALTER SEQUENCE Orders_id_seq  RESTART;'
      const conn = await client.connect()
      const result = await conn.query(sql)
      conn.release()
      const newOrder = result.rows[0]
      return newOrder
    } catch (error) {
      throw new Error(`Cannont resetSequences orders_id_seq ${error}`)
    }
  }
}
