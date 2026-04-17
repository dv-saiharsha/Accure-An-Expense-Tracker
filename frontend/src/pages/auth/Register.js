import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user',
        currency: 'USD'
    });

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await axios.post('http://localhost:4898/api/auth/register', {
                name: formData.username,
                email: formData.email,
                password: formData.password,
                role: formData.role,
                baseCurrency: formData.currency
            });
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.error || err.response?.data?.msg || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container animate-scale" style={{marginTop: '4rem', maxWidth: '500px'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                <span style={{textTransform: 'uppercase', fontWeight: 900, color: '#276EF1', letterSpacing: '2px', fontSize: '0.65rem'}}>Join Accure</span>
                <h1 className="section-title" style={{marginTop: '0.5rem'}}>Create Account</h1>
            </div>

            <form onSubmit={step === 1 ? handleNext : handleSubmit} className="auth-glass-card" style={{padding: '3rem'}}>
                {error && <div style={{background:'#FDECEA',color:'#E53935',padding:'0.75rem 1rem',borderRadius:'10px',fontWeight:700,fontSize:'0.85rem',marginBottom:'1.5rem'}}>{error}</div>}
                {step === 1 ? (
                    <div className="animate-slide">
                        <div className="float-field">
                            <input type="text" placeholder=" " required value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                            <label>Full Name</label>
                        </div>
                        <div className="float-field">
                            <input type="email" placeholder=" " required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                            <label>Email Address</label>
                        </div>
                        <div className="float-field">
                            <input type="password" placeholder=" " required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn-cta" style={{width: '100%', marginTop: '2rem'}}>
                            <span>Next Step</span>
                            <span className="material-symbols-rounded">arrow_forward</span>
                        </button>
                    </div>
                ) : (
                    <div className="animate-scale">
                        <div style={{marginBottom: '2rem'}}>
                            <p style={{fontWeight: 800, fontSize: '0.7rem', color: '#888', textTransform: 'uppercase'}}>Select Primary Currency</p>
                            <select 
                                className="auth-glass-card" 
                                style={{width: '100%', padding: '1rem', border: '2px solid #EEE', borderRadius: '12px', fontWeight: 700}}
                                value={formData.currency}
                                onChange={(e) => setFormData({...formData, currency: e.target.value})}
                            >
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="INR">INR (₹)</option>
                            </select>
                        </div>

                         <div style={{marginBottom: '2rem'}}>
                            <p style={{fontWeight: 800, fontSize: '0.7rem', color: '#888', textTransform: 'uppercase'}}>Account Role</p>
                            <div style={{display: 'flex', gap: '1rem'}}>
                                <button 
                                    type="button"
                                    onClick={() => setFormData({...formData, role: 'user'})}
                                    style={{
                                        flex: 1, padding: '1rem', borderRadius: '12px', border: '2px solid',
                                        borderColor: formData.role === 'user' ? '#000' : '#EEE',
                                        background: formData.role === 'user' ? '#F5F5F5' : 'transparent',
                                        fontWeight: 800
                                    }}>User</button>
                                <button 
                                    type="button"
                                    onClick={() => setFormData({...formData, role: 'admin'})}
                                    style={{
                                        flex: 1, padding: '1rem', borderRadius: '12px', border: '2px solid',
                                        borderColor: formData.role === 'admin' ? '#000' : '#EEE',
                                        background: formData.role === 'admin' ? '#F5F5F5' : 'transparent',
                                        fontWeight: 800
                                    }}>Admin</button>
                            </div>
                        </div>

                        <div style={{display: 'flex', gap: '1rem'}}>
                            <button type="button" className="btn-cta" style={{flex: 1, background: '#F5F5F5', color: '#000', border: 'none'}} onClick={() => setStep(1)}>Back</button>
                            <button type="submit" className="btn-cta" style={{flex: 2}}>Create Account</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
