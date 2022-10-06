import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Login} from "../pages/Login/Login"
import {Signup} from "../pages/Signup/Signup"
import {ShoppingCart} from "../pages/ShoppingCart/ShoppingCart"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        </Routes>
        </BrowserRouter>
    )
}