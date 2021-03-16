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

  breadthFirstSearch() {
    let currentNode = this.root;
    // list is for listed value
    let list = [];
    //queue is to store nodes temporary
    //It's make the BFS bad because use more memory
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      //currentNode is now get from the queue
      currentNode = queue.shift();
      //push currentNode value to the list
      list.push(currentNode.value);
      //if currentNode has left child, push the child to queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      //if currentNode has right child, push the child to queue
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    // the recursion will end if the queue.length = 0, and return the list
    if (!queue.length) {
      return list;
    }
    //currentNode is now get from the queue
    currentNode = queue.shift();
    //push currentNode value to the list
    list.push(currentNode.value);
    //if currentNode has left child, push the child to queue
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    //if currentNode has right child, push the child to queue
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    //call the recursion function again
    return this.breadthFirstSearchRecursive(queue, list);
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
console.log(myBST.breadthFirstSearch());
console.log(myBST.breadthFirstSearch([myBST.root], []));
