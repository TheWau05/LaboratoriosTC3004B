import { Link } from "react-router-dom";

function Pagina_principal() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Laboratorios</h1>

      <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
        <Link to="/lab3">
          <button>Laboratorio 3</button>
        </Link>
        <Link to="/lab4">
          <button>Laboratorio 4</button>
        </Link>
        <Link to="/lab5">
          <button>Laboratorio 5</button>
        </Link>
      </div>
    </div>
  );
}

export default Pagina_principal;