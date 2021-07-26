import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-page.styles.scss';
import SidePanel from '../../components/side-panel/side-panel.component';
import GiantBox from '../../components/giant-box/giant-box.component';
import TimeLog from '../../components/time-log/time-log.component';

import { connect } from 'react-redux';
import { setCurrentGender } from '../../redux/user/user.actions';


const CategoryPage = ({ location, setCurrentGender}) => {
    if(location.pathname === '/boys'){
        setCurrentGender('boys') 
    } else if (location.pathname === '/girls'){
        setCurrentGender('girls')
      }
    return (
        <div>
          <div className='category-page' >
            <SidePanel className='category-side-panel'/>
            <GiantBox className='giant-box' />
          </div>
          <div className='flex justify-center time-log'>
            <TimeLog />
          </div>
          
        </div>
        
    );
};

const mapDispatchToProps = dispatch => ({
    setCurrentGender: gender => dispatch(setCurrentGender(gender))
});

export default withRouter(connect(null, mapDispatchToProps)(CategoryPage));