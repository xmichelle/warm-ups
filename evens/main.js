function evenNumbers(array, number) {
  let lastEvens = []

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0 && lastEvens.length < number) {
      lastEvens.push(array[i])
    }
  }

  return lastEvens.reverse()
}
