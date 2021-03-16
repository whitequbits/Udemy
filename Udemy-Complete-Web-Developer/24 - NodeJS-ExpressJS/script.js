// node js v13.10 still using common js way to module

// this one is take the exported object from largeNumber.js
const output = require("./largeNumber.js");

// then we should call the variable that we export as object prop
const a = output.largeNumber;
const b = 5;

setTimeout(() => {
  console.log(a + b);
}, 4000);
