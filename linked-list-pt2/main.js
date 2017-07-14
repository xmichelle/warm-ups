
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  add(content) {
    const node = { content, next: null}

    if (!this.head) {
      this.head = node
    }
    else {
      let endNode = this.head

      while (endNode.next) {
        endNode = endNode.next
      }
      endNode.next = node
    }
    this.tail = node
    this.length++
  }

  remove(index) {
    const currentNode = this.head
    if (index === 0) {
      this.head = currentNode.next
    }
    else {
      while() {
        const previousNode = currentNode
        currentNode = currentNode.next
      }
    }
    this.length--
  }
}

const list = new LinkedList()
list.add('Some content.')
list.add('More content.')
list.add('Even more content.')

console.log(list.head)
console.log(list.head.next)
console.log(list.tail)
