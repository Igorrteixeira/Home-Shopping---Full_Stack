import axios from "axios";
import { URL_BASE } from "../constants/URL_BASE";
import { goToHome } from "../router/Coordinator";

export const signUp = (form, clean, navigate) => {
  axios
    .post(`${URL_BASE}/user/signup`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("cadastro realizado com sucesso");
      clean();
      goToHome(navigate);
    })
    .catch((error) => alert(error.response.data));
};

export const login = (form, clean, navigate) => {
  axios
    .post(`${URL_BASE}/user/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clean();
      goToHome(navigate);
    })
    .catch((error) => alert(error.response.data));
};
