const {model, Schema} = require("mongoose");


const Todo = model('Todo', new Schema({
    todo: String,
    checked: Boolean
}))

const TodoList = model('TodoList', new Schema({
    name: String,
    todos: []
}))

module.exports = {Todo, TodoList}
