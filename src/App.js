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

// WithRouter
import { withRouter } from 'react-router';

function App() {

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


export default withRouter(App);
