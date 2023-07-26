import Login from './pages/Login';
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import GPTHub from './pages/GPTHub';
import TestLabPage from './pages/TestLabPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<Signup />} />                  
                    <Route path="/gpt-hub" element={<GPTHub />} />      
                    <Route path="/test-lab" element={<TestLabPage />} />    
                </Routes>
            </Router>
        </>
    );
}

export default App;
