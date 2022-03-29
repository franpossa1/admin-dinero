import React from "react";
import { GlobalContext } from "../context/GlobalState";
const Contabilidad = () => {
  const { transacciones } = React.useContext(GlobalContext);

  const monto = transacciones.map((trans) => trans.amount);
  
  const ingreso = monto
    .filter((cash) => cash > 0)
    .reduce((acc, item) => (acc + item),0).toFixed(2);

    const egreso = monto
    .filter((cash) => cash < 0)
    .reduce((acc, item) => (acc + item),0).toFixed(2);

 

  return (
    <div className="contabilidad-container">
      <div className="contabilidad-ingreso">
        <h3 className="green">Ingresos</h3>
        <p>{ingreso} $ARS</p>
      </div>
      <div className="contabilidad-egreso">
        <h3 className="red">Egresos</h3>
        <p>{egreso} $ARS</p>
      </div>
    </div>
  );
};

export default Contabilidad;
