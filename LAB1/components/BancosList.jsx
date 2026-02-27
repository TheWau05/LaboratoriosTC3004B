import React from "react";
import { bancos } from "./bancos.js"; // Ajusta la ruta según tu proyecto

const BancosList = () => {
  return (
    <div>
      <h2>Lista de Bancos</h2>
      <ul>
        {bancos.map((banco) => (
          <li key={banco.id}>
            <strong>ID:</strong> {banco.id} <br />
            <strong>Nombre:</strong> {banco.name} <br />
            <strong>País:</strong> {banco.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BancosList;