import { Link } from "react-router-dom";
import BotonRegreso from "../../Component/BotonRegreso";



function Pagina_principal() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Laboratorio 3 Forms</h1>

      <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
        <Link to="/Lab4IA">
          <button>Laboratorio 4 IA</button>
        </Link>

        <Link to="/Lab4Humano">
          <button>Laboratorio 4 Humano</button>
        </Link>

        <BotonRegreso/>
      </div>
    </div>
  );
}

export default Pagina_principal;