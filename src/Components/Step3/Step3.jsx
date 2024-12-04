import React from 'react';
import Styles from "../../Views/Questionnaire/Questionnaire.module.css";

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className={ Styles.parent}>
      <div className={ Styles.card + " " + Styles.child}>
        <h2>3. Información Financiera</h2>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>Ingresos mensuales netos</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="financialInformation"
              value={15}
              checked={formData.financialInformation.includes("Más de $40,000")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Más de $40,000</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="financialInformation"
              value={10}
              checked={formData.financialInformation.includes("$20,000 - $40,000")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">$20,000 - $40,000</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="financialInformation"
              value={5}
              checked={formData.financialInformation.includes("$10,000 - $20,000")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">$10,000 - $20,000</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="financialInformation"
              value={0}
              checked={formData.financialInformation.includes("Menos de $10,000")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Menos de $10,000</label>
          </div>
        </div>

        <div className="form-group col-md-6 d-flex flex-column">
          <label>Gastos mensuales (en proporción a ingresos)</label>

          <div className="form-check form-check-inline mt-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="monthlyExpenses"
              value={10}
              checked={formData.monthlyExpenses.includes("Menos del 40%")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Menos del 40%</label>
          </div>

          <div className="form-check form-check-inline">
            <input 
              className="form-check-input"
              type="checkbox"
              name="monthlyExpenses"
              value={5}
              checked={formData.monthlyExpenses.includes("40%-60%")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">40%-60%</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input 
              className="form-check-input"
              type="checkbox"
              name="monthlyExpenses"
              value={2}
              checked={formData.monthlyExpenses.includes("Más del 60%")}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Más del 60%</label>
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={prevStep}>Anterior</button>
        <button type="button" className="btn btn-primary ms-2" onClick={nextStep}>Siguiente</button>
      </div>
    </div>
  )
}

export default Step3