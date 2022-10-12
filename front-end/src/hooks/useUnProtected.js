import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {goToHome} from "../router/Coordinator"

export const useUnProtectedPage = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
        goToHome(navigate)
    }
},[navigate])
}