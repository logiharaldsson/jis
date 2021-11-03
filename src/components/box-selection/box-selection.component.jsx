import React from 'react';
import './box-selection.styles.scss';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentCounterArray, selectCurrentCounterBox, selectCurrentId, selectCurrentAge, selectCurrentGender } from '../../redux/user/user.selector';
import { pushToCounterArray, setCurrentCounterBox, setCurrentGender } from '../../redux/user/user.actions';


const BoxSelection = ({ setCurrentCounterBox, currentCounterArray, currentId, counterBox, pushToCounterArray, age, gender }) => {
    let myArray = currentCounterArray.filter(arr => {
        return arr.id === currentId
    });
    console.log(myArray[0].boxesArray.length+1)

    const addNewBox = () => {
        let sexLetter = `${gender === 'boys' ? 'B' : 'G'}`;
        let sexString = `${gender === 'boys' ? 'Strákar' : 'Stelpur'}`;
        let ageString = age;
        let boxNumberString = `${myArray[0].boxesArray.length+1}`;
        let newDBId = sexLetter+ageString+'#'+boxNumberString;
        console.log('newDBId ',newDBId)
        fetch('http://localhost:3001/addNewBox', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: newDBId,
                sex: sexString,
                age: ageString,
                boxnumber: myArray[0].boxesArray.length+1,
                stateid: currentId+1
            })
        })
    }

    function confirmationForNewBox() {
        let txt;
        let confirmMessage = window.confirm("Viltu búa til nýjan kassa?");
        if (confirmMessage == true) {
            txt = "You pressed OK!";
            addNewBox();
            pushToCounterArray();
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
    counterBox: selectCurrentCounterBox,
    gender: selectCurrentGender,
    age: selectCurrentAge,
});

const mapDispatchToProps = dispatch => ({
    setCurrentCounterBox: CounterBox => dispatch(setCurrentCounterBox(CounterBox)),
    pushToCounterArray: () => dispatch(pushToCounterArray())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxSelection);