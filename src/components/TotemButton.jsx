import React from "react"
import "./css/TotemButton.css"

const TotemButton = ({state, onClickHandle}) => {
    const getClass = () => {
        if (state === true) return " red";
        return " blue";
    };

    return (
        <div className={"totem" + getClass()} onClick={onClickHandle}>
            <div className="totem-image"/>
        </div>
    );
}

export default TotemButton;
