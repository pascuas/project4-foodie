import React from 'react'


function Results(props) {
    console.log('results-page', props.restaurants)
    console.log('city-searched', props.city)
    return(
        <>
            <h1>This is the results page</h1>
        </>
    )
}

export default Results