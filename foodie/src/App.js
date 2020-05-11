import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render = {() => < LandingPage />} />

      </Switch>
    </>
  );
}

export default App;
