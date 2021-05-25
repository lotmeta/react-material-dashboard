import React, { useState } from 'react';
import { AuthProvider } from './auth';


function ContextProvider({ children }) {


  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default ContextProvider;