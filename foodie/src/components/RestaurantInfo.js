import React, {useState} from 'react'
import Image from 'react-bootstrap/Image'
import '../css/RestaurantInfo.css'
import {getResById, createImage} from '../services/api-helper'

function RestaurantInfo(props){
    const [newImage, setNewImage] = useState('')

    console.log('restaurant-info', props)
    let info = []
    for (let i=0; i< props.restaurants.length; i++)
    if (props.restaurants[i].Name === props.match.params.restaurant){
        info = props.restaurants[i]
    }
    

    console.log('info', info)

    if (!info.Images) {
        return <></>
    }

    const renderImages = info.Images.map((image, index) => {
        return(
            <>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img  src={image.image} />
            </Card> */}
            <Image style={{ width: '18rem' }} src={image.image} rounded/>
            </>
        )
    })

    const renderReviews = info.Reviews.map((review, index) => {
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
        // renderPage()
    }

    // const renderPage = async() => {
    //     const json = await getResById(info._id)
    //     let info = json
    // }

    return(
        <>
        <h1>This is restaurant info</h1>
        <div className='reviewContainer'>
            <h2>Reviews</h2>
            {renderReviews}
        </div>
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