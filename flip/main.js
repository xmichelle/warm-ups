
function flip(array) {
  const arr2 = array.slice().reverse()
  return arr2
}

const arr1 = ['hello', 'world']
flip(arr1)

// console.log(arr1) ==> ['hello', 'world']
// console.log(arr2) ==> ['world', 'hello']
