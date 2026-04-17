import React from 'react';

const Analytics = () => {
    const monthlyData = [
        { month: 'Jan', amount: 2400 },
        { month: 'Feb', amount: 1800 },
        { month: 'Mar', amount: 3200 },
        { month: 'Apr', amount: 2900 },
        { month: 'May', amount: 3600 },
        { month: 'Jun', amount: 2100 }
    ];
    const maxAmount = Math.max(...monthlyData.map(d => d.amount));

    const categories = [
        { name: 'Lifestyle', amount: 1240, pct: 35, color: '#276EF1' },
        { name: 'Transport', amount: 890, pct: 25, color: '#43A047' },
        { name: 'Infrastructure', amount: 710, pct: 20, color: '#FF9800' },
        { name: 'Fixed', amount: 530, pct: 15, color: '#E53935' },
        { name: 'Other', amount: 180, pct: 5, color: '#888' }
    ];

    return (
        <div className="page" style={{ paddingTop: '1.5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.6rem' }}>Intelligence</span>
                    <h1 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.2rem' }}>Analytics</h1>
                </div>

                {/* Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                        <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', color: '#AAA', marginBottom: '0.5rem' }}>This Month</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 950, letterSpacing: '-1px' }}>$3,550</h3>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                        <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', color: '#AAA', marginBottom: '0.5rem' }}>Avg / Day</p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 950, letterSpacing: '-1px' }}>$118</h3>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontWeight: 950, fontSize: '1.1rem', marginBottom: '1.5rem' }}>Monthly Spend</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '120px', gap: '6px' }}>
                        {monthlyData.map(d => (
                            <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                <div style={{
                                    width: '100%', maxWidth: '36px',
                                    height: `${(d.amount / maxAmount) * 100}px`,
                                    background: '#000', borderRadius: '6px',
                                    transition: '0.3s'
                                }} />
                                <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#AAA' }}>{d.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontWeight: 950, fontSize: '1.1rem', marginBottom: '1.5rem' }}>Categories</h3>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {categories.map(cat => (
                            <div key={cat.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                                    <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>{cat.name}</span>
                                    <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#888' }}>${cat.amount}</span>
                                </div>
                                <div style={{ height: '6px', background: '#F5F5F5', borderRadius: '100px', overflow: 'hidden' }}>
                                    <div style={{ width: `${cat.pct}%`, height: '100%', background: cat.color, borderRadius: '100px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
