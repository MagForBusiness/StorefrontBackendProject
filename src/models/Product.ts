import client from '../database'
// let client = require('../database')

export type products = {
  id?: Number
  name: String
  price: Number
  category: Number
}
export class ProductsList {
  async index(): Promise<products[]> {
    try {
      const conn = await client.connect()
      const sql = 'SELECT * FROM Product'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
      console.log(result.rows)
    } catch (error) {
      throw new Error(`Can not get Products ${error}`)
    }
  }
  async show(id: string): Promise<products[]> {
    try {
      const sql = 'SELECT * FROM Product WHERE id =($1)'

      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
      console.log(result.rows)
    } catch (err) {
      throw new Error(`unable show product ${id}: ${err}`)
    }
  }

  async creatProduct(p: products): Promise<products[]> {
    try {
      const sql = 'INSERT INTO Product ( name, price, category) VALUES($1, $2, $3) RETURNING *'
      const conn = await client.connect()
      const result = await conn.query(sql, [p.name, p.price, p.category])
      conn.release()
      const newProduct = result.rows[0]
      console.log(result.rows)
      return newProduct
    } catch (error) {
      throw new Error(`Cannont get Product table for creat ${error}`)
    }
  }
  async delete(id: string): Promise<products> {
    try {
      const sql = 'DELETE FROM Product  WHERE id=($1)'
      const conn = await client.connect()
      const result = await conn.query(sql, [id])
      conn.release()
      const newProduct = result.rows[0]
      return newProduct
    } catch (error) {
      throw new Error(`Cannont get Product table for creat ${error}`)
    }
  }
  // this function used to testing purpose
  async resetproudctIdSequences(): Promise<products> {
    try {
      const sql = 'ALTER SEQUENCE product_id_seq  RESTART;'
      const conn = await client.connect()
      const result = await conn.query(sql)
      conn.release()
      const newProduct = result.rows[0]
      return newProduct
    } catch (error) {
      throw new Error(`Cannont resetSequences product_id_seq ${error}`)
    }
  }
}
