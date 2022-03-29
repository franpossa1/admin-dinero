import React from "react";
import { GlobalContext } from "../context/GlobalState";

const Historial = () => { 
  const context = React.useContext(GlobalContext);
const {deleteTrans} = React.useContext(GlobalContext);
 
  return (
    <div className="historial-container">
      <h4>Historial</h4>
      <hr />
      {context.transacciones.map((trans) => {
        return (
          <div onClick={()=>deleteTrans(trans.id)}
            className={`historial-transaccion ${
              trans.amount > 0 ? "green-border" : "red-border"
            } `}
          >
            <div className="historial-text">{trans.text}</div>
            <div> {trans.amount}$ARS</div>
          </div>
        );
      })}

      {/*<div className="historial-transaccion">
    <div className="historial-text">Comprar pan</div>
    <div>+ 300$ARS</div>
    </div>*/}
    </div>
  );
};

export default Historial;
