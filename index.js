const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola desde Railway 🚀");
});

server.listen(process.env.PORT || 3000);
