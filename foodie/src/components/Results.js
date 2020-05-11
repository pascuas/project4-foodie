import React from 'react'


function Results(props) {
    console.log('results-page', props.restaurants)
    console.log('city-searched', props.city)

    let cityRestaurants = props.restaurants.filter(restaurant => restaurant.CityState === props.city)
    console.log('cityRestaurants', cityRestaurants)

    
    return(
        <>
            <h1>This is the results page</h1>
        </>
    )
}

export default Results