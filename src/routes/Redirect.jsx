import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "providers/AuthProvider";

export default function Redirect() {
    if (useContext(AuthContext).isAuthenticated)
        return <Navigate to="/dashboard" />
    return <Navigate to="/auth/login" />
}