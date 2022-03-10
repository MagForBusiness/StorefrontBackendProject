import Client from '../database'

export class DashboardQueries {
  // Get all products that have been included in orders
  async productsInActiveOrdersbyuser(userid: string): Promise<{ name: string; price: number; order_id: string }[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql =
        'SELECT o.id,o.user_id,o.status_of_order ,u.username,p.name,p.price,op.quantity FROM "Orders" o INNER JOIN order_prodcuts op ON o.id = op.order_id INNER JOIN users u ON o.user_id = u.user_id INNER JOIN product p ON p.id = op.product_id WHERE o.user_id=($1) AND o.status_of_order = ($2) ; '

      const result = await conn.query(sql, [userid, 'active'])

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`)
    }
  }
}
