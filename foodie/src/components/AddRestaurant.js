import React, {useState} from 'react'
import {createRes} from '../services/api-helper'
import {Link} from 'react-router-dom'

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
        const json = await createRes({"Name": name, "Descritpion": description, "Type": type,
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
            <h1>This is add restaurant page</h1>
            <form onSubmit={restaurantSubmit}>
                <label>Restaurant Name:</label><input type="text" value={name} onChange={nameChange}/><br/>
                <label>Description:</label><input type="text" value={description} onChange={descriptionChange}/><br/>
                <label>Type:</label><input type="text" value={type} onChange={typeChange}/><br/>
                <label>Cost:</label><input type="text" value={cost} onChange={costChange}/><br/>
                <label>CityState:</label><input type="text" value={cityState} onChange={cityStateChange}/><br/>
                <label>Address:</label><input type="text" value={address} onChange={addressChange}/><br/>
                <label>Phone Number:</label><input type="text" value={phoneNum} onChange={phoneChange}/><br/>
                <Link to="/"><button>Add Restaurant</button></Link>
            </form>
        </>
    )
}

export default AddRestaurant