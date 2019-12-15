import express from "express";
import bodyParser from "body-parser";

const app = express();

// MiddleWare Server
app.use(bodyParser.urlencoded({ extended: false }));

// the slash is root
// res is response, which is automaticall send as text/html
// req is request
app.get("/user", (req, res) => {
  const user = {
    name: "Sally",
    hobby: "Tennis"
  };

  // with express it's automatically convert the object into a JSON
  res.send(user);
});

app.get("/", (req, res) => {
  // with express it's automatically convert the object into a html/text
  res.send("This is the root");
});

app.post("/user", (req, res) => {
  const user = {
    name: "Sally",
    hobby: "Tennis"
  };

  // with express it's automatically convert the object into a JSON
  res.send(user);
});

app.listen(3000);
