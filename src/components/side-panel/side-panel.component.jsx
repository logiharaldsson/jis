import React from 'react';
// Styles
import './side-panel.styles.scss';
// Data
import JIS_DATA from '../../jis-data';
// Redux
import { setCurrentAge, setCurrentId, setCurrentCounterBox } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentAge, selectCurrentGender } from '../../redux/user/user.selector';



const SidePanel = ({ setCurrentAge, setCurrentId, currentGender, setCurrentCounterBox }) => {
    
    console.log(currentGender, 'currentGender')
    const sidePanelClassNames = ['one', 'two', 'three', 'four', 'five'];
    const sidePanelAge = ['0-2 ára', '3-6 ára', '7-10 ára', '11-14 ára', '15+ ára'];
    const sidePanels = (idRef) => {
        const panels =  document.querySelectorAll('.side-panel-category');
        const currentPanel = document.getElementById(idRef);
        panels.forEach(element => {
            element.style.backgroundColor = '#AC3B61';
            element.style.color = 'white'
        });
        currentPanel.style.backgroundColor = '#123C69';
        currentPanel.style.color = 'white'
    }
    return(
        // <div className="side-panel">
        //     {JIS_DATA.map((user, i) => {
        //         return JIS_DATA[i].gender === currentGender ? (
        //             <div id={sidePanelClassNames[i]} className={`side-panel-category ${sidePanelClassNames[i]}`} 
        //                 onClick={() => {
        //                     setCurrentAge(JIS_DATA[i].age); 
        //                     setCurrentId(JIS_DATA[i].id-1); 
        //                     setCurrentCounterBox(0);
        //                     sidePanels(sidePanelClassNames[i])}} 
        //                 key={i}>
        //                 {JIS_DATA[i].age}
        //             </div>
        //         ) : null
        //         })
        //     }

        // </div>

        // Here is my task
        <div className="side-panel">
        {sidePanelAge.map((user, i) => {
            let constId = 0;
            if(currentGender === 'girls'){
                constId = 5;
            }
            return (
                <div id={sidePanelClassNames[i]} className={`side-panel-category ${sidePanelClassNames[i]}`} 
                    onClick={() => {
                        setCurrentAge(user); 
                        setCurrentId(i+constId); 
                        setCurrentCounterBox(0);
                        sidePanels(sidePanelClassNames[i])}} 
                    key={i}>
                    {JIS_DATA[i].age}
                </div>
            )
            })
        }

    </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    currentGender: selectCurrentGender,
    currentAge: selectCurrentAge
})

const mapDispatchToProps = dispatch => ({
    setCurrentAge: age => dispatch(setCurrentAge(age)),
    setCurrentId: id => dispatch(setCurrentId(id)),
    setCurrentCounterBox: CounterBox => dispatch(setCurrentCounterBox(CounterBox))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);