import React from 'react';
import {connect} from "react-redux";
import "./buttonPanel.css"
import {
    startGame,
    toggleHidden,
    selectRow,
    setRowSelected,
    mixCards,
    setRound,
    disableStarted,
    resetRound, revealCard, setText, resetBackground, resetCards
} from "../../../redux/actions/actions";
import {instructions} from "../../../redux/utils";




const ButtonPanel = (props) => {


    const resetRound = () => {
        setTimeout(() => props.setRound(), 3000)
    }

    // const cardToTest = (idx) => props.cards[idx]

    const handleStart = () => {
        props.resetBackground();
        props.resetCards();
        props.startGame()
        props.disableStarted(true)
        props.setText(instructions[0])
    }

    const handleRow = (num) => {
        props.selectRow(num)
        props.setRowSelected(true)
        props.setText(instructions[num])
    }

    const handleMixCards = () => {
        props.mix(props.cards)
        props.setRound()
        props.toggleHidden()


        if (props.round >= 2){
            resetRound()
            setTimeout(() => {
                props.setText(instructions[5])
            }, 2000)
        }

        if (props.round < 2) {
            setTimeout(() => {
                props.toggleHidden()
                props.setText(instructions[4])
            }, 3000)
        }

        props.setRowSelected(false)

    }

    const revealCardHandle = (idx) => {
        const card = props.cards[idx]
        const newIdx = Math.floor(Math.random() * 36);
        const newBackground = props.backgrounds.map((el, i) => {
            if (i === newIdx){ return card }
            else { return el }
        })

        props.revealCard(newBackground)
        props.setRound()
        props.setText(instructions[6])
    }



    return (
        <div className="col-lg-3 col-md-3 buttons-panel">

            <div className="row  bt-row">
                <button className="btn btn-primary btn-sm mt-2"
                        onClick={handleStart}
                        disabled={!props.hidden || props.started}
                >Start</button>
            </div>
            <div className="row bt-row">
                <button className="btn btn-info btn-sm mt-2"
                        onClick={() => handleRow(1)}
                        disabled={props.hidden}
                >Row 1</button>
            </div>
            <div className="row  bt-row">
                <button className="btn btn-info btn-sm mt-2"
                        onClick={() => handleRow(2)}
                        disabled={props.hidden}
                >Row 2</button>
            </div>
            <div className="row  bt-row">
                <button className="btn btn-info btn-sm mt-2"
                        onClick={() => handleRow(3)}
                        disabled={props.hidden}
                >Row 3</button>
            </div>
            <div className="row  bt-row">
                {props.round >= 3 ?
                    <button className="btn btn-info btn-sm mt-2 mb-2"
                            onClick={() => revealCardHandle(29)}
                            disabled={props.round <= 3 || props.round > 4 }
                    >Reveal Card</button>
                   :
                    <button className="btn btn-info btn-sm mt-2 mb-2"
                    onClick={handleMixCards}
                    disabled={props.hidden || !props.rowSelected}
                    >Shuffle Cards</button>

                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    backgrounds: state.backgrounds.cards,
    cards: state.cards.cards,
    hidden: state.cards.hidden,
    round: state.cards.round,
    rowSelected: state.cards.rowSelected,
    started: state.cards.startedDisabled
})

const mapDispatchToProps = dispatch => ({
    startGame: () => dispatch(startGame()),
    selectRow: (rowNumber) => dispatch(selectRow(rowNumber)),
    mix: (cards) => dispatch(mixCards(cards)),
    toggleHidden: () => dispatch(toggleHidden()),
    setRound: () => dispatch(setRound()),
    setRowSelected: (value) => dispatch(setRowSelected(value)),
    disableStarted: (value) => dispatch(disableStarted(value)),
    resetRound: () => dispatch(resetRound()),
    revealCard: (newBackground) => dispatch(revealCard(newBackground)),
    setText: (newText) => dispatch(setText(newText)),
    resetBackground: () => dispatch(resetBackground()),
    resetCards: () => dispatch(resetCards()),
})

export default connect(mapStateToProps, mapDispatchToProps) (ButtonPanel)

