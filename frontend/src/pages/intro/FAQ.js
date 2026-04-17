import React from 'react';

const FAQ = () => {
    const questions = [
        { q: "How is my digital identity managed?", a: "Accure uses end-to-end encryption. Your data is your property, stored in military-grade encrypted environments." },
        { q: "Can I use multiple currencies in one circle?", a: "Yes. Our real-time FX engine dynamically converts all entries into your chosen base currency." },
        { q: "What happens if a settlement is disputed?", a: "Accure provides a transparent, immutable log of all activity. We act as the single source of truth for your group." },
        { q: "Is there a limit to group size?", a: "Accure is engineered to scale. Whether it's a dinner for two or a global expedition, we handle the complexity." }
    ];

    return (
        <div style={{ background: '#FFF', color: '#000', paddingTop: '10rem', minHeight: '100vh', paddingBottom: '10rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Knowledge Base</span>
                <h1 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px', margin: '1.5rem 0 5rem' }}>Clarifications.</h1>
                
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {questions.map(item => (
                        <div key={item.q} className="auth-glass-card" style={{ padding: '3.5rem' }}>
                            <h3 style={{ fontWeight: 950, fontSize: '1.8rem', marginBottom: '1.5rem' }}>{item.q}</h3>
                            <p style={{ color: '#666', fontWeight: 500, lineHeight: '1.8', fontSize: '1.1rem' }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
