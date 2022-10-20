import AuthProvider from "providers/AuthProvider";
import Router from "routes/Router";

function App() {
    return (
        <div className="App bg-gray-50">
            <AuthProvider>
                <Router/>
            </AuthProvider>
        </div>
    );
}
export default App;
