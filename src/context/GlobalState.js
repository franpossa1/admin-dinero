import React from "react";
//Reducer proveniente de AppReducer
import AppReducer from "./AppReducer.js";




//Estado Inicial

const INITIAL_STATE = {
  transactions: [],
};



//Creacion de Context
export const GlobalContext = React.createContext(INITIAL_STATE);

//Creacion de proveedor
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, INITIAL_STATE);
  //acciones
  function deleteTrans(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTrans(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  console.log("stateGlobal " + state.transactions);

  return (
    <GlobalContext.Provider
      value={{ transacciones: state.transactions, deleteTrans, addTrans }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
