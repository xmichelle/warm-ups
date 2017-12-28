function multiplyAll(nums) {
  return multiplier => {
    const multiplied = nums.map(num => {
      return num * multiplier
    })
    return multiplied
  }
}
