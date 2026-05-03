console.log("Introduction about arrays in javascript");
/*Arrays : collection of items.*/


/*
//method 1 of storing marks
let marks_student1 = 32;
let marks_student2 = 35;
let marks_student3 = 33;
let marks_student4 = 38;
let marks_student5 = 36;


//method 2 of storing mmarks 
let marks={
    marks_student1:43,
    marks_student2: 42,
    marks_student3:53,
    marks_student4:64,
    marks_student5:32,
};
*/

/*
//Arrya method for stroing the marks
let markss =[ 32,53,32,54,64,21 ];
console.log(markss);
console.log(markss.length);
markss[1] = 70;   // this is not possible in the array of string because arrays are mutable and string is immutable 
console.log(markss);
/*
String Array

let heroes = ["ironman","thor","hulk","superman"];
console.log(heroes);
console.log(heroes[3]);
console.log(typeof heroes);
*/


/*
let heroes = ["ironman","thor","hulk","superman", "hulk"];
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i].toLocaleUpperCase());   
}
*/


/*
//Same work through for-of loop
let heroes = ["ironman","thor","hulk","superman", "hulk"];
for(let hero of heroes){
    // console.log(hero);
    console.log(hero.toLocaleUpperCase())
}
*/

//QUESTION - for a given array with marks of students = [85,97,44.37.76.60];find the average marks of the entire class.
// let students = [85,97,44,37,76,60];
// let count = 0;
// for(let i=0 ; i<students.length; i++){
//     count =  count + students[i];
// }
// console.log(count);
// let avg = count / students.length;
// console.log(avg);


/*
//QUESTION - for a given array with prices of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them, Change the array to store final price after applying offer.
let items =  [250,645,300,900,50];
for(let i=0; i<items.length; i++){
    console.log(items[i]); //berfore offer 
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    
}
console.log(items); // after offer

*/




//Array Method 
/*
puch() : add to end
pop() : delete form end & return
toString()  : converts array to string
Concat() ; joins multiple arrays & return result
unshift() : add to start
shift() : delete from start & return
slice() :return a piece of the array .     slice(startidx , endidx);
splice()  : change original array(add , remove , replace) .     splice(startidx , decount, newE(1..))

*/


/* PUSH
let animals = ["cat" , "dog",];

animals.push("tiger" , "lion");
console.log(animals);
*/


/*   POP
let animals = ["cat" , "dog", "tiger" , "lion"];

console.log(animals);
let deletedItem = animals.pop();
console.log(animals);
console.log(deletedItem);
*/

// //splice
// let arr = [1,2,3,4,5,6,7,8,];
// arr.splice(2 ,3 , 100,200,300); 
// arr.splice(1, 1)
// console.log(arr);



//QUESTION - create an array to store companies -> "bloomberg", "microsoft","uber","google" , "ibd","netflix"
/*
a-> Reomve the first company form the array
b->Romove uber & add ola in its place
c-> add amazon at the end\

*/

let companies = ["bloomberg", "microsoft","uber","google" , "ibd","netflix"];
console.log(companies);
let startDelete = companies.shift();
console.log("Delete first company:",startDelete);

let replace = companies.splice(1,1,"ola");
console.log(replace);
console.log(companies);

companies.push("amazon")
console.log(companies);


































