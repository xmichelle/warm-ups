
function zipWith(xs, ys, combine) {
  const z = []
  if (ys.length <= xs.length) {
    for (let i = 0; i < ys.length; i++) {
      z.push(combine(xs[i], ys[i]))
    }
    return z
  }
  else if (xs.length < ys.length) {
    for (let i = 0; i < xs.length; i++) {
      z.push(combine(xs[i], ys[i]))
    }
    return z
  }
}

zipWith([1, 2, 3], [4, 5, 6, 7], (x, y) => x * y)
