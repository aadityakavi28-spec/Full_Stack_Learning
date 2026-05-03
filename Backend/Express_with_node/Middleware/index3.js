/*
Express.js server on port 3000
Custom middleware logger runs on every request
Logs:
req.method (GET, POST, etc.)
req.url (route path)
next() → passes control to next route
Routes
GET / → "Hello"
GET /about → "This is Custom middleware"

Flow: Request → logger runs → next() → route response
*/


import express from "express";

const app = express();
const port = 3000;


function logger(req , res , next) {
  console.log("Request Mehod", req.method);
    console.log("Request Mehod", req.url);
      next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/about", (req, res) => {
  res.send("This is Custom middleware");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
