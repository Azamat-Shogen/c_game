import React from "react";
import {connect} from "react-redux";
import "./confirmPanel.css"
import {
    disableStarted,
    resetBackground,
    resetCards,
    resetRound,
    revealCard,
    setText
} from "../../../../redux/actions/actions";
import {instructions} from "../../../../redux/utils";


const ConfirmPanel = (props) => {

    const handleNo = () => {
        props.resetBackground()

        const card = props.cards[6]
        const back_img = props.backgrounds[0]
        const newIdx = Math.floor(Math.random() * 36);
        const newBackground = props.backgrounds.map((el, i) => {
            if (i === newIdx){ return card }
            else { return back_img }
        })

        props.revealCard(newBackground)
        props.setText(instructions[7])
        props.disableStarted(false)
        props.resetRound();
        props.resetCards()
    }

    const handleYes = () => {
        props.resetBackground()
        props.setText(instructions[8])
        props.disableStarted(false)
        props.resetRound();
    }

    return (
        <div className={`col-sm-3 row ${props.round >= 5 ? 'confirm': 'confirm-hidden'}`}>
            <div className="col">
                <button className="btn btn-primary" onClick={handleYes}>Yes</button>
            </div>
            <div className="col">
                <button className="btn btn-danger" onClick={handleNo}>No</button>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    round: state.cards.round,
    cards: state.cards.cards,
    backgrounds: state.backgrounds.cards,
    started: state.cards.startedDisabled
})

const mapDispatchToProps = dispatch => ({
    setText: (newText) => dispatch(setText(newText)),
    revealCard: (newBackground) => dispatch(revealCard(newBackground)),
    resetBackground: () => dispatch(resetBackground()),
    disableStarted: (value) => dispatch(disableStarted(value)),
    resetRound: () => dispatch(resetRound()),
    resetCards: () => dispatch(resetCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPanel)