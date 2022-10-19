import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') !== null)

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

