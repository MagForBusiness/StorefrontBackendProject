import { UserIntity,users } from "../users"

const UserTest = new UserIntity()

describe('users Model', () => {
  it('should have an index method', () => {
    expect(UserTest.index).toBeDefined()
  })
  it('index method should be return alist of users', async () => {
    const result = await UserTest.index()
    expect(result).toEqual([])
  })
})