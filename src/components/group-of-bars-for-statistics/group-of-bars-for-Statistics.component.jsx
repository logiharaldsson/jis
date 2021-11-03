import React from 'react';

import SingleBarForStatistics from '../single-bar-for-statistics/single-bar-for-statistics.component';
import './group-of-bars-for-statistics.styles.scss';
const GroupOfBarsForStatistics = ( {barsArray, maxNumber, colors = ['blue', 'pink', 'green', 'red', 'black', 'goldenRod', 'deepSkyBlue', 'darkOliveGreen']} ) => {

    return (
    <div className='born-to-be-ready'>
        {barsArray.map((bar, i) => {
            return (
                <SingleBarForStatistics currentNumber={bar} maxNumber={maxNumber} color={colors[i]}/>
            )
        })}
    </div>
);}

export default GroupOfBarsForStatistics