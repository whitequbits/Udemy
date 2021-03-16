class HashTable {
  constructor(size) {
    // size is for the size of memory
    this.data = new Array(size);
  }

  // this is a simple hash engine
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1) => categorized as O(1) because of the length of the key is not length enough

  set(key, value) {
    // call the hash engine to know the address of the hash in memory
    const address = this._hash(key);
    // if there is no data in the memory address, we will make the array so the key and value can be push there
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  } // O(1) => this function is categorized like this because we only assign a data

  get(key) {
    // First of all check the address inside the memory
    const currentAddress = this._hash(key);
    // Then, fetch data that contain in the address
    const currentBucket = this.data[currentAddress];
    // If there is data continue, if not return undefined
    if (currentBucket) {
      // If there is a collisions the data will be in the next array
      // So we need to loop over the bucket/memory to search for the value
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  } // O(1) or O(n/k) if there is a collision

  // keys function will loop you over the data and return the every key
  keys() {
    // We need to init new empty array
    let keysArray = [];
    // then we loop through every data
    for (let i = 0; i < this.data.length; i++) {
      // if there is datainside it
      if (this.data[i]) {
        // we will push key to the array
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  } //O(n) because we loop over the data
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("zoo"));
console.log(myHashTable.keys());
