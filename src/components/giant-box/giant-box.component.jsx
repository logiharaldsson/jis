import React from 'react';
// Styles
import './giant-box.styles.scss';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentAge } from '../../redux/user/user.selector';
// Components
import TallyBox from '../tally-box/tally-box.component';
import BoxInfo from '../box-info/box-info.component';
import BoxSelection from '../box-selection/box-selection.component';

const GiantBox = ({currentAge}) => {
    return (
        
        <div className='total-container'>
            <BoxInfo />
            {currentAge === "" ? null : <BoxSelection />
            }
            {currentAge === "" ? null : <TallyBox />}
        </div>
    )
};

const mapStateToProps = createStructuredSelector ({
    currentAge: selectCurrentAge
})

export default connect(mapStateToProps)(GiantBox);