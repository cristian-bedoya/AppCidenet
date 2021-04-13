import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_number: "",
      last_name: "",
      second_last_Name: "",
      name: "",
      other_name: "",
      country: "",
      id_type: "",
      area: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    alert("A form was submitted: " + this.state);
    fetch("http://127.0.0.1:8000/api/employees", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Cedula:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="id_number"
          onChange={this.handleChange}
        />
        <label>Apellido:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="last_name"
          onChange={this.handleChange}
        />
        <label>Segundo Apellido:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="second_last_Name"
          onChange={this.handleChange}
        />
        <label>Nombre:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="name"
          onChange={this.handleChange}
        />
        <label>Segundo Nombre:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="other_name"
          onChange={this.handleChange}
        />
        <label>Pais</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="country"
          onChange={this.handleChange}
        />
        <label>Tipo de doumento:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="id_type"
          onChange={this.handleChange}
        />
        <label>Area:</label>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          name="area"
          onChange={this.handleChange}
        />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
