import BotonRegreso from "../../Component/BotonRegreso";
import React, { useState, useEffect } from "react";
import { getEmpleados, createEmpleado } from "../serviceLAB5/ApiLAB5";

function Humano_LAB5() {

  const [formData, setFormData] = useState({
    nombre: "",
    puesto: "",
    numeroReservas: ""
  });

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
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
    <div style={{
      maxWidth: "1000px",
      margin: "auto",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1 style={{textAlign:"center", marginBottom:"40px"}}>
        Gestión de Empleados
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"300px 1fr",
        gap:"40px"
      }}>

        {/* FORMULARIO */}
        <div style={{
          border:"1px solid #ddd",
          padding:"20px",
          borderRadius:"10px",
          boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
        }}>

          <h3>Agregar Empleado</h3>

          <form onSubmit={handleSubmit}>

            <div style={{marginBottom:"15px"}}>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                style={{width:"100%", padding:"8px"}}
              />
            </div>

            <div style={{marginBottom:"15px"}}>
              <input
                type="text"
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
                placeholder="Puesto"
                style={{width:"100%", padding:"8px"}}
              />
            </div>

            <div style={{marginBottom:"20px"}}>
              <input
                type="number"
                name="numeroReservas"
                value={formData.numeroReservas}
                onChange={handleChange}
                placeholder="Reservas"
                style={{width:"100%", padding:"8px"}}
              />
            </div>

            <button
              type="submit"
              style={{
                width:"100%",
                padding:"10px",
                background:"#2c7be5",
                color:"white",
                border:"none",
                borderRadius:"6px",
                cursor:"pointer"
              }}
            >
              Agregar
            </button>

          </form>

          <div style={{marginTop:"20px"}}>
            <BotonRegreso/>
          </div>

        </div>


        {/* TABLA */}
        <div>

          <h3>Lista de Empleados</h3>

          <table style={{
            width:"100%",
            borderCollapse:"collapse",
            marginTop:"10px"
          }}>

            <thead>
              <tr style={{background:"#f4f6f8"}}>
                <th style={cellHeader}>ID</th>
                <th style={cellHeader}>Nombre</th>
                <th style={cellHeader}>Puesto</th>
                <th style={cellHeader}>Reservas</th>
              </tr>
            </thead>

            <tbody>
              {empleados.map((emp) => (
                <tr key={emp.id}>
                  <td style={cell}>{emp.id}</td>
                  <td style={cell}>{emp.nombre}</td>
                  <td style={cell}>{emp.puesto}</td>
                  <td style={cell}>{emp.numeroReservas}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

const cellHeader = {
  borderBottom:"2px solid #ddd",
  padding:"10px",
  textAlign:"left"
};

const cell = {
  borderBottom:"1px solid #eee",
  padding:"10px"
};

export default Humano_LAB5;