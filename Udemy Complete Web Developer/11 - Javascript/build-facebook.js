let database = [
  {
    username: "tada",
    password: "yesweare"
  }
];

let newsFeed = [
  {
    username: "Robert",
    timeline: "Hello"
  },
  {
    username: "Nancy",
    timeline: "Hi"
  },
  {
    username: "Dalton",
    timeline: "Sorry"
  }
];

var userNamePrompt = prompt("Insert your username");
var passwordPrompt = prompt("Insert your password");

function signIn(user, pass) {
  if (user == database[0].username && pass == database[0].password) {
    console.log(newsFeed);
  } else {
    console.log("Sorry Wrong Username or Password");
  }
}

signIn(userNamePrompt, passwordPrompt);
