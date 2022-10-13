import React, {useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'

export const GlobalState = (props) => {
    const[cart,setCart]  = useState([])
    const[loader,setLoader] = useState(false)
    const [loaderQty,setLoaderQty] = useState(true)
    return (
        <div>
        <GlobalStateContext.Provider value={{cart,setCart,loader,setLoader,loaderQty,setLoaderQty}}> 
         {props.children}
         </GlobalStateContext.Provider> 
        </div>
    )
}
