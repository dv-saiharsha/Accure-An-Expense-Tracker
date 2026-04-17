import React from 'react';

const About = () => {
    return (
        <div style={{ background: '#FFF', color: '#000', paddingTop: '8rem' }}>
            <section className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Our Heritage</span>
                <h1 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px', lineHeight: '0.9', margin: '1.5rem 0' }}>
                    The Architects of <br /> Digital Equity.
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '800px', margin: '0 auto 4rem', fontWeight: 600, lineHeight: '1.6' }}>
                    Accure was founded on a singular principle: that financial transparency is the bedrock of trust. 
                    We build high-fidelity instruments for the modern global citizen.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', textAlign: 'left', marginTop: '6rem' }}>
                    <div className="auth-glass-card" style={{ padding: '3rem' }}>
                        <h3 style={{ fontWeight: 950, fontSize: '2rem', marginBottom: '1.5rem' }}>Our Mission</h3>
                        <p style={{ color: '#666', lineHeight: '1.8', fontWeight: 500 }}>
                            To eliminate the friction of shared expenses through mathematical precision and elegant design. 
                            We believe that debt should never compromise a connection.
                        </p>
                    </div>
                    <div className="auth-glass-card" style={{ padding: '3rem' }}>
                        <h3 style={{ fontWeight: 950, fontSize: '2rem', marginBottom: '1.5rem' }}>Our Vision</h3>
                        <p style={{ color: '#666', lineHeight: '1.8', fontWeight: 500 }}>
                            To become the global clearinghouse for informal settlements, powering the economic social layer 
                            for millions of users worldwide.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
