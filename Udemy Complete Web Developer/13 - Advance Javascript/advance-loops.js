const shoppinglist = {
  apples: 5,
  pear: 10,
  oranges: 100
};

const shoppingArray = [
  ["apples", 5],
  ["pear", 10],
  ["oranges", 100]
];

for (items of shoppingArray) {
  console.log(items);
}

for (items in shoppinglist) {
  console.log(items);
}
