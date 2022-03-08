import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, ENV, POSTGRES_TEST_DB,POSTGRES_TEST_USER,POSTGRES_TEST_PASSWORD } = process.env


console.log(ENV)
const client = new Pool({
  host: POSTGRES_HOST,
  database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_TEST_DB,
  user: ENV === 'dev' ? POSTGRES_USER : POSTGRES_TEST_USER, 
  password:ENV === 'dev'? POSTGRES_PASSWORD : POSTGRES_TEST_PASSWORD,
});

export default client
