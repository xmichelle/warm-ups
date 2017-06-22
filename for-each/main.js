var products = [
  { type: 'shoes', price: 10 },
  { type: 'shirts', price: 20 },
  { type: 'jackets', price: 30 }
]

function forEach(collection, procedure) {
  for (var i = 0; i < collection.length; i++) {
    procedure(collection[i])
  }
}

products.forEach(function(product) {
  console.log(product.type)
})
