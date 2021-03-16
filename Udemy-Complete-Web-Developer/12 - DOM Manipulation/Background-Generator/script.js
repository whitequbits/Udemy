var css = document.querySelector("h3");
var css_initial = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_button = document.querySelector(".random");

// first page load gradient

function setGradientFirstPageLoad() {
  css_initial.textContent =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

window.addEventListener("load", setGradientFirstPageLoad);

// Set Random color

function round(value) {
  return Math.round(value);
}

function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function rgbconvert(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#" + red + green + blue;
}

function SetGradienRandomizer() {
  var Red_1 = Math.random() * 255;
  var Green_1 = Math.random() * 255;
  var Blue_1 = Math.random() * 255;
  var Red_2 = Math.random() * 255;
  var Green_2 = Math.random() * 255;
  var Blue_2 = Math.random() * 255;

  color1.value = rgbconvert(round(Red_1), round(Green_1), round(Blue_1));
  color2.value = rgbconvert(round(Red_2), round(Green_2), round(Blue_2));

  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

random_button.addEventListener("click", SetGradienRandomizer);
// Set the Gradient

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
