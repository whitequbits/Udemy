var isValidBSTArrayTechnique = function(input) {
  var condition = true;
  let index = 0;
  let indexLeft = 1;
  let indexRight = 2;
  while (index < input.length) {
    if (input[index] < input[index + indexLeft]) {
      condition = false;
    }
    if (input[index] > input[index + indexRight]) {
      condition = false;
    }
    index++;
    indexLeft++;
    indexRight++;
  }
  return condition;
};

const input = [5, 1, 4, null, null, 3, 6];
const input2 = [2, 1, 3];

console.log(isValidBSTArrayTechnique(input));
console.log(isValidBSTArrayTechnique(input2));
