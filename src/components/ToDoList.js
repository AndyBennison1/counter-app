import React, {useState, useEffect} from 'react'
import axios from 'axios'; 

export const ToDoList = () => {
    const [todos, setTodo] = useState(); 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            const responseTodos = res.data;
            setTodo(responseTodos)
        })
    }, []); 

    console.log(todos)

    return (
        <div>
            <h6> ToDo List </h6>
            {todos && todos.map(todo => {
                const {userId, id, title} = todo; 
                return (
                    <div key={id}>
                <h5> {title} </h5>
                <h6> Assigned to user: {userId}</h6>
                </div>
                )
            })}
        </div>
    )
}
