import React from 'react';
import 'tachyons';
import './statistics-bar.styles.scss';

const StatisticsBar = ({ numberInBoxesGirls, numberInBoxesBoys, maxNumber }) => {
    return(
        <div className="bar-box w-25 flex items-end justify-center tc" style={{height: `${250}px`}} >
            <div className="boys-div " style={{height: `${(numberInBoxesBoys/maxNumber * 100  < 7) ? 7 : numberInBoxesBoys/maxNumber * 100 }%`, width: '40px'}}>
                <span className='white'>{numberInBoxesBoys}</span>
            </div>
            <div className="girls-div" style={{height: `${(numberInBoxesGirls/maxNumber * 100  < 7) ? 7 : numberInBoxesGirls/maxNumber * 100 }%`, width: '40px'}}>
                <span className='white'>{numberInBoxesGirls}</span>
            </div>
        </div>
    
    );
};

export default StatisticsBar;