
/*
                                                    1. What is Node.js & Express.js
 Node.js
Runtime environment → runs JavaScript outside browser
Built on V8 engine (Chrome)
Used for:
Backend servers
APIs
Real-time apps


Express.js
Framework built on Node.js
Helps you build:
Web apps
REST APIs
It is:
Fast 
Minimal 
Flexible 

Simple understanding:

Node.js = Engine 
Express.js = Steering + Controls 

                                                    2. Why Use Express.js?

Without Express:
-You manually handle HTTP
-Write lots of boilerplate code

With Express:
-Clean syntax
-Routing system
-Middleware support
-Faster development


                                                    3. Setup Express Project
Step 1: Initialize project
npm init -y

Step 2: Install Express
npm install express

Step 3: Create server (app.js)

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Server started");
});

*/
 /*
import express from 'express';
const app = express();
const port = 3000;
//localhost = localhost means: “This computer itself”.. It’s used when your computer talks to its own server.
app.listen(port , () => {               
    console.log(`Server is running on port ${port}.`);
})
*/

//cmd = netstat -ano | findstr "LISTENING"
//“Which ports are open + which program (PID) is using them”







//HTTP HTTP (HyperText Transfer Protocol) is:
/*
-The rule system that allows your browser and a server to communicate
-When you open a website, HTTP is what sends and receives the data.
*/
import express from 'express';
const app = express();
const port = 3000;

app.get("/" , (req , res) => {
  res.send("<h1>Hello</h1>")
})
app.get("/about" , (req , res) => {
  res.send("<p>I am a passionate full stack developer and student at Uttaranchal University.I love building web applications and solving problems.</p>")
})

app.listen(port , () => {               
    console.log(`Server is running on port ${port}.`);
})






/*
.......................Important HTTP Methods :
Method	   :     Use 

GET	  ->        Get data
POST	->        Send data
PUT	  ->        Update data
DELETE->     	Delete data
*/


/*
//MiddleWare - 
┌─────────────────────────────────────────────────────────────┐
│                    MIDDLEWARE CONCEPT                        │
│                                                              │
│  Request → [Middleware 1] → [Middleware 2] → [Route Handler] │
│              ↓                ↓                ↓            │
│           (next())        (next())        (Response)        │
│                                                              │
│  Middleware can:                                             │
│  • Execute code                                              │
│  • Modify request/response objects                           │
│  • End the request-response cycle                            │
│  • Call next() to pass control to next middleware            │
└─────────────────────────────────────────────────────────────┘
*/

