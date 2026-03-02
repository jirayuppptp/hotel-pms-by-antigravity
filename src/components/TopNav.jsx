import { Bell, Search, User } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
    return (
        <header className="top-nav">
            <div className="search-container">
                <div className="search-wrapper">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Search bookings, guests, or rooms..."
                    />
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
                        <span className="user-role">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
