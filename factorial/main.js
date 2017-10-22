function factorial(n) {
  let result = n
  if (n === 0 || n === 1) {
    return 1
  }
  else if (n < 1) {
    return 'Invalid value'
  }

  while (n > 1) {
    n--
    result = result * n
  }
  return result
}

// Another way using a for loop

function factorial2(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  else if (n < 1) {
    return 'Invalid value'
  }

  for (let i = n - 1; i >= 1; i--) {
    n = n * i
  }
  return n
}

// Another way using recursion

function factorial3(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  else if (n < 1) {
    return 'Invalid value'
  }
  else {
    return (n * factorial3(n - 1))
  }
}
