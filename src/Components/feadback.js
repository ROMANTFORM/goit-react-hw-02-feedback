import React, {Component} from 'react';
import './feadback.css';

// Components
import Statistics from './Statistics';
import FeadbackOptions from './FeadbackOptions';
import Notification from './Notification';


class Feadback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePersentage: 0,
        start: false,
    };

countGoodFeadback = () => {
    this.setState(prev => ({
        good: prev.good + 1,
        start: true
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    };
    
countNeutralFeadback = () => {
    this.setState(prev => ({
        neutral: prev.neutral + 1,
        start: true
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    };
    
countBadFeadback = () => {
    this.setState(prev => ({
        bad: prev.bad + 1,
        start: true
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
    };
    
countTotalFeedback = () => {
    this.setState(prev => ({total: prev.total + 1}))
    };
    
countPositiveFeedbackPercentage = () => {
        // Z = Х / Y * 100%
        this.setState(prev => ({ positivePersentage: (prev.good / prev.total * 100).toFixed(1) }))   
    };
    

render() {

    return (
    <div className="Container">
        <h2 className="Feadback-title">Please leave Feadback</h2>
        
            <FeadbackOptions
                onGood={this.countGoodFeadback}
                onNeutral={this.countNeutralFeadback}
                onBad={this.countBadFeadback}
            />
            
            {this.state.start
                ? <Statistics
                    good={this.state.good }
                    bad={this.state.bad }
                    neutral={this.state.neutral }
                    total={this.state.total }
                    positivePersentage={this.state.positivePersentage}
                />
                : <Notification />}
    </div>   
        )
    };
 };

export default Feadback;