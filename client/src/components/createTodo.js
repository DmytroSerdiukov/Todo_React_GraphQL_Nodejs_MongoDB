import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {useMutation} from "@apollo/client";
import {CREATE_TODO} from "../gql/mutation";
import React from "react";


export default function() {
    const input = React.createRef()
    const [createTodo] = useMutation(CREATE_TODO);

    const onFinish = (values) => {
        const {todo} = values
        console.log('input', input.current.state.value)
        createTodo({variables: {todo: todo}})

    };

    const changeInput = (e) => {
        console.log(e.data)
    }

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            wrapperCol={{
                span: 8,
                offset: 8
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="todo"
                rules={[{ required: true,}]}
            >
                <Input ref={input} onChange={changeInput} placeholder="Введите название задачи..." />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    span: 12,
                    offset: 12
                }}
            >
                <Button type="primary"  htmlType="submit">
                    Создать
                </Button>
            </Form.Item>
        </Form>
    );
}

