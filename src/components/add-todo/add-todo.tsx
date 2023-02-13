import './add-todo.scss'
import React, {useState} from "react";
import {BaseButton} from "../base/base-button/base-button";
import {BaseInput} from "../base/base-input/base-input";

interface Props {
    onAddTodo: any
}

export const AddTodo:React.FC<Props> = ({onAddTodo}) => {
    const [title, setTitle] = useState('')
    function handleSubmit(ev: any) {
        ev.preventDefault()
        onAddTodo(title)
        setTitle('')
    }

    function onChangeTitle(ev: any) {
        setTitle(ev.target.value)
    }
    return (
        <form className="add-todo middle" onSubmit={handleSubmit}>
            <BaseInput type="text" placeholder="Add new task" value={title} onChangeFunction={onChangeTitle}/>
            <BaseButton type="submit" text="Create" isCreateButton={true}/>
        </form>
    )
}