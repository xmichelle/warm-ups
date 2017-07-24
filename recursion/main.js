
function countDown(start) {
  if (start >= 0) {
    window.setTimeout(() => {
      console.log(start)
      return countDown(start - 1)
    }, 1000)
  }
  else {
    return start
  }
}

// Same concept as the following code:

/*
let start = 10
while (start > 0) {
  console.log(start--)
}
*/

// First code without the 1 second count down
/*
function countDown(start) {
  if (start >= 0) {
    console.log(start)
    return countDown(start - 1)
  }
  else {
    return start
  }
}
*/
