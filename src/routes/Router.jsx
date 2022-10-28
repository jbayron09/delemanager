import useAuth from "hooks/auth/useAuth";
import {Route, Routes} from "react-router-dom";
import Redirect from "routes/Redirect";
import Login from "routes/auth/Login";
import Logout from "routes/auth/Logout";
import Dashboard from "routes/dashboard";

export default function Router() {
    const {isAuthenticated} = useAuth()
    return (
        <Routes>
            <Route path="/" element={<Redirect/>}/>
            {
                !isAuthenticated
                    ?
                    <>
                        <Route path="/auth/login" element={<Login/>}/>
                    </>
                    :
                    <>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/auth/logout" element={<Logout/>}></Route>
                    </>
            }
            <Route path="*" element={<Redirect/>}/>
        </Routes>
    )
}