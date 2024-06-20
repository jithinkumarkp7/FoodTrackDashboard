import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './index.css';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import Notification from './pages/Notification';
import Settings from './pages/Settings';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isCollapsed={isCollapsed} />
          <div className="flex-1 p-10 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
