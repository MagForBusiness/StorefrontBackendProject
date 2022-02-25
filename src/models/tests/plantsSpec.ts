import {plants,plantsList} from "../plants";

const plants =new plantsList();

describe("plant Model", () => {
    it('should have an index method', () => {
      expect(plants.index).toBeDefined();
    });
  
})