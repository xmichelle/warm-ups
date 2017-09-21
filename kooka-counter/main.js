function kookaCounter(laughing) {
  let count = 0

  for (let i = 0; i < laughing.length; i += 2) {
    if (laughing[i] !== laughing[i - 2]) {
      count++
    }
  }
  return count
}

// Another method using map

function kookaCounter2(laughing) {
  let count = 0
  const laughingArray = [...laughing]

  if (laughing === '') return 0

  count++
  laughingArray.map((cur, i, array) => {
    if (cur === 'H' && array[i + 2] === 'h') {
      count++
    }
    else if (cur === 'h' && array[i + 2] === 'H') {
      count++
    }
  })
  return count
}

// Another method using the split method

function kookaCounter3(laughing) {
  const laughingArray = laughing.split('a')
  let count = 0

  for (let i = 0; i < laughingArray.length; i++) {
    if (laughingArray[i] !== laughingArray[i + 1]) {
      count++
    }
  }
  return count - 1
}
