function sumTwoSmallestNumbers(numbers) {
  function lowToHigh(a, b) {
    return a - b
  }
  numbers.sort(lowToHigh)

  return numbers[0] + numbers[1]
}
