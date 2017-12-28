function multiplyAll(nums) {
  return multiplier => {
    const multiplied = nums.map(num => {
      return num * multiplier
    })
    return multiplied
  }
}

// A cleaner way to write the function

function multiplyAll2(nums) {
  return multiplier => nums.map(num => num * multiplier)
}
