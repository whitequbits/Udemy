// Reverse the string

const string = "Hi My Name is Logo";

// Old Way
function revstring_old_way(string) {
  let backwards = [];
  string.split("");
  const totalItems = string.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(string[i]);
  }
  console.log(backwards.join(""));
}

console.log(revstring_old_way(string));

// JS Master
function revstringJSMaster(string) {
  if (!string || string.length < 2 || typeof string !== "string") {
    return "You cannot reverse this";
  }
  const rev = string
    .split("")
    .reverse()
    .join("");
  return rev;
}

console.log(revstringJSMaster(string));

// ES6

const revstringES6 = string =>
  string
    .split("")
    .reverse()
    .join("");

console.log(revstringES6(string));
