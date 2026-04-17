import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const stats = { totalBalance: 4250.75, owed: 5120, owe: 869 };
    const activities = [
        { id: 1, amount: 120, description: 'Starbucks Roast', date: 'Just now', from: null, category: 'Lifestyle' },
        { id: 2, amount: 450, description: 'Amazon Cloud', date: '2h ago', from: 'Sarah', category: 'Infrastructure' },
        { id: 3, amount: 89, description: 'Uber Black', date: 'Yesterday', from: null, category: 'Transport' },
        { id: 4, amount: 1200, description: 'Office Rent', date: 'Yesterday', from: 'Mike', category: 'Fixed' }
    ];

    return (
        <div className="page" style={{ paddingTop: '1.5rem' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.6rem' }}>Secure Overview</span>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.25rem' }}>Your Ledger.</h1>
                </div>

                {/* Quick Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <button className="btn-primary" onClick={() => navigate('/add-expense')} style={{ flex: 1, padding: '12px', fontSize: '0.85rem', borderRadius: '12px' }}>
                        <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>add</span> Log Entry
                    </button>
                    <button className="btn-outline" onClick={() => navigate('/groups')} style={{ flex: 1, padding: '12px', fontSize: '0.85rem', borderRadius: '12px' }}>
                        <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>send</span> Send
                    </button>
                </div>

                {/* Equity Card */}
                <div className="glass-card" style={{ padding: '1.5rem', background: '#000', color: '#FFF', borderRadius: '20px', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', color: '#666', marginBottom: '0.75rem' }}>Equity Value</p>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 950, letterSpacing: '-1.5px' }}>${stats.totalBalance.toLocaleString()}</h2>
                </div>

                {/* Receivables / Payables */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                        <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', color: '#BBB', marginBottom: '0.5rem' }}>Receivables</p>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 950, letterSpacing: '-1px', color: '#43A047' }}>+${stats.owed.toLocaleString()}</h3>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                        <p style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', color: '#BBB', marginBottom: '0.5rem' }}>Payables</p>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 950, letterSpacing: '-1px', color: '#E53935' }}>-${stats.owe.toLocaleString()}</h3>
                    </div>
                </div>

                {/* Activity */}
                <h3 style={{ fontWeight: 950, fontSize: '1.3rem', marginBottom: '1rem' }}>Recent Activity</h3>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {activities.map(act => (
                        <div key={act.id} className="glass-card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '42px', height: '42px', background: '#FAFAFA', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-rounded" style={{ color: '#000', fontSize: '1.2rem' }}>payments</span>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 900, fontSize: '0.95rem', marginBottom: '0.15rem' }}>{act.description}</h4>
                                    <p style={{ fontSize: '0.7rem', color: '#AAA', fontWeight: 700 }}>{act.date} &bull; {act.category}</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <h4 style={{ fontWeight: 950, fontSize: '1.1rem' }}>${act.amount}</h4>
                                {act.from && <p style={{ fontSize: '0.6rem', color: '#43A047', fontWeight: 900 }}>FROM {act.from.toUpperCase()}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Insights Card */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontWeight: 950, fontSize: '1.3rem', marginBottom: '1rem' }}>Insights</h3>
                    <div className="glass-card" style={{ padding: '1.5rem' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ color: '#AAA', fontWeight: 800, fontSize: '0.65rem', marginBottom: '0.5rem' }}>CAPITAL VELOCITY</p>
                            <div style={{ height: '6px', background: '#F5F5F5', borderRadius: '100px', overflow: 'hidden' }}>
                                <div style={{ width: '74%', height: '100%', background: '#276EF1' }} />
                            </div>
                            <p style={{ marginTop: '0.5rem', fontWeight: 950, fontSize: '0.9rem' }}>Excellent <span style={{ color: '#AAA', fontWeight: 600, fontSize: '0.8rem' }}>+12%</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#AAA', fontWeight: 800, fontSize: '0.65rem', marginBottom: '0.5rem' }}>LIABILITY QUOTA</p>
                            <div style={{ height: '6px', background: '#F5F5F5', borderRadius: '100px', overflow: 'hidden' }}>
                                <div style={{ width: '17%', height: '100%', background: '#43A047' }} />
                            </div>
                            <p style={{ marginTop: '0.5rem', fontWeight: 950, fontSize: '0.9rem' }}>Minimal <span style={{ color: '#AAA', fontWeight: 600, fontSize: '0.8rem' }}>3% of income</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
