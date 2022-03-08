"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../users");
var UserTest = new users_1.UserIntity();
describe('users Model', function () {
    it('should have an index method', function () {
        expect(UserTest.index).toBeDefined();
    });
    it('should have an index method', function () {
        expect(UserTest.index).toBeDefined();
    });
    it('should have a delete method', function () {
        expect(UserTest.index).toBeDefined();
    });
    it('should have acreate method', function () {
        expect(UserTest.CreatUser).toBeDefined();
    });
    it('should have show method', function () {
        expect(UserTest.show).toBeDefined();
    });
});
