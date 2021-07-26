import React from 'react';
// styles
import './header.styles.scss';
import 'tachyons';
// Routing
import { Link } from 'react-router-dom';
// Redux
import { setCurrentAge, setCurrentGender } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const Header = ({setCurrentGender, setCurrentAge}) => {
    const linkColor = (linkToColor) => {
        const links =  document.querySelectorAll('.header-link');
        links.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.color = 'black';
        });
        console.log(linkToColor, 'linkToColor')
        const currentLink = document.getElementById(linkToColor);
        currentLink.style.backgroundColor = '#123c69';
        currentLink.style.color = 'white'
    }
    const sidePanels = () => {
        const panels =  document.querySelectorAll('.side-panel-category');
        panels.forEach(element => {
            element.style.backgroundColor = '#ac3b61';
            element.style.color = 'white'
        });
    }
    return(
    
    <div className="header bb tc mw-9 center mt2"> 
        <Link 
            id='homeLink'
            className='header-link home f6 f5-l black-80 dib pa3 mr5 ph4-l tracked ttu' 
            to='/'
            onClick={() => {linkColor('homeLink')}}  
            >Jól í skókassa
        </Link>
        <Link id='boysLink' className='header-link boys f6 f5-l black-80 dib pa3 pl4 ml4 ph4-l tracked ttu' 
            to='/boys'
            onClick={() => {setCurrentGender('boys'); setCurrentAge(''); sidePanels(); linkColor('boysLink')}} 
            >Strákar
        </Link>
        <Link 
            id='girlsLink'
            className='header-link girls f6 f5-l black-80 dib pa3 pl4 ml4 ph4-l tracked ttu' 
            to='/girls'
            onClick={() => {setCurrentGender('girls'); setCurrentAge(''); sidePanels(); linkColor('girlsLink')}} 
            >Stelpur
        </Link>
        <Link 
            id='headerLink'
            className='header-link statistics f6 f5-l black-80 dib pl4 ml6 pa3 ph4-l tracked ttu' 
            to='/statistics'
            onClick={() => {linkColor('headerLink')}}  
            >Tölfræði
        </Link>

    </div>

)};

const mapDispatchToProps = dispatch => ({
    setCurrentGender: gender => dispatch(setCurrentGender(gender)),
    setCurrentAge: age => dispatch(setCurrentAge(age))
})

export default connect(null, mapDispatchToProps)(Header);