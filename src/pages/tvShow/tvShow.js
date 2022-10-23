import React, { useEffect, useState } from "react";
import "./tvShow.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TvShowCard from "./TvShowCard";
const TVshow = () => {
    const [TvShow, setTvShow] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/MostPopularTVs/k_92jesjqa")
            .then(res => res.json())
            .then(data => setTvShow(data.items))
    }, [])
    return (
            <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        TvShow.map((tvShow,index) => {
                            return <TvShowCard key={index} {...tvShow} />
                        })
                    }
                </center>
    
            </div>
        
    );

};

export default TVshow