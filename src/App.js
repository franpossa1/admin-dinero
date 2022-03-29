import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Contabilidad from "./components/Contabilidad";
import Historial from "./components/Historial";
import NuevaTransaccion from "./components/NuevaTransaccion";
import { GlobalProvider } from "./context/GlobalState";

function App() {
 
  //Hooks

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="tracker-container">
        <GlobalProvider>
          
        <Balance />
        <Contabilidad />
        <Historial  />
        <NuevaTransaccion
         
        />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
