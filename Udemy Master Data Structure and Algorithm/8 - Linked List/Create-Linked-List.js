// Create your own linked list in JS
// Because it doesn't have the linked list

// 10 --> 5 --> 16
// head --> next --> tail
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // first of all this DS need Head
    this.head = new Node(value);

    // But because there is only one data in this so head == tail
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create object new Node
    const newNode = new Node(value);
    // Then the new Node is connect as this.tail.next value
    this.tail.next = newNode;

    // We want also the new Node be the last item
    this.tail = newNode;

    // increment the length by 1
    this.length++;
  }

  prepend(value) {
    // we want create the new node
    const newNode = new Node(value);

    // next value is the former this.head
    newNode.next = this.head;

    // and the new node become the new head
    this.head = newNode;

    this.length++;
  }

  insert(index, value) {
    if (index == 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      let currentNode = this.head;
      for (let j = 0; j < index; j++) {
        var preNode = currentNode;
        currentNode = currentNode.next;
      }
      const nextNode = currentNode;
      const newNode = new Node(value);
      newNode.next = nextNode;
      preNode.next = newNode;
      this.length++;
    }
  }

  printMyList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList.printMyList());
myLinkedList.append(16);
console.log(myLinkedList.printMyList());
myLinkedList.prepend(1);
console.log(myLinkedList.printMyList());
myLinkedList.insert(7, 100);
console.log(myLinkedList.printMyList());
myLinkedList.insert(0, 70);
console.log(myLinkedList.printMyList());
myLinkedList.insert(3, 88);
console.log(myLinkedList.printMyList());
console.log(myLinkedList);
