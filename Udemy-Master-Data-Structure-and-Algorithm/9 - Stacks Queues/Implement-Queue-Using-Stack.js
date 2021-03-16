class QueueUsingStack {
  constructor() {
    this.data = [];
    this.dataTemporary = [];
    this.first = null;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    this.data.push(value);
    this.first = value;
    return this;
  }
  dequeue() {
    for (let i = 0; i < this.data.length; i++) {
      this.dataTemporary.push(this.data.pop());
    }
    this.dataTemporary.pop();
    for (let i = 0; i < this.dataTemporary.length; i++) {
      this.data.push(this.dataTemporary.pop());
    }
    if (this.data.length === 0) {
      this.first = null;
    } else {
      this.first = this.data[0];
    }
    return this;
  }

  empty() {
    if (this.data.length === 0) {
      return "yes";
    } else {
      return "no";
    }
  }
}

const myQueue = new QueueUsingStack();
console.log(myQueue.peek());
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.empty());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue.empty());
