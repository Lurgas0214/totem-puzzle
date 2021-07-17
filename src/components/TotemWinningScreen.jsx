import React from "react";
import "./css/TotemWinningScreen.css"

const TotemWinningScreen = ({show, onClickHandle}) => {
    const displayScreen = () => {
        return show ? " show" : "";
    };

    return (
        <div className={"totem-winning-screen" + displayScreen()}>
            <div className="totem-winning-backdrop"/>
            <div className="totem-winning-message">
                <h4>You did it!</h4>
                <div className="row justify-content-center">
                    <div className="col dancing-horde"/>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="btn btn-danger" onClick={onClickHandle}>reset</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotemWinningScreen;
