import React from "react";
import Styles from "./Questionnaire.module.css";
import Container from "../../HOC/Container";

const Questionnaire = () => {
  return (
    <div className={Styles.parent}>
      <form className={Styles.card + " " + Styles.child}>
        <form>
          <div className="form-row">
            <h3>Información personal</h3>
            <div className="form-group col-md-6 d-flex flex-column">
              <label for="inputEmail4">¿Cuántos años tienes?</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">21-60 años</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">Menos de 21 o más de 60 años</label>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Estado civil</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">Casado o unión libre</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">Soltero</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Número de dependientes</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">Ninguno o 1</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">Más de 1</label>
                </div>
              </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </form>
    </div>
  );
};

export default Container(Questionnaire);
