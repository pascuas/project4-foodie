import React, {useState} from 'react'
import {createRes} from '../services/api-helper'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/addRestaurant.css'

function AddRestaurant() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [cost, setCost] = useState('')
    const [cityState, setCityState] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const descriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const typeChange = (e) => {
        setType(e.target.value)
    }

    const costChange = (e) => {
        setCost(e.target.value)
    }

    const cityStateChange = (e) => {
        setCityState(e.target.value)
    }

    const addressChange = (e) => {
        setAddress(e.target.value)
    }

    const phoneChange = (e) => {
        setPhoneNum(e.target.value)
    }

    const restaurantSubmit = async(e) => {
        e.preventDefault()
        const json = await createRes({"Name": name, "Description": description, "Type": type,
                                        "Cost": cost, "CityState": cityState, "Address": address, "PhoneNum": phoneNum})
        setName('')
        setDescription('')
        setType('')
        setCost('')
        setCityState('')
        setAddress('')
        setPhoneNum('')
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Foodie</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    {/* <Nav.Link as={Link} to="/">Search</Nav.Link>  */}
                </Nav>
            </Navbar>
            {/* <form onSubmit={restaurantSubmit}>
                <label>Restaurant Name:</label><input type="text" value={name} onChange={nameChange}/><br/>
                <label>Description:</label><input type="text" value={description} onChange={descriptionChange}/><br/>
                <label>Type:</label><input type="text" value={type} onChange={typeChange}/><br/>
                <label>Cost:</label><input type="text" value={cost} onChange={costChange}/><br/>
                <label>CityState:</label><input type="text" value={cityState} onChange={cityStateChange}/><br/>
                <label>Address:</label><input type="text" value={address} onChange={addressChange}/><br/>
                <label>Phone Number:</label><input type="text" value={phoneNum} onChange={phoneChange}/><br/>
                <button>Add Restaurant</button>
            </form> */}
            <Form onSubmit={restaurantSubmit}>
                <Form.Group>
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={nameChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Cafe, Breakfast & Brunch, Pizza, etc" maxLength="25" value={description} onChange={descriptionChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Lunch, Dessert, etc" maxLength="20" value={type} onChange={typeChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cost</Form.Label>
                    <Form.Control as="select" type="text" value={cost} onChange={costChange}>
                        <option>$</option>
                        <option>$$</option>
                        <option>$$$</option>
                    </Form.Control>
                    <Form.Text className="text-muted">
                        Determine the cost of the restaurant 
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>City & State Abbreviation</Form.Label>
                    <Form.Control type="text" placeholder="Los Angeles, CA" maxLength="30" value={cityState} onChange={cityStateChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" placeholder="224 Seir Ave" maxLength="30" value={address} onChange={addressChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="text" placeholder="(123) 456-7891" value={phoneNum} onChange={phoneChange}/>
                </Form.Group>
                <Button type="submit">Add Restaurant</Button>
            </Form>
            
        </>
    )
}

export default AddRestaurant