import api from "../services/api";
import Swal from "sweetalert2";

import hash from "react-router-history";

const { hashHistory } = hash;

export const CadastrarNewSpot = async values => {
  try {
    console.log("values", values);
    const data = new FormData();
    data.append("thumbnail", values.thumbnail);
    data.append("thumbnail", values.company);
    data.append("thumbnail", values.techs);
    data.append("thumbnail", values.price);

    const user_id = localStorage.getItem("user");
    const response = await api.post("/spots", data, {
      headers: { user_id }
    });
    console.log("response", response);
    if (response)
      Swal.fire({
        icon: "success",
        title: "Spot cadastrado com sucesso!",
        showConfirmButton: false,
        timer: 750
      });
    hashHistory.push("/dashboard");
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocorreu ao cadastrar um novo Spot!."
    });
  }
};
