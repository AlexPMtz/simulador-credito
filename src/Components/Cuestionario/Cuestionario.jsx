import { useState } from "react";
import { NavLink } from "react-router-dom";

import Container from "../../HOC/Container";
import Styles from "./Cuestionario.module.css"

const preguntas = [
  // Información Personal (10 puntos)
  { id: 1, pregunta: "¿Cuál es tu edad?", opciones: [{ texto: "21-60 años", puntos: 5 },{ texto: "Menos de 21 o más de 60 años", puntos: 2 }]},
  { id: 2, pregunta: "¿Cuál es tu estado civil?", opciones: [{ texto: "Casado o unión libre", puntos: 3 },{ texto: "Soltero/divorciado/viudo", puntos: 2 }]},
  { id: 3, pregunta: "Número de dependientes", opciones: [{ texto: "Ninguno o 1", puntos: 2 },{ texto: "Más de 1", puntos: 1 }]},
  // Información Laboral (20 puntos)
  { id: 4, pregunta: "Situación laboral", opciones: [{ texto: "Empleado con contrato permanente", puntos: 10 },{ texto: "Autónomo o empleado temporal", puntos: 5 },{ texto: "Desempleado o estudiante", puntos: 0 }]},
  { id: 5, pregunta: "Antigüedad en el empleo", opciones: [{ texto: "Más de 3 años", puntos: 10 },{ texto: "1-3 años", puntos: 5 },{ texto: "Menos de 1 año", puntos: 2 }]},
  // Información Financiera (30 puntos)
  { id: 6, pregunta: "Ingresos mensuales netos", opciones: [{ texto: "Más de $40,000", puntos: 15 },{ texto: "$20,000 - $40,000", puntos: 10 },{ texto: "$10,000 $20000", puntos: 5 },   { texto: "Menos de $10,000", puntos: 0 }]},
  { id: 7, pregunta: "Gastos mensuales (en proporción a ingresos)", opciones: [   { texto: "Menos del 40%", puntos: 10 },   { texto: "40%-60%", puntos: 5 },   { texto: "Más del 60%", puntos: 0 }]},
  { id: 8, pregunta: "Deudas actuales", opciones: [   { texto: "Ninguna", puntos: 5 },   { texto: "Deudas moderadas (menos del 30% del ingreso)", puntos: 3 },   { texto: "Deudas altas", puntos: 0 }]},
  // Historial Crediticio (20 puntos)
  { id: 9, pregunta: "Retrasos en pagos", opciones: [   { texto: "Ninguno en los últimos 12 meses", puntos: 10 },   { texto: "Algún retraso", puntos: 5 },   { texto: "Frecuentes retrasos", puntos: 0 }]},
  { id: 10, pregunta: "Historial de crédito", opciones: [   { texto: "Buen historial", puntos: 10 },   { texto: "Regular", puntos: 5 },   { texto: "Malo o desconocido", puntos: 0 }]},
  // Garantías y Avales (10 puntos)
  { id: 11, pregunta: "Garantías ofrecidas", opciones: [   { texto: "Propiedad o vehículo", puntos: 10 },   { texto: "Aval personal", puntos: 5 },   { texto: "Ninguna", puntos: 0 }]},
];

// Definir la cantidad de preguntas por paso
const grupos = [3, 2, 3, 2, 1];

const Cuestionario = () => {
  const [respuestas, setRespuestas] = useState({});
  const [pasoActual, setPasoActual] = useState(0);
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);
  const [mensaje, setMensaje] = useState("")
  const [aprobado, setAprobado] = useState(false)


  // Obtener las preguntas correspondientes al paso actual
  const inicio = grupos.slice(0, pasoActual).reduce((acc, num) => acc + num, 0);
  const fin = inicio + grupos[pasoActual];
  const preguntasDelPaso = preguntas.slice(inicio, fin);

  // Manejar la selección de respuestas
  const manejarCambio = (idPregunta, puntos) => {
    setRespuestas((prev) => ({
      ...prev,
      [idPregunta]: puntos,
    }));
  };

  // Verificar si todas las preguntas del paso actual han sido respondidas
  const puedeAvanzar = preguntasDelPaso.every((p) => respuestas[p.id] !== undefined);

  // Calcular la puntuación total
  const calcularPuntuacion = () => {
    const total = Object.values(respuestas).reduce((acc, puntos) => acc + puntos, 0);
    setPuntuacionTotal(total);

    console.log("---->", total)

		if (total >= 70 && total <= 100) {
      setAprobado(true)
      setMensaje("Aprobado: Bajo riesgo, se puede otorgar crédito.");
    }

    if (total > 50 && total <= 69) {
      setAprobado(true)
      setMensaje("Condicional: Riesgo moderado, se recomienda una evaluación adicional.");
    }

    if (total > 1 && total <= 49) {
      setAprobado(true)
      setMensaje("Rechazado: Alto riesgo, se desaconseja el crédito.");
    }
  };

  return (
    <>
      <div className={Styles.title + " mt-3"}>
        <h2>Cuestionario</h2>
      </div>
      <div className={Styles.card + " " + Styles.child}>
        {
          aprobado ? (
            <div>
              <h2>{mensaje}</h2>
              {
                mensaje === "Rechazado: Alto riesgo, se desaconseja el crédito."
                  ? (
                      <NavLink to="/iniciar-sesion">Cerrar sesión</NavLink>
                    )
                    : (
                      <NavLink to="/simulador">Ver créditos</NavLink>
                    )
              }
            </div>
          )
          : (
            <div>
              <h2>Paso {pasoActual + 1} de {grupos.length}</h2>

              {preguntasDelPaso.map((pregunta) => (
                <div key={pregunta.id}>
                  <h3>{pregunta.pregunta}</h3>
                  {pregunta.opciones.map((opcion, index) => (
                    <label style={{marginRight: 8}} key={index}>
                      <input
                        style={{marginRight: 8, marginBottom: 8}}
                        className="form-check-input"
                        type="checkbox"
                        checked={respuestas[pregunta.id] === opcion.puntos}
                        onChange={() => manejarCambio(pregunta.id, opcion.puntos)}
                      />
                      {opcion.texto}
                    </label>
                  ))}
                </div>
              ))}

              <div>
                {pasoActual > 0 && (
                  <button className="btn btn-primary mt-2" style={{marginRight: 8}} onClick={() => setPasoActual(pasoActual - 1)}>
                    Anterior
                  </button>
                )}

                {pasoActual < grupos.length - 1 ? (
                  <button className="btn btn-primary mt-2" style={{marginRight: 8}} onClick={() => setPasoActual(pasoActual + 1)} disabled={!puedeAvanzar}>
                    Siguiente
                  </button>
                ) : (
                  <button className="btn btn-primary mt-2" style={{marginRight: 8}} onClick={() => calcularPuntuacion()} disabled={!puedeAvanzar}>
                    Enviar respuestas
                  </button>
                )}
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Container(Cuestionario);