import React, {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import '../css/RestaurantInfo.css'
import {getResById, createImage, createReview} from '../services/api-helper'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

function RestaurantInfo(props){
    const [newImage, setNewImage] = useState('')
    const [newReview, setNewReview] = useState('')
    const [info, setInfo] = useState([])
    const [images, setImages] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewForm, setReviewForm] = useState(false)
    const [imageForm, setImageForm] = useState(false)

    console.log('restaurant-info', props)

    useEffect(() => {
        const APICall = async() => {
            for (let i =0; i < props.restaurants.length; i++)
            if (props.restaurants[i].Name === props.match.params.restaurant){
                setInfo(props.restaurants[i])
                setImages(props.restaurants[i].Images)
                setReviews(props.restaurants[i].Reviews)
            }
        }
        APICall()
    }, [])
    

    console.log('info', info)
    console.log('images', images)
    console.log('reviews', reviews)


    const renderImages = images.map((image, index) => {
        return(
            <>
            <Image src={image.image} rounded/>
            </>
        )
    })

    const renderReviews = reviews.map((review, index) => {
        return(
            <>
                <p>"{review.Review}"</p>
            </>
        )
    })

    const imageChange = (e) => {
        setNewImage(e.target.value)
    }

    const imageSubmit = async(e) => {
        e.preventDefault()
        const json = await createImage(info._id, {"image": newImage})
        setNewImage('')
        renderPage()
    }

    const reviewChange = (e) => {
        setNewReview(e.target.value)
    }

    const reviewSubmit = async(e) => {
        e.preventDefault()
        const json = await createReview(info._id, {"Review": newReview})
        setNewReview('')
        renderPage()
    }

    const renderPage = async() => {
        const json = await getResById(info._id)
        setImages(json.Images)
        setReviews(json.Reviews)
    }

    const showReviewForm = () => {
        setReviewForm(!reviewForm)
    }

    const showImageForm = () => {
        setImageForm(!imageForm)
    }

    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to={`/${info.CityState}`}>Back to Results</Nav.Link>
            </Nav>
        </Navbar>
        <div className="topInfo">
            <h1>{info.Name}</h1>
            <p>{info.Cost}  {info.Description}</p>
            <p>{info.Address}, {info.CityState}</p>
            <p>{info.PhoneNum}</p>
        </div>
        <div className="topButtons">
            <button onClick={showReviewForm}>Write A Review</button>
            <button onClick={showImageForm}>Add A Picture</button>
        </div>

        {reviewForm &&<Form onSubmit={reviewSubmit}>
            <Form.Label>Review:</Form.Label><Form.Control as="textarea" rows="3" type="text" value={newReview} onChange={reviewChange}/>
            <button>Add</button>
        </Form>}

        {imageForm && <Form onSubmit={imageSubmit}>
            <Form.Label>Image Url:</Form.Label><Form.Control type="text" value={newImage} onChange={imageChange}/>
            <button>Add</button>
        </Form>} 

        <div className='reviewContainer'>
            <h2>Reviews</h2>
            {renderReviews}
        </div>
        <h2>Images</h2>
        <div className="imageContainer">
            {renderImages}
        </div>
        </> 
    )
}

export default RestaurantInfo