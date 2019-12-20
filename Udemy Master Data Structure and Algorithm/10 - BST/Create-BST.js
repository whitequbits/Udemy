class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // check if the root is null
    if (!this.root) {
      return (this.root = newNode);
    }

    let currentNode = this.root;

    // check the node until it's value is null
    while (currentNode.left !== null && currentNode.right !== null) {
      if (currentNode.value > newNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < newNode.value) {
        currentNode = currentNode.right;
      }
    }

    //insert the newNode to currentNode
    if (currentNode.value > newNode.value) {
      currentNode.left = newNode;
    } else if (currentNode.value < newNode.value) {
      currentNode.right = newNode;
    }
  }

  lookup(value) {
    //check form the root
    let currentNode = this.root;

    // repeatable check
    do {
      if (currentNode.value === value) {
        return "Yes I got it";
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
    } while (currentNode.left !== null && currentNode.right !== null);
    return "Sorry you can't find it";
  }
}

const myBST = new BST();
myBST.insert(12);
console.log(myBST.lookup(12));
myBST.insert(15);
myBST.insert(8);
myBST.insert(4);
myBST.insert(10);
console.log(myBST);
console.log(myBST.lookup(12));
