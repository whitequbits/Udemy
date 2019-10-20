// What is the Big O of the below function? (Hint, you may want to go line by line)

/*Legends :

O(1) only once = 1
O(n) the statement is running n times = n

*/

function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n) where n is input
      let x = i + 1; // O(n) where n is input
      let y = i + 2; // O(n) where n is input
      let z = i + 3; // O(n) where n is input
  
    }
    for (let j = 0; j < input; j++) { // O(n) where n is input
      let p = j * 2; // O(n) where n is input
      let q = j * 2; // O(n) where n is input
    }
    let whoAmI = "I don't know"; // O(1)
  }

  /* Result of O :
  4 O(1) + 7 O(n)
  Big O(4 + 7n) -> Not Efficient
  It Should be like this
  Big O(n)
  */