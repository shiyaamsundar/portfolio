import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {MovieState} from '../movieState'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'


const MovieDetail=()=> {

    const history=useHistory();
    const url=history.location.pathname;
    const [movies,setMovies]=useState(MovieState)
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        const currmovie=movies.filter((stateMovie)=>stateMovie.url===url)
        setMovie(currmovie[0])
    },[movies,url])




    return (
        <>
        {movie && (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Headline>
    <h2>{movie.title}</h2>
    <img src={movie.mainImg} alt="movie"/>
            </Headline>
            <Awards>
            {movie.awards.map((award)=>(
                <Award title={award.title} description={award.description} key={award.title}/>
            ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg}/>
            </ImageDisplay>
        </Details>
        )}
        </>
    )
}

const Award=({title,description})=>{
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
    <p>{description}</p>
        </AwardStyle>
    )
}

const ImageDisplay=styled.div`
min-width: 50vh;
img{
    width:100%;
    height:100vh;
    object-fit:cover;
}

`;

const Awards=styled.div`
min-height:80vh;
display:flex;
margin:5rem 8rem;
align-items:center;
justify-content:space-around;

`;

const AwardStyle=styled.div`
padding:5rem;
h3{
    font-size:2rem;
}
.line{
    width:80%;
    background:#23d997;
    height:0.5rem;
    margin:1rem 0rem;

}
p{
    padding:2rem 0rem;

}

`;


const Details=styled(motion.div)`
color:white;

`;
const Headline=styled.div`
min-height:90vh;
padding-top:20vh;
position:relative;
h2{
    position:absolute;
    top:10%;
    left:50%;
    transform:translate(-50%,-10%);
}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}


`;


export default MovieDetail
