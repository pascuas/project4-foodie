import React, {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import '../css/RestaurantInfo.css'
import {getResById, createImage, createReview} from '../services/api-helper'

function RestaurantInfo(props){
    const [newImage, setNewImage] = useState('')
    const [newReview, setNewReview] = useState('')
    const [info, setInfo] = useState([])
    const [images, setImages] = useState([])
    const [reviews, setReviews] = useState([])

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
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img  src={image.image} />
            </Card> */}
            <Image style={{ width: '18rem' }} src={image.image} rounded/>
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

    return(
        <>
        <h1>This is restaurant info</h1>
        <div className='reviewContainer'>
            <h2>Reviews</h2>
            {renderReviews}
        </div>
        <form onSubmit={reviewSubmit}>
            <label>Review:</label><input type="text" value={newReview} onChange={reviewChange}/>
            <button>Add</button>
        </form> 
        <h2>Images</h2>
        <div className="imageContainer">
            {renderImages}
        </div>
        <form onSubmit={imageSubmit}>
            <label>Image Url:</label><input type="text" value={newImage} onChange={imageChange}/>
            <button>Add</button>
        </form> 
        </> 
    )
}

export default RestaurantInfo