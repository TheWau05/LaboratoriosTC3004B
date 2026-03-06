import React from "react";
import "../../App";
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


const data = [
  { id: 1, nombre: "Jorge Carranza", puesto: "Empleado", numeroReservas: 12 },
  { id: 2, nombre: "Ramon Velez", puesto: "Gerente", numeroReservas: 5 },
  { id: 3, nombre: "Hugo Sanchez", puesto: "Ejecutivo", numeroReservas: 20 },
  { id: 4, nombre: "Rafael Marquez", puesto: "Empleado", numeroReservas: 8 },
  { id: 5, nombre: "Carlos Alcaraz", puesto: "Ejecutivo", numeroReservas: 15 },
  { id: 6, nombre: "N. Djokovic", puesto: "Gerente", numeroReservas: 3 },
  { id: 7, nombre: "Sergio Perez", puesto: "Empleado", numeroReservas: 10 },
  { id: 8, nombre: "Max Verstapen", puesto: "Ejecutivo", numeroReservas: 18 },
  { id: 9, nombre: "Carlos Sainz", puesto: "Empleado", numeroReservas: 7 },
];

class Proyecto_Lab4 extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      puesto: "",
      numeroReservas:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;

    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].puesto = dato.puesto;
      }
      contador++;
      return null;
    });

    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estas seguro que deseas eliminar el elemento " + dato.id
    );

    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;

      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
        return null;
      });

      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;

    var lista = this.state.data;
    lista.push(valorNuevo);

    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>Num. de reservas</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.puesto}</td>
                  <td>{dato.numeroReservas}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to="/">
          <button>Regreso a menu</button>
        </Link>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar Usuario</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>ID:</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length + 1}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombre:</label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Puesto:</label>
                <input
                  className="form-control"
                  name="puesto"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Numero de reservas:</label>
                <input
                  className="form-control"
                  name="numeroReservas"
                  type="number"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={() => this.insertar()}>
                Insertar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
              <div>
                <h3>Editar Usuario</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>ID:</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombre:</label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.nombre}
                />
              </FormGroup>

              <FormGroup>
                <label>Puesto:</label>
                <input
                  className="form-control"
                  name="puesto"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.empresa}
                />
              </FormGroup>
              <FormGroup>
                <label>Cantidad de reservas:</label>
                <input
                  className="form-control"
                  name="puesto"
                  type="Int"
                  onChange={this.handleChange}
                  value={this.state.form.empresa}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </>
    );
  }
}

export default Proyecto_Lab4;