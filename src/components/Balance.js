import React from "react";
import { GlobalContext } from "../context/GlobalState";


export default function Balance(){

const {transacciones} = React.useContext(GlobalContext);

const monto = transacciones.map(trans=>trans.amount);

const total = monto.reduce((acc,item)=>(acc+item),0).toFixed(2)

    return(
        <div className="balance-container">
            <h4 className="tuBalance">Tu balance</h4>
            <p className="tuMonto">{total} $ARS</p>
        </div>
    )
}