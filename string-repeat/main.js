function repeatString(str, count) {
  let repeated = ''

  while (count > 0) {
    count--
    repeated += str
  }
  return repeated
}
