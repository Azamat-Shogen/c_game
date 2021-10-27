import React from "react";
import Typist from "react-typist";
import {connect} from "react-redux";
import "./typingPanel.css"


const TypingPanel = ({text}) => {
    return (
        <div className="col-sm-8">
            <Typist key={text} className="MyTypist"
                    avgTypingDelay={50}
                    stdTypingDelay={25}
                    cursor={{
                        show: true,
                        blink: true,
                        element: "|",
                        hideWhenDone: true,
                        hideWhenDoneDelay: 1000,
                    }}
                // onTypingDone={()=> setCurrentText("")}
            >
                <Typist.Delay ms={100} />
                {text}
            </Typist>
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.instructions.text,
})

export default connect(mapStateToProps, null)(TypingPanel);