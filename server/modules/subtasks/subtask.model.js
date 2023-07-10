const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const subTaskSchema = mongoose.Schema({
    title: {type: String, required: true},
    status: {type: stringAt, enums:["pending", "complete"], default: "pending"},
    todo_id: {type: isObjectIdOrHexString, ref: "Todo"},
})

module.exports = mongoose.model("Suntask", subTaskSchema);