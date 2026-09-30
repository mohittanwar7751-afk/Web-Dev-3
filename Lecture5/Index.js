// const os = require("os")

// console.log(os.platform())

// console.log(os.arch())

// console.log(os.hostname())

// console.log(os.version())

// console.log(os.uptime())  //iska mtlb hai ki laptop kitne second se chalu hai

// console.log(os.totalmem()/1024/1024/1024) //it is a RAM

// console.log(os.freemem()/1024/1024/1024)  // free RAM kitni hai

// console.log(os.cpus())

// console.log(os.cpus().length)  // tells about no. of core












const fs = require("fs")

// fs.writeFile("data.txt", "gop gop", (err)=>{
//     if(err) console.log(err)
//         else console.log("File Written")
// })


// fs.readFile("data.txt", "utf8",(err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })


// fs.appendFile("data.txt", "\nLadle", (err)=>{
//     if(err) console,log(err)
//         else console.log("File Written")
// })


// fs.unlink("data.txt",(err)=>{
//     if(err) console,log(err)
//          else console.log("File Deleted")
// })




// fs.writeFile("Hello.js","x=2",(err)=>{
//     if(err) console.log(err)
//         else console.log("File created")
// })

// fs.readFile("Hello.js", "utf8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

// fs.appendFile("Hello.js", "\ny=3",(err)=>{
//     if(err) console.log(err)
//         else console.log("File updated")
// })

// fs.unlink("Hello.js",(err)=>{
//     if(err) console.log(err)
//         else console.log("File Deleted")
// })





// const data = {name:"Aman",age:20,city:"delhi"}


// fs.writeFile("db.json",JSON.stringify([data],null,2),(err)=>{
//     if(err) console.log(err)
//         else console.log("File created")
// })

// let newData = {name:"John",Age:25,city:"Mumbai"}

// fs.readFile("db.json","utf8",(err,res)=>{
//     if(err) console.log(err)
//         else{
//     let temp = JSON.parse(res)

//     temp.push(newData)

//     fs.writeFile("db.json",JSON.stringify(temp,null,2),(err)=>{
//     if(err) console.log(err)
//         else console.log("File updated")
// })
// }
// })





const path = require("path")

// const file = path.join("home","data","user.json")
// console.log(file)

// console.log(path.dirname("home/user/data/file.txt"))

// console.log(path.basename("home/user/data/file.txt"))

// console.log(path.extname("home/user/data/file.txt"))


// const filePath = path.join("home","data","user","file.txt")

// console.log(filePath)

// fs.mkdir(filePath,{recursive:true},(err)=>{
//     if(err) console.log(err)
// })
// this will create file.txt in home/data/user folder but it will not create file.txt because mkdir is used to create folder not file



// fs.mkdir(path.dirname(filePath),{recursive:true},(err)=>{
//     if(err) console.log(err)
//         else{
//     fs.writeFile(filePath,"",(err)=>{
//         if(err) console.log(err)
//         })
//     }
// })









// const crypto = require("crypto")

// let password1 = "aman123"
// let password2 = "aman1234"

// let encrypt1 = crypto.createHash("sha256").update(password1).digest("hex")
// console.log(encrypt1)

// let encrypt2 = crypto.createHash("sha256").update(password2).digest("hex")
// console.log(encrypt2)






const dns = require("dns")

dns.lookup("www.flipkart.com",(err,address,family)=>{
    console.log(address)
    console.log(family)
})