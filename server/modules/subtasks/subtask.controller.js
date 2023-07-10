const todoModel = require("../todos/todo.model");
const subtaskModel = require("./subtask.model");
const TodoModel = require("./subtask.model");

// CRUD
const create = (payload) => {
    return subtaskModel.create(payload)
};

const list = () => {};

const getById = (id) => {};

const updateByID = (id, ayload) => {};

const remove = (id) => {};


module.exports = {create, list, getById, updateByID, remove};