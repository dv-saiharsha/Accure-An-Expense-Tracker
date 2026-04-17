import React from 'react';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
    const navigate = useNavigate();
    const groups = [
        { id: 1, name: 'NYC Apartment', members: 4, balance: 320, type: 'Flatmates' },
        { id: 2, name: 'Japan Trip 2026', members: 6, balance: -180, type: 'Travel' },
        { id: 3, name: 'Studio Partners', members: 3, balance: 1450, type: 'Business' }
    ];

    return (
        <div className="page" style={{ paddingTop: '1.5rem' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                        <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.6rem' }}>Networks</span>
                        <h1 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.2rem' }}>Circles</h1>
                    </div>
                    <button onClick={() => navigate('/groups')} style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#000', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <span className="material-symbols-rounded" style={{ color: '#FFF', fontSize: '1.3rem' }}>add</span>
                    </button>
                </div>

                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {groups.map(g => (
                        <div key={g.id} className="glass-card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '44px', height: '44px', background: '#F5F5F5', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-rounded" style={{ fontSize: '1.3rem' }}>groups</span>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 900, fontSize: '1rem', marginBottom: '0.15rem' }}>{g.name}</h4>
                                    <p style={{ fontSize: '0.7rem', color: '#AAA', fontWeight: 700 }}>{g.members} members &bull; {g.type}</p>
                                </div>
                            </div>
                            <h4 style={{ fontWeight: 950, fontSize: '1.1rem', color: g.balance >= 0 ? '#43A047' : '#E53935' }}>
                                {g.balance >= 0 ? '+' : ''}${Math.abs(g.balance)}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Groups;
