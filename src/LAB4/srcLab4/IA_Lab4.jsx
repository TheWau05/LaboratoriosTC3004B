import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

const initialData = [
  { id: 1, nombre: "Jorge Carranza", puesto: "Empleado", numeroReservas: 12 },
  { id: 2, nombre: "Ramon Velez", puesto: "Gerente", numeroReservas: 5 },
  { id: 3, nombre: "Hugo Sanchez", puesto: "Ejecutivo", numeroReservas: 20 },
];

export default function IA_Lab4() {

  const [usuarios, setUsuarios] = useState(initialData);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);

  const [form, setForm] = useState({
    id: "",
    nombre: "",
    puesto: "",
    numeroReservas: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const abrirEditar = (usuario) => {
    setForm(usuario);
    setModalEditar(true);
  };

  const insertar = () => {
    const nuevo = {
      ...form,
      id: usuarios.length + 1,
    };

    setUsuarios([...usuarios, nuevo]);
    setModalInsertar(false);
  };

  const editar = () => {

    const nuevosUsuarios = usuarios.map((u) =>
      u.id === form.id ? form : u
    );

    setUsuarios(nuevosUsuarios);
    setModalEditar(false);
  };

  const eliminar = (id) => {

    if (window.confirm("¿Eliminar usuario?")) {
      const nuevaLista = usuarios.filter((u) => u.id !== id);
      setUsuarios(nuevaLista);
    }
  };

  return (
    <Container>

      <br />

      <Button color="success" onClick={() => setModalInsertar(true)}>
        Crear
      </Button>

      <br /><br />

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Reservas</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.puesto}</td>
              <td>{u.numeroReservas}</td>

              <td>
                <Button
                  color="primary"
                  onClick={() => abrirEditar(u)}
                >
                  Editar
                </Button>{" "}

                <Button
                  color="danger"
                  onClick={() => eliminar(u.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link to="/">
        <button>Regresar al menú</button>
      </Link>

      {/* MODAL INSERTAR */}

      <Modal isOpen={modalInsertar}>
        <ModalHeader>Nuevo Usuario</ModalHeader>

        <ModalBody>

          <FormGroup>
            <label>Nombre</label>
            <input
              className="form-control"
              name="nombre"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Puesto</label>
            <input
              className="form-control"
              name="puesto"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Reservas</label>
            <input
              className="form-control"
              name="numeroReservas"
              type="number"
              onChange={handleChange}
            />
          </FormGroup>

        </ModalBody>

        <ModalFooter>

          <Button color="primary" onClick={insertar}>
            Guardar
          </Button>

          <Button color="secondary" onClick={() => setModalInsertar(false)}>
            Cancelar
          </Button>

        </ModalFooter>
      </Modal>

      {/* MODAL EDITAR */}

      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Usuario</ModalHeader>

        <ModalBody>

          <FormGroup>
            <label>Nombre</label>
            <input
              className="form-control"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Puesto</label>
            <input
              className="form-control"
              name="puesto"
              value={form.puesto}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Reservas</label>
            <input
              className="form-control"
              name="numeroReservas"
              type="number"
              value={form.numeroReservas}
              onChange={handleChange}
            />
          </FormGroup>

        </ModalBody>

        <ModalFooter>

          <Button color="primary" onClick={editar}>
            Actualizar
          </Button>

          <Button color="secondary" onClick={() => setModalEditar(false)}>
            Cancelar
          </Button>

        </ModalFooter>
      </Modal>

    </Container>
  );
}