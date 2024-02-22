import React from 'react'
import "./instructions.css"
import TypingPanel from "./typingPanel/TypingPanel";
import ConfirmPanel from "./ConfirmPanel/ConfirmPanel";


const Instructions = ({ winningIndex }) => {

    return (
        <div className="col-lg-8 col-md-8 instructions-body">
            <div className="row">
                <TypingPanel />
                <ConfirmPanel winningIndex={winningIndex}/>
            </div>
        </div>
    )
}

export default Instructions

