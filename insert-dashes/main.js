function insertDash(num) {
  const stringArray = num.toString().split('')
  // console.log(stringArray)

  const parsed = stringArray.map(n => {
    return Number(n)
  })
  // console.log(parsed)

  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i] % 2 === 1 && parsed[i + 1] % 2 === 1) {
      parsed.splice(i + 1, 0, '-')
    }
  }
  // console.log(parsed)
  const dashed = parsed.join('')
  return dashed
}
