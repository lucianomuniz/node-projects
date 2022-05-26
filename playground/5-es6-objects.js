//object property shorthand

const name = 'Luciano';
const userAge = 43;

const user = {
  name: name,
  age: userAge,
  location: 'Taquaritinga',
};

console.log(user);

// Object distructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
