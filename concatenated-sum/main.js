function checkConcatenatedSum(num, n) {
  let sum = 0
  const strNum = String(Math.abs(num))

  for (let i = 0; i < strNum.length; i++) {
    sum += strNum[i].repeat(n) * (num < 1 ? -1 : 1)
  }

  if (sum === num) return true
  else return false
}
