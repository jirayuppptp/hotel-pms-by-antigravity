import { Calculator } from 'lucide-react';

const Accounting = () => {
    return (
        <div className="page-content">
            <div className="page-header" style={{ marginBottom: '32px' }}>
                <div>
                    <h1 className="page-title">Accounting (แผนกบัญชี)</h1>
                    <p className="page-subtitle">Financial reports and billing</p>
                </div>
            </div>
            <div className="card shadow-sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
                <Calculator size={48} style={{ marginBottom: '16px', color: 'var(--color-primary-light)' }} />
                <h2>Financial Reports</h2>
                <p>This module will contain invoices, revenue stats, and billing.</p>
            </div>
        </div>
    );
};

export default Accounting;
