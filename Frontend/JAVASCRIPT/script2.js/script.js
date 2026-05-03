//Opertators and Conditional Statements

/*
Comments in js : Part of code which is not executed 
*/

//Operators in js : used to perform some operation on data

//1. Arithmetic operators : +, -, *, / , modulus % , exponentiation ** , increment++ , decrement--
console.log("This is the example of Arithmetic Operators")
let a = 5;
let b = 2;
console.log("a = ", a ,"&", "b =",b);
console.log( "a + b =", a + b);
console.log( "a % b =", a % b); //1
console.log( "a ** b =", a ** b); //25
 

//Assignment operators : = , += , -=, *= , %= , **=
console.log("This is the example of Assignment operators")
let aa = 5;
let bb = 2;
console.log("aa = ", aa,"&", "bb =",bb);
aa+= 5;
console.log("aa = ", aa);  //10

//Comparison operators : equal to : == , equal to & type: === , not equal to : != ,not equal to & type : !== , > , >= ,< , <=
console.log("This is the example of Comparison operators")

let aaa = 5;
let bbb = 2 ;
console.log("aaa = ", aaa ,"&", "bbb =",bbb);

console.log( "aaa == bbb" , aaa == bbb);
console.log( "aaa != bbb" , aaa != bbb);
let ccc = "5";
console.log( "aaa === ccc" , aaa === ccc);

// Logical operators : logical and .. && , logical or..|| , logical not.. ! 
console.log("This is the example of logical operators")
let x = 5;
let y = 2;

let condition1 = a>b;
let condition2 = a ===5;
console.log("condition1 && condition2 = ", condition1 && condition2);
console.log("condition1 || condition2 = ", condition1 || condition2);


//Conditional Statements: To implement some condition in the code.
console.log("From here, we are Starting the conditional statements");
//if statement
console.log("if statements");
// let age = 25;
// if(age > 18){
//     console.log("you can vote");
// }

let modee = "dark";
let coloor;
if(modee === "dark"){
    coloor = "black";
}
if(modee === "light"){
    coloor = "white";
}
console.log(coloor);

console.log("if-else statements");
let mode = "blue";
let color;
if(mode === "dark"){
    color = "black";
}
else{
    color = "white"
}
console.log(color);

//odd and even 
let num = 10;
if(num%2 == 0){
    console.log(num , " is even");
} 
else{
    console.log(num,"is odd")
}

console.log("else-if statements");
let agee = 20;
if(agee < 10){
    console.log("junior");
}
else if(agee > 21){
    console.log("senior")
}
else{
    console.log("middle");
}


//prompt
console.log("prompt");
let namee = prompt("hello ji kaise ho");
console.log(namee);
