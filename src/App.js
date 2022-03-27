import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Contabilidad from "./components/Contabilidad";
import Historial from "./components/Historial";
import NuevaTransaccion from "./components/NuevaTransaccion";

function App() {
  const [balance, setBalance] = React.useState({
    total: 0,
    ingreso: 0,
    egreso: 0,
  });

  const [trans, setTrans] = React.useState({});

  const [history, setHistory] = React.useState([]);

  function functionSubmit(e) {
    e.preventDefault();
   

    //const valorMotivo = e.target.motivo.value;
    const valorMonto = parseInt(e.target.monto.value);

    setHistory((prevH) => {
      return [...prevH, trans];
    });
    setTrans({});
    setBalance((prevB) => {
      if (valorMonto > 0) {
        return {
          ...prevB,
          ingreso: prevB.ingreso + valorMonto,
        };
      } else {
        return {
          ...prevB,
          egreso: prevB.egreso - valorMonto,
        };
      }
    });
    e.target.monto.value="";
    e.target.motivo.value="";

  }

  function handleChange(e) {
    setTrans({
      ...trans,
      [e.target.name]: e.target.value,
    });
  }
  //Hooks

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="tracker-container">
        <Balance balance={balance} />
        <Contabilidad balance={balance} />
        <Historial history={history} />
        <NuevaTransaccion
          trans={trans}
          handleChange={handleChange}
          functionSubmit={functionSubmit}
        />
      </div>
    </div>
  );
}

export default App;
