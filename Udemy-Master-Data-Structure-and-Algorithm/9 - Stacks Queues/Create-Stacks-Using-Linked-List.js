// Stacks (LIFO - Last In First Out)
// Stack is like a pile of dishes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    // return the top of the stack
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    // Check if the length is zero the top and the bottom is the same
    // and else the new value become the new top, and the former top become the new value next
    if (this.length === 0) {
      this.top = new Node(value);
      this.bottom = this.top;
    } else {
      const formerTop = this.top;
      this.top = newNode;
      this.top.next = formerTop;
    }
    this.length++;
    return this;
  }
  pop() {
    // Check if empty, the top is null and the bottom is null
    // else the new top is the top.next value also this.length--
    if (this.length === 0) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
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
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);

//Discord
//Udemy
//google
