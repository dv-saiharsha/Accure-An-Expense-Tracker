import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Food');

    const categories = ['Food', 'Transport', 'Rent', 'Entertainment', 'Shopping', 'Health', 'Other'];

    const handleRecord = (e) => {
        e.preventDefault();
        console.log("Recording transaction:", { amount, description, category });
        // Simulation of success
        navigate('/dashboard');
    };

    return (
        <div className="container animate-scale" style={{marginTop: '8rem', maxWidth: '700px', paddingBottom: '10rem'}}>
            <h1 style={{fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px'}}>Log Expenditure</h1>
            <p style={{color: '#888', fontWeight: 600, marginTop: '0.5rem'}}>Precision tracking for every dollar.</p>
            
            <div className="auth-glass-card" style={{marginTop: '4rem', padding: '3.5rem'}}>
                <form onSubmit={handleRecord}>
                    <div className="float-field" style={{marginBottom: '2.5rem'}}>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder=" " required />
                        <label>Transaction Description</label>
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem'}}>
                        <div className="float-field">
                            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder=" " required />
                            <label>Amount (USD)</label>
                        </div>
                        <div className="float-field">
                            <select value={category} onChange={(e) => setCategory(e.target.value)} style={{width: '100%', background: 'transparent', border: 'none', borderBottom: '2px solid #EEE', padding: '12px 0', fontWeight: 750, color: '#000', fontSize: '1.2rem', appearance: 'none'}}>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center', height: '64px', fontSize: '1.1rem'}}>
                        Authorize Transaction
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddExpense;
