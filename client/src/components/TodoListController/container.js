import TodoLists from "./markup";
import {useMutation, useQuery} from "@apollo/client";
import {USER_TODO_LISTS, USER_TODOS} from "../../gql/query";
import {CREATE_TODO, CREATE_TODO_LIST} from "../../gql/mutation";
import {useEffect} from "react";


export default function TodoListController() {

    const [createNewTodoList] = useMutation(CREATE_TODO_LIST);
    const { data, error, loading } = useQuery(USER_TODO_LISTS, {
        pollInterval: 0.7
    })

    if(error) {return <div>error</div>}
    if (!data) return null


    const createTodoList = (listName) => {
        console.log(listName)
        createNewTodoList({variables: {name: listName}})
    }

    const changeTodoList = (newListName) => {

    }

    const deleteTodoList = (id) => {

    }

    const setTodoListColor = () => {

    }

    const todoLists = [
        {
            id: 1,
            name: 'Sport',
            color: 'red',
            todos: [
                {
                    id: 1, todo: 'do 15 pushups', checked: false
                },
                {
                    id: 2, todo: 'do 5 pullups', checked: false
                },
                {
                    id: 3, todo: 'do 5km walk', checked: false
                },

            ]
        }
    ]

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop: '30px'
    }}>
        <TodoLists
            lists = {data.todoLists}
            createTodoList = {createTodoList}
            renameTodoList = {changeTodoList}
            deleteTodoList = {deleteTodoList}
        />
    </div>
}

