import React from "react";
import Styles from "./SignUp.module.css";
import Container from "../../HOC/Container";

const signUp = () => {
  return (
    <>
      <div className={Styles.title + " mt-3"}>
        <h2>Registrarse</h2>
      </div>
      <form className={Styles.card + " " + Styles.child}>
        <div className="input-group mb-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nombre(s)" aria-label="name" />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Apellido Paterno" aria-label="lastName2" />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Apellido Materno" aria-label="lastName2" />
          </div>
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text"className="form-control"placeholder="Correo"aria-label="email"aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="number" className="form-control" placeholder="Número de cuenta" aria-label="cuentaClabe" />
        </div>
        <div className="input-group mb-3">
          <input type="number"className="form-control"placeholder="Número de celular"aria-label="cuentaClabe" />
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" aria-label="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};

export default Container(signUp);
