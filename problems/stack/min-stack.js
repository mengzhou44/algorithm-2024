class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    this.stack.push(val)
    if (this.minStack.length === 0) {
      this.minStack.push(val)
    } else {
      let min = Math.min(val, this.minStack[this.minStack.length - 1])
      this.minStack.push(min)
    }
  }

  pop() {
    this.stack.pop()
    this.minStack.pop()
  }

  getTop() {
    return this.minStack[this.stack.length - 1]
  }

  getMin() {
    return this.minStack[this.stack.length - 1]
  }
}
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(3);
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 3 (still correct minimum)
minStack.pop();
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 5