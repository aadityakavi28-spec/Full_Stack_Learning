/*
Express.js server on port 3000
morgan("tiny") → logs every request (method, URL, status)
GET / → sends "Hello"
Server starts with app.listen()

Flow: Request comes → morgan logs → route responds
*/

import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
