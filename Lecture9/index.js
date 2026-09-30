const express = require('express');

const app = express();
app.use(express.json());

// app.get("/", (req,res)=>{
//     return res.status(200).send("Hello World");
// })


let students = ["Alex", "Bob", "Charlie"];

// CRUD Operations

// READ

app.get("/students", (req,res)=>{
    res.status(200).send(students);
})

// CREATE

app.post("/students", (req,res)=>{

    let data = req.body.name;
    students.push(data);
    res.status(200).send("Student added");
});


// UPDATE

app.put("/students/:index", (req,res)=>{
    let ind = req.params.index;
    let data = req.body.name;
    students[ind] = data;
    res.status(200).send("Student updated");
})








app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})