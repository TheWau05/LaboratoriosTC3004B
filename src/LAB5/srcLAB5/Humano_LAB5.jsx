import BotonRegreso from "../../Component/BotonRegreso";
import React, { useState, useEffect, useRef } from "react";
import { getEmpleados, createEmpleado } from "../serviceLAB5/ApiLAB5";

function Humano_LAB5() {

  const [formData, setFormData] = useState({
    nombre: "",
    puesto: "",
    numeroReservas: ""
  });

  const [empleados, setEmpleados] = useState([]);

  const nombreRef = useRef(null);

  useEffect(() => {
    nombreRef.current.focus();
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const data = await getEmpleados();
    setEmpleados(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createEmpleado(formData);

    setFormData({
      nombre: "",
      puesto: "",
      numeroReservas: ""
    });

    cargarEmpleados();
  };

  return (
    <div className="pagewrap">

      <div style={{marginBottom:"40px"}}>
        <h3>Registrar Empleado</h3>

        <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "350px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#f9f9f9"
        }}>

          <input
            ref={nombreRef}
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />

          <input
            type="text"
            name="puesto"
            value={formData.puesto}
            onChange={handleChange}
            placeholder="Puesto"
          />

          <input
            type="number"
            name="numeroReservas"
            value={formData.numeroReservas}
            onChange={handleChange}
            placeholder="Numero Reservas"
          />

          <button type="submit">
            Agregar
          </button>

        </form>

        <BotonRegreso/>
      </div>


      <div className="form">

        <h2>Lista de Empleados</h2>

        {empleados.map((emp) => (
          <div key={emp.id} style={{
            border:"1px solid #ccc",
            padding:"10px",
            marginBottom:"10px"
          }}>
            <p><strong>Nombre:</strong> {emp.nombre}</p>
            <p><strong>Puesto:</strong> {emp.puesto}</p>
            <p><strong>Reservas:</strong> {emp.numeroReservas}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Humano_LAB5;