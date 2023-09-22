import React, { createContext, useContext, useState } from 'react';
import App from './App';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [apikey, setApiKey] = useState(null);

  return (
    <AuthContext.Provider value={{ apikey, setApiKey }}>
         {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}