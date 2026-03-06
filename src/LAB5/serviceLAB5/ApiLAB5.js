import axios from "axios";

const API_URL = "http://localhost:5500/api/empleados";

export const getEmpleados = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createEmpleado = async (empleado) => {
  const res = await axios.post(API_URL, empleado);
  return res.data;
};