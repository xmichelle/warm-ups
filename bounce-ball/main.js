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
