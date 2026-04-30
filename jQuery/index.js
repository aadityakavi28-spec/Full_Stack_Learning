console.log($("h1").css("color"));  //Give the actual value of the h1

$("h1").addClass("demo1"); //Adding one class
$("button").addClass("demo2 demo3"); //Adding two class at same time

$("h1").text("Changed text") //USed to change the text inside the html tag
$("h1").html("<em>Changed</em?") //Used to chnge the whole html tag

$(".anchor").addClass("demo4");
$(".anchor").attr("href" , "https://flipkart.com")

// $("h1").click(function(){   //Using the EventListener in jQuery 
//     $("h1").css("background-color" , "red");

//     setTimeout(function(){  //set the time limit for that event happening
//         $("h1").css("background-color" , "")
//     } , 200);
// });


const originalText = $("h1").text();
const originalColor =  $("h1").css("color");
$("body").keypress(function(event){
    $("h1").text(event.key);
    $("h1").css("color" , "yellow");
     setTimeout(function(event){  //set the time limit for that event happening
        $("h1").text(originalText)
        $("h1").css("color" , originalColor)
    } , 500);

})

$("h1").on("mouseover" , function() {
    $("h1").css("color" , "purple");

    setTimeout(function(){
        $("h1").css("color" , "");
    },500)
});


const fixTitle = $("h1").css("margin"); //Animation using jQuery
$(".anchor").on("mouseover", function(){

    $("h1").stop()
           .animate({ margin: "3rem" }, 300)
           .slideUp(200)
           .slideDown(200)
           .animate({ margin: fixTitle }, 300);
});
























