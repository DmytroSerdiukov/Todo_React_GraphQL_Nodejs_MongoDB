import {Checkbox} from 'antd';
import {useMutation} from "@apollo/client";
import {REMOVE_TODO, SET_TODO_STATUS} from "../gql/mutation";


export default function TodoItem({todo, checked}) {

    function onChange(e) {
        console.log(`${todo}: ${e.target.checked}`);
        const status = e.target.checked
        console.log(status, typeof (status))
        setTodoStatus({variables: {todo, status}})
    }

    function removeUserTodo() {
        console.log(`remove ${todo}`);
        removeTodo({variables: {todo}})
    }

    const [setTodoStatus] = useMutation(SET_TODO_STATUS)
    const [removeTodo] = useMutation(REMOVE_TODO)

    return <div style={{
        width: "50%",
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        border: '1px solid black',
        textAlign: 'center'
    }}>
        <p>
            {todo}
        </p>

        <div>
            <Checkbox checked={checked} onChange={onChange}/>
            <span onClick={removeUserTodo}>Удалить задачу</span>
        </div>
    </div>
}


