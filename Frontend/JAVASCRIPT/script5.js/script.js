console.log("Funciton and Method in javascipt");
//Function : Block of code that performs a specific task, can be invoked whenever needed.

/*function myFunction(){
    console.log("demo");
    console.log("demo 2");
}
myFunction();
*/




/*function myFunction(msg){
    //parameter -> input
    console.log(msg);
}
myFunction("demo");
*/




//Function -> 2 numbers ,sum
/*function myFunction(a , b){
    let c = a + b;
    console.log(c);
}
myFunction(2,3);
*/

/*function myFunction(a , b){
    //function paramerters -> like Local variables of function -> block scope
    let c = a + b;
    return c;
}
let output = myFunction(2,3);//function arguments
console.log(output);
*/


//Arrow functions -> Compact way of writing a function
//sum fun
// function sum(a,b){
//     return a + b;
// }
// function mul (a,b){
//     return a*b;
// }


/*//arrow function
const arrowSum = (a,b) => {
    console.log(a + b);
}
const mul = (a,b) =>{
    console.log(a*b)
}
*/


//Question -> Create a function suing the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

/*function countVowels(str){
    //Aditya kavi
    let count = 0; 
    for(let i of str){
        if(i === "a" || i==="i" || i === "o" || i==="u" || i ==="e"){
            count= count +1;
            console.log(i);
        }
    }
    console.log(count);
}
*/


//Question -> create an arrow function to perform same task

/*let countVowels = (str) => {
    let count = 0;
    for(let i of str){
        if(i === "a" || i==="i" || i === "o" || i==="u" || i ==="e"){
            count= count +1;
            console.log(i);
        }
    }
    console.log(count);

}
*/




//forEach loop in Arrays -> Arr.forEach(callBackFunction)
//callBackFunction : here, it is a function to execute for each element in the array
//A callback is a function passed as an argument to another function.

//Example
/*let arr = ["pune" , "delhi" , "mumbai"];
arr.forEach((val , idx , arr) => {
    console.log(val.toUpperCase() , idx , arr);
})
*/


//higher order function/method ..this forEach method/function -> use parameter or return


//Question-> For a given array of numbers, print the square of each value using the forEach loop

/*let array = [1 , 2 , 3 , 4, 5];

array.forEach((val) =>  {
    console.log(val*val);
    
});
*/


/*//finding the largest elemet in the array using the method in javascript
let arr =  [ 43,32,65,76,87];

let output = arr.reduce((prev , curr) => {
    return prev > curr ? prev: curr;
});

console.log(output);

*/

/*//Question => We are given array of marks of students. Filter out of the marks of student that scored 90+
let arr = [43,22,46,75,34,65];
let output = arr.filter((val) => {
    return val > 40;
});
console.log(output);
*/


/*Question -> take a number n as inout form user, Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
let n = prompt("enter a number :");
let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev , curr)=>{
    return prev + curr;
})
console.log(sum);

let product = arr.reduce((prev , curr)=>{
    return prev * curr;
})
console.log(product);


































































