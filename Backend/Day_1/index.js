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