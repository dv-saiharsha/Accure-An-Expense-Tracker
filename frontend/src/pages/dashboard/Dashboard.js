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
        <div style={{ background: '#FFF', color: '#000', minHeight: '100vh', overflowY: 'auto', paddingTop: '8rem', paddingBottom: '10rem' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
                    <div>
                        <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Secure Overview</span>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 950, letterSpacing: '-3px', marginTop: '0.5rem' }}>Your Ledger.</h1>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn-primary" onClick={() => navigate('/payments')} style={{ background: '#FFF', color: '#000', border: '2px solid #EEE' }}>
                            <span className="material-symbols-rounded">send</span> Send Capital
                        </button>
                        <button className="btn-primary" onClick={() => navigate('/add-expense')}>
                            <span className="material-symbols-rounded">add</span> Log Entry
                        </button>
                    </div>
                </div>

                {/* Capital Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '6rem' }}>
                    <div className="auth-glass-card" style={{ padding: '3rem', background: '#000', color: '#FFF' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: '#666', marginBottom: '1.5rem' }}>Equity Value</p>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px' }}>${stats.totalBalance.toLocaleString()}</h2>
                    </div>
                    <div className="auth-glass-card" style={{ padding: '3rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: '#BBB', marginBottom: '1.5rem' }}>Receivables</p>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', color: '#43A047' }}>+${stats.owed.toLocaleString()}</h2>
                    </div>
                    <div className="auth-glass-card" style={{ padding: '3rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: '#BBB', marginBottom: '1.5rem' }}>Payables</p>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', color: '#E53935' }}>-${stats.owe.toLocaleString()}</h2>
                    </div>
                </div>

                {/* Recent Intelligence */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <h3 style={{ fontWeight: 950, fontSize: '2rem', marginBottom: '2.5rem' }}>Recent Activity</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {activities.map(act => (
                                <div key={act.id} className="auth-glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                        <div style={{ width: '54px', height: '54px', background: '#FAFAFA', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span className="material-symbols-rounded" style={{ color: '#000' }}>payments</span>
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '0.3rem' }}>{act.description}</h4>
                                            <p style={{ fontSize: '0.85rem', color: '#AAA', fontWeight: 700 }}>{act.date} • {act.category}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <h4 style={{ fontWeight: 950, fontSize: '1.4rem' }}>${act.amount}</h4>
                                        {act.from && <p style={{ fontSize: '0.75rem', color: '#43A047', fontWeight: 900 }}>FROM {act.from.toUpperCase()}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontWeight: 950, fontSize: '2rem', marginBottom: '2.5rem' }}>Insights</h3>
                        <div className="auth-glass-card" style={{ padding: '3rem' }}>
                            <div style={{ marginBottom: '3rem' }}>
                                <p style={{ color: '#AAA', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1rem' }}>CAPITAL VELOCITY</p>
                                <div style={{ height: '8px', background: '#F5F5F5', borderRadius: '100px', overflow: 'hidden' }}>
                                    <div style={{ width: '74%', height: '100%', background: '#276EF1' }}></div>
                                </div>
                                <p style={{ marginTop: '1rem', fontWeight: 950, fontSize: '1.1rem' }}>Excellent <span style={{ color: '#AAA', fontWeight: 600, fontSize: '0.9rem' }}>+12% than last month</span></p>
                            </div>
                            
                            <div>
                                <p style={{ color: '#AAA', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1rem' }}>LIABILITY QUOTA</p>
                                <div style={{ height: '8px', background: '#F5F5F5', borderRadius: '100px', overflow: 'hidden' }}>
                                    <div style={{ width: '15%', height: '100%', background: '#E53935' }}></div>
                                </div>
                                <p style={{ marginTop: '1rem', fontWeight: 950, fontSize: '1.1rem' }}>Low Risk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
