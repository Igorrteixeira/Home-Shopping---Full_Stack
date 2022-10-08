import axios from "axios";
import { token, URL_BASE } from "../constants/URL_BASE";
import { useRequestData } from "../hooks/useRequestData";

export const cartShopping = (id) => {
  const body = {
    productId: id,
  };
  axios
    .post(`${URL_BASE}/list/create`, body, token)
    .then((res) => alert(res.data))
    .catch((error) => alert(error.response.data));
};
