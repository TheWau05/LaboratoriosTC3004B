import React, { useState, useEffect, useRef } from "react";
import "../componentsLAB3/Estilo_IA.css";

function Form_IA() {

  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const firstInputRef = useRef(null);

  // Focus automático al cargar
  useEffect(() => {
    firstInputRef.current.focus();
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
    <div className="app-container">

      <div className="card">
        <h2 className="title">Registro Estudiantil</h2>

        <form onSubmit={handleSubmit} className="form-modern">

          <input
            ref={firstInputRef}
            type="text"
            name="matricula"
            placeholder="Matrícula"
            value={formData.matricula}
            onChange={handleChange}
          />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />

          <input
            type="number"
            name="edad"
            placeholder="Edad"
            value={formData.edad}
            onChange={handleChange}
          />

          <input
            type="text"
            name="universidad"
            placeholder="Universidad"
            value={formData.universidad}
            onChange={handleChange}
          />

          <input
            type="text"
            name="carrera"
            placeholder="Carrera"
            value={formData.carrera}
            onChange={handleChange}
          />

          <button type="submit" className="btn-submit">
            Enviar
          </button>

        </form>
      </div>

      {submittedData && (
        <div className="result-card">
          <h3>Datos Capturados</h3>
          <p><strong>Matrícula:</strong> {submittedData.matricula}</p>
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

export default Form_IA;