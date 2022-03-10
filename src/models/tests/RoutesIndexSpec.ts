import app from '../../server'

import supertest from 'supertest'

//test EndPoints
const request = supertest(app)

describe('Test endpoints Routers responses', () => {
  it('gets the api (localhost:3000/products-index) endpoint', async () => {
    const response = await request.get('/products-index')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/add-product) endpoint', async () => {
    const response = await request.get('/add-product')
    expect(response.status).toBe(401)
  })
  it('gets the api (localhost:3000/product?id=1) endpoint', async () => {
    const response = await request.get('/product?id=1')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/user?id=7) endpoint', async () => {
    const response = await request.get('/user?id=7')
    expect(response.status).toBe(401)
  })
  it('gets the api (localhost:3000/user-index) endpoint', async () => {
    const response = await request.get('/user-index')
    expect(response.status).toBe(401)
  })
  it('gets the api (localhost:3000/signin) endpoint', async () => {
    const response = await request.get('/signin')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/signup) endpoint', async () => {
    const response = await request.get('/signin')
    expect(response.status).toBe(201)
  })
  it('gets the api (localhost:3000/ActiveorderbyuserId?id=9) endpoint', async () => {
    const response = await request.get('/signin')
    expect(response.status).toBe(201)
  })
})
