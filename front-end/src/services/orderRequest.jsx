import axios from "axios"
import { token, URL_BASE } from "../constants/URL_BASE"
import { Getcart } from "./cartShoppingRequest"


export const createOrder = (form,clean) => {
    console.log(form)
    axios
    .post(`${URL_BASE}/order/create`, form, token)
    .then((res)=> {
        alert(res.data.result)
        clean()
        Getcart()
    
    })
    .catch((error)=>console.log(error.reposnse.data))
}

