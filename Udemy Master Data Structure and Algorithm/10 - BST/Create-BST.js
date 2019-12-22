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
    //check from the root
    if (!this.root) {
      return "BST is empty";
    } else {
      let currentNode = this.root;
      // repeatable check
      do {
        if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          currentNode = currentNode.right;
        }
        if (currentNode.value === value) {
          return "Yes I got it";
        }
      } while (currentNode.left !== null && currentNode.right !== null);
      return "Sorry you can't find it";
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const myBST = new BST();
myBST.insert(12);
console.log(myBST.lookup(12));
myBST.insert(15);
myBST.insert(8);
myBST.insert(4);
myBST.insert(10);
myBST.insert(20);
myBST.insert(13);
myBST.remove(13);
myBST.remove(12);
console.log(myBST);
