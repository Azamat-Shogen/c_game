import React from 'react';
import card_img from "./cards_2.png";
import joker from "./joker.png"
import "./header.css"


const Header = () => {
    return(
        <div className="container header">
            <div className="row">
                <div className="col-sm title-wrapper">
                    <img  className="joker-img" src={joker} alt="joker"/>
                    <div className="title-name-wrapper">
                        <span className="author">Az</span>
                        <hr className="line" />
                    </div>
                </div>
                <div className="col-sm title">
                    <h6>Card Trick Game</h6>
                </div>
                <div className="col-sm">
                    <img  className="header-img" src={card_img} alt="deck"/>
                </div>
            </div>
        </div>
    )
}

export default Header;