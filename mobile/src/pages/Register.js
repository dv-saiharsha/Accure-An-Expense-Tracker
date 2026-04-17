import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'user', currency: 'USD' });

    const handleNext = (e) => { e.preventDefault(); setStep(2); };
    const handleSubmit = async (e) => { e.preventDefault(); console.log('Register:', formData); navigate('/login'); };

    return (
        <div className="page animate-scale" style={{ padding: '5rem 1.5rem 2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.6rem' }}>Join Accure</span>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.3rem' }}>Create Account</h1>
            </div>

            <form onSubmit={step === 1 ? handleNext : handleSubmit} className="glass-card" style={{ padding: '2rem' }}>
                {step === 1 ? (
                    <div>
                        <div className="float-field">
                            <input type="text" placeholder=" " required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                            <label>Full Name</label>
                        </div>
                        <div className="float-field">
                            <input type="email" placeholder=" " required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <label>Email Address</label>
                        </div>
                        <div className="float-field">
                            <input type="password" placeholder=" " required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                            Next Step <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>arrow_forward</span>
                        </button>
                    </div>
                ) : (
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ fontWeight: 800, fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Primary Currency</p>
                            <select
                                style={{ width: '100%', padding: '1rem', border: '2px solid #EEE', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', outline: 'none' }}
                                value={formData.currency}
                                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                            >
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="INR">INR (₹)</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ fontWeight: 800, fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Account Role</p>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                {['user', 'admin'].map(role => (
                                    <button key={role} type="button"
                                        onClick={() => setFormData({ ...formData, role })}
                                        style={{
                                            flex: 1, padding: '0.85rem', borderRadius: '12px',
                                            border: `2px solid ${formData.role === role ? '#000' : '#EEE'}`,
                                            background: formData.role === role ? '#F5F5F5' : 'transparent',
                                            fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', textTransform: 'capitalize'
                                        }}>{role}</button>
                                ))}
                            </div>
                        </div>
                        <button type="submit" className="btn-primary">Create Account</button>
                        <button type="button" onClick={() => setStep(1)}
                            style={{ width: '100%', marginTop: '0.75rem', background: 'none', border: 'none', fontWeight: 800, color: '#888', cursor: 'pointer', padding: '0.75rem' }}>
                            Back
                        </button>
                    </div>
                )}
            </form>

            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#888', fontWeight: 600, fontSize: '0.9rem' }}>
                Already have an account?{' '}
                <span onClick={() => navigate('/login')} style={{ color: '#000', fontWeight: 900, cursor: 'pointer' }}>Sign In</span>
            </p>
        </div>
    );
};

export default Register;
