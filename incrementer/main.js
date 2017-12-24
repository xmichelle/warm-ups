function incrementer(nums) {
  let incremented = []

  for (let i = 0; i < nums.length; i++) {
    incremented.push((nums[i] + i + 1) % 10)
  }
  return incremented
}

// Another way that uses the map method

function incrementer2(nums) {
  return nums.map((num, i) => {
    return ((num + i + 1) % 10)
  })
}
