import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function AppRouter() {
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/materi" element={<Materi />} />
                <Route path="/kuis" element={<Kuis />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </>
}