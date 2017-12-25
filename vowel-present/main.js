function checkVowel(str, position) {
  const lowerCase = str.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (vowels.indexOf(lowerCase.charAt(position)) !== -1) {
    return true
  }
  else {
    return false
  }
}
