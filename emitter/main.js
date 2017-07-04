
class Emitter = {
  constructor() {
    this.subscribers = []
  }
  subscribe(fn) {
    this.subscribers.push(fn)
  }
  dispatch() {
    this.subscribers.forEach(fn => fn())
  }
}
