import { motion } from 'framer-motion'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'


const Nav=()=> {
    const {pathname}=useLocation();

    return (
        <StykledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1.About Us</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/'?'50%':'0%'}}/>
                </li>
                <li>
                    <Link to="/work">2.Our Work</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/work'?'50%':'0%'}}/>
                </li>
                <li>
                    <Link to="/contactus">3.Contact Us</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/contactus'?'50%':'0%'}}/>
                </li>
            </ul>
            
        </StykledNav>
    )
}

const Line=styled(motion.div)`
height:0.3rem;
background:#23d997;
width:5%;
position:absolute;
bottom:-80%;
@media (max-width:1300px){
    left:0%
}

`;


const StykledNav=styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
padding:1rem 10rem;
align-items:center;
background:#282828;
position:sticky;
top:0;
z-index:10;
a{
    color:white;
    text-decoration:none;
}
ul{
    display:flex;
    list-style:none;
}
#logo{
    font-size:1.5rem;
    font-weight:lighter;
}
li{
    padding-left:10rem;
    position:relative;
}
@media (max-width:1300px){
   
    flex-direction:column;
    padding:2rem 1rem;
    #logo{
        margin:2rem;
        display:inline-block;
    }
    ul{
        padding:2rem;
        justify-content:space-around;
        width:100%;
        li{
            padding:0px;
        }
    }
};



`;

export default Nav
