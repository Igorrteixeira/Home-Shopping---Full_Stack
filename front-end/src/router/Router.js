import { BrowserRouter, Route, Routes } from "react-router-dom"


export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={"/"}/>
            <Route path="teste" element={<Teste/>}/>
        </Routes>
        </BrowserRouter>
    )
}