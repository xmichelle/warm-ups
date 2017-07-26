
// We can use the some method inside our some function
function some(collection, predicate) {
  return collection.some(predicate)
}

// Another way of writing the function
function some(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i]) === true) {
      return true
    }
  }
  return false
}

const nums = [2, 4, 7, 8]

const hasOdd = some(nums, num => {
  return num % 2 === 1
})

hasOdd // true
