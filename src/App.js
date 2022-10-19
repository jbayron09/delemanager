import {Route, Routes} from "react-router-dom";
import Login from "routes/Login";
import Dashboard from "routes/Dashboard/Dashboard";
import Redirect from "routes/Redirect";

function App() {
    return (
        <div className="App bg-gray-50">
            <Routes>
                <Route path="/" element={<Redirect/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}
export default App;
