import React from 'react';

import './tally-button.styles.scss';
import { connect } from 'react-redux';
import { addFiveToCounterArray, addOneToCounterArray, removeOneFromCounterArray } from '../../redux/user/user.actions';
import { setCurrentTimeLog } from '../../redux/time/time.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentAge, selectCurrentCounterArray, selectCurrentCounterBox, selectCurrentGender, selectCurrentId } from '../../redux/user/user.selector';


const TallyButton = ({ age, gender, counterBox, setCurrentTimeLog, increment, addOneToCounterArray, addFiveToCounterArray, removeOneFromCounterArray }) => {
    const whatToDispatch = () => {
        if(increment === 1){
            return addOneToCounterArray();
        } else if (increment === 5){
            return addFiveToCounterArray();
        } else if (increment === -1){
            return removeOneFromCounterArray();
        }
    }

    const timeFunction = () => {
        let timeDate = new Date();
        let stringDate = `${timeDate.toLocaleDateString('en-GB')} - ${timeDate.toLocaleTimeString('en-GB')}`;
        let boxNumber = `#${counterBox+1}`;
        return setCurrentTimeLog([gender, age, boxNumber, increment, stringDate])
    }



    const addToCounter = () => {
        let sexString = `${gender === 'boys' ? 'B' : 'G'}`;
        let ageString = age;
        let boxNumberString = `${counterBox+1}`;
        let newDBId = sexString+ageString+'#'+boxNumberString;
        console.log('Sex:',sexString, 'Age: ',ageString, 'Box: ', boxNumberString, 'id:', newDBId);
        fetch('http://ancient-caverns-42646.herokuapp.com/plustest', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: newDBId,
                tally: increment
            })
        }).then(user => console.log(user))
    }
    
    
    return(
        <div className='tally-button-container f6 dim ph3 pv2 mb2 dib white bg-mid-gray ma2 pointer br3' 
            onClick={() => {timeFunction(); whatToDispatch(); addToCounter()}}>
            <div className='tally-button-number'>{increment < 0 ? increment : `+${increment}`}</div>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    addOneToCounterArray: () => dispatch(addOneToCounterArray()),
    addFiveToCounterArray: () => dispatch(addFiveToCounterArray()),
    removeOneFromCounterArray: () => dispatch(removeOneFromCounterArray()),
    setCurrentTimeLog: TimeLog => dispatch(setCurrentTimeLog(TimeLog))

});

const mapStateToProps = createStructuredSelector ({
    gender: selectCurrentGender,
    age: selectCurrentAge,
    counterBox: selectCurrentCounterBox

})

export default connect(mapStateToProps, mapDispatchToProps)(TallyButton);