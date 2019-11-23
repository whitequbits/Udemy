// Pass By Reference
// "the variable has the same reference in the memory so if one is change the other is change to"

let object = {
  a: "a",
  b: "b",
  c: "c"
};

let clone_object = object;
object.c = "5";
console.log("Pass by reference");
console.log(object);
console.log(clone_object);

// Pass by Value
// "the variable has the same value but independent in the memory so a changes only effect one of these"

let obj = {
  a: "a",
  b: "b",
  c: "c"
};

// This is only Shallow Cloning
let clone = Object.assign({}, obj); // old javascript syntax
let clone2 = { ...obj }; // this is a new feature in the ES 9
obj.c = "5";
console.log("Pass by value");
console.log(obj);
console.log(clone);
console.log(clone2);

// Deep Cloning = if we want to clone all of the value and object inside an object

let object_1 = {
  a: "a",
  b: "b",
  c: { deep: "having a nice day" }
};

let clone_object_1 = { ...object_1 }; // this is a new feature in the ES 9
let super_clone_object_1 = JSON.parse(JSON.stringify(object_1));
object_1.c.deep = "helloooo";
console.log("Shallow Cloning");
console.log(object_1);
console.log(clone_object_1);
console.log("Deep Cloning");
console.log(object_1);
console.log(super_clone_object_1);
