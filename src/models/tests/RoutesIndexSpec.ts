import app from '../../server'
import supertest from 'supertest'
import {ordersList} from '../orders'
import {ProductsList} from '../Product'
//test EndPoints
const request = supertest(app)

describe('Test endpoints Routers responses', () => {
  it('gets the api (localhost:3000/products-index) endpoint', async () => {
    const response = await request.get('/products-index')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/add-product) endpoint', async () => {
    const response = await request.post('/add-product')
    expect(response.status).toBe(401)    
  })
  
  it('gets the api (localhost:3000/product?id=1) endpoint', async () => {
    const response = await request.get('/product/:id=1')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/user/:id=7) endpoint', async () => {
    const response = await request.get('/user/:id=7')
    expect(response.status).toBe(401)
  })
  it('gets the api (localhost:3000/user-index) endpoint', async () => {
    const response = await request.get('/user-index')
    expect(response.status).toBe(401)
  })
  it('gets the api (localhost:3000/signin) endpoint', async () => {
    const response = await request.post('/signin')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/orders/:id=1) endpoint', async () => {
    const response = await request.get('/orders/:id=1')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/orders-index) endpoint', async () => {
    const response = await request.get('/orders-index')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/NewOrder) endpoint', async () => {
    const response = await request.post('/NewOrder').send({
      id:1,
      user_id:null,
      status_of_order:null})
    expect(response.status).toBe(201)
    const vordersList = new ordersList()
    await vordersList.delete('1')
    await vordersList.resetproudctIdSequences()

  })
  it('gets the api (localhost:3000/ActiveorderbyuserId/:id=9) endpoint', async () => {
    const response = await request.get('/ActiveorderbyuserId/:id=9')
    expect(response.status).toBe(401)
  })
})
