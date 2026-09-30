const fs = require("fs")

fs.writeFile("Dummy.txt", "Happy Birthday Shadav Sir...", (err)=>{
    if(err) console.log(err)
        else console.log("File Created Successfully")
})

// fs.readFile("Dummy.txt", "utf8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

// fs.appendFile("Dummy.txt", "\nAaj to mat pdao sir....", (err)=>{
//     if(err) console.log(err)
//         else console.log("File Updated")
// })



// fs.unlink("Dummy.txt", (err)=>{
//     if(err) console.log(err)
//         else console.log("File Deleted Successfully")
// })