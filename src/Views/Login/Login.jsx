import React, { useRef, useState } from "react";
import { NavLink, redirect } from "react-router-dom";

import Styles from "./Login.module.css";
import Container from "../../HOC/Container";

import { users } from "../../FakeData/mock";

const Login = () => {

  const nClabeRef = useRef();
  const psswdRef = useRef();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nCuenta: Number(nClabeRef.current.value),
      contraseña: psswdRef.current.value
    }

    if(data.nCuenta === users.nCuenta && data.contraseña === users.contraseña){
      console.log("LogIn exitosooo!");
      //spinner 5 segundos
      //redirigir al cuestionario
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/cuestionario"
      }, 3000);
    } else {
      console.log("valio vrga");
      setError(true);
    }
    console.log("---->", error);
  }

  return (
    <>
      <div className={Styles.title + " mt-3"}>
        <h2>Iniciar sesión</h2>
      </div>
      <form className={Styles.card + " " + Styles.child} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Cuenta clabe
          </label>
          <input type="number" ref={nClabeRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos tus datos con nadie más.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >
            Contraseña
          </label>
          <input type="password" ref={psswdRef} className="form-control" id="exampleInputPassword1" />
        </div>
        {
          error
          ? (
              <div className="alert alert-danger" role="alert">Datos incorrectos, intente de nuevo</div>
            )
            : null
        }
        <div className={Styles.spaceBtwn}>
          {
            loading
              ? (
                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Accediendo...
                </button>
              )
              : (
                <button type="submit" className="btn btn-primary">
                  Acceder
                </button>
              )
          }          
          <a href="registro">Registrarse</a>
        </div>
      </form>
    </>
  );
};

export default Container(Login);
