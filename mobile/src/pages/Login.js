import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await axios.post('http://localhost:4898/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page animate-scale" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 1.5rem 2rem', minHeight: '100vh', paddingBottom: '2rem' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-rounded" style={{ color: '#FFF', fontSize: '1.5rem' }}>account_balance</span>
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 950, letterSpacing: '-1px' }}>ACCURE</h1>
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: 950, letterSpacing: '-1.5px', marginBottom: '0.3rem', lineHeight: 1.1 }}>Welcome back</h2>
            <p style={{ color: '#888', fontWeight: 600, fontSize: '0.95rem', marginBottom: '2.5rem' }}>Authenticate to access your vault</p>

            {error && (
                <div style={{ background: '#FFF5F5', color: '#E53935', padding: '0.75rem 1rem', borderRadius: '12px', marginBottom: '1.5rem', fontWeight: 700, fontSize: '0.85rem' }}>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#AAA' }}>Email</label>
                    <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        style={{ width: '100%', height: '54px', borderRadius: '14px', border: '2px solid #F0F0F0', padding: '0 1.25rem', fontSize: '1rem', fontWeight: 600, outline: 'none', transition: '0.2s' }}
                        onFocus={(e) => e.target.style.borderColor = '#000'}
                        onBlur={(e) => e.target.style.borderColor = '#F0F0F0'}
                        required
                    />
                </div>

                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#AAA' }}>Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange}
                        style={{ width: '100%', height: '54px', borderRadius: '14px', border: '2px solid #F0F0F0', padding: '0 1.25rem', fontSize: '1rem', fontWeight: 600, outline: 'none', transition: '0.2s' }}
                        onFocus={(e) => e.target.style.borderColor = '#000'}
                        onBlur={(e) => e.target.style.borderColor = '#F0F0F0'}
                        required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                        style={{ position: 'absolute', right: '1.25rem', bottom: '1rem', background: 'none', border: 'none', color: '#AAA', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase', cursor: 'pointer' }}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>

                <button type="submit" className="btn-primary" disabled={loading}
                    style={{ padding: '18px', fontSize: '1rem', borderRadius: '16px', opacity: loading ? 0.6 : 1 }}>
                    {loading ? 'Authenticating...' : 'Sign In'}
                </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#888', fontWeight: 600, fontSize: '0.9rem' }}>
                New here?{' '}
                <span onClick={() => navigate('/register')} style={{ color: '#000', fontWeight: 900, cursor: 'pointer' }}>Create Account</span>
            </p>
        </div>
    );
};

export default Login;
