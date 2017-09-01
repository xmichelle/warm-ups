function getSum(a, b) {
  let total = 0
  const bigger = a > b ? a : b
  const smaller = a > b ? b : a

  for(let i = smaller; i <= bigger; i++) {
    total += i
  }
  return total
}
