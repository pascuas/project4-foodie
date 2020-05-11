import React from 'react'
import {Card} from 'react-bootstrap'


function Results(props) {
    console.log('results-page', props.restaurants)
    console.log('city-searched', props.city)

    let cityRestaurants = props.restaurants.filter(restaurant => restaurant.CityState === props.city)
    console.log('cityRestaurants', cityRestaurants)

    const renderRestaurants = cityRestaurants.map((restaurant, index) => {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={restaurant.Images[0].image} />
                <Card.Body>
                    <Card.Title>{restaurant.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{restaurant.Cost}  {restaurant.Description}</Card.Subtitle>
                    <Card.Text>
                        {restaurant.Address}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    })

    return(
        <>
            <h1>This is the results page</h1>
            {renderRestaurants}
        </>
    )
}

export default Results