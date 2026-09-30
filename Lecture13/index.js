const express = require("express")
const morgan = require("morgan")
const app = express();
const noteRoutes = require("./routes/noteRoutes")

app.use(express.json()) // built-in middleware
app.use(express.urlencoded({extended:true})) // built-in middleware
app.use(morgan("combined")) // third-party middleware

app.use("/api",noteRoutes)



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})