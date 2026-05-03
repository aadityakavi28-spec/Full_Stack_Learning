//Loops and String
// let name = prompt("Intro of Loops and String in js");
// console.log(name);

//Loops : Loops are used to ececute a piece of code again & again
/*console.log("demo");
console.log("demo");
console.log("demo");
console.log("demo");
console.log("demo");
let i = 1;
while( i <= 5){
     console.log("demo");
     i++;
}
*/




/*//Calculate sum of 1 to 5
let sum = 0 ;
for(let i=1 ; i <= 5; i++){
    sum = sum + i;
}
console.log(sum);
*/


//Infinite Loop : A Loop that never ends


/*// for-of loop - only for string and arrays
let str = "Javascript";
let length = 0;
for (let i of str){
    console.log("i = ", i);
    length++;
}
console.log("String length = ", length);
*/


/*// for-in loop - object and arrays
let student = {
    name: "aditya",
    age: 20,
    cgpa: 8.7,
    ispass : true,
};
for(let i in student){
    console.log(i , student[i]);
}
*/




/*//print all even numbers from 0 to 100
for(let i=0 ; i<=100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
   
}
*/





/*//Create a game whete you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 78;
let userNum = prompt("Guess the game number :");
while(userNum != gameNum){ //game
    userNum = prompt("You entered wrong number. Guessa again:");

}
console.log("Congratulation, you entered the right number")
*/



//String : String is a sequence of characters used to represent text.
//Create String
// let str = "Aditya kavi";
// console.log(str);

// console.log(str.length); // String length

// console.log(str[2]);  //String indices

// //Template Literals in Js : A way yo have embedded expressions in strings OR in simple words it is a Special type of String.
//  // for example - `this is a template literal`
//  let sentence = `This is a Template Literals `;
//  console.log(sentence);
// console.log(typeof sentence);

// //Why we use Template Literals 
// //for eg 
// let obj = {
//     item : "pen",
//     price : 10,
// };
//  console.log("The cost of", obj.item , "is : ", obj.price);  //This is normal method to acces the object elements
//  //Template Literals
//  let output = `The cost of ${obj.item} is: ${obj.price}`;
//  console.log(output);
// //String interpolation : To create string by doing subsitution of placeholders
// // for example : `String text ${expression} String text`
// console.log(`This is the example of escape \ncharacter where we have to divide form escape`);  //Escape Character






//String Methods in Js
/*
These are built -in functions to manipulate a string
1. str.toUpperCase();
2. str.toLowerCase();
3. str.trim( );     removes whitespaces
4. str.slice(start,end?);      return part of string
5. str1.concat(str2);      joins str2 with str1
6. str.replace(searchval , newval);    
7. str.charat(idx);
*/
// let a = "     abc    ";
// console.log(a);
// console.log(a.toUpperCase());
// console.log(a.trim()); //only trim form starting and ending only








//Question
/*
Prompt the iser to enter their full name.Generate a username for them based on the input.
Start username with @, followed by theri full name and ending with the fullname lenght
*/
let fullName = prompt("Enter your fullname without spaces");
let userName = "@" + fullName.trim() + fullName.length;
console.log(userName);

 
