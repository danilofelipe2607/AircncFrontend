import React from "react";
import { Formik } from "formik";
import { validaLogin } from "../../actions/login";

export default function Login() {
  const initialValues = {
    email: "",
    senha: ""
  };
  async function handleSubmit(values) {
    validaLogin(values);
  }
  return (
    <>
      <p>
        Oferaça spots para programadores e encontre talentos para sua empresa
      </p>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="email:">E-mail :</label>
            <input
              placeholder="email"
              name="email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <label htmlFor="senha">Senha:</label>
            <input
              placeholder="senha"
              name="senha"
              value={props.values.senha}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <button className="btn" type="submit">
              Entrar
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
