/*
Udemy
Course : Master Coding Interview : Data Structure + Algorithm
by : Andrei Neagoie
Big O - 32
*/

/*
Big O Analysis :
This kind of searching method can be O(1) until O(n)
If the nemo is in the beginning of the array it will become :
O(1)
If the nemo is at the end of the array it will become :
O(n)
*/

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] == "nemo") {
      console.log("found NEMO");
      break;
    }
  }
}

findNemo(everyone);

// Finding Nemo using EcmaScript 6 style

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish == "nemo") {
      console.log("found NEMO");
    }
  });
};

findNemo2(everyone);

// The other style
const findNemo3 = array => {
  for (let fish of array) {
    if (fish == "nemo") {
      console.log("found NEMO");
    }
  }
};

findNemo3(everyone);
