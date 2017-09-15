function solution(str) {
  const stringArray = str.split('')

  let backwardArray = []

  for (let i = stringArray.length - 1; i >= 0; i--) {
    backwardArray.push(stringArray[i])
  }

  return backwardArray.join('')
}

// Another solution without using a for loop

function solution2(str) {
  return str.split('').reverse().join('')
}
