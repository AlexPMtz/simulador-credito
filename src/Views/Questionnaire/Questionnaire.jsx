import React, { useState } from "react";
import Styles from "./Questionnaire.module.css";
import Container from "../../HOC/Container";

import Step1 from "../../Components/Step1/Step1";
import Step2 from "../../Components/Step2/Step2";
import Step3 from "../../Components/Step3/Step3";
import Step4 from "../../Components/Step4/Step4";
import Step5 from "../../Components/Step5/Step5";

const Questionnaire = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: [],
    maritalStatus: [],
    dependents: [],
    jobStatus: [],
    jobDuration: [],
    financialInformation: [],
    monthlyExpenses: [],
    creditHistory: [],
    warranties: []
    // Agrega aquí los demás campos...
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const isChecked = prev[name].includes(value);
      return {
        ...prev,
        [name]: isChecked ? prev[name].filter((v) => v !== value) : [...prev[name], value],
      };
    });
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Step4 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Step5 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
    // Agrega los demás pasos aquí...
    default:
      return <div>Error: Paso no encontrado</div>;
  }
};

export default Container(Questionnaire);
