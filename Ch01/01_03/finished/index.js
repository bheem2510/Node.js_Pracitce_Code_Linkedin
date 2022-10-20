const { createServer } = require("http");

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("Request Details", req);
  res.end(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Serving HTML Text</h1>
        <p>${req.method} request made for ${req.url}</p>
      </body>
    </html>
  `);
}).listen(3000);

console.log("web server is listening on port 3000");
