const { createServer } = require("http");

const decoratedServer = callback =>
  createServer((request, response) => {
    if (request.method === "POST" && request.url === "/mollie/create-payment") {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString(); // convert Buffer to string
      });
      console.log({ body });
      response.end("ok");
      return;
    }

    return callback(request, response);
  });

module.exports = {
  createServer: decoratedServer,
};
