import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TabBar from './components/TabBar';
import MobileNavbar from './components/MobileNavbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Groups from './pages/Groups';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';

function App() {
    const isAuthenticated = true;

    return (
        <Router>
            <MobileNavbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/add-expense" element={isAuthenticated ? <AddExpense /> : <Navigate to="/login" />} />
                <Route path="/groups" element={isAuthenticated ? <Groups /> : <Navigate to="/login" />} />
                <Route path="/analytics" element={isAuthenticated ? <Analytics /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
            </Routes>
            {isAuthenticated && <TabBar />}
        </Router>
    );
}

export default App;
