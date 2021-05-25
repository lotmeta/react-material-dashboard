
import React, { createContext, useEffect, useState } from 'react';
import api from 'services/api';


const initialState = {
  signed: false,
  setSigned: () => { },
  signIn: () => { },
  loading: true,
  token: null,
  user: { nome: '', cpf: 12173762285 }
}



const AuthContext = createContext(initialState);

function AuthProvider({ children }) {
  const [user, setUser] = useState(initialState.user);
  const [token, setToken] = useState(initialState.token);
  const [loading, setLoading] = useState(initialState.loading);
  const [signed, setSigned] = useState(initialState.signed);

  useEffect(() => {
    const storedToken = localStorage.getItem('@portalContador:token');
    const storedUser = localStorage.getItem('@portalContador:usuario');

    if (storedToken && storedUser) {
      setUser(storedUser);
      api.defaults.headers.authorization = `Bearer ${storedToken}`;
      setSigned(true);
    }

    setLoading(false);
  }, []);

  async function signIn(email, password) {
    try {
      setLoading(true);
      console.log(email + password + token);
      //const dados = { email, password };
      //const data = await api.post('users/login', dados);

      const data = {
        name: 'Paulo',
        token: '1234',
        cpf: 12173762285
      }


      setUser({ nome: data.name, cpf: data.cpf });
      setToken(data.token);
      setSigned(true);

      var obj = { nome: data.name, cpf: data.cpf };
      var usuario = JSON.stringify(obj);
      api.defaults.headers.authorization = `Bearer ${data.token} `;
      localStorage.setItem('@portalContador:token', data.token);
      localStorage.setItem('@portalContador:usuario', usuario);
      localStorage.setItem('@portalContador:signed', 'true');

      setLoading(false);


    }
    catch (err) {
      console.error('ERRO');
    }

  }

  return (
    <AuthContext.Provider value={{ signed, signIn, loading, user }}>
      {children}
    </AuthContext.Provider>

  );
}
export { AuthContext, AuthProvider }