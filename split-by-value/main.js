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

// Another way using the map method

function splitByValue2(k, nums) {
  const greater = []
  const lesser = []

  nums.map(num => {
    num < k ? lesser.push(num) : greater.push(num)
  })

  return lesser.concat(greater)
}
