import React, {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import '../css/RestaurantInfo.css'
import {getResById, createImage} from '../services/api-helper'

function RestaurantInfo(props){
    const [newImage, setNewImage] = useState('')
    const [info, setInfo] = useState([])
    const [images, setImages] = useState([])

    console.log('restaurant-info', props)
    // let info = []
    // for (let i=0; i< props.restaurants.length; i++)
    // if (props.restaurants[i].Name === props.match.params.restaurant){
    //     info = props.restaurants[i]
    // }
    useEffect(() => {
        const APICall = async() => {
            for (let i =0; i < props.restaurants.length; i++)
            if (props.restaurants[i].Name === props.match.params.restaurant){
                setInfo(props.restaurants[i])
                setImages(props.restaurants[i].Images)
            }
        }
        APICall()
    }, [])
    

    console.log('info', info)
    console.log('images', images)

    // if (!info.Images) {
    //     return <></>
    // }

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

    // const renderReviews = info.Reviews.map((review, index) => {
    //     return(
    //         <>
    //             <p>"{review.Review}"</p>
    //         </>
    //     )
    // })

    const imageChange = (e) => {
        setNewImage(e.target.value)
    }

    const imageSubmit = async(e) => {
        e.preventDefault()
        const json = await createImage(info._id, {"image": newImage})
        setNewImage('')
        renderPage()
    }

    const renderPage = async() => {
        const json = await getResById(info._id)
        setImages(json.Images)
    }

    return(
        <>
        <h1>This is restaurant info</h1>
        <div className='reviewContainer'>
            <h2>Reviews</h2>
            {/* {renderReviews} */}
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