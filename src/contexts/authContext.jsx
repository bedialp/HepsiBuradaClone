import { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({children}){
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);