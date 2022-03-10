import { UserIntity, users } from '../users'

const UserTest = new UserIntity()

describe('users Model', () => {
  it('should have an index method', () => {
    expect(UserTest.index).toBeDefined()
  })

  it('should have an index method', () => {
    expect(UserTest.index).toBeDefined()
  })

  it('should have a delete method', () => {
    expect(UserTest.index).toBeDefined()
  })

  it('should have acreate method', () => {
    expect(UserTest.CreatUser).toBeDefined()
  })

  it('should have show method', () => {
    expect(UserTest.show).toBeDefined()
  })
})
