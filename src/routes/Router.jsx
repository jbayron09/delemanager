import useAuth from "hooks/auth/useAuth";
import {Route, Routes} from "react-router-dom";
import Redirect from "routes/Redirect";
import Login from "routes/Login";
import Dashboard from "routes/Dashboard/Dashboard";

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
                    </>
            }
            <Route path="*" element={<Redirect/>}/>
        </Routes>
    )
}