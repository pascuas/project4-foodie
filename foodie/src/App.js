import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Results from './components/Results'
import RestaurantInfo from './components/RestaurantInfo'
import AddRestaurant from './components/AddRestaurant'
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
    setCity('')
  }

  return (
    <>
      <Switch>
        <Route exact path="/" render = {() => <LandingPage cityChange={cityChange} citySubmit={citySubmit}city={city}/>} />
        <Route exact path="/:city" render = {(routerProps) => <Results restaurants = {restaurants} city={city}{...routerProps}/>} />
        <Route exact path="/:city/:restaurant" render = {(routerProps) => <RestaurantInfo restaurants = {restaurants}{...routerProps}/>} />
        <Route exact path="/add/your/restaurant" render={() => <AddRestaurant/>} />
      </Switch>
    </>
  );
}

export default App;
