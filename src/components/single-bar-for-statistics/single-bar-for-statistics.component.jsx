import React from 'react';

import './single-bar-for-statistics.styles.scss';

// This function return a single bar of a Statistics Graph.
// Takes the current number and compares it to the maxNumber in that graph to decide the height of the bar

const SingleBarForStatistics = ({ currentNumber, maxNumber, color='green'}) => (
    <div className='asdfasdf' style={{height: `${(currentNumber/maxNumber * 100  < 7) ? 7 : currentNumber/maxNumber * 100 }%`, width: '40px', backgroundColor: `${color}`}}>
        <span className='white'>{currentNumber}</span>
    </div>
);

export default SingleBarForStatistics;