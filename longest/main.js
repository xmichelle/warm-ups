var strings = ['long', 'longest', 'longer']

var mostChars = 0

function longest(string) {
  for (var i = 0; i < string.length; i++ ) {
    if (string[i].length > mostChars) {
      mostChars = string[i].length
      var longestWord = string[i]
    }
  }
  return longestWord
}

console.log(longest(strings))
