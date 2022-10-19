import {Route, Routes} from "react-router-dom";
import Login from "routes/Login";
import Dashboard from "routes/Dashboard/Dashboard";
import Redirect from "routes/Redirect";
import AuthProvider from "providers/AuthProvider";

function App() {
    return (
        <div className="App bg-gray-50">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Redirect/>}/>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </AuthProvider>
        </div>
    );
}
export default App;
