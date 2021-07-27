import React from "react";
import {Button, Input} from "antd";


function List({id, name}) {
    return <div onClick={() => console.log(id)}>
        <div>{name}</div>
    </div>
}

export default function TodolistControllerMarkup(
    {
        lists, createTodoList, changeTodoList,
    deleteTodoList
    }
) {
    console.log(lists)
    const inputRef = React.createRef()

    const createList = () => createTodoList(inputRef.current.state.value)

    return <>
        <div>
            <Input ref={inputRef} placeholder='Введите название списка...'/>
            <Button onClick={createList}>Создать список</Button>
        </div>
        <div>
            {
                lists === undefined || lists.length == 0 ? 'Nothing' :
                    lists.map(
                    (list, index) =>
                    <List
                        key={list.id}
                        id={list.id}
                        name={list.name}
                    />
                )
            }
        </div>
    </>
}
