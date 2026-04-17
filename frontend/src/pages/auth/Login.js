import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
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
            if (onLogin) onLogin();
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: '#FFF', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '4rem', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                        width: '48px', height: '48px', background: '#000', borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span className="material-symbols-rounded" style={{ color: '#FFF', fontSize: '2rem' }}>account_balance</span>
                    </div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', margin: 0 }}>ACCURE</h1>
                </div>

                <div className="auth-glass-card" style={{ padding: '0', border: 'none', background: 'transparent' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-3px', marginBottom: '0.5rem', lineHeight: 1 }}>Welcome back</h2>
                    <p style={{ color: '#888', fontWeight: 600, fontSize: '1.1rem', marginBottom: '4rem' }}>Authenticate to access your vault</p>

                    {error && (
                        <div style={{ 
                            background: '#FFF5F5', color: '#E53935', padding: '1rem', 
                            borderRadius: '12px', marginBottom: '2rem', fontWeight: 700, fontSize: '0.9rem' 
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem', color: '#AAA' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ 
                                    width: '100%', height: '64px', borderRadius: '16px', border: '2px solid #F0F0F0',
                                    padding: '0 1.5rem', fontSize: '1.1rem', fontWeight: 600, transition: '0.2s', outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#000'}
                                onBlur={(e) => e.target.style.borderColor = '#F0F0F0'}
                                required
                            />
                        </div>

                        <div style={{ marginBottom: '3rem', position: 'relative' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem', color: '#AAA' }}>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                style={{ 
                                    width: '100%', height: '64px', borderRadius: '16px', border: '2px solid #F0F0F0',
                                    padding: '0 1.5rem', fontSize: '1.1rem', fontWeight: 600, transition: '0.2s', outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#000'}
                                onBlur={(e) => e.target.style.borderColor = '#F0F0F0'}
                                required
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ 
                                    position: 'absolute', right: '1.5rem', bottom: '1.2rem', 
                                    background: 'none', border: 'none', color: '#AAA', fontWeight: 800, 
                                    fontSize: '0.7rem', textTransform: 'uppercase', cursor: 'pointer' 
                                }}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={loading}
                            style={{ width: '100%', height: '72px', justifyContent: 'center', fontSize: '1.1rem' }}
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                            <span className="material-symbols-rounded" style={{ marginLeft: '0.5rem' }}>arrow_forward</span>
                        </button>
                    </form>

                    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span style={{ color: '#AAA', fontSize: '0.9rem', fontWeight: 800, cursor: 'default' }}>Recovery access?</span>
                        <p style={{ color: '#AAA', fontWeight: 600 }}>
                            New here? <Link to="/register" style={{ color: '#276EF1', fontWeight: 800, textDecoration: 'none' }}>Create Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
