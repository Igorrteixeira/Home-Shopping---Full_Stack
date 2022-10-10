import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Login} from "../pages/Login/Login"
import { Signup } from "../pages/Signup/SignUp"
import {Stock} from "../pages/Stock/Stock"
import { FinalizePurchase } from "../pages/FinalizePurchase/FinalizePurchase"



export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="stock" element={<Stock/>}/>
            <Route path="finalizepurchase" element={<FinalizePurchase/>}/>
            

        </Routes>
        </BrowserRouter>
    )
}