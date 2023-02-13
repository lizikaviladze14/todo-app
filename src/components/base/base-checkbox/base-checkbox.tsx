import './base-checkbox.scss'
import React, {useState} from "react";
import {IconCheck} from "../../../assets/icons/IconCheck";

interface Props {
    onComplete: (id:string, isCompleted:boolean) => void;
    todoId: string;
    isCompleted: boolean;
}

export const BaseCheckbox:React.FC<Props> = ({onComplete, todoId, isCompleted}) => {
    const [isChecked, setIsChecked] = useState(isCompleted)

    const handleClick = () => {
        setIsChecked(!isChecked)
        onComplete(todoId, !isChecked)
    }
    return (
        <div className="base-checkbox" onClick={handleClick} >
            {isChecked ?
                <div className={`checkbox checked`}><IconCheck /></div> :
                <div className={`checkbox unchecked`} />}
        </div>
    )
}