import './KPICard.css';

const KPICard = ({ title, value, icon, trend, trendValue, colorClass }) => {
    const isPositive = trend === 'up';

    return (
        <div className="kpi-card shadow-sm">
            <div className="kpi-header">
                <h3 className="kpi-title">{title}</h3>
                <div className={`kpi-icon-wrapper ${colorClass}`}>
                    {icon}
                </div>
            </div>

            <div className="kpi-body">
                <div className="kpi-value">{value}</div>
                {trendValue && (
                    <div className="kpi-trend">
                        <span className={`trend-badge ${isPositive ? 'trend-up' : 'trend-down'}`}>
                            {isPositive ? '↑' : '↓'} {trendValue}
                        </span>
                        <span className="trend-text">vs last week</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KPICard;
