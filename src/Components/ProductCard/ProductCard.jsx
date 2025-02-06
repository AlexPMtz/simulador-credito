import React, { useRef, useState } from "react";
import Style from "./ProductCard.module.css";

const ProductCard = ({ title, offer, description, additionalInfo, image }) => {
  const [cash, setCash] = useState();
  const [period, setPeriod] = useState();
  const [changed, setChanged] = useState(false);

  const amount = useRef(null);

  const saveData = (event) => {
    event.preventDefault();
    setCash(amount.current.value);
    setChanged(true);
  };

  const selectedValue = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            <b>Oferta: </b>
            {offer}
          </p>

          {changed ? (
            <div>
              <h3>Detalle de simulación</h3>
              <p>
                <b>Monto total solicitado</b>
              </p>
              <p>{cash}</p>
              <p>
                <b>Plazo</b>
              </p>
              <p>{period}</p>

              <button
                className="btn btn-primary mt-3"
                type="button"
                onClick={() => setChanged(!changed)}
              >
                Volver a simular
              </button>
            </div>
          ) : (
            <div>
              <p>{description}</p>
              <p>{additionalInfo}</p>

              <div className={Style.inputGroup}>
                <div className="input-group mt-3">
                  <span className="input-group-text">$</span>
                  <input type="number" className="form-control" ref={amount} />
                </div>
                <div className="form-text mb-3" id="basic-addon4">
                  El monto podría cambiar después de simular las otras ofertas.
                </div>
                <select
                  className="form-select"
                  name="period"
                  onChange={selectedValue}
                >
                  <option>Plazo</option>
                  <option value="12 Meses">12 Meses</option>
                  <option value="24 Meses">24 Meses</option>
                  <option value="36 Meses">36 Meses</option>
                  <option value="48 Meses">48 Meses</option>
                </select>
              </div>
              <button
                className="btn btn-primary mt-3"
                type="button"
                onClick={saveData}
              >
                Simular
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
