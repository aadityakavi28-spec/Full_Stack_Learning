/*  NODE = Node.js (Node) is a tool that lets you run JavaScript outside the browser.
    Documentation - nodejs.org


const fs = require("fs");
// fs.writeFile("message.txt", "Hello from node", (err) => {
//     if (err) {
//         console.log("Error occurred:", err);
//     } else {
//         console.log("The file has been saved");
//     }
// });

fs.readFile("./message.txt" , "utf8" , (err , data) => {
    if(err){
        console.log("Error Occured" , err);
    }
    else{
        console.log(data);
    }
})


*/








//Using npm (node package manager) - npm is a tool that helps you install and manage JavaScript packages for Node.js
//Documentation - npmjs.com
/*
//Method 1 - var oneLinerJoke = require('one-liner-joke');          //used in type = commonjs
//Method 2 - import { getRandomJoke } from 'one-liner-joke';            //used in type = module
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)
var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
console.log(getRandomJokeWithTag)
*/





//ECMAScript  = ECMAScript (ES) is the official standard (rulebook) for how JavaScript should work.
import { randomSuperhero } from 'superheroes';
console.log("My superhero name is:", randomSuperhero());

