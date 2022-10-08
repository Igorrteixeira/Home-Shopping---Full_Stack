import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Login} from "../pages/Login/Login"
import { Signup } from "../pages/Signup/SignUp"
import {Stock} from "../pages/Stock/Stock"
import { Cart } from "../pages/Cart/Cart"


export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="stock" element={<Stock/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    )
}