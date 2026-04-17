import React, { useState } from 'react';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('EUR');
    const [result, setResult] = useState(0.92);

    const rates = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.12, JPY: 151.48 };

    const convert = () => {
        const res = (amount / rates[from]) * rates[to];
        setResult(res.toFixed(2));
    };

    return (
        <div className="container" style={{ marginTop: '8rem', maxWidth: '600px' }}>
            <div style={{ marginBottom: '4rem' }}>
                <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>FX Utility</span>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', marginTop: '0.5rem' }}>Global Arbitrage</h1>
            </div>

            <div className="auth-glass-card" style={{ padding: '3.5rem' }}>
                <div className="float-field" style={{ marginBottom: '2.5rem' }}>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder=" " />
                    <label>Amount to Convert</label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                    <select value={from} onChange={(e) => setFrom(e.target.value)} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #EEE', fontWeight: 700 }}>
                        {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="material-symbols-rounded">sync_alt</span>
                    <select value={to} onChange={(e) => setTo(e.target.value)} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #EEE', fontWeight: 700 }}>
                        {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <button onClick={convert} className="btn-primary" style={{ width: '100%', justifyContent: 'center', height: '60px' }}>
                    Execute Conversion
                </button>

                <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: '#FAFAFA', borderRadius: '24px' }}>
                    <p style={{ margin: 0, fontWeight: 900, color: '#888', fontSize: '0.8rem' }}>CONVERTED VALUE</p>
                    <h2 style={{ margin: '0.5rem 0 0 0', fontSize: '3rem', fontWeight: 950 }}>{result} <span style={{ color: '#276EF1' }}>{to}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
