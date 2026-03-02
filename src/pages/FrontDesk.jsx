import { Users } from 'lucide-react';

const FrontDesk = () => {
    return (
        <div className="page-content">
            <div className="page-header" style={{ marginBottom: '32px' }}>
                <div>
                    <h1 className="page-title">Front Desk (แผนกต้อนรับ)</h1>
                    <p className="page-subtitle">Manage reservations and check-ins</p>
                </div>
            </div>
            <div className="card shadow-sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
                <Users size={48} style={{ marginBottom: '16px', color: 'var(--color-primary-light)' }} />
                <h2>Reservations Module</h2>
                <p>This module will contain the bookings calendar and reception workflow.</p>
            </div>
        </div>
    );
};

export default FrontDesk;
