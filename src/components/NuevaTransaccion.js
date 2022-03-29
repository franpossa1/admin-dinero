import React from "react";
import { GlobalContext } from "../context/GlobalState";

const NuevaTransaccion = () => {
  const context = React.useContext(GlobalContext);

  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState("");

  function newSubmit(e) {
    e.preventDefault();
    const newTrans = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount,
    };

    context.addTrans(newTrans);
    setText("");
    setAmount("");
  }



  return (
    <div className="transaccion-container">
      <h3>Nueva Transaccion</h3>

      <hr />
      <form onSubmit={newSubmit}>
        <label htmlFor="motivo" className="transaccion-motivo-text">
          Motivo
          <input
            className="transaccion-motivo-input"
            type="text"
            id="motivo"
            name="motivo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Motivo..."}
            required
          />
        </label>
        <label htmlFor="monto" className="transaccion-motivo-text">
          Monto (+ Ingreso ; - Egreso)
          <input
            className="transaccion-motivo-input"
            type="number"
            id="monto"
            name="monto"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder={"Coloca tu monto..."}
            required
          />
        </label>

        <div className="transaccion-btn">
          <input type="submit" value="Añadir Transaccion" />
        </div>
      </form>
    </div>
  );
};

export default NuevaTransaccion;
