// Stacks (LIFO - Last In First Out)
// Stack is like a pile of dishes

class Stack {
  constructor() {
    this.data = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    this.data.push(value);
    this.top = this.data[this.data.length - 1];
    if (this.length === 0) {
      this.bottom = this.top;
    } else {
      this.bottom = this.data[0];
    }
    this.length++;
    return this;
  }

  pop() {
    this.data.pop();
    if (this.length === 0) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.data[this.data.length - 1];
      this.bottom = this.data[0];
      this.length--;
    }
    return this;
  }
}

const myStack = new Stack();
console.log(myStack);
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.peek());
myStack.pop();
console.log(myStack);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
