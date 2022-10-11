import React, { useEffect, useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'



export const GlobalState = (props) => {

    
    const[cart,setCart]  = useState([])
    const[loader,setLoader] = useState(false)
    return (
        <div>
        <GlobalStateContext.Provider value={{cart,setCart}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
