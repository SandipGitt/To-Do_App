const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    status: {type: stringAt, enums:["pending", "complete"], default: "pending"}
})

module.exports = mongoose.model("Todo", todoSchema);