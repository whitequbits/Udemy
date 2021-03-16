import fs from "fs";

function whereIstheFloor(input) {
  console.time("ThisFunction");
  // Read the data
  const fileInput = fs
    .readFileSync(input, err => {
      if (err) {
        console.log(err);
      }
    })
    .toString();

  // Init Counter
  let counterUp = 0;
  let counterDown = 0;

  // Iterate over the data

  for (let index = 0; index < fileInput.length - 1; index++) {
    if (fileInput[index] === ")") {
      counterDown++;
    } else if (fileInput[index] === "(") {
      counterUp++;
    }
  }

  console.timeEnd("ThisFunction");
  return counterUp - counterDown;
}

const input = "./input.txt";

const answer = whereIstheFloor(input);
console.log(answer);
