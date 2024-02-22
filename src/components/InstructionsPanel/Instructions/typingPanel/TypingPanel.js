import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import {connect} from "react-redux";


const TypingPanel = ({text}) => {

    const [key, setKey] = useState(0);
    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
      }, [text]);

    return (
        <div className="col-sm-8" style={{margin: "1rem"}}>
        <TypeAnimation
            key={key} // Use key prop to force remount
            cursor={{ show: true, blink: true, element: "|", hideWhenDone: true }}
            sequence={[text]} // Use the updated text
            onAnimationEnd={() => {}} // Optionally handle onAnimationEnd
        />
            
        
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.instructions.text,
})

export default connect(mapStateToProps, null)(TypingPanel);


{/* <TypeAnimation className="MyTypist"
            sequence={[text]}
            speed={50}
            style={{ fontSize: '1em' }}
            wrapper="span"
            omitDeletionAnimation={false}
          /> */}