const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}\n`;
  if (req.url == "/favicon.ico") return res.end();
  fs.appendFile("server.log", log, (err, data) => {
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const myName = myUrl.query.name;
        res.end(`<h1>Hello,${myName}</h1>`);
        break;
      case "/search":
        const mySearch = myUrl.query.search_query;
        res.end(`<h1>Here is the result of ${mySearch}</h1>`);
        break;

      case "/signup":
        if (req.method == "GET") {
          res.end("Signup Page");
        } else if (req.method == "POST") {
          //db query
          res.end("Signup Done");
        }
      default:
        res.end("Not Found");
        break;
    }
  });
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
