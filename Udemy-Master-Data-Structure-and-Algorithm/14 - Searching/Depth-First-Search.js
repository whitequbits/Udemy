// Binary Search Tree
//     9
//  4     20
//1  6  15  170

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

  DFSInOrder() {
    // call traverseInOrder recursion funciton
    return this.traverseInOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    //if the node left is there, recursion the left
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    //because in order wnat to find the deepest on the left first, so
    //the value that push is the deepest on the left
    list.push(node.value);

    //if the node right is there, recursion the right
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  DFSPreOrder() {
    // call traverseInOrder recursion funciton
    return this.traversePreOrder(this.root, []);
  }

  traversePreOrder(node, list) {
    //because preorder wnat to push the near to root first, so
    list.push(node.value);

    //if the node left is there, recursion the left
    if (node.left) {
      this.traversePreOrder(node.left, list);
    }

    //if the node right is there, recursion the right
    if (node.right) {
      this.traversePreOrder(node.right, list);
    }
    return list;
  }

  DFSPostOrder() {
    // call traverseInOrder recursion funciton
    return this.traversePostOrder(this.root, []);
  }

  traversePostOrder(node, list) {
    //if the node left is there, recursion the left
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }

    //if the node right is there, recursion the right
    if (node.right) {
      this.traversePostOrder(node.right, list);
    }
    //because postorder want to push the deepest first, so
    list.push(node.value);
    return list;
  }
}

const myBST = new BST();
myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);
myBST.insert(15);
myBST.insert(170);
console.log(myBST);
console.log(myBST.DFSInOrder());
console.log(myBST.DFSPreOrder());
console.log(myBST.DFSPostOrder());
