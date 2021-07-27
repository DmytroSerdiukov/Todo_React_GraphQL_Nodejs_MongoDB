import {gql} from "@apollo/client";

export const USER_TODOS = gql`
    query getUserTodos {
        todos {
            todo,
            checked
        }
    }
`

export const USER_TODO_LISTS = gql`
    query lists {
        todoLists {
            id,
            name
        }
    }
`

