import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ amount: '', description: '', category: 'General', split: 'none' });

    const categories = ['General', 'Lifestyle', 'Transport', 'Infrastructure', 'Fixed', 'Entertainment'];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Expense:', formData);
        navigate('/dashboard');
    };

    return (
        <div className="page animate-scale" style={{ paddingTop: '1.5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: '#888', marginBottom: '1rem' }}>
                        <span className="material-symbols-rounded" style={{ fontSize: '1.2rem' }}>arrow_back</span> Back
                    </button>
                    <h1 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px' }}>Log Entry</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Amount */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#AAA', marginBottom: '0.5rem' }}>Amount</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 950, fontSize: '1.2rem', color: '#BBB' }}>$</span>
                            <input
                                type="number" step="0.01" required
                                value={formData.amount}
                                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                placeholder="0.00"
                                style={{ width: '100%', height: '60px', borderRadius: '14px', border: '2px solid #F0F0F0', padding: '0 1.25rem 0 2.5rem', fontSize: '1.5rem', fontWeight: 950, outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#AAA', marginBottom: '0.5rem' }}>Description</label>
                        <input
                            type="text" required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="What was this for?"
                            style={{ width: '100%', height: '54px', borderRadius: '14px', border: '2px solid #F0F0F0', padding: '0 1.25rem', fontSize: '1rem', fontWeight: 600, outline: 'none' }}
                        />
                    </div>

                    {/* Category */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#AAA', marginBottom: '0.75rem' }}>Category</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {categories.map(cat => (
                                <button key={cat} type="button"
                                    onClick={() => setFormData({ ...formData, category: cat })}
                                    style={{
                                        padding: '8px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800,
                                        border: `2px solid ${formData.category === cat ? '#000' : '#EEE'}`,
                                        background: formData.category === cat ? '#000' : 'transparent',
                                        color: formData.category === cat ? '#FFF' : '#888',
                                        cursor: 'pointer', transition: '0.2s'
                                    }}>{cat}</button>
                            ))}
                        </div>
                    </div>

                    {/* Split */}
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#AAA', marginBottom: '0.75rem' }}>Split With</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {['none', 'equal', 'custom'].map(s => (
                                <button key={s} type="button"
                                    onClick={() => setFormData({ ...formData, split: s })}
                                    style={{
                                        flex: 1, padding: '10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800,
                                        border: `2px solid ${formData.split === s ? '#000' : '#EEE'}`,
                                        background: formData.split === s ? '#F5F5F5' : 'transparent',
                                        cursor: 'pointer', textTransform: 'capitalize'
                                    }}>{s === 'none' ? 'Just Me' : s}</button>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ padding: '18px', fontSize: '1rem', borderRadius: '16px' }}>
                        Log Expense
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddExpense;
