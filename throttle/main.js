function throttle(func, wait) {
  let waiting = false
  return function() {
    if (!waiting) {
      func.call()
      waiting = true
      setTimeOut(() => {
        waiting = false
      }, wait)
    }
  }
}

const greeting = function() {
  console.log('hello world')
}

window.addEventListener('click', throttle(greeting, 5000))
