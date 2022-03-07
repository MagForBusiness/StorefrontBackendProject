"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../users");
var UserTest = new users_1.UserIntity();
describe('users Model', function () {
    it('should have an index method', function () {
        expect(UserTest.index).toBeDefined();
    });
    // it('index method should be return alist of users', async () => {
    //   const result = await UserTest.index()
    //   expect(result).toEqual([])
    // })
});
