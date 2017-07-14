
function substitution(string) {
  string.split('')
  const arr = []
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase()

    if (alphabet.indexOf(char) > -1) {
      arr.push(alphabet.indexOf(char) + 1)
    }
  }
  return arr.join(' ')
}

console.log(substitution('A cat.'))
// console logs 1 3 1 20
