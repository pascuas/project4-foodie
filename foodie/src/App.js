import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Results from './components/Results'
import {getAllRes} from './services/api-helper'

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllRes()
      setRestaurants(resp)
      setIsloading(false)
    }
    makeAPICall()
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/" render = {() => <LandingPage />} />
        <Route exact path="/results" render = {() => <Results restaurants = {restaurants}/>} />

      </Switch>
    </>
  );
}

export default App;
