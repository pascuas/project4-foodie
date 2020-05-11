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
  const [city, setCity] = useState('')

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllRes()
      setRestaurants(resp)
      setIsloading(false)
    }
    makeAPICall()
  }, [])

  const cityChange = (e) => {
    setCity(e.target.value)
  }

  const citySubmit = async(e) => {
    e.preventDefault()
  }

  return (
    <>
      <Switch>
        <Route exact path="/" render = {() => <LandingPage cityChange={cityChange} citySubmit={citySubmit}/>} />
        <Route exact path="/results" render = {() => <Results restaurants = {restaurants} city={city}/>} />

      </Switch>
    </>
  );
}

export default App;
