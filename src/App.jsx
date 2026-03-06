import { Routes, Route } from "react-router-dom";
import Form3IA from "./LAB3/srcLAB3/Form_IA";
import Form3Humano from "./LAB3/srcLAB3/Form_Humano";
import Menu_lab3 from "./LAB3/srcLAB3/Menu_lab3";
import Pagina_principal from "./Pagina_principal";
import Menu_lab4 from "./LAB4/srcLab4/Menu_lab4";
import Proyecto_Lab4 from "./LAB4/srcLab4/proyecto_Lab4";
import Lab4IA from "./LAB4/srcLab4/IA_Lab4";
import Lab5Humano from "./LAB5/srcLAB5/Humano_LAB5";
import Lab5IA from "./LAB5/srcLAB5/IA_LAB5";
import Menu_LAB5 from "./LAB5/srcLAB5/Menu_LAB5";





function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Pagina_principal/>} />
      <Route path="/lab3" element={<Menu_lab3/>} />
      <Route path="/lab3ia" element={<Form3IA />} />
      <Route path="/lab3humano" element={<Form3Humano />} />
      <Route path="/lab4" element={<Menu_lab4/>}/>
      <Route path="/Lab4IA" element={<Lab4IA/>}/>
      <Route path="/Lab4Humano" element={<Proyecto_Lab4/>}/>
      <Route path="/lab5" element={<Menu_LAB5/>}/>
      <Route path="/Lab5Humano" element={<Lab5Humano/>}/>
      <Route path="/Lab5IA" element={<Lab5IA/>}/>
    </Routes>
    </>
  );
}

export default App;