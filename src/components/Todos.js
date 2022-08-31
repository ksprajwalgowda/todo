import React from 'react'
import { Todo } from "./Todo";

export const Todos = (props) => {
    // console.log(props.todos)
    return (
        <div className='container'>
            { props.todos.map((todo)=>{
                return (
                    <Todo key={todo.sno} todo = {todo} ondelete= {props.ondelete} />
                )
            }) }
        </div>

    )
}
