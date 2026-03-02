import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import FrontDesk from './pages/FrontDesk';
import Housekeeping from './pages/Housekeeping';
import Accounting from './pages/Accounting';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
        <div className="main-content">
          <TopNav onMenuToggle={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/front-desk" element={<FrontDesk />} />
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/accounting" element={<Accounting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
