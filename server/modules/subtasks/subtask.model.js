const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const subTaskSchema = mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, enums:["pending", "complete"], default: "pending"},
    todo_id: {type: ObjectId, ref: "Todo"}, //reference to ToDo model
})

module.exports = mongoose.model("Subtask", subTaskSchema);