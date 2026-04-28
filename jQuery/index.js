console.log($("h1").css("color"));  //Give the actual value of the h1

$("h1").addClass("demo1"); //Adding one class
$("button").addClass("demo2 demo3"); //Adding two class at same time

$("h1").text("Changed text") //USed to change the text inside the html tag
$("h1").html("<em>Changed</em?") //Used to chnge the whole html tag

$(".anchor").addClass("demo4");
$(".anchor").attr("href" , "https://flipkart.com")