import React from 'react'
import {Link} from 'react-router-dom'
import '../css/landingPage.css'


function LandingPage(props){
    return (
        <>
        <header className="landingContainer">
            <p>Foodie</p>
            <form className = "citySearch" onSubmit={props.citySubmit}>
                <label>Enter City, State Abbreviation</label><input type="text" placeholder="Ex. Los Angeles, CA"value={props.city} onChange={props.cityChange}/>
                <Link to={`/${props.city}`}><button>Search</button></Link>
            </form>
        </header>
        </>
    )
}

export default LandingPage