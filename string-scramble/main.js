function scramble(str, arr) {
  let scrambledStr = []

  for (let i = 0; i < str.length; i++) {
    scrambledStr[arr[i]] = str[i]
  }
  return scrambledStr.join('')
}

// Another way to write the function

function scramble2(str, arr) {
  let scrambled = []

  arr.map((position, i) => {
    scrambled[position] = str[i]
  })

  return scrambled.join('')
}
