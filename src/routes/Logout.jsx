import {useEffect} from "react";
import useAuth from "hooks/auth/useAuth";

export default function Logout(){
    const {logout} = useAuth()

    useEffect(() => {
        logout()
    },[logout])

    return null
}