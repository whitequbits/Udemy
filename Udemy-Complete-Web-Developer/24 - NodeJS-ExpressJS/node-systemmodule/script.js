import fs from "fs";

// Asynchronus => better option
fs.readFile("./hello.txt", (err, data) => {
  console.time("AsyncReadfile");
  if (err) {
    console.log("error");
  }
  console.log("Async", data.toString());
  console.timeEnd("AsyncReadfile");
});

// Synchronus => slow because you need to wait the file get read
const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// append => add text to the file
fs.appendFile("./hello.txt", " this is cool", err => {
  if (err) {
    console.log("There is error");
  }
});

// Write => write new file
fs.writeFile("bye.txt", "I so Sad, Good Bye", err => {
  if (err) {
    console.log("Error");
  }
});

// DELETE
fs.unlink("./bye.txt", err => {
  if (err) {
    console.log("error");
  }
  console.log("Inception");
});
