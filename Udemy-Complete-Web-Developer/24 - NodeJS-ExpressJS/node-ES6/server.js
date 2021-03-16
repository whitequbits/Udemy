// Making server using http library in node js
import http from "http";

// create the server using http.createServer
const server = http.createServer((request, response) => {
  // if we want to see the request method and url
  console.log("method", request.method);
  console.log("url", request.url);

  // // we can give the response using html
  // response.setHeader("Content-Type", "text/html");
  // response.end("<h1>Hello Guys</h1>");

  const user = {
    name: "John",
    hobby: "Skiing"
  };

  //we can give the response as json
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(user));
});

// 3000 is the port
server.listen(3000);
