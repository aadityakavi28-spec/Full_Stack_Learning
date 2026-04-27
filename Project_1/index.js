var randomNum1 = Math.random();
var randomNum2 = Math.random();

randomNum1 = randomNum1 * 6;
randomNum1 = Math.floor(randomNum1) + 1;
console.log(randomNum1);

randomNum2 = randomNum2 * 6;
randomNum2 = Math.floor(randomNum2) + 1;
console.log(randomNum2);

var randomImageChange1 = "images/dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src" , randomImageChange1);


var randomImageChange2 = "images/dice" +randomNum2+ ".png";
document.querySelector(".img2").setAttribute("src" , randomImageChange2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}

document.querySelector("footer").innerHTML = "Demo Using javaScript"