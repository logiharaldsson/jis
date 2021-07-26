import React from 'react';

import './tally-box.styles.scss';
import TallyButton from '../tally-button/tally-button.component';

import 'tachyons';

import { connect } from 'react-redux';

// import { selectCurrentBox } from '../../redux/box/box.selector';
import { selectCurrentAge, selectCurrentCounterArray, selectCurrentCounterBox, selectCurrentId } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const TallyBox = ({currentCounterArray, currentId, currentCounterBox}) => {
    return (
        <div className='flex flex-column items-center'>
            <div><h2>{`Fjöldi gjafa í kassa #${currentCounterBox+1}`}</h2></div>
            <div className="tally-box flex items-center">
                <TallyButton increment={-1} />
                <div className='giant-box-container flex justify-center f6 ba bw2 ph3 pv2 mb2 dib ma2 pointer br3'>
                    <div className='giant-box-counter'>{currentCounterArray[currentId].boxesArray[currentCounterBox]}</div>
                </div>
                <div className="plus-buttons-container">
                    <TallyButton increment={+1} />
                    <TallyButton increment={+5} />
                </div>
            </div>
        </div>
        
    );
};

const mapStateToProps = createStructuredSelector ({
    // currentBox: selectCurrentBox,
    currentAge: selectCurrentAge,
    currentCounterArray: selectCurrentCounterArray,
    currentId: selectCurrentId,
    currentCounterBox: selectCurrentCounterBox
});

export default connect(mapStateToProps)(TallyBox);