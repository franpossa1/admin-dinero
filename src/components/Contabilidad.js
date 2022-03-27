import React from "react";

const Contabilidad = (props) =>{
    return(
        <div className="contabilidad-container">
            <div className="contabilidad-ingreso">
                <h3 className="green">Ingresos</h3>
                <p>{props.balance.ingreso} $ARS</p>
            </div>
            <div className="contabilidad-egreso">
                <h3 className="red">Egresos</h3>
                <p>-{props.balance.egreso} $ARS</p>
            </div>
        </div>
    )
}


export default Contabilidad