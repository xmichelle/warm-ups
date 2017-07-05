
class HashRouter {
  constructor() {
    this.isListening = false
  }
  listen() {
    if (this.isListening) {
      return
    }
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash)
    })
    this.isListening = true
  }
}
