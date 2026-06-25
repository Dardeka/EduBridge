import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Materi from "./pages/HalamanMateri";
import Kuis from "./pages/Kuis";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/materi" element={<Materi/>} />
                <Route path="/kuis" element={<Kuis />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
    
}

export default AppRouter;