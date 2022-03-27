import React from "react";


const NuevaTransaccion = (props) => {
  return (
    <div className="transaccion-container">
      <h3>Nueva Transaccion</h3>

      <hr />
      <form onSubmit={props.functionSubmit}>
        <label htmlFor="motivo" className="transaccion-motivo-text">
          Motivo
          <input
            className="transaccion-motivo-input"
            type="text"
            id="motivo"
            name="motivo"
            value={props.trans.motivo}
            onChange={props.handleChange}
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
            value={props.trans.monto}
            onChange={props.handleChange}
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
