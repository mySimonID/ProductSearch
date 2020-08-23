var products = [];
addProduct(products, {
  id: '1',
  name: 'Dress',
  desc:'This is a blue dress',
  colour: 'Blue',
  stockLevel: 2
});
addProduct(products, {
  id: '1',
  name: 'Dress',
  desc:'This is a green dress',
  colour: 'Green',
  stockLevel: 5
});
addProduct(products, {
  id: '2',
  name: 'Frock',
  desc:'This is a frock',
  colour: 'Red',
  stockLevel: 1
});
addProduct(products, {
  id: '3',
  name: 'Handbag',
  desc:'This is a handbag',
  colour: 'Red',
  stockLevel: 0
});
addProduct(products, {
  id: '4',
  name: 'Shoes',
  desc:'This is a pair of shoes',
  colour: 'Yellow',
  stockLevel: 2
});

function addProduct(productList, newProduct) {
  productList.push(newProduct)
}
