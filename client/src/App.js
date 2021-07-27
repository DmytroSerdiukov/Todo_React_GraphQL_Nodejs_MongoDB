import './App.css';
import TodoCreator from './components/createTodo'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
} from "@apollo/client";
import TodoItem from "./components/todoItem";
import {USER_TODOS} from "./gql/query";
import {useEffect, useState} from "react";
import TodoListController from './components/TodoListController/container'

const client = new ApolloClient({
    uri: 'http://localhost:5000/',
    cache: new InMemoryCache()
});

function UsersTodo() {
    const { data, error, loading } = useQuery(USER_TODOS, {
        pollInterval: 0.5
    })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data.todos != null ? <div>
        {data.todos.map((e,i) =>
            <TodoItem key={i} todo={e.todo} checked={e.checked}/>
        )}
    </div> : null
}

function App()
{
    return (
        <div>
            <ApolloProvider client={client}>
                {/*<TodoCreator/>*/}
                <TodoListController />
                {/*<UsersTodo/>*/}
            </ApolloProvider>
        </div>
    );
}

export default App;
