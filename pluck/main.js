
const names = []

function pluck(collection, property) {
  for (let i = 0; i < collection.length; i++) {
    names.push(collection[i][property])
  }
  return names
}

const stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 }
]

pluck(stooges, 'name')

console.log(names)

//=> ['moe', 'larry', 'curly']
