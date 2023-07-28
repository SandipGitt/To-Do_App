const todoModel = require("./todo.model");


// CRUD
const create = (payload) => {
    return todoModel.create(payload);

};

const list = () => {
    //Complex aggregation
    return todoModel.aggregate([
            {
              '$lookup': {
                'from': 'subtasks', 
                'localField': '_id', 
                'foreignField': 'todo_id', 
                'as': 'subtasks'
              }
            }
          ]
    );
};

const getById = (id) => {
    return todoModel.findOne({_id:id});
};

const updateByID = (id, ayload) => {
    return todoModel.updateOne({_id:id}, payload);
};

const remove = (id) => {
    return todoModel.deleteOne({_id:id});
};

module.exports = {create, list, getById, updateByID, remove};