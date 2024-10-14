class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(value) {
    this.arr.push(value)
  }

  dequeue() {
    if (this.arr.length > 0) {
      this.arr.shift()
    }
  }

  print() {
    for (let val of this.arr) {
        console.log(val)
    }
  }
}


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()

queue.print()