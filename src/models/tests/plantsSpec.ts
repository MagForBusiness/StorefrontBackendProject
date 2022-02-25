import {plants,plantsList} from "../plants";

const plants =new plantsList();

describe("plant Model", () => {
    it('should have an index method', () => {
      expect(plants.index).toBeDefined();
    });
    it('index method should be return alist of plants',async () => {
      const result =await plants.index();
      expect(plants.index).toEqual([]);
    });
})