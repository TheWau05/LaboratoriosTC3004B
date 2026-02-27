import '../ComponentsLAB3/Estilo_humano.css'
import React, { useState } from "react";

function Form_Humano() {

  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });

  const [shake, setShake] = useState({});
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let valid = true;
    let newShake = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newShake[field] = true;
        valid = false;
      }
    });

    setShake(newShake);

    setTimeout(() => setShake({}), 600);

    return valid;
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    validate();
  };

  return (
    <div className="pagewrap">
      <form className="form">
        <h3 className="form__title">Registro</h3>

        {/* Matricula */}
        <div className="container">
          <input
            className="container__input"
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
          />
          <label className={`container__label ${shake.matricula ? "shakeit" : ""}`}>
            Matricula
          </label>
        </div>

        {/* Nombre */}
        <div className="container">
          <input
            className="container__input"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <label className={`container__label ${shake.nombre ? "shakeit" : ""}`}>
            Nombre
          </label>
        </div>

        {/* Apellidos */}
        <div className="container">
          <input
            className="container__input"
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
          <label className={`container__label ${shake.apellidos ? "shakeit" : ""}`}>
            Apellidos
          </label>
        </div>

        {/* Edad */}
        <div className="container">
          <input
            className="container__input"
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
          <label className={`container__label ${shake.edad ? "shakeit" : ""}`}>
            Edad
          </label>
        </div>

        {/* Universidad */}
        <div className="container">
          <input
            className="container__input"
            type="text"
            name="universidad"
            value={formData.universidad}
            onChange={handleChange}
          />
          <label className={`container__label ${shake.universidad ? "shakeit" : ""}`}>
            Universidad
          </label>
        </div>

        {/* Carrera */}
        <div className="container">
          <input
            className="container__input"
            type="text"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
          />
          <label className={`container__label ${shake.carrera ? "shakeit" : ""}`}>
            Carrera
          </label>
        </div>

        <button
          type="button"
          className={`form__submit ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form_Humano;