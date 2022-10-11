import axios from "axios";
import { token, URL_BASE } from "../constants/URL_BASE";
import { useEffect, useContext } from "react";
import { GlobalStateContext } from "../../src/global/GlobalStateContext";

export const addCart = (id) => {
  console.log(id, token);
  const body = {
    productId: id,
  };
  axios
    .post(`${URL_BASE}/list/create`, body, token)
    .then((res) => {
      Getcart();
    })
    .catch((error) => alert(error.response.data));
};

export const removeCart = (id) => {
  axios
    .delete(`${URL_BASE}/list/delete/${id}`, token)
    .then((res) => {})
    .catch((error) => alert(error.response.data));
};

export const Getcart = () => {
  const { cart, setCart } = useContext(GlobalStateContext);
  useEffect(() => {
    axios
      .get(`${URL_BASE}/list`, token)
      .then((res) => {
        setCart(res.data);
        // setLoader(true)
      })
      .catch((err) => alert(err.reponse.data.message));
  }, [cart]);
};
