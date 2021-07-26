import React from 'react';
// Styles
import './box-info.styles.scss';
// Redux
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentAge, selectCurrentGender } from '../../redux/user/user.selector';

const BoxInfo = ({ currentAge, currentGender }) => {
    const ageGroup = currentAge;
    return(
        <div className={`box-info-display flex flex-column justify-center items-center ${currentAge === "" ? 'box-info-width' : null} `} >
            <h2 className='gender-title ttu tracked'>{currentGender === 'boys' ? 'Strákar' : 'Stelpur'}</h2>
            <h2 className="age-title">{ageGroup}</h2>
            {currentAge === "" ? <h2>Veldu aldur til að halda áfram</h2> : null}
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    currentAge: selectCurrentAge,
    currentGender: selectCurrentGender
});

export default connect(mapStateToProps)(BoxInfo);