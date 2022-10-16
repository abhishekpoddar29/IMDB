import React, { useEffect, useState } from "react";
import "./event.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import eventCard from "./eventCard";

const Event = () => {
    const [Event, setEvent] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/Awards/k_92jesjqa/tt1375666")
            .then(res => res.json())
            .then(data => setEvent(data.items))
    }, [])
    return (
            <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        Event.map(event => {
                            return <eventCard {...event} />
                        })
                    }
                </center>
    
            </div>
        
    );

};

export default Event