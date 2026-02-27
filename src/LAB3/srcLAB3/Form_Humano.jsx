import '../ComponentsLAB3/Estilo_humano.css'
import React, { useState, useEffect, useRef } from "react";

function Form_Humano() {

  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // 🔵 useRef para focus automático
  const matriculaRef = useRef(null);

  // 🔵 useEffect para enfocar automáticamente al cargar
  useEffect(() => {
    matriculaRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setSubmittedData({ ...formData });
};

  return (
    <div className="pagewrap">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Registro</h3>

        <div className="container">
          <input
            ref={matriculaRef}
            className="container__input"
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            placeholder=" "
          />
          <label className="container__label">Matricula</label>
        </div>

        <div className="container">
          <input
            className="container__input"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder=" "
          />
          <label className="container__label">Nombre</label>
        </div>

        <div className="container">
          <input
            className="container__input"
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder=" "
          />
          <label className="container__label">Apellidos</label>
        </div>

        <div className="container">
          <input
            className="container__input"
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            placeholder=" "
          />
          <label className="container__label">Edad</label>
        </div>

        <div className="container">
          <input
            className="container__input"
            type="text"
            name="universidad"
            value={formData.universidad}
            onChange={handleChange}
            placeholder=" "
          />
          <label className="container__label">Universidad</label>
        </div>

        <div className="container">
          <input
            className="container__input"
            type="text"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            placeholder=" "
          />
          <label className="container__label">Carrera</label>
        </div>

        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>
      {submittedData && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Datos Capturados:</h3>
          <p><strong>Matricula:</strong> {submittedData.matricula}</p>
          <p><strong>Nombre:</strong> {submittedData.nombre}</p>
          <p><strong>Apellidos:</strong> {submittedData.apellidos}</p>
          <p><strong>Edad:</strong> {submittedData.edad}</p>
          <p><strong>Universidad:</strong> {submittedData.universidad}</p>
          <p><strong>Carrera:</strong> {submittedData.carrera}</p>
        </div>
      )}

    </div>
  );
}

export default Form_Humano;