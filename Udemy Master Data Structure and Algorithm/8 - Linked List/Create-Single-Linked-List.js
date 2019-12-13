// Create your own linked list in JS
// Because it doesn't have the linked list

// 10 --> 5 --> 16
// head --> next --> tail
// Specification :
// Prepend = O(1)
// append = O(1)
// lookup = O(n)
// insert = O(n)
// delete = O(n)

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
      const currentNode = this.traverse(index);
      const preNode = this.traverse(index - 1);
      const nextNode = currentNode;
      const newNode = new Node(value);
      newNode.next = nextNode;
      preNode.next = newNode;
      this.length++;
    }
  }

  traverse(index) {
    let currentNode = this.head;
    for (let j = 0; j < index; j++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
      return false;
    }
  }

  remove(index) {
    const prevNode = this.traverse(index - 1);
    const nextNode = this.traverse(index + 1);
    if (index === 0) {
      this.head = nextNode;
    } else if (index === this.length - 1) {
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      prevNode.next = nextNode;
    }
    this.length--;
  }

  printMyList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
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
console.log(myLinkedList.search(105));
console.log(myLinkedList.remove(6));
console.log(myLinkedList.printMyList());
