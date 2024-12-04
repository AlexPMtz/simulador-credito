import React from "react";
import Styles from "../../Views/Questionnaire/Questionnaire.module.css";

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className={Styles.parent}>
      <div className={Styles.card + " " + Styles.child}>
        <h2>1. Información Personal</h2>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>¿Cuántos años tienes?</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="age"
              value={5}
              checked={formData.age.includes("21 a 60 años")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">21-60 años</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="age"
              value={2}
              checked={formData.age.includes("Menos de 21 o más de 60 años")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Menos de 21 o más de 60 años</label>
          </div>
        </div>

        <div className="form-group col-md-6 d-flex flex-column mt-3">
          <label>Estado civil</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="maritalStatus"
              value={3}
              checked={formData.maritalStatus.includes("Casado o unión libre")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Casado o unión libre</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="maritalStatus"
              value={2}
              checked={formData.maritalStatus.includes("Casado o unión libre")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Soltero/divorciado/viudo</label>
          </div>
        </div>

        <div className="form-group col-md-6 d-flex flex-column mt-3">
          <label>Número de dependientes</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="dependents"
              value={2}
              checked={formData.dependents.includes("Ninguno o 1")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Ninguno o 1</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="dependents"
              value={1}
              checked={formData.dependents.includes("Más de 1")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Más de 1</label>
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={nextStep}>Siguiente</button>
      </div>
    </div>
  );
};

export default Step1;
