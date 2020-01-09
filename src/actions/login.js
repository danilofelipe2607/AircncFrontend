import api from "../services/api";
import Swal from "sweetalert2";
import hash from "react-router-history";

const { hashHistory } = hash;
export const validaLogin = async values => {
  try {
    const { email, senha } = values;
    const { data } = await api.post(`/auth/${email}/${senha}`);
    const { token, id } = data;
    if (token) {
      Swal.fire({
        icon: "success",
        title: "Logado com sucesso!",
        showConfirmButton: false,
        timer: 750
      });
      localStorage.setItem("Authorization", token);
      localStorage.setItem("user", id);
      hashHistory.push("/dashboard");
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário ou senha inválidos!"
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar acessar o sistema! Tente novamente mais tarde."
    });
  }
};
