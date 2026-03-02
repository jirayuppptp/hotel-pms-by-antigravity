import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import FrontDesk from './pages/FrontDesk';
import Housekeeping from './pages/Housekeeping';
import Accounting from './pages/Accounting';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <TopNav />
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
