import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const ScrollTop=()=> {

    const {pathname}=useLocation();

    useEffect(()=>{
        window.scroll({
            top:0,
            left:0
        })
    },[pathname])

    // return (
    //     <div>
            
    //     </div>
    // )
    return null;
}

export default ScrollTop
