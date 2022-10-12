import React, {useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'

export const GlobalState = (props) => {
    const[cart,setCart]  = useState([])
    const[loader,setLoader] = useState(false)
    return (
        <div>
        <GlobalStateContext.Provider value={{cart,setCart,loader,setLoader}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
