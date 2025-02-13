import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import Styles from "./Login.module.css";
import Container from "../../HOC/Container";

import { users } from "../../FakeData/mock";

const Login = () => {

  const nClabeRef = useRef();
  const psswdRef = useRef();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(null)

  const responseGoogle = (response) => {
    const decoded = jwtDecode(response?.credential);
    const email = decoded?.email
    setLoading(true);
    if (email === users.correo ) {
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/cuestionario"
      }, 3000);
    } else {
      setError(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nCuenta: Number(nClabeRef.current.value),
      contraseña: psswdRef.current.value
    }

    if(data.nCuenta === users.nCuenta && data.contraseña === users.contraseña){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/cuestionario"
      }, 3000);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className={Styles.title + " mt-3"}>
        <h2>Iniciar sesión</h2>
      </div>
      <form className={Styles.card + " " + Styles.child} onSubmit={handleSubmit}>
        <div>
          {
            loading
              ? (
                <div className={Styles.spaceBtwn}>
                  <strong>Accediendo...</strong>
                  <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
              )
              : (
                <div>
                  <div className="mb-3">
                    <input className="form-control" type="number" ref={nClabeRef} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Cuenta Clabe" />
                    <div id="emailHelp" className="form-text">
                      Nunca compartiremos tus datos con nadie más.
                    </div>
                  </div>
                  <div className="mb-3">
                    <input className="form-control" type="password" ref={psswdRef} placeholder="Contraseña" id="exampleInputPassword1" />
                  </div>
                  {
                    error
                    ? (
                        <div className="alert alert-danger" role="alert">Datos incorrectos, intente de nuevo</div>
                      )
                      : null
                  }
                  <div className={Styles.spaceBtwnButtons}>
                    <button type="submit" className={"btn btn-primary " + Styles.buttonSize}>
                      Acceder
                    </button>
                    <div className={Styles.buttonSize}>
                      <GoogleLogin className={Styles.buttonSize} onSuccess={responseGoogle} onError={responseGoogle}></GoogleLogin>
                    </div>
                    <button className={"btn btn-primary " + Styles.buttonSize}>
                      <NavLink className={Styles.textColorBtn} to="/registro">Registrarse</NavLink>
                    </button>
                  </div>
                </div>
              )
          }
        </div>
      </form>
    </>
  );
};

export default Container(Login);
