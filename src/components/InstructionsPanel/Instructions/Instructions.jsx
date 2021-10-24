import React from 'react'
import "./instructions.css"
import TypingPanel from "./typingPanel/TypingPanel";
import ConfirmPanel from "./ConfirmPanel/ConfirmPanel";


const Instructions = () => {

    return (
        <div className="col instructions-body">
            <div className="row">
                <TypingPanel />
                <ConfirmPanel />
            </div>
        </div>
    )
}

export default Instructions

