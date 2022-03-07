import { products, ProductsList } from '../Product'

const products = new ProductsList()

describe('Products Model', () => {
  it('should have an index method', () => {
    expect(products.index).toBeDefined()
  })
  
  // it('should have a delete method', () => {
  //   expect(store.index).toBeDefined();
  // });

  it('create method should add a book', async () => {
    const result = await products.creatProduct({
        name: 'camera sony',
        price: 1450.50,
        category: 1
    });
    expect(result).toEqual({ 
    id: 6,
    name: 'camera sony',
    price: 1450.50,
    category: '1'
   });
  });

  it('index method should be return alist of Products', async () => {
    const result = await products.index()
    expect(result).toEqual([])
  })

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

  // it('show method should return the correct book', async () => {
  //   const result = await store.show("1");
  //   expect(result).toEqual({
  //     id: "1",
  //     title: 'Bridge to Terabithia',
  //     total_pages: 250,
  //     author: 'Katherine Paterson',
  //     type: 'Childrens'
  //   });
  // });

  // it('delete method should remove the book', async () => {
  //   store.delete("1");
  //   const result = await store.index()

  //   expect(result).toEqual([]);
  // });
})
