import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Brush, Calculator, LogOut, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { path: '/dashboard', name: 'Overview', icon: <LayoutDashboard size={20} /> },
        { path: '/front-desk', name: 'แผนกต้อนรับ', icon: <Users size={20} /> },
        { path: '/housekeeping', name: 'แผนกแม่บ้าน', icon: <Brush size={20} /> },
        { path: '/accounting', name: 'แผนกบัญชี', icon: <Calculator size={20} /> },
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
            <div className="sidebar-header">
                <div className="logo">
                    <span className="logo-icon bg-gradient-primary">H</span>
                    <h2>Hotel PMS</h2>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                                onClick={onClose}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <ul>
                    <li>
                        <NavLink to="/settings" className="nav-item" onClick={onClose}>
                            <Settings size={20} />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <button className="nav-item logout-btn">
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
