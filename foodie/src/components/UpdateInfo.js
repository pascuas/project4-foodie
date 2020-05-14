import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {updateRes} from '../services/api-helper'

function UpdateInfo(props) {
    console.log('propsprops', props)
    const [description, setDescription] = useState('')
    const [cityState, setCityState] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNum, setPhoneNum] = useState('')


    const descriptionChange = (e) => {
        setDescription(e.target.value)
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

    const updateSubmit = async(e) => {
        e.preventDefault()
        const json = await updateRes(props.info._id, {"Description": description, "CityState": cityState, "Address": address, "PhoneNum": phoneNum})
        props.renderPage()
        setDescription('')
        setCityState('')
        setAddress('')
        setPhoneNum('')
    }


    return (
        <>
            <Form onSubmit={updateSubmit} className="formAdd">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder={props.info.Description} maxLength="25" value={description} onChange={descriptionChange} required="required"/>
                <Form.Label>City & State Abbreviation</Form.Label>
                <Form.Control type="text" placeholder={props.info.CityState} maxLength="30" value={cityState} onChange={cityStateChange} required="required"/>
                <Form.Label>Address:</Form.Label>
                <Form.Control type="text" placeholder={props.info.Address} maxLength="30" value={address} onChange={addressChange} required="required"/>
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="text" placeholder={props.info.PhoneNum} value={phoneNum} onChange={phoneChange} required="required"/>
                <button>Update</button>      
            </Form>
        </>
    )
}

export default UpdateInfo