import { Bell, Search, User, Menu } from 'lucide-react';
import './TopNav.css';

const TopNav = ({ onMenuToggle }) => {
    return (
        <header className="top-nav">
            <div className="nav-left">
                <button className="icon-btn menu-toggle" onClick={onMenuToggle}>
                    <Menu size={20} />
                </button>
                <div className="search-container">
                    <div className="search-wrapper">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>

            <div className="nav-actions">
                <button className="icon-btn notification-btn">
                    <Bell size={20} />
                    <span className="badge">3</span>
                </button>

                <div className="user-profile">
                    <div className="avatar bg-gradient-primary">
                        <User size={18} color="white" />
                    </div>
                    <div className="user-info">
                        <span className="user-name">Manager</span>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default TopNav;
