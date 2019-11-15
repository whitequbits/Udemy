// button and input is get by id in the html file
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// function for the input length
function inputLength() {
  return input.value.length;
}

// function to create the li elements
function createLiElements() {
  // li is the li tag
  var li = document.createElement("li");
  // append the text child to the li as parent (attach the text to the li)
  li.appendChild(document.createTextNode(input.value));
  // append the li to the ul (attach the li to the ul)
  ul.appendChild(li);
  input.value = "";
}

// function to add the li when you click
function addWhenClick() {
  // it only work if the input length is greater than zero
  if (inputLength() > 0) {
    createLiElements();
  }
}

function addWhenKeyPressed(events) {
  // it only work if the input length is greater than zero
  if (inputLength() > 0 && events.keyCode === 13) {
    createLiElements();
  }
}

// Using the click button
button.addEventListener("click", addWhenClick);

// Using the enter in the keyboard
input.addEventListener("keypress", addWhenKeyPressed);
