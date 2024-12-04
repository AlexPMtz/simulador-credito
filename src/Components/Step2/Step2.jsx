import React from "react";
import Styles from "../../Views/Questionnaire/Questionnaire.module.css";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className={ Styles.parent}>
      <div className={ Styles.card + " " + Styles.child}>
        <h2>2. Información Laboral</h2>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>Situación Laboral</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="jobStatus"
              value={10}
              checked={formData.jobStatus.includes("Empleado con contrato permanente")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Empleado con contrato permanente</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="jobStatus"
              value={5}
              checked={formData.jobStatus.includes("Autónomo o empleado temporal")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Autónomo o empleado temporal</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="jobStatus"
              value={0}
              checked={formData.jobStatus.includes("Desempleado o estudiante")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Desempleado o estudiante</label>
          </div>
        </div>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>Antigüedad en el empleo</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="jobDuration"
              value={10}
              checked={formData.jobDuration.includes("Más de 3 años")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Más de 3 años</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="jobDuration"
              value={5}
              checked={formData.jobDuration.includes("1 a 3 años")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">1 a 3 años</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="jobDuration"
              value={2}
              checked={formData.jobDuration.includes("Menos de 1 año")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Menos de 1 año</label>
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={prevStep}>Anterior</button>
        <button type="button" className="btn btn-primary ms-2" onClick={nextStep}>Siguiente</button>

      </div>
    </div>
  );
};

export default Step2;
