// Queues - FIFO (First In First Out)
// Queue only can be built using Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    // return the first item
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    // if the length = 0 the first and thelast == newNode
    // else the last is new node and formerLast.next is the new node
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const formerLast = this.last;
      formerLast.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // if the length is not 0, the first is the first.next
    // else this.last is null
    if (this.length !== 0) {
      this.first = this.first.next;
      this.length--;
    } else {
      this.last = null;
    }
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.peek());
myQueue.enqueue("Samir");
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
