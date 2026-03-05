import { Link } from "react-router-dom";

function Pagina_principal() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Laboratorios</h1>

      <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
        <Link to="/lab-ia">
          <button>Laboratorio IA</button>
        </Link>

        <Link to="/lab-humano">
          <button>Laboratorio Humano</button>
        </Link>
      </div>
    </div>
  );
}

export default Pagina_principal;