import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const dname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({extended : true}));

var userIsAuthorized = false;

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if( password === "AdityaKavi"){
    userIsAuthorized = true;
  }
  next();
}

app.use(passwordCheck);

app.get("/" , (req , res) => {
    res.sendFile(dname+ "/public/index.html");
});

app.post("/secret" , (req ,res) =>{
    if(userIsAuthorized == true){
        res.sendFile(dname + "/public/secret.html");
    }
    else{
        res.sendFile(dname + "/public/index.html");
    }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});