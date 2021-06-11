import React from 'react'
    
const Statistics = ({good, neutral, bad, total, positivePersentage}) => (
    <div className="Statistic">
        <h2 className="Statistic__title">Statistics</h2>
        <p className="Statistic__value">Good: {good}</p>
        <p className="Statistic__value">Neutral: {neutral}</p>
        <p className="Statistic__value">Bad: {bad}</p>
        <p>Total Feadback: {total}</p>
        <p>Positive Feadback: {positivePersentage }%</p>
    </div> 
);

export default Statistics;