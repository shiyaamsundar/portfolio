import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import { titleanim,fadeanim,photoanim} from '../animation';
import home1 from '../img/home1.png'
import {About,Hide,Description,Image} from '../styles';
import Wave from './Wave';


const AboutSection=()=> {


    // const titleanimation={
    //     hidden:{opacity:0},
    //     show:{opacity:1,transition:{duration:2}},

    // }

    // const container={
    //     hidden:{x:100},
    //     show:{x:0,trasition:{duration:0.75,ease:"easeOut",staggerChildren: 1}},

    // }

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                    <motion.h2 variants={titleanim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                    <motion.h2 variants={titleanim}>your <span>Dreams  </span>come</motion.h2>
                    </Hide>
                    <Hide>
                    <motion.h2 variants={titleanim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeanim}>Contact us for any Web?App projects that you need for your business</motion.p>
                <motion.button variants={fadeanim}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoanim}  src={home1} alt="guy tith camera"/>
            </Image>
            <Wave/>
        </About>
    )
}


export default AboutSection;
