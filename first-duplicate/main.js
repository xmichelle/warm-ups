function firstDuplicate(nums) {
  let firstDuplicate = null

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return firstDuplicate = nums[i]
    }
  }
}
