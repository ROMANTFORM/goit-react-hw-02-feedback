import React from 'react';

const FeadbackOptions = ({onGood, onNeutral, onBad}) => (
    <div className="Button-container">
        <button className="Button" onClick={onGood}>Good</button>
        <button className="Button" onClick={onNeutral}>Neutral</button>
        <button className="Button" onClick={onBad}>Bad</button>
    </div>
);

export default FeadbackOptions;