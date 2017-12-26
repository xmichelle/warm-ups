function firstDuplicate(nums) {
  let firstDuplicate = null

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return firstDuplicate = nums[i]
    }
  }
}

// Another way using the find method

function firstDuplicate2(nums) {
  return nums.find((num, i) => {
    return nums.indexOf(num) !== i
  })
}
