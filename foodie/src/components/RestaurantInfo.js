import React from 'react'
import Image from 'react-bootstrap/Image'
import '../css/RestaurantInfo.css'

function RestaurantInfo(props){
    console.log('restaurant-info', props)
    let info = []
    for (let i=0; i< props.restaurants.length; i++)
    if (props.restaurants[i].Name === props.match.params.restaurant){
        info = props.restaurants[i]
    }

    console.log('info', info.Images)

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
        </>
    )
}

export default RestaurantInfo