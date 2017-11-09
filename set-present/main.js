function numPresent(firstArray, secondArray) {
  let count = 0
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i + j] === secondArray[j] && secondArray.length === j + 1) {
        count++
      }
    }
  }
  return count
}
