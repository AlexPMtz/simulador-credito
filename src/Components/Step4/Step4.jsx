import React from 'react'
import Styles from "../../Views/Questionnaire/Questionnaire.module.css";

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className={Styles.parent}>
      <div className={Styles.card + " " + Styles.child}>
        <h2>4. Historial Crediticio</h2>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>Retrasos en pagos</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="creditHistory"
              value={10}
              checked={formData.creditHistory.includes("Ninguno en los últimos 12 meses")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Ninguno en los últimos 12 meses</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="creditHistory"
              value={5}
              checked={formData.creditHistory.includes("Algún retraso")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Algún retraso</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="creditHistory"
              value={0}
              checked={formData.creditHistory.includes("Frecuentes retrasos")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Frecuentes retrasos</label>
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

        <button type="button" className="btn btn-primary" onClick={prevStep}>Anterior</button>
        <button type="button" className="btn btn-primary ms-2" onClick={nextStep}>Siguiente</button>
      </div>
    </div>
  )
}

export default Step4