import {createContext} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const isAuthenticated = localStorage.getItem('token') !== null

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

