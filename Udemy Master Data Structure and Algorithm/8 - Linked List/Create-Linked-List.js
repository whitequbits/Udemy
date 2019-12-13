// Create your own linked list in JS
// Because it doesn't have the linked list

// 10 --> 5 --> 16
// head --> next --> tail

class LinkedList {
  constructor(value) {
    // first of all this DS need Head
    this.head = {
      value: value,
      next: null
    };

    // But because there is only one data in this so head == tail
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create object new Node
    const newNode = {
      value: value,
      next: null
    };
    // Then the new Node is connect as this.tail.next value
    this.tail.next = newNode;

    // We want also the new Node be the last item
    this.tail = newNode;

    // increment the length by 1
    this.length++;
  }

  prepend(value) {
    // we want create the new node
    const newNode = {
      value: value,
      // next value is the former this.head
      next: this.head
    };

    // and the new node become the new head
    this.head = newNode;

    this.length++;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
