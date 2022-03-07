import { products, ProductsList } from '../Product'

const products = new ProductsList()

describe('Products Model', () => {
  it('should have an index method', () => {
    expect(products.index).toBeDefined()
  })
  
  // it('should have a delete method', () => {
  //   expect(store.index).toBeDefined();
  // });
  it('index method should be return alist of Products', async () => {
    const result = await products.index()
    expect(result).toEqual([{ 
      id: 1,
      name: 'camera sony',
      price: 1450.50,
      category: 1
     }]);
  })

  // it('create method should add a product', async () => {
  //   const result = await products.creatProduct({
  //       name: 'camera sony',
  //       price: 1450.50,
  //       category: 1
  //   });
  //   expect(result).toEqual([{ 
  //   id: 1,
  //   name: 'camera sony',
  //   price: 1450.50,
  //   category: 1
  //  }]);
  // });

  

  // it('index method should return a list of books', async () => {
  //   const result = await store.index();
  //   expect(result).toEqual([{
  //     id: "1",
  //     title: 'Bridge to Terabithia',
  //     total_pages: 250,
  //     author: 'Katherine Paterson',
  //     type: 'Childrens'
  //   }]);
  // });

  // it('show method should return the correct product', async () => {
  //   const result = await products.show("4");
  //   expect(result).toEqual([{
  //     id: 4,
  //     name: 'camera sony',
  //     price: 1450.50,
  //     category: 1
  //   }]);
  // });

  // it('delete method should remove the book', async () => {
  //   store.delete("1");
  //   const result = await store.index()

  //   expect(result).toEqual([]);
  // });
})
