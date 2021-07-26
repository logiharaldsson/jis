import React from 'react';

import 'tachyons';

import StatisticsBar from '../../components/statistics-bar/statistics-bar.component';

import './statistics-page.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentCounterArray } from '../../redux/user/user.selector';

const StatisticsPage = ({ selectCounterArray }) => {
    // get the count on of the boxes from state
    const numberInBoxes = selectCounterArray.map(getNumber);
    function getNumber(item) {
        let count = 0;
        item.boxesArray.forEach(element => {
            count += element;
        });
        return count
    }
    let maxNumber = Math.max(...numberInBoxes);
    return (
        <div className='flex justify-center items-center '>
            <div className="label-tags-container">
                <div className='label-tag flex ma2 tracked ttu'>
                    <div className='label-tag-boys'></div>
                    <span className='ml2'>Strákar</span>
                </div>
                <div className='label-tag flex ma2 tracked ttu'>
                    <div className='label-tag-girls'></div>
                    <span className='ml2'>Stelpur</span>
                </div>
            </div>
            <div className='statistics-page-container flex flex-column items-center justify-center'>
                <div className='statistics-page-title-container'>
                    <h1 className='statistics-page-title'>2021</h1>
                </div>
                <div className="table-of-boxes flex items-end ma2">
                    <StatisticsBar numberInBoxesBoys={numberInBoxes[0]} numberInBoxesGirls={numberInBoxes[5]} maxNumber={maxNumber}/>
                    <StatisticsBar numberInBoxesBoys={numberInBoxes[1]} numberInBoxesGirls={numberInBoxes[6]} maxNumber={maxNumber}/>
                    <StatisticsBar numberInBoxesBoys={numberInBoxes[2]} numberInBoxesGirls={numberInBoxes[7]} maxNumber={maxNumber}/>
                    <StatisticsBar numberInBoxesBoys={numberInBoxes[3]} numberInBoxesGirls={numberInBoxes[8]} maxNumber={maxNumber}/>
                    <StatisticsBar numberInBoxesBoys={numberInBoxes[4]} numberInBoxesGirls={numberInBoxes[9]} maxNumber={maxNumber}/>
                </div>
                <div className='age-label flex justify-around'>
                    <div className='w-25 flex justify-center'>0-2 ára</div>
                    <div className='w-25 flex justify-center'>3-6 ára</div>
                    <div className='w-25 flex justify-center'>7-10 ára</div>
                    <div className='w-25 flex justify-center'>11-14 ára</div>
                    <div className='w-25 flex justify-center'>15+ ára</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    selectCounterArray: selectCurrentCounterArray
})

export default connect(mapStateToProps)(StatisticsPage);