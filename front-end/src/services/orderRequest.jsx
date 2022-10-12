import axios from "axios";
import { token, URL_BASE } from "../constants/URL_BASE";
import { Getcart } from "./CartShoppingRequest";
import Swal from "sweetalert2";

export const createOrder = (form, clean) => {
  axios
    .post(`${URL_BASE}/order/create`, form, token)
    .then((res) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Pedido concluido!",
      });
      clean();
      Getcart();
    })
    .catch((error) => console.log(error.reposnse.data));
};
