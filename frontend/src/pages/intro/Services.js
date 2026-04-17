import React from 'react';

const Services = () => {
    const services = [
        { icon: 'analytics', title: 'Wealth Intelligence', desc: 'Real-time analytics on your capital velocity and spending distribution.' },
        { icon: 'payments', title: 'Global Settlements', desc: 'Multi-currency support for cross-border expense tracking and splitting.' },
        { icon: 'hub', title: 'Circle Management', desc: 'Highly organized group ledgers for flatmates, trips, and projects.' },
        { icon: 'security', title: 'Non-Custodial', desc: 'We track the math, not the money. Your bank info stays with you.' }
    ];

    return (
        <div style={{ background: '#FFF', color: '#000', paddingTop: '8rem' }}>
            <section className="container" style={{ padding: '6rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Capabilities</span>
                    <h1 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px', lineHeight: '0.9', margin: '1.5rem 0' }}>
                        Sophisticated Tools for <br /> Modern Living.
                    </h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map(s => (
                        <div key={s.title} className="auth-glass-card" style={{ padding: '3rem', transition: '0.3s' }}>
                            <span className="material-symbols-rounded" style={{ fontSize: '3rem', color: '#276EF1', marginBottom: '1.5rem' }}>{s.icon}</span>
                            <h3 style={{ fontWeight: 950, fontSize: '1.8rem', marginBottom: '1rem' }}>{s.title}</h3>
                            <p style={{ color: '#888', fontWeight: 600, lineHeight: '1.6' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
