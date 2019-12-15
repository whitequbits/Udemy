import express from "express";

// for ES6 you should import this
import path from "path";

// because ___dirname is not default
const __dirname = path.resolve();

const app = express();

// MiddleWare Server
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public/"));

app.get("", (req, res) => {
  // request query
  // http://localhost:3000/?name=bobby
  console.log(req.query);

  // request header
  console.log(req.headers);

  // request params
  // localhost:3000/123
  console.log(req.params);

  // request body
  console.log(req.body);

  // with express it's automatically convert the object into a html/text
  res.send("This is the root");
});

app.get("/:id", (req, res) => {
  // request query
  // http://localhost:3000/123?name=bobby
  console.log(req.query);

  // request header
  console.log(req.headers);

  // request params
  // localhost:3000/123
  console.log(req.params);

  // request body
  console.log(req.body);

  // with express it's automatically convert the object into a html/text
  res.send("This is the id");
});

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

app.post("/user", (req, res) => {
  console.log(req.body);
  // with express it's automatically convert the object into a JSON
  res.send("Success");
});

app.listen(3000);
