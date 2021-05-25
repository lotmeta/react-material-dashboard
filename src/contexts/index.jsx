import React from 'react';
import { AuthProvider } from './auth';
import PropTypes from 'prop-types';


function ContextProvider({ children }) {


  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object
};

export default ContextProvider;