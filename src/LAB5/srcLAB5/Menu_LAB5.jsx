import { Link } from "react-router-dom";
import BotonRegreso from "../../Component/BotonRegreso";



function Menu_LAB5() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Laboratorio 5 Forms</h1>

      <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
        <Link to="/Lab5IA">
          <button>Laboratorio 5 IA</button>
        </Link>

        <Link to="/Lab5Humano">
          <button>Laboratorio 5 Humano</button>
        </Link>

        <BotonRegreso/>
      </div>
    </div>
  );
}

export default Menu_LAB5;