import axios from "axios";
import { token, URL_BASE } from "../constants/URL_BASE";


export const addCart = (id) => {
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
  const body = {
    productId: id,
  }
  axios
  .delete(`${URL_BASE}/list/${id}`, body, token)
  .then((res) => {
    alert(res.data)
  })
  .catch((error) => alert(error.response.data));
}
