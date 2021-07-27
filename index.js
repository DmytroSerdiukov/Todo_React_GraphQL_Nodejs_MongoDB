const {Todo, TodoList} = require("./models/index");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`

  type Todo {
    todo: String,
    checked: Boolean
  }

  type TodoList {
    id: ID,
    name: String,
    todos: [Todo]
  }

  type Query {
    todos: [Todo]
    todoLists: [TodoList]
  }
  
  type Mutation {
    createTodo(todo: String): Todo,
    setTodoStatus(todo: String, checked: Boolean): Todo
    removeUserTodo(todo: String): Todo
    createNewTodoList(name: String): TodoList
  }
`;

const resolvers = {
    Query: {
        todos: async() => {
            const todos = await Todo.find({})
            return todos
        },
        todoLists: async() => {
            const todoLists = await TodoList.find({})
            return todoLists
        }
    },
    Mutation: {
        createTodo: async(_, {todo}) => {
            const newTodo = new Todo({
                todo,
                checked: false
            })
            await newTodo.save()
        },

        setTodoStatus: async(_, {todo, checked}) => {
            await Todo.findOneAndUpdate({todo: todo}, {checked: checked})
        },

        removeUserTodo: async(_, {todo}) => {
            await Todo.findOneAndRemove({todo: todo})
        },

        createNewTodoList: async(_, {name}) => {
            console.log(name)
            const newTodoList = new TodoList({
                name: name,
                todos: []
            })
            await newTodoList.save().catch(err => console.log(err.message))
        }
    }
};


const server = new ApolloServer({ typeDefs, resolvers });
server.listen(5000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
mongoose.connect('mongodb+srv://Dmytro:1234@cluster0.pix6q.mongodb.net/apollo_db?retryWrites=true&w=majority')
    .then( () => console.log('db connected'))
