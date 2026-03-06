const pool = require('./db');

exports.getAllEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Empleados ORDER BY nombre');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
};

exports.getEmpleadoById = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM Empleados WHERE id = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.json(rows[0]);

    } catch (error) {
        console.error('Error al obtener empleado:', error);
        res.status(500).json({ error: 'Error al obtener empleado' });
    }
};

exports.createEmpleado = async (req, res) => {
    const { nombre, puesto, numeroReservas } = req.body;

    if (!nombre) {
        return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO Empleados (nombre, puesto, numeroReservas) VALUES (?, ?, ?)',
            [nombre, puesto, numeroReservas]
        );

        const [rows] = await pool.query(
            'SELECT * FROM Empleados WHERE id = ?',
            [result.insertId]
        );

        res.status(201).json(rows[0]);

    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ error: 'Error al crear empleado' });
    }
};

exports.updateEmpleado = async (req, res) => {
    const { nombre, puesto, numeroReservas } = req.body;
    const empleadoId = req.params.id;

    try {

        await pool.query(
            'UPDATE Empleados SET nombre=?, puesto=?, numeroReservas=? WHERE id=?',
            [nombre, puesto, numeroReservas, empleadoId]
        );

        const [rows] = await pool.query(
            'SELECT * FROM Empleados WHERE id=?',
            [empleadoId]
        );

        res.json(rows[0]);

    } catch (error) {
        console.error('Error al actualizar empleado:', error);
        res.status(500).json({ error: 'Error al actualizar empleado' });
    }
};

exports.deleteEmpleado = async (req, res) => {

    try {

        await pool.query(
            'DELETE FROM Empleados WHERE id=?',
            [req.params.id]
        );

        res.json({ message: 'Empleado eliminado' });

    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        res.status(500).json({ error: 'Error al eliminar empleado' });
    }
};