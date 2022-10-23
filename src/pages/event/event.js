import React, { useEffect, useState } from "react";
import "./event.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventCard from "./EventCard";
const Event = () => {
    const [events, setEvent] = useState([])
    useEffect(() => {
        fetch("https://imdb-api.com/en/API/NameAwards/k_92jesjqa/nm0000154")
            .then(res => res.json())
            .then(data => setEvent(data.items))
    }, [])
    return (
            <div style={{display:'block', flexWrap:'warp', justifyContent:'center', alignItems:'center',maxWidth:'100vw'}}>
                <center>
                    {
                        events.map((event, index) => {
                            return <EventCard key={index} {...event} />
                        })
                    }
                </center>
    
            </div>
        
    );

};

export default Event