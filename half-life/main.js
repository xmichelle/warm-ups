function halfLife(quantityInitial, quantityRemaining, time) {
  const halfLife = time / ( Math.log2(quantityInitial/quantityRemaining) )
  return halfLife
}

// Half life formula: Final Amount = Initial Amount * (1/2)^(time/half-life)
