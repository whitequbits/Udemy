var enter_button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delete_button = document.getElementsByClassName("delete");

// Delete the item :

// add every delete button an event listener to delete it
for (let i = 0; i < delete_button.length; i++) {
  delete_button[i].addEventListener("click", removeparents, false);
}

// remove the parents of the delete button
function removeparents(event) {
  event.target.removeEventListener("click", removeparents, false);
  event.target.parentNode.remove();
}

// Get it Done :

function getEventTarget(event) {
  // it choose between the event or window.event
  event = event || window.event;

  // event.target refers to the clicked <li> element
  return event.target || event.srcElement;
}

// add event listener for the ul
ul.addEventListener("click", function(event) {
  var target = getEventTarget(event);

  // toggle the .done class from css so it will give the strikethrough
  target.classList.toggle("done");
});

// Add the item :

// check the input length
function inputLength() {
  return input.value.length;
}

// Create the list element
function createListElement() {
  // create the li element
  var li = document.createElement("li");
  //  create the new delete button
  var new_delete_button = document.createElement("button");
  new_delete_button.innerHTML = "Delete";
  // when it on click deleteit
  new_delete_button.onclick = removeparents;

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(new_delete_button);
  ul.appendChild(li);
  input.value = "";
}

// Add list after the click if the input length greater than zero
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Add list after press enter key if the input length greater than zero
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

enter_button.addEventListener("click", addListAfterClick);

delete_button.addEventListener("click");

input.addEventListener("keypress", addListAfterKeypress);
