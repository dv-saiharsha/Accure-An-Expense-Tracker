import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from '../../components/common/CountUp';

const Landing = () => {
    const navigate = useNavigate();
    const brands = ['Stripe', 'Revolut', 'Goldman Sachs', 'BlackRock', 'Visa', 'Platypus'];
    const features = [
        { icon: 'bolt', title: 'High Velocity', desc: 'Settle debts in 3 seconds, not 3 days. Instant logging for instant peace.' },
        { icon: 'security', title: 'Non-Custodial', desc: 'Your bank credentials never touch our servers. Pure, decentralized math.' },
        { icon: 'public', title: 'Global FX', desc: 'Live exchange rates for 160+ currencies. Split expenses in London, pay in NY.' },
        { icon: 'monitoring', title: 'Deep Analytics', desc: 'Predictive insights into your social spending and group liabilities.' },
        { icon: 'groups', title: 'Circles', desc: 'Intelligent group management for flatmates, trips, and business partners.' },
        { icon: 'lock', title: 'Encryption', desc: 'Every transaction is encrypted at rest. Your financial privacy is the priority.' }
    ];

    const faq = [
        { q: "Is Accure a bank?", a: "No. Accure is a non-custodial ledger. We track settlements mathematically while you handle the actual money in your own banking environment." },
        { q: "Does it support international currency?", a: "Yes. Our real-time FX engine allows you to split expenses in any currency and see balances in your base currency." },
        { q: "Is my data secure?", a: "We use AES-256 encryption at rest and SSL for all data in transit. Your social discovery data is yours alone." }
    ];

    return (
        <div style={{ background: '#FFF', color: '#000', overflowY: 'auto', minHeight: '100vh' }}>
            {/* 1. Hero Section */}
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10rem 2rem' }}>
                <div className="animate-scale">
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>The Gold Standard</span>
                    <h1 style={{ fontSize: '7rem', fontWeight: 950, letterSpacing: '-6px', lineHeight: '0.9', margin: '1.5rem 0' }}>
                        High Velocity <br /> Finance.
                    </h1>
                    <p style={{ fontSize: '1.4rem', color: '#888', maxWidth: '600px', margin: '0 auto 4rem', fontWeight: 600 }}>
                        Accure is the premium ledger for global citizens. <br /> Split, settle, and scale with pure excellence.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <button className="btn-primary" onClick={() => navigate('/register')} style={{ padding: '24px 56px', fontSize: '1.3rem', borderRadius: '20px' }}>Get Started</button>
                        <button 
                            onClick={() => navigate('/login')}
                            style={{ 
                                padding: '24px 56px', fontSize: '1.3rem', borderRadius: '20px',
                                background: 'transparent', border: '2px solid #000', color: '#000', fontWeight: 900, cursor: 'pointer', transition: '0.3s'
                            }}
                        >Authenticate</button>
                    </div>
                </div>
            </section>

            {/* 2. Social Proof / Client logos */}
            <section style={{ padding: '6rem 0', background: '#FAFAFA', borderY: '1px solid #EEE' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', fontWeight: 900, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', color: '#BBB', marginBottom: '3rem' }}>Powering the next generation of wealth</p>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', opacity: 0.5, filter: 'grayscale(100%)', flexWrap: 'wrap', gap: '2rem' }}>
                        {brands.map(brand => (
                            <h3 key={brand} style={{ fontWeight: 950, fontSize: '1.5rem', letterSpacing: '-1px' }}>{brand}</h3>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features Section */}
            <section style={{ padding: '12rem 0' }} className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Capabilities</span>
                    <h2 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px', marginTop: '1rem' }}>Engineered for Perfection.</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                    {features.map(f => (
                        <div key={f.title} className="auth-glass-card" style={{ padding: '3.5rem' }}>
                            <span className="material-symbols-rounded" style={{ fontSize: '3rem', color: '#276EF1', marginBottom: '1.5rem' }}>{f.icon}</span>
                            <h3 style={{ fontWeight: 950, fontSize: '2rem', marginBottom: '1rem' }}>{f.title}</h3>
                            <p style={{ color: '#888', fontWeight: 600, lineHeight: '1.6', fontSize: '1.1rem' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. How It Works */}
            <section style={{ padding: '12rem 0', background: '#000', color: '#FFF' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Protocol</span>
                        <h2 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px', marginTop: '1rem' }}>Three Steps to Clarity.</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
                        {[ { s: '01', t: 'Connect', d: 'Invite your circle and set your base currency in seconds.' }, { s: '02', t: 'Log', d: 'Enter expenses as they happen. We handle the math and the FX.' }, { s: '03', t: 'Settle', d: 'Clear balances with zero friction and perfect transparency.' } ].map(step => (
                            <div key={step.s}>
                                <h1 style={{ fontSize: '6rem', fontWeight: 950, color: '#1A1A1A', marginBottom: '-2rem' }}>{step.s}</h1>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>{step.t}</h3>
                                <p style={{ color: '#AAA', fontWeight: 500, fontSize: '1.2rem', lineHeight: '1.6' }}>{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Key Stats / Social Proof 2 */}
            <section style={{ padding: '12rem 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', textAlign: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px' }}>$<CountUp end={820} prefix="" decimals={0} />M+</h2>
                        <p style={{ fontWeight: 800, color: '#888' }}>Processed Monthly</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px' }}><CountUp end={99} prefix="" decimals={0} />.9%</h2>
                        <p style={{ fontWeight: 800, color: '#888' }}>Settlement Rate</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px' }}><CountUp end={240} prefix="" decimals={0} />K</h2>
                        <p style={{ fontWeight: 800, color: '#888' }}>Global Users</p>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section */}
            <section style={{ padding: '12rem 0', background: '#FAFAFA' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: '#276EF1', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Insights</span>
                        <h2 style={{ fontSize: '4rem', fontWeight: 950, letterSpacing: '-3px', marginTop: '1rem' }}>Common Inquiries.</h2>
                    </div>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {faq.map(item => (
                            <div key={item.q} className="auth-glass-card" style={{ padding: '2.5rem', background: '#FFF' }}>
                                <h4 style={{ fontWeight: 950, fontSize: '1.3rem', marginBottom: '1rem' }}>{item.q}</h4>
                                <p style={{ color: '#666', fontWeight: 500, lineHeight: '1.6' }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Final CTA Section */}
            <section style={{ padding: '12rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '6rem', fontWeight: 950, letterSpacing: '-5px', marginBottom: '3rem' }}>Ready to Scale?</h2>
                    <button className="btn-primary" onClick={() => navigate('/register')} style={{ padding: '24px 72px', fontSize: '1.5rem', borderRadius: '24px' }}>
                        Get Started for Free
                    </button>
                    <p style={{ marginTop: '2rem', color: '#AAA', fontWeight: 600 }}>No credit card required. Pure transparency guaranteed.</p>
                </div>
            </section>

            {/* 8. Footer Sub-Section (Newsletter) */}
            <footer style={{ background: '#000', color: '#FFF', padding: '8rem 0 4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '6rem', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginBottom: '1.5rem' }}>ACCURE</h2>
                            <p style={{ color: '#AAA', fontWeight: 500, lineHeight: '1.6' }}>Developing the gold standard for global settlements and social financial intelligence.</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 950, marginBottom: '2rem' }}>Product</h4>
                            <div style={{ display: 'grid', gap: '1rem', color: '#666', fontWeight: 600 }}>
                                <span>Analytics</span><span>Circles</span><span>FX Engine</span><span>Non-Custodial</span>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 950, marginBottom: '2rem' }}>Company</h4>
                            <div style={{ display: 'grid', gap: '1rem', color: '#666', fontWeight: 600 }}>
                                <span>About</span><span>Security</span><span>Transparency</span><span>Legal</span>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 950, marginBottom: '2rem' }}>Newsletter</h4>
                            <input type="email" placeholder="Email Address" style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '1rem', width: '100%', color: '#FFF', marginBottom: '1rem' }} />
                            <button style={{ width: '100%', background: '#FFF', color: '#000', border: 'none', borderRadius: '12px', padding: '1rem', fontWeight: 900 }}>Join Elite</button>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #111', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', color: '#444', fontWeight: 800, fontSize: '0.8rem' }}>
                        <span>© 2026 ACCURE AG. ALL RIGHTS RESERVED.</span>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <span>PRIVACY POLICY</span><span>TERMS OF SERVICE</span><span>COOKIE SETTINGS</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
