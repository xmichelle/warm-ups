function splitByValue(k, nums) {
  const greater = []
  const lesser = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      lesser.push(nums[i])
    } else {
      greater.push(nums[i])
    }
  }

  return lesser.concat(greater)
}
