function factorial(n) {
  let result = n
  if (n === 0 || n === 1) {
    return 1
  }
  else if (n < 1) {
    return 'Invalid value'
  }

  while (n > 1) {
    n--
    result = result * n
  }
  return result
}
