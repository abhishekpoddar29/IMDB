const TvShowCard = (props) => (
    <div style={{ margin:'2%', maxHeight:'320px', display:'inline-block',flexWrap:'wrap', maxWidth:'240px'}}>
        <img src={props.image} alt={props.title+'-poster'}  style={{maxWidth:'240px'}} />
        <div className='legend' style={{textAlign:'center', margin:'auto', padding:'0.5em'}}>{props.title}</div>
    </div>
)

export default TvShowCard;