import React from 'react';
import Styles from "../../Views/Questionnaire/Questionnaire.module.css";

const Step5 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className={ Styles.parent}>
      <div className={ Styles.card + " " + Styles.child}>
        <h2>5. Garantías y Avales</h2>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>Garantías ofrecidas</label>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="warranties"
              value={10}
              // checked={formData.warranties.includes("Propiedad o vehículo")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Propiedad o vehículo</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="warranties"
              value={5}
              checked={formData.warranties.includes("Aval personal")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Aval personal</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="warranties"
              value={0}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Ninguna</label>
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={prevStep}>Anterior</button>
        <button type="button" className="btn btn-primary ms-2" onClick={nextStep}>Enviar</button>
      </div>
    </div>
  )
}

export default Step5