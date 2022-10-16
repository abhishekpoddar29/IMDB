import React, { useEffect, useState } from "react";
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "./Cards";
const Home = () => {
    const [popularMovies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/BoxOffice/k_92jesjqa")
            .then(res => res.json())
            .then(data => setMovies(data.items))
    }, [])
    return (
            <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        popularMovies.map(movie => {
                            return <Cards {...movie} />
                        })
                    }
                </center>
    
            </div>
        
    );

};

export default Home