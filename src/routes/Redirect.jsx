import {Navigate} from "react-router-dom";
import useAuth from "hooks/auth/useAuth";

export default function Redirect() {
    const {isAuthenticated} = useAuth()
    return <Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} />
}