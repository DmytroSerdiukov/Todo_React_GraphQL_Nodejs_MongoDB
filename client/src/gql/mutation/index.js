import {gql} from "@apollo/client";

export const CREATE_TODO = gql`
    mutation createNewTodo($todo: String) {
        createTodo(todo: $todo) {
            todo
        }
    }
`



export const SET_TODO_STATUS = gql`
    mutation setStatus($todo: String, $status: Boolean) {
        setTodoStatus(todo: $todo, checked: $status) {
            todo,
            checked
        }
    }
`

export const REMOVE_TODO = gql`
    mutation removeTodo($todo: String) {
        removeUserTodo(todo: $todo) {
            todo
        }
    }
`

export const CREATE_TODO_LIST = gql`
    mutation createTodoList($name: String) {
        createNewTodoList(name: $name) {
            name
        }
    }
`
