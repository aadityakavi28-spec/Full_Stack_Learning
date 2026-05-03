console.log("DOM");
/*Window object :The window object represents an open window in a browser. It is browser's object(not JavaScript's)& is automatically created by browser.
--> it is a global object with lots of ptoperties & methods.
*/



/*
What is DOM ?
When a web page is loaded , the browser creates a Document Object Model(DOM) of the page.
*/

// console.log(document);  Display the html representation of the document
//console.dir(document)    //Disply the javascript object representation (shows all properties and method of the document object)

console.log(document.getElementsByClassName('container'));
console.log(document.getElementsByClassName('heading')[0].innerHTML = "demo");




/*
DOM
script.js:16 HTMLCollection(1)
script.js:17 demo
document.getElementById('title')
<h1 class=​"heading" id=​"title">​demo​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }
document.setElementById('title','test')
VM625:1 Uncaught TypeError: document.setElementById is not a function
    at <anonymous>:1:10
(anonymous) @ VM625:1
document.setElementById('title').setAttribute('class' , 'test')
VM708:1 Uncaught TypeError: document.setElementById is not a function
    at <anonymous>:1:10
(anonymous) @ VM708:1
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class' , 'test')
undefined

*/

//const demo = document.getElementById('title')






































































































































