import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import GroupsList from './pages/groups/GroupsList';
import Profile from './pages/settings/Profile';
import Landing from './pages/intro/Landing';
import About from './pages/intro/About';
import Services from './pages/intro/Services';
import Contact from './pages/intro/Contact';
import FAQ from './pages/intro/FAQ';
import Success from './pages/intro/Success';
import Navbar from './components/layout/Navbar';
import Analytics from './pages/reports/Analytics';
import CurrencyConverter from './pages/utility/CurrencyConverter';
import PaymentPortal from './pages/settlements/PaymentPortal';
import FriendsList from './pages/friends/FriendsList';
import AddExpense from './pages/dashboard/AddExpense';
import CreateGroup from './pages/groups/CreateGroup';
import OnboardingModal from './components/common/OnboardingModal';

function App() {
  const [showOnboarding, setShowOnboarding] = React.useState(false);
  const isAuthenticated = true; // Temporary logic

  const handleOnboardingComplete = (data) => {
    console.log("Onboarding finished:", data);
    setShowOnboarding(false);
    // In a real app, save to backend or localStorage
    localStorage.setItem("accure_onboarded", "true");
  };

  React.useEffect(() => {
    const onboarded = localStorage.getItem("accure_onboarded");
    if (isAuthenticated && !onboarded) {
      setShowOnboarding(true);
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Navbar />
      {showOnboarding && <OnboardingModal onComplete={handleOnboardingComplete} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/add-expense" element={isAuthenticated ? <AddExpense /> : <Navigate to="/login" />} />
        <Route path="/groups" element={isAuthenticated ? <GroupsList /> : <Navigate to="/login" />} />
        <Route path="/create-group" element={isAuthenticated ? <CreateGroup /> : <Navigate to="/login" />} />
        <Route path="/friends" element={isAuthenticated ? <FriendsList /> : <Navigate to="/login" />} />
        <Route path="/analytics" element={isAuthenticated ? <Analytics /> : <Navigate to="/login" />} />
        <Route path="/currency-converter" element={isAuthenticated ? <CurrencyConverter /> : <Navigate to="/login" />} />
        <Route path="/payments" element={isAuthenticated ? <PaymentPortal /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
