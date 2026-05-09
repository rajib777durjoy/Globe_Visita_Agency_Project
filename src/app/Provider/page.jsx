'use client'
import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const googlelogin=()=>{

    }
    const data= {
      googlelogin,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;