
class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }
  add(node) {
    if (this.head === null) {
      this.head = node
    }
    else {
      const last = this.head
      while (last.next !== null) {
        last = last.next
      }
      last.next = node
    }
    this.length++
  }
}

const list = new LinkedList()
