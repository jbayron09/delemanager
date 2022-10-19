import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "providers/AuthProvider";

export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'token'

export default function useAuth(){
    const navigate = useNavigate()
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

    const login = token => {
        localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, token)
        setIsAuthenticated(true)
        navigate("/dashboard")
    }

    const logout = () => {
        localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY)
        setIsAuthenticated(false)
        navigate("/")
    }

    return {
        isAuthenticated,
        login,
        logout,
    }
}
