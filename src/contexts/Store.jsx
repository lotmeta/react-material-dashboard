import React, { useState } from 'react'

const initialState = {
  nomeEmpresa: '',
  cnpjEmpresa: '',
}

export const AppContext = React.createContext(initialState)

const Store = props => {

  const [dados, setDados] = useState(initialState);

  function updatState(nn, cc) {
    setDados({ nomeEmpresa: nn, cnpjEmpresa: cc });

  }

  return (
    <AppContext.Provider
      value={{
        nome: dados.nomeEmpresa || 'PORTAL CONTADOR',
        cnpj: dados.cnpjEmpresa || '',
        setDadosEmpresa: (n, c) => updatState(n, c)
      }}
    >
      {props.children}
    </AppContext.Provider>)
}

export default Store;