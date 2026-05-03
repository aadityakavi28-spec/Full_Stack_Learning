/*
-Express.js server runs on port 3000
-GET / → shows index.html (form page)
-POST /submit → receives form data
-body-parser → converts form data → req.body
-console.log(req.body) → prints user input

Flow: Open form → Submit → Data received → Logged

*/

import express from 'express';
import { dirname } from'path';
import { fileURLToPath } from 'url';


//middleware - bodyParser
import bodyParser from 'body-parser';

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended : true}));


app.get("/" , (req , res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit" , (req, res) => {
  console.log(req.body);
});

app.listen(port , () => {
  console.log(`Listening on port ${port}`)
});