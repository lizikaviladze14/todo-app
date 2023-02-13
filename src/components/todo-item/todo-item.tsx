import './todo-item.scss'
import React from "react";
import {IconDelete} from "../../assets/icons/IconDelete";
import {BaseCheckbox} from "../base/base-checkbox/base-checkbox";
import {TodoTypes} from "../../types/todo.types";

interface Props {
    todo: TodoTypes;
    onComplete: (id:string, isCompleted:boolean) => void;
    onDelete: (id:string) => void;
}

export const TodoItem:React.FC<Props> = ({todo, onComplete, onDelete }) => {
    return (
        <div className="todo-item">
            <BaseCheckbox isCompleted={todo.isCompleted} onComplete={onComplete} todoId={todo.id}/>
            <p className="todo-text">{todo.title}</p>
            <IconDelete onDelete={onDelete} todoId={todo.id}/>
        </div>
    )
}