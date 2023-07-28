const subtaskModel = require("./subtask.model");


// CRUD
const create = (payload) => {
    return subtaskModel.create(payload);
};

const list = () => {
    return subtaskModel.find();
};

const getById = (id) => {
    return subtaskModel.findOne({_id:id});
};

const updateByID = (id, ayload) => {
    return subtaskModel.updateOne({_id:id}, payload);
};

const remove = (id) => {
    return subtaskModel.deleteOne({_id:id});
};

module.exports = {create, list, getById, updateByID, remove};