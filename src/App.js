import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Styles
import './App.scss';
// Components
import Header from './components/header/header.component';
// Pages
import HomePage from './pages/home-page/home-page.component';
import StatisticsPage from './pages/statistics-page/statistics-page.component';
import CategoryPage from './pages/category-page/category-page.component';
import TestNew from './pages/test-new/test-new.component';

// WithRouter
import { withRouter } from 'react-router';

import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      currentCounterArray : [
        {id: 0,
        boxesArray : []}, 
        {id: 1,
        boxesArray : []}, 
        {id: 2,
        boxesArray : []}, 
        {id: 3,
        boxesArray : []}, 
        {id: 4,
        boxesArray : []}, 
        {id: 5,
        boxesArray : []}, 
        {id: 6,
        boxesArray : []}, 
        {id: 7,
        boxesArray : []}, 
        {id: 8,
        boxesArray : []}, 
        {id: 9,
        boxesArray : []}]
    }
  } 

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  render() {
    return (
    
      <div className='app' >
        <Header /> 
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/boys'><CategoryPage /></Route>
          <Route exact path='/girls'><CategoryPage/></Route>
          <Route exact path='/statistics' component={StatisticsPage}/>
        </Switch>
 
      </div>

  );
  }

}


export default withRouter(App);
