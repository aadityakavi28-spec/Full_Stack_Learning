console.log("Hello Ji Namaste Kaisa ho") //first program 
//javascript is dynamically typed language.


//Variables in js :  variables are containers for data.
/*
How we declare variables → var, let, const
What type of data variables can store → number, string, boolean, etc.

var name = "Aditya";
var name = "Kavi";  // Allowed
name = "JavaScript"; // Allowed
variable can be re-declared & updated.A global scope variable.

let age = 19;
age = 20;      // Allowed
// let age = 25; ❌ Not allowed
variabke cannot be re-declared but can be updated.A block scope variable.

const pi = 3.14;
// pi = 3.15; ❌ Not allowed
variable cannot be re-declared or updated .A block scope variable.
*/

let a;
console.log(a); // output : undefined ..... but not possible for constant




//Datatype in js : Data types tell us what kind of value a variable is storing.
/*JavaScript has 8 data types.

Primitive Data Types (7) : number,string ,boolean ,undefined ,null , Biglnt , symbol
Non-Primitive Data Type (1) : objects
*/
let age = 23;
console.log(typeof age) //number

let name = "aditya";
console.log(typeof name) //string

let x = null;
console.log(typeof x) // object

//Objects : It is a collection of values.
const student = {
    fullName : "adi",
    age : 32 ,
    cgpa : 8.4 ,
    ispass : true ,
};

console.log(typeof student) // object 
console.log(student.cgpa) // accessing the key

student.name = "no name this is demo"; 
console.log(student.name)


