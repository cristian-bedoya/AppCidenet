import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }
  async componentDidMount() {
    const respuesta = await axios.get("http://127.0.0.1:8000/api/employees");
    this.setState({
      usuarios: respuesta.data,
    });
  }
  ponerFilas = () =>
    this.state.usuarios.map((usuario) => (
      <tr key={usuario.id}>
        <td>{usuario.id_number}</td>
        <td>{usuario.last_name}</td>
        <td>{usuario.second_last_Name}</td>
        <td>{usuario.name}</td>
        <td>{usuario.other_name}</td>
        <td>{usuario.country}</td>
        <td>{usuario.email}</td>
        <td>{usuario.AdmissionDate}</td>
        <td>{usuario.id_type}</td>
        <td>{usuario.area}</td>
      </tr>
    ));
  render() {
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th># Documento</th>
              <th>Apellido</th>
              <th>Sdo. Apellido </th>
              <th>Nombre</th>
              <th>Sdo. Nombre</th>
              <th>Pais</th>
              <th>Email</th>
              <th>Fecha de Admisión</th>
              <th>Tipo de Doc.</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}
export default App;
