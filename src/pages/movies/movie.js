import React, { useEffect, useState } from "react";
import "./movie.css"
import MovieCard from "./MovieCard";
const Movie = () => {
    const [Movies, setPopMovies] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/MostPopularMovies/k_92jesjqa")
            .then(res => res.json())
            .then(data => setPopMovies(data.items))
    }, [])
    return (
        <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        Movies.map((movies,index) => {
                            return <MovieCard key={index} {...movies} />
                        })
                    }
                </center>
    
            </div>
    );

};

export default Movie