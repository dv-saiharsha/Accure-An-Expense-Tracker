import React from 'react';

const Contact = () => {
    return (
        <div style={{ background: '#FFF', color: '#000', paddingTop: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', padding: '6rem 2rem' }}>
                <div>
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Direct Access</span>
                    <h1 style={{ fontSize: '6rem', fontWeight: 950, letterSpacing: '-5px', lineHeight: '0.9', margin: '1.5rem 0' }}>
                        The Concierge <br /> of Capital.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '500px', margin: '0 auto 4rem', fontWeight: 600, lineHeight: '1.6', marginLeft: 0 }}>
                        For high-profile partnerships, enterprise integration, or professional support, we are available 24/7.
                    </p>
                    
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontWeight: 950, color: '#BBB', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>Global HQ</h4>
                            <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>Zurich Digital District <br /> Switzerland, CH-8001</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 950, color: '#BBB', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>Direct Lines</h4>
                            <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>hq@accure.finance <br /> +41 44 211 00 00</p>
                        </div>
                    </div>
                </div>

                <div className="auth-glass-card" style={{ padding: '4rem' }}>
                    <form style={{ display: 'grid', gap: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', fontWeight: 950, fontSize: '0.7rem', textTransform: 'uppercase', color: '#AAA', marginBottom: '1rem' }}>Full Identity</label>
                            <input type="text" style={{ width: '100%', border: 'none', borderBottom: '2px solid #EEE', padding: '0.5rem 0', fontSize: '1.2rem', fontWeight: 900, outline: 'none' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontWeight: 950, fontSize: '0.7rem', textTransform: 'uppercase', color: '#AAA', marginBottom: '1rem' }}>Communication</label>
                            <input type="email" style={{ width: '100%', border: 'none', borderBottom: '2px solid #EEE', padding: '0.5rem 0', fontSize: '1.2rem', fontWeight: 900, outline: 'none' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontWeight: 950, fontSize: '0.7rem', textTransform: 'uppercase', color: '#AAA', marginBottom: '1rem' }}>Memorandum</label>
                            <textarea rows="4" style={{ width: '100%', border: 'none', borderBottom: '2px solid #EEE', padding: '0.5rem 0', fontSize: '1.2rem', fontWeight: 900, outline: 'none', resize: 'none' }}></textarea>
                        </div>
                        <button className="btn-primary" style={{ height: '72px', justifyContent: 'center', fontSize: '1.1rem' }}>Dispatch Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
