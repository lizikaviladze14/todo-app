import './base-button.scss'
import React from "react";
import {ButtonTypes} from "../../../types/button.types";
import {IconPlus} from "../../../assets/icons/IconPlus";

interface Props {
    type: ButtonTypes;
    text: string;
    isCreateButton?: boolean;
}
export const BaseButton:React.FC<Props> = ({type, text, isCreateButton}) => {
    return (
        <button type={type}>
            {text}
            {isCreateButton && <IconPlus />}
        </button>
    )
}