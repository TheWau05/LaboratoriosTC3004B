import { Routes, Route } from "react-router-dom";
import FormIA from "./LAB3/srcLAB3/Form_IA";
import FormHumano from "./LAB3/srcLAB3/Form_Humano";
import Pagina_principal from "./Pagina_principal";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Pagina_principal/>} />
      <Route path="/lab-ia" element={<FormIA />} />
      <Route path="/lab-humano" element={<FormHumano />} />
    </Routes>
    </>
  );
}

export default App;