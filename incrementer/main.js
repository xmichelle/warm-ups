function incrementer(num) {
  let incremented = []

  for (let i = 0; i < num.length; i++) {
    if ((num[i] + (i + 1)) >= 10) {
      incremented.push((num[i] + (i + 1)) % 10)
    }
    else {
      incremented.push(num[i] + (i + 1))
    }
  }
  return incremented
}
