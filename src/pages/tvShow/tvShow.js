import React, { useEffect, useState } from "react";
import "./tvShow.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tvShowCard from "./tvShowCard";
const TVshow = () => {
    const [tvShow, setTvShow] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/MostPopularTVs/k_92jesjqa")
            .then(res => res.json())
            .then(data => setTvShow(data.items))
    }, [])
    return (
            <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        tvShow.map(tvShow => {
                            return <tvShowCard {...tvShow} />
                        })
                    }
                </center>
    
            </div>
        
    );

};

export default TVshow