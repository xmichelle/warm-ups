function numPresent(arr, sub) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    // Prevents the loop from continuing if it knows that the rest of the values in the first array won't match the second one.
    if (i >= arr.length - (sub.length - 1)) {
      return count
    }
    for (let j = 0; j < sub.length; j++) {
      if (arr[i + j] === sub[j] && sub.length === j + 1) {
        count++
      }
    }
  }
  return count
}
