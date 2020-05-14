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
    const [newRate, setNewRate] = useState()
    const [info, setInfo] = useState([])
    const [images, setImages] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewForm, setReviewForm] = useState(false)
    const [imageForm, setImageForm] = useState(false)
    // const [rateTotal, setRateTotal] = useState(0)

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
                <div className="individualReview">
                    {review.Rating === 5 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/></>}

                    {review.Rating === 4 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/></>}

                    {review.Rating === 3 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/></>}

                    {review.Rating === 2 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/></>}

                    {review.Rating === 1 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png"/></>}
                    <p>"{review.Review}"</p>
                    
                </div>
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

    const rateChange = (e) => {
        setNewRate(e.target.value)
    }

    const reviewSubmit = async(e) => {
        e.preventDefault()
        const json = await createReview(info._id, {"Review": newReview, "Rating": newRate})
        setNewReview('')
        setNewRate('')
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
            <p><span>{info.Cost}</span></p>
            <p>{info.Description}</p>
            <p>{info.Address}, {info.CityState}</p>
            <p>{info.PhoneNum}</p>
        </div>
        <div className="topButtons">
            <button onClick={showReviewForm}>Write A Review</button>
            <button onClick={showImageForm}>Add A Picture</button>
        </div>

        {reviewForm &&
        <Form className="formAdd"onSubmit={reviewSubmit}>
            <Form.Control as="textarea" rows="3" type="text" placeholder="Enter your review here..."value={newReview} onChange={reviewChange} required="required"/>
            <Form.Control as="select" type="number" value={newRate} onChange={rateChange} required="required">
                        <option disabled value="" selected hidden>Rate</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
            </Form.Control>
            <Form.Text className="text-muted">
                Rate the restaurant from 1-5
            </Form.Text>
            <button>Add</button>
        </Form>}

        {imageForm && 
        <Form className="formAdd"onSubmit={imageSubmit}>
            <Form.Control type="text" placeholder="Image File"value={newImage} onChange={imageChange} required="required"/>
            <Form.Text className="text-muted">
                Accepts .apng, .bmp, .gif, .ico, .cur, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg, .tif, .tiff, .webp
            </Form.Text>
            <button>Add</button>
        </Form>} 

        <h2 className="imageText">Images</h2>
        <div className="imageContainer">
            {renderImages}
        </div>
        <div className='reviewContainer'>
            <h2>Reviews</h2>
            {renderReviews.reverse()}
        </div>
        </> 
    )
}

export default RestaurantInfo