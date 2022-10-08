import axios from "axios"
import { useEffect } from "react"
import { token, URL_BASE } from "../constants/URL_BASE"

export const CartShopping = (id) => {
    console.log(id,token,"oi")
    axios
    .post(`${URL_BASE}/list/create/${id}`, token)
    .then((res ) => {
        alert ("deu")
        console.log("boa")
    } )
    .catch((error)=> {
        alert("erro")
        console.log(error.response.data)
    })
    // useEffect(CartShopping(),[])
}