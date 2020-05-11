import React from 'react'
import {Link} from 'react-router-dom'

function LandingPage(props){
    return (
        <>
        <h1>This is the landing page</h1>
        <form className = "citySearch" onSubmit={props.citySubmit}>
            <label>Enter City, State:</label><input type="text" value={props.city} onChange={props.cityChange}/>
            <Link to='/results'><button>Search</button></Link>
        </form>
        </>
    )
}

export default LandingPage