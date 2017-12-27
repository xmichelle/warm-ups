function bouncingBall(initial, proportion) {
  let height = initial
  let bounces = []

  for (let i = height; i > 1; i--) {
    if (height > 1) {
      height *= proportion
      bounces.push(height)
    }
  }
  return bounces.length
}

// A shorter way of writing the function

function bouncingBall2(initial, proportion) {
  let count = 0

  for (let i = initial; i > 1; i *= proportion) {
    count++
  }
  return count
}
