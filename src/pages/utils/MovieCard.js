import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const MovieCard = (props) => (
    <div 
        style={{ 
            margin:'2%', 
            height:'330px', 
            display:'inline-block',
            flexWrap:'wrap', 
            width:'240px'
           
        }}
    >
        <Card 
            style={{
                width:'100%', 
                height:'100%', 
                background:'none', 
                cursor:'pointer',
                transition:'all 0.2s ease', 
                boxShadow:'0px 0px 15px rgba(255,255,255,0.5)',
                border:'none',
                borderRadius:'0.5em'
            }}
            id='movie-card'
        >
            <CardMedia 
                image={props.image} 
                style={{
                    height:'300px', 
                    width:'240px',
                    borderTopLeftRadius:'0.5em',
                    borderTopRightRadius:'0.5em'
                }} 
            />
            <CardContent 
                className='legend' 
                style={{
                    borderTop:'0.5px solid grey', 
                    color:'white',
                    padding:'0.5em 0.5em',
                    borderBottomLeftRadius:'0.5em',
                    borderBottomRightRadius:'0.5em',
                    transition:'all 0.3s ease'
                }}
            >
                <div 
                    style={{
                        textAlign:'center', 
                        width:'100%',
                        height:'1.25em',
                        fontSize:'0.8em',
                        fontFamily:'Algerian sans-serif',
                        letterSpacing:'0.07em',
                        whiteSpace:'nowrap',
                        overflow:'hidden',
                        textOverflow:'ellipsis'
                    }}
                >
                    {props.title}
                </div>
            </CardContent>
        </Card>
    </div>
)


export default MovieCard;