const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Mi primera vez en Railway 🚀");
});

server.listen(process.env.PORT || 3000);
