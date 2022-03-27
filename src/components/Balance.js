import React from "react";


export default function Balance(props){
    return(
        <div className="balance-container">
            <h4 className="tuBalance">Tu balance</h4>
            <p className="tuMonto">{props.balance.ingreso-props.balance.egreso} $ARS</p>
        </div>
    )
}