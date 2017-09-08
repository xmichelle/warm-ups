function spot(s1,s2) {
  const firstArray = s1.split('')
  const secondArray = s2.split('')

  let difference = []

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      difference.push(i)
    }
  }
  return difference
}
