function averageLength(arr) {
  const avgArr = []
  const letters = []
  const result =[]

  for (let i = 0; i < arr.length; i++) {
    avgArr.push(arr[i].length)
    let letter = arr[i].split('')
    letters.push(letter[0])
  }

  const avg = Math.round(avgArr.reduce((acc, current) => acc + current) / avgArr.length)

  for (let i = 0; i < arr.length; i++) {
    result.push(letters[i].repeat(avg))
  }

  return result
}

// Another way to write the function

function averageLength2(arr) {
  const avg = Math.round(arr.join('').length / arr.length)
  const result = arr.map(str => str[0].repeat(avg))

  return result
}
