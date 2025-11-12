const http = require("http"); // Import Node.js core module
const server = http.createServer(function (req, res) {
  // create web server
  if (req.url == "/") {
    // check the URL of the current request
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });
    // set response content
    res.write(
      "<html><body><p>This is home Page. Author: Pham Duc Thang</p></body></html>"
    );
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html><body>
      <p>This is student Page.</p>
      <p>Name Author: Pham Duc Thang </p>
      </body></html>`);
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html><body>
      <p>This is admin Page.</p>
      <p>Name Author: Pham Duc Thang </p>
      </body></html>`);
    res.end();
  } else if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({ message: "Hello World JSON", author: "Pham Duc Thang" })
    );
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(3000); // listen for any incoming requests
console.log("Node.js web server at port 3000 is running...server2");
