import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';

const HatsPage = (props) => (
console.log(props),
<div>
    <h1> HATS PAGE RENDERED</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
