function findShort(s) {
  const stringArray = s.split(' ')
  let shortestWord = stringArray[0]

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length < shortestWord.length) {
      shortestWord = stringArray[i]
    }
  }
  return shortestWord.length
}
