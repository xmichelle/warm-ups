var stringOne = 'palindrome'
var stringTwo = 'level'

function isPalindrome(strings) {
  var checkPalindrome = strings.split('').reverse().join('')
  if (strings === checkPalindrome) {
    return true
  } else {
    return false
  }
}

// /[^A-Za-z0-9]/g is used to remove anything that isn't A-Z, a-z, or 0-9

console.log(isPalindrome(stringOne))
console.log(isPalindrome(stringTwo))
