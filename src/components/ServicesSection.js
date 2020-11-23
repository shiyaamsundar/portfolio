import React from 'react'
import clock from '../img/clock.svg'
import dia from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {Description,Image,About} from '../styles'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeanim, scroolReveal } from '../animation'
import UseScrool from './UseScrool'



const ServicesSection=()=> {
    
  const [element,control]=UseScrool();
  
  return (
    <Services variants={scroolReveal} animate={control}  ref={element} initial="hidden" >
           <Description>
              <h2>Hign <span>quality</span>service</h2> 
              <Cards>
                  <Card>
                  <div className="icon">
                      
                <img src={clock} alt="icon" />
                <h3>Clock</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
                  <Card>
                  <div className="icon">
                <img src={money} alt="icon" />
                <h3>Money</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
                  <Card>
                  <div className="icon">
                <img src={dia}  alt="icon"/>
                <h3>Diagphragm</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
                  <Card>
                  <div className="icon">
                <img src={teamwork} alt="icon" />
                <h3>TeamWork</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
              </Cards>
            </Description> 
            <Image>
                <img src={home2} alt="icon"/>
            </Image>
        </Services>
    )
}

const Services=styled(About)`

h2{
  padding-bottom:5rem;
}
p{
  width:70%;
  padding:2rem 0rem 4rem 0rem;
}


`;

const Cards=styled.div`
  display:flex;
  flex-wrap:wrap;
  @media (max-width:1300px){
    justify-content:center;
  }

`;

const Card=styled.div`
flex-basis:20rem;
.icon{
  display:flex;
  align-items:center;
  h3{
    margin-left:1rem;
    background:white;
    color:black;
    padding:1rem;
  }
}

`;


export default ServicesSection
