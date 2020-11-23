import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'


const UseScrool=()=> {


    const control=useAnimation();
    const [element,view]=useInView({threshold:0.2})
  
    if(view){
      control.start("show");
    }
    else{
      control.start("hidden")
    }


    return [element,control]
}

export default UseScrool
