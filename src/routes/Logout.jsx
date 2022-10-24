import useAuth from "hooks/auth/useAuth";

export default function Logout(){
    const {logout} = useAuth()

    return logout()
}