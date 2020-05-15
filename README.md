# Capstone Project

## Foodie
The Foodie application allows users to search for places to eat or drink within the city they search for. With the application, the users can 
1. Add a review to a business.
2. Post their own picture of the bussiness, such as food, drinks, dessert, or anything related to the place.
3. Add a restaurant if the restaurant hasn't been created yet.

## Motivation
This was a chance for us in my coding bootcamp to build anything that we wanted. With this being the first time on my own building a full stack app, I wanted to reinforce the material that we learned throughout the 3 months of the bootcamp. Therefore, I used MongoDB, Express, React, and Node to build this application. Additionally, I always love trying new places to eat or drink and a fun way of doing this project was making an application where I can see the reviews and pictures of the place. Also, having the ability to see pictures and reviews of a place allows me to make a decision if I am going to try it or not. 

## Build Status
Live Link

## How It Looks

## Built With
MongoDB, Express, React, Node
(Addtional: React-BootStrap)

## Features
* On the landing page, the user can search for places by entering the city and state abbreviation in the input field.
* On the results page, a user will either see a list of places to eat or drink, or see an error message saying to search again or add a business.
* On the individual business's page, a user can see some general information of the place and the reviews and pictures related to the business.
* User can add their own review.
* User can add their own picture.
* User can add a business if it hasn't been created yet.
* User can edit the business's information if the business changed their information, such as their address or phone number.

## Code Example
```
### This was used to determine if there was a match to their search ###

let cityRestaurants = props.restaurants.filter(restaurant => restaurant.CityState.toLowerCase().replace(/\s+/g,'') === props.city.toLowerCase().replace(/\s+/g,''))

{cityRestaurants.length === 0 &&
            <h1 className="error">Sorry, no results. Please search again or add a business.</h1>
            }



### This is a code snippet on how the reviews were rendered ###

const renderReviews = reviews.map((review, index) => {
    return(
       <>
        <div className="individualReview" key={index}>
            {review.Rating === 5 && <>
             <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png"alt=""/>
             <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
             <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
             <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/>
         <img src="https://res.cloudinary.com/drxoihdbb/image/upload/v1589466164/Pictures/star-8-16_etvyow.png" alt=""/></>}
          <p>"{review.Review}"<p>
        </div> 

```
