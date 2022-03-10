import { products, ProductsList } from '../Product'
import { DashboardQueries } from '../../Services/dashboard'

const dashboardQueries = new DashboardQueries()
const products = new ProductsList()

describe('Products Model', () => {
  it('should have an index method', () => {
    expect(products.index).toBeDefined()
  })

  it('should have a delete method', () => {
    expect(products.index).toBeDefined()
  })

  it('should have acreate method', () => {
    expect(products.creatProduct).toBeDefined()
  })

  it('should have show method', () => {
    expect(products.show).toBeDefined()
  })
  it('should have an index productsInActiveOrdersbyuser', () => {
    expect(dashboardQueries.productsInActiveOrdersbyuser).toBeDefined()
  })

  it('create method should add a product', async () => {
    const result = await products.creatProduct({
      name: 'camera sony',
      price: 1450.5,
      category: 1,
    })
    // @ts-ignore
    expect(result).toEqual({ id: 1, name: 'camera sony', price: 1450.5, category: '1' })
  })

  it('index method should be return alist of Products', async () => {
    const result = await products.index()
    // @ts-ignore
    expect(result).toEqual([{ id: 1, name: 'camera sony', price: 1450.5, category: '1' }])
  })

  it('show method should return the correct product', async () => {
    const result = await products.show('1')
    // @ts-ignore
    expect(result).toEqual({ id: 1, name: 'camera sony', price: 1450.5, category: '1' })
  })

  it('delete method should remove the product', async () => {
    await products.delete('1')
    await products.resetproudctIdSequences()
    const result = await products.index()

    expect(result).toEqual([])
  })
})
