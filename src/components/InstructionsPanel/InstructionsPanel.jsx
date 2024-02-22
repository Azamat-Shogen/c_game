import React from 'react';
import Instructions from "./Instructions/Instructions";
import ButtonPanel from "./ButtonsPanel/ButtonsPanel";


const InstructionsPanel = () => {
    /**
     * The winning numbers are: either 6 or 29 indices from the deck
     * randomly pass them to the components
     */
    const winningNumbers = [6, 29];

    // Randomly shuffle the array
    const shuffleNums = winningNumbers.sort(() => Math.random() - 0.5);
    const firstRandomNumber = shuffleNums[0];
    const secondRandomNumber = shuffleNums[1]

    return (
        <div className="container mb-4">
            <div className="row">
                <Instructions winningIndex={firstRandomNumber}/>
                <ButtonPanel winningIndex={secondRandomNumber} />
            </div>
        </div>
    )
}

export default InstructionsPanel