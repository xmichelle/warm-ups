function evenNumbers(array, number) {
  let lastEvens = []

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0 && lastEvens.length < number) {
      lastEvens.push(array[i])
    }
  }

  return lastEvens.reverse()
}

// Another way using the filter method

function evenNumbers2(array, number) {
  const filteredEvens = array.filter(num => num % 2 === 0)
  return filteredEvens.slice(-number)
}
