class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(input) {
    this.data[this.length] = input;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    delete this.data[index];
    this.shift(index);
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }

  unshift(input) {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = input;
    this.length++;
  }

  splice(index, dltitems, newitems) {
    let i = 0;
    while (i < dltitems) {
      this.shift(index);
      this.length--;
      i++;
    }
    for (let i = index; i < this.length - 1; i++) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = newitems;
    this.length++;
  }
}

let array1 = new Array();
array1.push("a");
array1.push("b");
array1.push("c");
array1.push("d");
console.log(array1);
array1.pop();
console.log(array1);
array1.delete(1);
console.log(array1);
array1.unshift("alien");
console.log(array1);
array1.splice(1, 1, "Hello");
console.log(array1);
