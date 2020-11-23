import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import {About} from '../styles'
import Toggle from './Toggle'
import UseScrool from './UseScrool'
import { useInView } from 'react-intersection-observer'
import {useAnimation } from 'framer-motion'
import { fadeanim, scroolReveal } from '../animation'



const FaqSection=()=> {

    const [element,control]=UseScrool()    

    return (
        <Faq variants={scroolReveal} ref={element} animate={control} initial="hidden">
                <h2>Any Questoins <span>FAQ</span></h2>
              <AnimateSharedLayout>
                <Toggle title="How do i Start">
              
                
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed facilis a possimus veniam beatae explicabo!</p>
                    
                </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed facilis a possimus veniam beatae explicabo!</p>
                    </div>
 
                </Toggle>
                <Toggle title="Diffrent Payments Methonds">
                
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed facilis a possimus veniam beatae explicabo!</p>
              
                </div>
                </Toggle>

                <Toggle title="What Products do you offer">
                  <h4></h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed facilis a possimus veniam beatae explicabo!</p>
            
                </div>
                </Toggle>
                </AnimateSharedLayout>
            
        </Faq>
    )
}

const Faq=styled(About)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom:2rem;
    font-weight:lighter;
}
.faq-line{
    background:#cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100%;
}
.question{
   padding:3rem 0rem;
   cursor:pointer; 
}
.answer{
    padding:2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
`;


export default FaqSection
