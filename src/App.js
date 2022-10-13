import {Routes, Route} from "react-router-dom";
import Login from "routes/Login";
import Dashboard from "routes/Dashboard/Dashboard";

function App() {
    return (
        <div className="App bg-gray-50">
            <Routes>
                <Route path='/auth/login' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}
export default App;
