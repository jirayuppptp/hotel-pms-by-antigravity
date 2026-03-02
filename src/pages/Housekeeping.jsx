import { Brush } from 'lucide-react';

const Housekeeping = () => {
    return (
        <div className="page-content">
            <div className="page-header" style={{ marginBottom: '32px' }}>
                <div>
                    <h1 className="page-title">Housekeeping (แผนกแม่บ้าน)</h1>
                    <p className="page-subtitle">Room status and cleaning management</p>
                </div>
            </div>
            <div className="card shadow-sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
                <Brush size={48} style={{ marginBottom: '16px', color: 'var(--color-primary-light)' }} />
                <h2>Room Status Grid</h2>
                <p>This module will display all rooms and their cleaning status.</p>
            </div>
        </div>
    );
};

export default Housekeeping;
