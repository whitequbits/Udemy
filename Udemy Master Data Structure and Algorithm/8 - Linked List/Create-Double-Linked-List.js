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
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    const lastIndex = this.length - 1;
    // Then the new Node is connect as this.tail.next value
    this.tail.next = newNode;
    newNode.prev = this.tail;

    // We want also the new Node be the last item
    this.tail = newNode;

    // increment the length by 1
    this.length++;
  }

  prepend(value) {
    // we want create the new node
    const newNode = new Node(value);

    // assign the previous node to current head
    this.head.prev = newNode;
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
      const prevNode = this.traverse(index - 1);
      const nextNode = prevNode.next;
      const newNode = new Node(value);
      prevNode.next = newNode;
      newNode.next = nextNode;
      newNode.prev = prevNode;
      nextNode.prev = newNode;
      this.length++;
    }
  }

  traverse(index) {
    if (index < this.length / 2) {
      let currentNode = this.head;
      for (let j = 0; j < index; j++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    } else if (index > this.length / 2) {
      let currentNode = this.tail;
      for (let j = this.length - 1; j > index; j--) {
        currentNode = currentNode.prev;
      }
      return currentNode;
    }
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
    if (index > this.length - 1) {
      return "error";
    }
    const prevNode = this.traverse(index - 1);
    const nextNode = this.traverse(index + 1);
    if (index === 0) {
      this.head = nextNode;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      this.tail = prevNode;
      this.tail.next = null;
    } else {
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    return "error";
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

const myLinkedList = new DoublyLinkedList(10);
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
console.log(myLinkedList.remove(7));
console.log(myLinkedList.printMyList());
console.log(myLinkedList);
