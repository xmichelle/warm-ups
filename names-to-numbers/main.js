
const stringNumbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ]

function getNumbers(string) {
  const arr = []
  const word = string.split(' ')

  for (let i = 0; i < stringNumbers.length; i++) {
    if (stringNumbers.indexOf(word[i]) > -1) {
      arr.push(stringNumbers.indexOf(word[i]))
    }
  }
  return arr
}

console.log(getNumbers('one two three'))
// logs [1, 2, 3]
