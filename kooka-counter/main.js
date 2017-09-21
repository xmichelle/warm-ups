function kookaCounter(laughing) {
  let count = 0

  for(let i = 0; i < laughing.length; i += 2) {
    if(laughing[i] !== laughing[i - 2]) {
      count++
    }
  }
  return count
}
