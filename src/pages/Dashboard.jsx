import { Users, LogIn, LogOut, BedDouble, CalendarPlus, KeyRound } from 'lucide-react';
import KPICard from '../components/KPICard';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="page-content dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Overview Dashboard</h1>
                    <p className="page-subtitle">Welcome back, here is what's happening today.</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-outline" style={{ display: 'flex', gap: '8px' }}>
                        <span>Today, 24 Oct</span>
                    </button>
                </div>
            </div>

            {/* KPI Cards Section */}
            <section className="kpi-section">
                <KPICard
                    title="Occupancy Rate"
                    value="85%"
                    icon={<BedDouble size={24} />}
                    trend="up"
                    trendValue="4.5%"
                    colorClass="icon-blue"
                />
                <KPICard
                    title="Today's Arrivals"
                    value="24"
                    icon={<LogIn size={24} />}
                    trend="up"
                    trendValue="12%"
                    colorClass="icon-green"
                />
                <KPICard
                    title="Today's Departures"
                    value="18"
                    icon={<LogOut size={24} />}
                    trend="down"
                    trendValue="2.1%"
                    colorClass="icon-orange"
                />
                <KPICard
                    title="Total Guests"
                    value="142"
                    icon={<Users size={24} />}
                    trend="up"
                    trendValue="8.4%"
                    colorClass="icon-blue"
                />
            </section>

            {/* Dashboard Main Content Area */}
            <div className="dashboard-grid">
                <section className="quick-actions card shadow-sm">
                    <div className="card-header">
                        <h2 className="card-title">Quick Actions</h2>
                    </div>
                    <div className="card-body action-grid">
                        <button className="action-btn new-booking">
                            <div className="action-icon"><CalendarPlus size={24} /></div>
                            <span>New Booking</span>
                        </button>
                        <button className="action-btn check-in">
                            <div className="action-icon"><KeyRound size={24} /></div>
                            <span>Check-in</span>
                        </button>
                        <button className="action-btn check-out">
                            <div className="action-icon"><LogOut size={24} /></div>
                            <span>Check-out</span>
                        </button>
                        <button className="action-btn room-service">
                            <div className="action-icon"><BedDouble size={24} /></div>
                            <span>Room Status</span>
                        </button>
                    </div>
                </section>

                <section className="recent-activity card shadow-sm">
                    <div className="card-header">
                        <h2 className="card-title">Recent Activity</h2>
                        <button className="btn btn-ghost">View All</button>
                    </div>
                    <div className="card-body">
                        <ul className="activity-list">
                            <li className="activity-item">
                                <div className="activity-indicator indicator-green"></div>
                                <div className="activity-details">
                                    <p className="activity-text"><strong>John Doe</strong> checked in to Room <strong>402</strong></p>
                                    <span className="activity-time">10 mins ago</span>
                                </div>
                            </li>
                            <li className="activity-item">
                                <div className="activity-indicator indicator-blue"></div>
                                <div className="activity-details">
                                    <p className="activity-text">New booking received for <strong>Deluxe Suite</strong></p>
                                    <span className="activity-time">35 mins ago</span>
                                </div>
                            </li>
                            <li className="activity-item">
                                <div className="activity-indicator indicator-orange"></div>
                                <div className="activity-details">
                                    <p className="activity-text">Room <strong>215</strong> status changed to <em>Cleaning</em></p>
                                    <span className="activity-time">1 hour ago</span>
                                </div>
                            </li>
                            <li className="activity-item">
                                <div className="activity-indicator indicator-red"></div>
                                <div className="activity-details">
                                    <p className="activity-text"><strong>Jane Smith</strong> checked out from Room <strong>108</strong></p>
                                    <span className="activity-time">2 hours ago</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
