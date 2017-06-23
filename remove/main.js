// predicate is a function that returns true or false

var array = ['dog', 'cat', 'bunny']

function remove(collection, predicate) {
  for (var i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      collection.splice(i, 1)
    }
  }
}

remove(array, function(value) {
  return value === 'cat'
})
