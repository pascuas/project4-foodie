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
            <Image src={image.image} rounded />
        )
    })

    return(
        <>
        <h1>This is restaurant info</h1>
        <div className="imageContainer">
            {renderImages}
        </div>
        </>
    )
}

export default RestaurantInfo