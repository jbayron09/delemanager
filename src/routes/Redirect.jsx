import {Navigate} from "react-router-dom";

export default function Redirect() {
    let isLogin = localStorage.getItem('token') !== null
    if (isLogin)
        return <Navigate to="/dashboard" />
    return <Navigate to="/auth/login" />
}