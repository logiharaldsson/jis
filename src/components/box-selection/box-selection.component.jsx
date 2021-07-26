import React from 'react';
import './box-selection.styles.scss';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentCounterArray, selectCurrentCounterBox, selectCurrentId } from '../../redux/user/user.selector';
import { pushToCounterArray, setCurrentCounterBox } from '../../redux/user/user.actions';

const BoxSelection = ({ setCurrentCounterBox, currentCounterArray, currentId, currentCounterBox, pushToCounterArray }) => {
    let myArray = currentCounterArray.filter(arr => {
        return arr.id === currentId
    });
    function confirmationForNewBox() {
        let txt;
        let confirmMessage = window.confirm("Viltu búa til nýjan kassa?");
        if (confirmMessage == true) {
            txt = "You pressed OK!";
            pushToCounterArray()
        } else {
            txt = "You pressed Cancel!";
        }
    }
    return(
        <div className="extra-box flex flex-column justify-center items-center ma5 pa2">
            <div className="title-box">
                <h1>{`Veldu kassa`}</h1>
            </div>
            
            <div className="extra-box-container-buttons flex flex-row ">
                {   
                    myArray[0].boxesArray.map((item, i) => (
                        <div key={i} 
                            className='box-button f6 dim ph3 pv2 mb2 dib white bg-dark-green ma2 pointer br3'
                            onClick={() => setCurrentCounterBox(i)}>
                            {i+1}
                        </div>
                    ))
                }
            </div>
            <div className='new-box-button f6 dim ph3 pv2 mb2 dib white bg-blue ma2 pointer br3'
                onClick={() => { confirmationForNewBox()} }
                >Nýr kassi
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    currentCounterArray: selectCurrentCounterArray,
    currentId: selectCurrentId,
    currentCounterBox: selectCurrentCounterBox
});

const mapDispatchToProps = dispatch => ({
    setCurrentCounterBox: CounterBox => dispatch(setCurrentCounterBox(CounterBox)),
    pushToCounterArray: () => dispatch(pushToCounterArray())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxSelection);