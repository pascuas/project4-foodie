import React, {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import '../css/RestaurantInfo.css'
import {getResById, createImage, createReview} from '../services/api-helper'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import UpdateInfo from './UpdateInfo'

function RestaurantInfo(props){
    const [newImage, setNewImage] = useState('')
    const [newReview, setNewReview] = useState('')
    const [newRate, setNewRate] = useState()
    const [info, setInfo] = useState([])
    const [images, setImages] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewForm, setReviewForm] = useState(false)
    const [imageForm, setImageForm] = useState(false)
    const [updateForm, setUpdateForm] = useState(false)

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
    

    const renderImages = images.map((image, index) => {
        return(
            <>
            <Image key={index} src={image.image} rounded/>
            </>
        )
    })

    const renderReviews = reviews.map((review, index) => {
        return(
            <>
                <div className="individualReview" key={index}>
                    {review.Rating === 5 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/></>}

                    {review.Rating === 4 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/></>}

                    {review.Rating === 3 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/></>}

                    {review.Rating === 2 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/></>}

                    {review.Rating === 1 && <>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/>
                    <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466602/Pictures/outline-star-16_hjphwu.png" alt=""/></>}
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
        setInfo(json)
    }

    const showReviewForm = () => {
        setReviewForm(!reviewForm)
        setImageForm(false)
        setUpdateForm(false)
    }

    const showImageForm = () => {
        setImageForm(!imageForm)
        setReviewForm(false)
        setUpdateForm(false)
    }

    const showUpdateForm = () => {
        setUpdateForm(!updateForm)
        setReviewForm(false)
        setImageForm(false)
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
            <button onClick={showUpdateForm}>Edit</button>
        </div>
        <div className="topButtons">
            <button onClick={showReviewForm}>Add A Review</button>
            <button onClick={showImageForm}>Add A Picture</button>
        </div>

        {updateForm && <UpdateInfo info={info} renderPage={renderPage}/>}
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
                Rate from 1-5
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