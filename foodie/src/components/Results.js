import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Results(props) {
    console.log('results-page', props.restaurants)
    console.log('city-searched', props.city)

    let cityRestaurants = props.restaurants.filter(restaurant => restaurant.CityState === props.city)
    console.log('cityRestaurants', cityRestaurants)

    const renderRestaurants = cityRestaurants.map((restaurant, index) => {
        return(
            <Card style={{ width: '18rem' }}>
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
                    <Nav.Link href="#home">Search Again</Nav.Link>
                    <Nav.Link as={Link} to="/add/your/restaurant">Add Your Business</Nav.Link>
                </Nav>
            </Navbar>
            <h1>This is the results page</h1>
            {renderRestaurants}
        </>
    )
}

export default Results