function onesComplement(n) {
  const numbers = n.split('').map(number => Number(number))

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numbers[i] += 1
    }
    else {
      numbers[i] -= 1
    }
  }
  const stringifyNumbers = numbers.join('')
  return stringifyNumbers
}
