const express = require('express');
const cors = require('cors');
const empleadoRoutes = require('./EmpleadoRoutes');

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

app.use('/api/empleados', empleadoRoutes);

app.get('/', (req, res) => {
    res.send('API de Empleados funcionando con MySQL');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});