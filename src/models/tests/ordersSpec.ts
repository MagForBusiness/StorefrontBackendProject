import { orders, ordersList } from '../orders'
import {users,UserIntity} from '../users'
import { DashboardQueries } from '../../Services/dashboard'

const orders = new ordersList()
const userint = new UserIntity()

describe('orders Model', () => {
  it('should have an index method', () => {
    expect(orders.index).toBeDefined()
  })

  it('should have a delete method', () => {
    expect(orders.index).toBeDefined()
  })

  it('should have acreate method', () => {
    expect(orders.creatOrder).toBeDefined()
  })

  it('should have show method', () => {
    expect(orders.show).toBeDefined()
  })
  
  it('create method should add a order', async () => {
    const newUser= await userint.CreatUser({
      firstName:'firTest',
      lastName: 'lastTest',
      username: 'test',
      email:'test@mail.com',
      userpassword: 'String'
      }
  
      )
    // @ts-ignore
    const result = await orders.creatOrder({
     user_id: 1,
     status_of_order:'active'
    })
     // @ts-ignore
    expect(result).toEqual({ id: 1, user_id: '1', status_of_order:'active' })
  })

  it('index method should be return alist of orders', async () => {
    const result = await orders.index()
    // @ts-ignore
    expect(result).toEqual([{ id:1, user_id: '1', status_of_order: 'active' }])
  })

  it('show method should return the correct order', async () => {
    const result = await orders.show('1')
    // @ts-ignore
    expect(result).toEqual({ id:1, user_id: '1', status_of_order: 'active' })
  })

  it('delete method should remove the order', async () => {
    await orders.delete('1')
    await userint.delete('1')
    await orders.resetproudctIdSequences()
    await userint.resetuserIdSequences()
    const result = await orders.index()

    expect(result).toEqual([])
  })
})
