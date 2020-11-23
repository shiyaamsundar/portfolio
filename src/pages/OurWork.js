import { motion } from 'framer-motion'
import React from 'react'
import { fadeanim, pageAnimation, photoanim ,lineanim, slider, slidercontainer} from '../animation'
import styled from 'styled-components'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import { Link } from 'react-router-dom'
import UseScrool from '../components/UseScrool'
import ScrollTop from '../components/ScrollTop'



const OurWork=()=> {
    const [element,control]=UseScrool()
    const [element2,control2]=UseScrool()


    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#fff"}}>
            <motion.div variants={slidercontainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2  variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div>
        <Movie variants={fadeanim}>
        <motion.h2 variants={fadeanim}>The Athelete</motion.h2>
        <motion.div variants={lineanim} className="line"></motion.div>
        <Link to="/work/the-athlete">
        <motion.img variants={photoanim} src={athlete} alt="athlete"/></Link>
        
        </Movie>
        <Movie ref={element2} variants={fadeanim} animate={control2} initial="hidden">
        <motion.h2 variants={fadeanim}>The Racer</motion.h2>
        <motion.div className="line" variants={lineanim}></motion.div>
        <Link to="/work/the-racer">
        <Hide>
        <motion.img variants={photoanim} src={theracer} alt="theracer"/></Hide></Link>
        
        </Movie>
        <Movie ref={element} variants={fadeanim} animate={control} initial="hidden">
        <motion.h2 variants={fadeanim}>Good Times</motion.h2>
        <motion.div className="line" variants={lineanim}></motion.div>
        <Link to="/work/good-times" onClick="">
        <Hide><motion.img variants={photoanim} src={goodtimes} alt="goodtimes "/></Hide></Link>
       
        </Movie>
        <ScrollTop/>
        </Work>
    )
}

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Hide=styled.div`
overflow:hidden;
`;


const Work=styled(motion.div)`
min-height:100vh;
overflow:hidden;
padding:5rem 10rem;
h2{
    padding:1rem 0rem;
    color:black;
}
@media (max-width:1300px){
  padding:2rem 2rem; 
}

`;

const Movie=styled(motion.div)`
padding-bottom:10rem;
.line{
    height:0.5rem;
    background:#23d997;
    margin-bottom:3rem;

}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}

`;

export default OurWork
