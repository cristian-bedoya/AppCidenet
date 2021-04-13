/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import employeesList from "./employeesList";
import employeeCreateUpdate from "./employeeCreateUpdate";
import "./App.css";
const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="">
        App Cidenet
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            EMPLEADOS
          </a>
          <a className="nav-item nav-link" href="/employees">
            CREAR EMPLEADOS
          </a>
        </div>
      </div>
    </nav>
    <div className="content">
      <Route path="/" exact component={employeesList} />
      <Route path="/employees/:pk" component={employeeCreateUpdate} />
      <Route path="/employees/" exact component={employeeCreateUpdate} />
    </div>
  </div>
);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}
export default App;
