import './todo-list-header.scss'
import React from "react";

interface Props {
    todosQuantity: number,
    completedTodos: number
}

export const TodoListHeader:React.FC<Props> = ({todosQuantity, completedTodos}) => {
    return (
        <div className="todo-list-header">
            <div className="created-todos">
                <p>Created Tasks</p>
                <span>{todosQuantity}</span>
            </div>
            <div className="completed-todos">
                <p>Completed</p>
                <span>{completedTodos}/{todosQuantity}</span>
            </div>
        </div>
    )
}