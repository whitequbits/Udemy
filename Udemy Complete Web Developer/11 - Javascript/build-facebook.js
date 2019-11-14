let database = [
  {
    username: "tada",
    password: "yesweare"
  },
  {
    username: "nana",
    password: "123"
  },
  {
    username: "julio",
    password: "abc"
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

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (username == database[i].username && password == database[i].password) {
      return true;
    } else {
      return false;
    }
  }
}

function signIn(username, password) {
  checkValid = isUserValid(username, password);
  if ((checkValid = true)) {
    console.log(newsFeed);
  } else {
    console.log("Sorry Wrong Username or Password");
  }
}

signIn(userNamePrompt, passwordPrompt);
