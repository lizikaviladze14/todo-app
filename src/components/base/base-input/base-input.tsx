import './base-input.scss'
import React from "react";

interface Props {
    type: string;
    placeholder: string;
    label?: string;
    value: string;
    onChangeFunction: any
}

export const BaseInput:React.FC<Props> = (
    {   type,
        placeholder,
        label,
        value,
        onChangeFunction
    }) => {
    return (
        <div className="base-input">
            {label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} value={value} onChange={onChangeFunction}/>
        </div>
    )
}