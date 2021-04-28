import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from '../src/pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
