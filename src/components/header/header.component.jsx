import React from 'react';
// styles
import './header.styles.scss';
import 'tachyons';
// Routing
import { Link } from 'react-router-dom';
// Redux
import { setCurrentAge, setCurrentCounterArray, setCurrentGender } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentCounterArray } from '../../redux/user/user.selector';

var itemConst = [];
var newArr = [{id: 0, boxesArray: []},{id: 1, boxesArray: []},{id: 2, boxesArray: []},{id: 3, boxesArray: []},{id: 4, boxesArray: []},{id: 5, boxesArray: []},{id: 6, boxesArray: []},{id: 7, boxesArray: []},{id: 8, boxesArray: []}, {id: 9, boxesArray: []}]
const Header = ({setCurrentGender, setCurrentAge, setCurrentCounterArray, selectCounterArray}) => {

    const getCategory = (number) => {
        if (selectCounterArray[0].boxesArray.length !== 0){
            return
        }
        // console.log('lolllolllo', selectCounterArray[0])
        fetch(`http://localhost:3001/category/1`)
        .then(response => response.json())
        .then(data => {
            if (data){
                itemConst = data;
            }
        }).then(() => sortCategories())
        .then(setCurrentCounterArray(newArr))
        // .then(() => console.log('newArr: ---- ', newArr))
        // .then(() => setCurrentCounterArray(newArr))
        
        
    }

    const sortCategories = () => {
        
        for (let i = 0; i < itemConst.length; i++){
            newArr[itemConst[i].stateid-1].boxesArray.push(itemConst[i].count)
        }
        // newArr[0].boxArr.push(123);

        // console.log('Hérna er rétt svar: ________ ',newArr);
        // return (
        //     newArr
        // );
        // setCurrentCounterArray(newArr)
        // this.setState({allCategoriesReturn: newArr});
        // console.log('state: allCategoriesReturn: ', this.state.allCategoriesReturn);
        
        // console.log('this.state.allCategories: ________ ',this.state.allCategories[1].stateid);
    }
    const myArr =  [
        {id: 0,
        boxesArray : [1]}, 
        {id: 1,
        boxesArray : [2]}, 
        {id: 2,
        boxesArray : [3]}, 
        {id: 3,
        boxesArray : [4]}, 
        {id: 4,
        boxesArray : [5]}, 
        {id: 5,
        boxesArray : [6]}, 
        {id: 6,
        boxesArray : [7]}, 
        {id: 7,
        boxesArray : [8]}, 
        {id: 8,
        boxesArray : [9]}, 
        {id: 9,
        boxesArray : [10]}];
    const linkColor = (linkToColor) => {
        const links =  document.querySelectorAll('.header-link');
        links.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.color = 'black';
        });
        console.log(linkToColor, 'linkToColor')
        const currentLink = document.getElementById(linkToColor);
        currentLink.style.backgroundColor = '#123c69';
        currentLink.style.backgroundColor = 'rgb(65, 64, 64)';
        currentLink.style.color = 'white'
    }
    const sidePanels = () => {
        const panels =  document.querySelectorAll('.side-panel-category');
        panels.forEach(element => {
            element.style.backgroundColor = 'rgb(65, 64, 64)';
            element.style.color = 'white'
        });
    }
    return(
    
    <div className="header bb tc mw-9 center mt2"> 
        <Link 
            id='homeLink'
            className='header-link home f6 f5-l black-80 dib pa3 mr5 ph4-l tracked ttu' 
            to='/'
            onClick={() => {linkColor('homeLink'); getCategory()}}  
            >Jól í skókassa
        </Link>
        <Link id='boysLink' className='header-link boys f6 f5-l black-80 dib pa3 pl4 ml4 ph4-l tracked ttu' 
            to='/boys'
            onClick={() => {setCurrentGender('boys'); setCurrentAge(''); sidePanels(); linkColor('boysLink'); getCategory()}} 
            >Strákar
        </Link>
        <Link 
            id='girlsLink'
            className='header-link girls f6 f5-l black-80 dib pa3 pl4 ml4 ph4-l tracked ttu' 
            to='/girls'
            onClick={() => {setCurrentGender('girls'); setCurrentAge(''); sidePanels(); linkColor('girlsLink'); getCategory()}} 
            >Stelpur
        </Link>
        <Link 
            id='headerLink'
            className='header-link statistics f6 f5-l black-80 dib pl4 ml6 pa3 ph4-l tracked ttu' 
            to='/statistics'
            onClick={() => {linkColor('headerLink');  getCategory()}}  
            >Tölfræði
        </Link>

    </div>

)};

const mapDispatchToProps = dispatch => ({
    setCurrentGender: gender => dispatch(setCurrentGender(gender)),
    setCurrentAge: age => dispatch(setCurrentAge(age)),
    setCurrentCounterArray: counterArray => dispatch(setCurrentCounterArray(counterArray))
});

const mapStateToProps = createStructuredSelector ({
    selectCounterArray: selectCurrentCounterArray
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);