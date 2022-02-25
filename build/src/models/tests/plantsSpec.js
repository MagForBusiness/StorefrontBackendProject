"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plants_1 = require("../plants");
var plants = new plants_1.plantsList();
describe("plant Model", function () {
    it('should have an index method', function () {
        expect(plants.index).toBeDefined();
    });
});
