import {createContext, useState} from "react";
import PropTypes from "prop-types";
import {LOCAL_STORAGE_AUTH_TOKEN_KEY} from "constants/localStorage";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) !== null)

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

