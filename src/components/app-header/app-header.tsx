import './app-header.scss'
import React from "react";
import {IconLogo} from "../../assets/icons/IconLogo";
import {AddTodo} from "../add-todo/add-todo";

interface Props {
    onAddTodo: any
}

export const AppHeader: React.FC<Props> = ({onAddTodo}) => {
    return (
        <header>
            <IconLogo />
            <AddTodo onAddTodo={onAddTodo}/>
        </header>
    )
}