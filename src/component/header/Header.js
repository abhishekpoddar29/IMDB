import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/movie" style={{textDecoration: "none"}}><span>MOVIES</span></Link>
                <Link to="/movies/tvshow" style={{textDecoration: "none"}}><span>TV SHOW</span></Link>
                <Link to="/movies/events" style={{textDecoration: "none"}}><span>EVENTS</span></Link>
            </div>
        </div>
    )
}

export default Header
