function scramble(str, arr) {
  let scrambledStr = []

  for (let i = 0; i < str.length; i++) {
    scrambledStr[arr[i]] = str[i]
  }
  return scrambledStr.join('')
}
