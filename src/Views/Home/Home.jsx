import React, { useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Container from "../../HOC/Container";
import Styles from "./Home.module.css";
import hipoteca from '../../images/hipoteca.jpg';
import prestamo from '../../images/prestamoPersonal.jpg';
import credito from '../../images/credit-card.jpg';

import { users } from '../../FakeData/mock';

const Home = () => {

  useEffect(() => {
    console.log("---->", users);
  }, [])
  
  return (
    <>
      <div className={Styles.title + " mt-3"}>
        <h2>Otorgamiento de créditos</h2>
      </div>
      <div className={Styles.container + " " + Styles.child}>
        <div className={Styles.productCards}>
          <ProductCard
            title="Hipotecario"
            offer="$1,000,000.00"
            description="Crece e invierte en el desarrollo de tu hogar."
            additionalInfo="Es una solución inmediata, formalizando con tu ejecutivo."
            image={hipoteca}
          />

          <ProductCard
            title="Préstamo personal"
            offer="$50,000.00"
            description="Dispones de un préstamo inmediato por buen uso de cuenta."
            additionalInfo="Paga de forma automática con los cortes diarios."
            image={prestamo}
          />

          <ProductCard
            title="Línea de crédito"
            offer="$100,000.00"
            description="Revisa la info de tu línea de crédito de tu tarjeta."
            additionalInfo="Puedes disponer de efectivo las veces que quieras sin comisión.."
            image={credito}
          />
        </div>
      </div>
    </>
  );
};

export default Container(Home);
