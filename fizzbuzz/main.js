function fizzbuzz(nums) {
  for (let i = 0; i < nums; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    }
    else if (i % 3 === 0) {
      console.log('fizz')
    }
    else if (i % 5 === 0) {
      console.log('buzz')
    }
    else {
      console.log(i)
    }
  }
}

// fizzbuzz(100)

// Improved function with nesting

function fizzbuzz2(nums) {
  for (let i = 0; i < nums; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log('fizzbuzz')
      }
      else {
        console.log('fizz')
      }
    }
    else if (i % 5 === 0) {
      console.log('buzz')
    }
    else {
      console.log(i)
    }
  }
}

fizzbuzz2(100)
