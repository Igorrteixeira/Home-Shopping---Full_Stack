import React, {useState } from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const GlobalProvider = (props) => {

    const [test,setTest] = useState([])
    
    return (
        <div>
        <GlobalContext.Provider value={{test,setTest}}> 
         {props.children}
         </GlobalContext.Provider> 
        </div>
    )
}