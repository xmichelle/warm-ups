function halfLife(quantityInitial, quantityRemaining, time) {
  const halfLife = time / ( Math.log2(quantityInitial/quantityRemaining) )
  return halfLife
}
