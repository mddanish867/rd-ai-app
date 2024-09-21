import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AIAssistant from './AIAssistant';
import ProjectList from './ProjectList';
import Datasets from './Datasets';
import Competitions from './Competitions';
import Learning from './Learning';
import Profile from './Profile';
import Auth from './Auth';
import Footer from './Footer';
import Home from './Home'; // New Home component
import About from './About'; // New About component
import Contact from './Contact'; // New Contact component

export default function App() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header Component */}
        <Header isAuthenticated={userEmail} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Sidebar: Hidden on small devices, visible on large screens */}
          <aside className="hidden lg:block lg:w-1/4 p-4 bg-white">
            <Sidebar />
          </aside>

          {/* Main Content Area: Adjust padding and margin for small and large devices */}
          <main className="flex-1 p-4 lg:p-6">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/project-list" element={<ProjectList />} />
              <Route path="/datasets" element={<Datasets />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/profile" element={<Profile />} />

              {/* Add other routes for authenticated users */}
            </Routes>
          </main>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}