import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPortal = () => {
    const [mode, setMode] = useState('request'); // request or send
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleTransaction = (e) => {
        e.preventDefault();
        console.log(`Executing ${mode}:`, { email, amount });
        navigate('/dashboard');
    };

    return (
        <div className="container" style={{ marginTop: '8rem', maxWidth: '700px' }}>
            <div style={{ marginBottom: '4rem' }}>
                <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Ledger</span>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', marginTop: '0.5rem' }}>Transfer Assets</h1>
            </div>

            <div className="auth-glass-card" style={{ padding: '4rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                    <button 
                        onClick={() => setMode('request')}
                        style={{ flex: 1, height: '54px', borderRadius: '14px', border: 'none', background: mode === 'request' ? '#000' : '#F5F5F5', color: mode === 'request' ? '#FFF' : '#000', fontWeight: 800, cursor: 'pointer', transition: '0.3s' }}
                    >Request Money</button>
                    <button 
                        onClick={() => setMode('send')}
                        style={{ flex: 1, height: '54px', borderRadius: '14px', border: 'none', background: mode === 'send' ? '#000' : '#F5F5F5', color: mode === 'send' ? '#FFF' : '#000', fontWeight: 800, cursor: 'pointer', transition: '0.3s' }}
                    >Send Assets</button>
                </div>

                <form onSubmit={handleTransaction}>
                    <div className="float-field" style={{ marginBottom: '2.5rem' }}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " required />
                        <label>Recipient/Payer Email</label>
                    </div>
                    <div className="float-field" style={{ marginBottom: '3.5rem' }}>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder=" " required />
                        <label>Capital Amount ($)</label>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', height: '64px', background: '#276EF1' }}>
                        {mode === 'request' ? 'Initiate Request' : 'Authorize Transfer'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPortal;
