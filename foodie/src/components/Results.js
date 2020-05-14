import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/resultsPage.css'


function Results(props) {
    console.log('results-page', props.restaurants)
    console.log('city-searched', props.city)

    let cityRestaurants = props.restaurants.filter(restaurant => restaurant.CityState.toLowerCase().replace(/\s+/g,'') === props.city.toLowerCase().replace(/\s+/g,''))
    console.log('cityRestaurants', cityRestaurants)
    

    const renderRestaurants = cityRestaurants.map((restaurant, index) => {
        return(
            <Card>
                {restaurant.Images[0] ? <Card.Img variant="top" src={restaurant.Images[0].image} /> : <Card.Img variant="top" src="https://www.sbdcnet.org/wp-content/themes/consultix/images/no-image-found-360x250.png" />} 
                <Card.Body>
                    <Card.Title>{restaurant.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{restaurant.Cost}  {restaurant.Description || restaurant.Type}</Card.Subtitle>
                    <Card.Text>
                        {restaurant.Address}  {restaurant.CityState}
                    </Card.Text>
                    <Card.Link><Link to={`/${props.city}/${restaurant.Name}`}>More Info</Link></Card.Link>
                </Card.Body>
            </Card>
        )
    })

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Foodie</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search Again</Nav.Link>
                    <Nav.Link as={Link} to="/add/your/restaurant">Add Your Business</Nav.Link>
                </Nav>
            </Navbar>
            {cityRestaurants.length === 0 &&
            <h1>No restaurants were found. Please search again</h1>
            }
            <div className="resultsContainer">
                {renderRestaurants}
            </div>
        </>
    )
}

export default Results