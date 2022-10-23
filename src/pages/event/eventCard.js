const EventCard = (props) => (
    <div style={{ margin:'1%', maxHeight:'320px', display:'inline-block',flexWrap:'wrap', maxWidth:'240px'}}>
        <div className='legend' style={{textAlign:'center', margin:'auto', padding:'0.5em'}}>{props.eventTitle}</div>
    </div>
)

export default EventCard;