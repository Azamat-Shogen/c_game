import React from 'react';
import Instructions from "./Instructions/Instructions";
import ButtonPanel from "./ButtonsPanel/ButtonsPanel";


const InstructionsPanel = () => {
    return (
        <div className="container">
            <div className="row">
                <Instructions />
                <ButtonPanel />
            </div>
        </div>
    )
}

export default InstructionsPanel