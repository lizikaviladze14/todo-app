import './todo-list.scss'
import React from "react";
import {TodoItem} from "../todo-item/todo-item";
import {TodoTypes} from "../../types/todo.types";
import {TodoListHeader} from "../todo-list-header/todo-list-header";

interface Props {
    todos: TodoTypes[];
    onComplete: (id:string, isCompleted:boolean) => void;
    onDelete:any;
}

export const TodoList:React.FC<Props> = ({todos, onComplete, onDelete }) => {
    const todosQuantity = todos.length
    const completedTodos = todos.filter(todo => todo.isCompleted).length
    return (
        <div className="todo-list middle">
            <TodoListHeader
                todosQuantity={todosQuantity}
                completedTodos={completedTodos}
            />
            <div className="list">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onComplete={onComplete}
                        onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}