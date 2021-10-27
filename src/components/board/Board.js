import React, {useState, useEffect} from 'react';
import './board.css'
import { connect } from "react-redux";
import Card from "./card/Card";



const Board = ({backgrounds, cards, hidden}) => {
    const [deck, setDeck] = useState([])

    //TODO: whenever hidden updates - animate
    useEffect( () => {
        if (!hidden){
            let index = 0;
            const interval = setInterval(() => {
                let arr = [...deck]
                deck[index] = cards[index]
                setDeck(arr)
                index++;
                if(index === 37) clearInterval(interval)
            }, 50)

        }
        else {
            let index = 0;
            const interval = setInterval(() => {
                let arr = [...deck]
                deck[index] = backgrounds[index]
                setDeck(arr)
                index++;
                if(index === 37) clearInterval(interval)
            }, 50)
        }

       return () => {
            console.log("")
       }

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