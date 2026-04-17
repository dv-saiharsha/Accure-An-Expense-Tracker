import React from 'react';

const SettlementHistory = () => {
    const history = [
        { id: 1, friend: 'John Doe', amount: 45.00, type: 'sent', date: '2023-11-20' },
        { id: 2, friend: 'Jane Smith', amount: 25.50, type: 'received', date: '2023-11-18' }
    ];

    return (
        <div className="container animate-scale" style={{marginTop: '4rem'}}>
            <div style={{marginBottom: '3rem'}}>
                <span style={{textTransform: 'uppercase', fontWeight: 900, color: '#276EF1', letterSpacing: '2px', fontSize: '0.65rem'}}>Transactions</span>
                <h1 className="section-title" style={{marginTop: '0.5rem'}}>Settlement History</h1>
            </div>

            <div className="auth-glass-card" style={{padding: '1.5rem'}}>
                {history.map(item => (
                    <div key={item.id} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                        padding: '1.5rem', borderBottom: '1px solid #EEE', gap: '1rem'
                    }}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px', 
                                background: item.type === 'sent' ? '#E8F5E9' : '#FCE4EC',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <span className="material-symbols-rounded" style={{
                                    color: item.type === 'sent' ? '#43A047' : '#E53935'
                                }}>
                                    {item.type === 'sent' ? 'call_made' : 'call_received'}
                                </span>
                            </div>
                            <div>
                                <h4 style={{margin: 0, fontWeight: 800}}>To {item.friend}</h4>
                                <p style={{margin: 0, fontSize: '0.75rem', color: '#888', fontWeight: 600}}>{item.date}</p>
                            </div>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <p style={{
                                margin: 0, fontWeight: 900, fontSize: '1.1rem',
                                color: item.type === 'sent' ? '#43A047' : '#E53935'
                            }}>
                                {item.type === 'sent' ? '-' : '+'}${item.amount.toFixed(2)}
                            </p>
                            <span style={{fontSize: '0.6rem', fontWeight: 900, color: '#BBB', textTransform: 'uppercase'}}>COMPLETED</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettlementHistory;
