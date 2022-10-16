import React, { useEffect, useState } from "react";
import "./movie.css"
import movieCard from "./movieCard";

const Movie = () => {
    const [movies, setPopMovies] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/MostPopularMovies/k_92jesjqa")
            .then(res => res.json())
            .then(data => setPopMovies(data.items))
    }, [])
    return (
            <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        movies.map(movies => {
                            return <movieCard {...movies} />
                        })
                    }
                </center>
    
            </div>
        
    );

};

export default Movie