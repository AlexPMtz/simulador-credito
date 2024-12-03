import React, { useEffect, useState } from "react";
import Styles from "./Login.module.css"
import Container from "../../HOC/Container";

import { users } from '../../FakeData/mock';

const Login = () => {

  const [name, setName] = useState(undefined);

  useEffect(() => {
    console.log("---->1", users.data[0].nombre);
    setName(users.data[0].nombre)
    console.log("---->", name);
  }, [])
  
  return (
    <div className={ Styles.parent }>
      <form className={ Styles.card + " " + Styles.child }>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Cuenta clabe
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos tus datos con nadie más.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className={ Styles.spaceBtwn }>
          <button type="submit" className="btn btn-primary">
            Acceder
          </button>
          <a href="registro">Registrarse</a>
        </div>
      </form>
    </div>
  );
};

export default Container(Login);
