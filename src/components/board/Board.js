import React, {useState, useEffect} from 'react';
import './board.css'
import { connect } from "react-redux";
import Card from "./card/Card";


const Board = ({backgrounds, cards, hidden}) => {
    const [deck, setDeck] = useState([])

    useEffect( () => {
        let index = 0;
        const interval = setInterval(() => {
           if (!hidden) setDeck([...cards.slice(0, index), ...deck.slice(index)]);
           else setDeck([...backgrounds.slice(0, index), ...deck.slice(index)]);
           index++

           if(++index > 36) clearInterval(interval)
        }, 60)

       return () => { console.log() }
    }, [hidden, backgrounds])


    return(
        <div className="container-fluid">
            <div className="row">
                { deck.map((card, i) => <Card key={i} card={card}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    backgrounds: state.backgrounds.cards,
    cards: state.cards.cards,
    hidden: state.cards.hidden

})

export default connect(mapStateToProps, null)(Board);