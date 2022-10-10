import axios from "axios";
import { token, URL_BASE } from "../constants/URL_BASE";
import { useState,useEffect } from "react";


export const addCart = (id) => {
  console.log(id,token)
  const body = {
    productId: id,
  }
  axios
    .post(`${URL_BASE}/list/create`, body, token)
    .then((res) => {
      alert(res.data)
    })
    .catch((error) => alert(error.response.data));
};

export const removeCart = (id) => {
  axios
  .delete(`${URL_BASE}/list/delete/${id}`,token)
  .then((res) => {
    alert(res.data)
  })
  .catch((error) => alert(error.response.data));
}

export const Getcart = () => {
  const[productsCart,setProductsCart] = useState([])
    useEffect(()=>{
    axios.get(`${URL_BASE}/list`,token).then((res)=>{
        setProductsCart(res.data)
        // setLoader(true)
    }).catch((err)=> alert(err.reponse.data.message))
},[])
   return productsCart
}


