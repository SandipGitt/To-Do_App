const express = require("express");
const mongoose = require("mongoose")

const app = express();

const PORT = 3000;
const indexRouter = require("./routes");

mongoose.connect("mongodb://localhost:27017/todo").then(() => {
    console.log("Connected to MOngoDB");
})

app.get("/", (req, res) =>{
    res.send("Hello World");
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});