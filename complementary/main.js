function dnaStrand(dna) {
  const dnaArray = dna.split('')

  for (let i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i] === 'A') {
      dnaArray[i] = 'T'
    }
    else if (dnaArray[i] === 'T') {
      dnaArray[i] = 'A'
    }
    else if (dnaArray[i] === 'C') {
      dnaArray[i] = 'G'
    }
    else if (dnaArray[i] === 'G') {
      dnaArray[i] = 'C'
    }
  }
  return dnaArray.join('')
}

// Another way that uses the map method

function dnaStrand2(dna) {
  const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' }

  return dna.split('').map(v => pairs[v]).join('')
}
