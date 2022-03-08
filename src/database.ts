import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, ENV, POSTGRES_TEST_DB,POSTGRES_TEST_USER,POSTGRES_TEST_PASSWORD } = process.env

let client
console.log(ENV)
if (ENV === 'test') {
    console.log(ENV+"tesssssst")
     client = new Pool({
     host: POSTGRES_HOST,
     database: POSTGRES_TEST_DB,
      user: POSTGRES_TEST_USER,
      password: POSTGRES_TEST_PASSWORD,
  })
}
if (ENV === 'dev') {

  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}
export default client
