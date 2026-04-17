import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from '../components/CountUp';

const Landing = () => {
    const navigate = useNavigate();
    const brands = ['Stripe', 'Revolut', 'Goldman Sachs', 'BlackRock', 'Visa', 'PhonePe', 'Google Pay', 'HSBC', 'JPMorgan', 'Barclays', 'Citi', 'Mastercard'];
    const marqueeRef = useRef(null);
    const [marqueeActive, setMarqueeActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setMarqueeActive(true); },
            { threshold: 0.3 }
        );
        if (marqueeRef.current) observer.observe(marqueeRef.current);
        return () => observer.disconnect();
    }, []);

    const features = [
        { icon: 'bolt', title: 'High Velocity', desc: 'Settle debts in 3 seconds, not 3 days.' },
        { icon: 'security', title: 'Non-Custodial', desc: 'Your bank credentials never touch our servers.' },
        { icon: 'public', title: 'Global FX', desc: 'Live exchange rates for 160+ currencies.' },
        { icon: 'monitoring', title: 'Deep Analytics', desc: 'Predictive insights into your spending.' },
        { icon: 'groups', title: 'Circles', desc: 'Intelligent group management for everyone.' },
        { icon: 'lock', title: 'Encryption', desc: 'Every transaction is encrypted at rest.' }
    ];

    const faq = [
        { q: "Is Accure a bank?", a: "No. Accure is a non-custodial ledger. We track settlements mathematically." },
        { q: "International currency?", a: "Yes. Real-time FX engine for any currency." },
        { q: "Is my data secure?", a: "AES-256 encryption at rest and SSL for all data in transit." }
    ];

    return (
        <div className="page" style={{ background: '#FFF', paddingBottom: 0 }}>
            {/* Hero */}
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1.5rem 4rem' }}>
                <div className="animate-scale">
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem' }}>The Gold Standard</span>
                    <h1 style={{ fontSize: '3.2rem', fontWeight: 950, letterSpacing: '-2.5px', lineHeight: 1.05, margin: '1rem 0' }}>
                        High Velocity<br />Finance.
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#888', fontWeight: 600, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                        Accure is the premium ledger for global citizens. Split, settle, and scale with pure excellence.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="btn-primary" onClick={() => navigate('/register')} style={{ padding: '18px', fontSize: '1rem', borderRadius: '16px' }}>Get Started</button>
                        <button className="btn-outline" onClick={() => navigate('/login')} style={{ padding: '18px', fontSize: '1rem', borderRadius: '16px' }}>Authenticate</button>
                    </div>
                </div>
            </section>

            {/* Brands Marquee */}
            <section ref={marqueeRef} style={{ padding: '3rem 0', background: '#FAFAFA', borderTop: '1px solid #EEE', borderBottom: '1px solid #EEE', overflow: 'hidden' }}>
                <p style={{ textAlign: 'center', fontWeight: 900, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#BBB', marginBottom: '1.5rem' }}>Powering the next generation of wealth</p>
                <div style={{ display: 'flex', width: 'max-content', animation: marqueeActive ? 'marqueeScroll 20s linear infinite' : 'none', opacity: 0.4, filter: 'grayscale(100%)' }}>
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={`${brand}-${i}`} style={{ fontWeight: 950, fontSize: '1rem', letterSpacing: '-0.5px', whiteSpace: 'nowrap', padding: '0 1.5rem' }}>{brand}</span>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '4rem 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem' }}>Capabilities</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.5rem' }}>Engineered for Perfection.</h2>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {features.map(f => (
                        <div key={f.title} className="glass-card" style={{ padding: '1.75rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span className="material-symbols-rounded" style={{ fontSize: '1.8rem', color: '#276EF1' }}>{f.icon}</span>
                                <div>
                                    <h3 style={{ fontWeight: 950, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{f.title}</h3>
                                    <p style={{ color: '#888', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.5 }}>{f.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: '4rem 1.5rem', background: '#000', color: '#FFF' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem' }}>Protocol</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.5rem' }}>Three Steps to Clarity.</h2>
                </div>
                <div style={{ display: 'grid', gap: '2.5rem' }}>
                    {[
                        { s: '01', t: 'Connect', d: 'Invite your circle and set your base currency.' },
                        { s: '02', t: 'Log', d: 'Enter expenses as they happen. We handle the math.' },
                        { s: '03', t: 'Settle', d: 'Clear balances with zero friction.' }
                    ].map(step => (
                        <div key={step.s}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 950, color: '#333' }}>{step.s}</span>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 950, margin: '0.25rem 0 0.5rem' }}>{step.t}</h3>
                            <p style={{ color: '#888', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.5 }}>{step.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 950, letterSpacing: '-2px' }}>$<CountUp end={820} prefix="" decimals={0} />M+</h2>
                        <p style={{ fontWeight: 800, color: '#888', fontSize: '0.8rem' }}>Processed Monthly</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 950, letterSpacing: '-2px' }}><CountUp end={99} prefix="" decimals={0} />.9%</h2>
                        <p style={{ fontWeight: 800, color: '#888', fontSize: '0.8rem' }}>Settlement Rate</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 950, letterSpacing: '-2px' }}><CountUp end={240} prefix="" decimals={0} />K</h2>
                        <p style={{ fontWeight: 800, color: '#888', fontSize: '0.8rem' }}>Global Users</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '4rem 1.5rem', background: '#FAFAFA' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem' }}>Insights</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.5rem' }}>Common Inquiries.</h2>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {faq.map(item => (
                        <div key={item.q} className="glass-card" style={{ padding: '1.5rem', background: '#FFF' }}>
                            <h4 style={{ fontWeight: 950, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.q}</h4>
                            <p style={{ color: '#666', fontWeight: 500, lineHeight: 1.5, fontSize: '0.9rem' }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 950, letterSpacing: '-2px', marginBottom: '1.5rem', lineHeight: 1.05 }}>Ready to Scale?</h2>
                <button className="btn-primary" onClick={() => navigate('/register')} style={{ padding: '18px', fontSize: '1rem', borderRadius: '16px' }}>
                    Get Started for Free
                </button>
                <p style={{ marginTop: '1rem', color: '#AAA', fontWeight: 600, fontSize: '0.85rem' }}>No credit card required.</p>
            </section>

            {/* Footer */}
            <footer style={{ background: '#000', color: '#FFF', padding: '3rem 1.5rem 2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 950, letterSpacing: '-1px', marginBottom: '1rem' }}>ACCURE</h2>
                <p style={{ color: '#666', fontWeight: 500, fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '2rem' }}>The gold standard for global settlements and social financial intelligence.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                        <h4 style={{ fontWeight: 950, fontSize: '0.8rem', marginBottom: '1rem' }}>Product</h4>
                        <div style={{ display: 'grid', gap: '0.5rem', color: '#666', fontWeight: 600, fontSize: '0.8rem' }}>
                            <span>Analytics</span><span>Circles</span><span>FX Engine</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 950, fontSize: '0.8rem', marginBottom: '1rem' }}>Company</h4>
                        <div style={{ display: 'grid', gap: '0.5rem', color: '#666', fontWeight: 600, fontSize: '0.8rem' }}>
                            <span>About</span><span>Security</span><span>Legal</span>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', color: '#444', fontWeight: 800, fontSize: '0.65rem', textAlign: 'center' }}>
                    <span>&copy; 2026 ACCURE AG. ALL RIGHTS RESERVED.</span>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
