function throttle(func, wait) {
  let waiting = false
  return function() {
    if (!waiting) {
      func.call()
      waiting = true
      setTimeout(() => {
        waiting = false
      }, wait)
    }
    // else {
    //   console.log('Need to wait...')
    // }
  }
}

const greeting = function() {
  console.log('hello world')
}

window.addEventListener('click', throttle(greeting, 5000))
