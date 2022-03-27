import React from "react";

const Historial = (props) =>{
    const historyArray = props.history;
    return(
        <div className="historial-container">

<h4>Historial</h4>
<hr/>

{historyArray.map(elem=>{
    return (<div key={elem.motivo} className={`historial-transaccion ${elem.monto>0? "green-border" : "red-border"}`}>
    <div className="historial-text">{elem.motivo}</div>
    <div> {elem.monto} $ARS</div>
    </div>)
})}



{/*<div className="historial-transaccion">
    <div className="historial-text">Comprar pan</div>
    <div>+ 300$ARS</div>
    </div>*/}


        </div>
    )
}

export default Historial