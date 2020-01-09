import React, { useMemo, useState } from "react";
import { Formik } from "formik";
import { CadastrarNewSpot } from "../../actions/newSpot";
import camera from "../../assets/camera.svg";
import "./styles.css";

export default function New() {
  const [thumbnail, SetThumbnail] = useState(null);
  const initialValues = {
    company: "",
    techs: "",
    price: "",
    thumbnail: undefined
  };
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  function handleSubmit(values) {
    CadastrarNewSpot(values);
  }
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? "has-thumbnail" : ""}
          >
            <input
              name="thumbnail"
              type="file"
              onChange={event => {
                props.setFieldValue(
                  "thumbnail",
                  event.currentTarget.files[0],
                  SetThumbnail(event.currentTarget.files[0])
                );
              }}
            />
            <img src={camera} alt="Select Img " />
          </label>
          <label>Empresa:</label>{" "}
          <input
            name="company"
            placeholder="Sua empresa Incrivel"
            onChange={props.handleChange}
            value={props.values.company}
            onBlur={props.onBlur}
          />
          <label>
            Tecnologias * <span>(separadas por virgulas)</span>
          </label>{" "}
          <input
            name="techs"
            placeholder="Qual tecnologia sua empresa usa?"
            onChange={props.handleChange}
            value={props.values.techs}
          />
          <label>
            Valor da diária * <span>(Em branco para Gratuito)</span>
          </label>{" "}
          <input
            name="price"
            placeholder="Valor da diária"
            onChange={props.handleChange}
            value={props.values.price}
          />
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      )}
    </Formik>
  );
}
