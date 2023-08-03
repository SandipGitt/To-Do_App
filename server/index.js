const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;


mongoose.connect("mongodb://localhost:27017/todo").then(() => {
    console.log("Connected to MOngoDB");
})

const indexRouter = require("./routes");
app.use(cors());
app.use(express.json());
app.use("/", indexRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});