import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpenseForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: 'General',
        date: new Date().toISOString().split('T')[0],
        splitType: 'equally'
    });

    const categories = [
        { name: 'Food', icon: 'restaurant' },
        { name: 'Rent', icon: 'home' },
        { name: 'Transport', icon: 'directions_car' },
        { name: 'Shopping', icon: 'shopping_bag' },
        { name: 'Entertainment', icon: 'movie' },
        { name: 'General', icon: 'payments' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("POST /api/expenses - Payload:", formData);
        // Backend integration logic would go here
        navigate('/dashboard');
    };

    return (
        <div className="container animate-scale" style={{marginTop: '4rem', maxWidth: '800px'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                 <div style={{width: '64px', height: '64px', background: '#F5F5F5', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'}}>
                    <span className="material-symbols-rounded" style={{fontSize: '2.5rem', color: '#000'}}>add_card</span>
                 </div>
                 <h1 className="section-title">Add Expense</h1>
                 <p style={{color: '#888', fontWeight: 600}}>Enter receipt details to track or split</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-glass-card" style={{padding: '3rem'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                    <div className="float-field" style={{gridColumn: '1 / span 2'}}>
                        <input 
                            type="text" 
                            placeholder=" " 
                            required 
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                        />
                        <label>What was this for? (e.g. Dinner with friends)</label>
                    </div>

                    <div className="float-field">
                        <input 
                            type="number" 
                            placeholder=" " 
                            required 
                            value={formData.amount}
                            onChange={(e) => setFormData({...formData, amount: e.target.value})}
                        />
                        <label>Amount (USD)</label>
                    </div>

                    <div className="float-field">
                        <input 
                            type="date" 
                            placeholder=" " 
                            required 
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                        <label>Date</label>
                    </div>
                </div>

                <p style={{marginTop: '2.5rem', fontWeight: 800, fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px'}}>Category</p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem'}}>
                    {categories.map(cat => (
                        <div key={cat.name} 
                             onClick={() => setFormData({...formData, category: cat.name})}
                             style={{
                                 padding: '1.25rem', borderRadius: '16px', cursor: 'pointer', textAlign: 'center',
                                 border: formData.category === cat.name ? '2.5px solid #000' : '2px solid #F5F5F5',
                                 background: formData.category === cat.name ? '#FAFAFA' : 'transparent',
                                 transition: '0.2s'
                             }}>
                            <span className="material-symbols-rounded" style={{display: 'block', fontSize: '1.75rem', marginBottom: '0.5rem'}}>
                                {cat.icon}
                            </span>
                            <span style={{fontWeight: 800, fontSize: '0.75rem'}}>{cat.name}</span>
                        </div>
                    ))}
                </div>

                <div style={{display: 'flex', gap: '1rem', marginTop: '4rem'}}>
                    <button type="button" className="btn-cta" style={{flex: 1, background: '#F5F5F5', color: '#000', border: 'none'}} onClick={() => navigate(-1)}>
                        <span>Cancel</span>
                    </button>
                    <button type="submit" className="btn-cta" style={{flex: 2}}>
                        <span className="material-symbols-rounded">save</span>
                        <span>Confirm Expense</span>
                    </button>
                </div>
            </form>

            <div style={{marginTop: '2rem', textAlign: 'center'}}>
                <span style={{fontSize: '0.65rem', fontWeight: 900, color: '#BBB', textTransform: 'uppercase'}}>LOG: [POST] Initializing transaction handshake...</span>
            </div>
        </div>
    );
};

export default ExpenseForm;
