import React from 'react';

export const data = {
  nomeRazao: 'TESTE EMPRESA',
  cnpj: '1111111111111'
}

const DataContext = React.createContext(data);

export default DataContext;
