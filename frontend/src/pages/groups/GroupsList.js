import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupsList = () => {
    const navigate = useNavigate();
    const groups = [
        { id: 1, name: 'Flatmates', members: ['You', 'Sarah', 'Mike'], balance: 120 },
        { id: 2, name: 'Euro Trip', members: ['You', 'Harvey'], balance: -45 }
    ];

    const hasContactPermission = localStorage.getItem("accure_contacts_allowed") === "true";

    const enableContacts = () => {
        localStorage.setItem("accure_contacts_allowed", "true");
        window.location.reload();
    };

    return (
        <div className="container" style={{ marginTop: '8rem', paddingBottom: '10rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                <div>
                    <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Collective Ledger</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', marginTop: '0.5rem' }}>Your Circles</h1>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {!hasContactPermission && (
                        <button onClick={enableContacts} className="btn-primary" style={{ background: '#FFF', color: '#000', border: '1px solid #EEE' }}>
                            <span className="material-symbols-rounded">sync</span> Sync Contacts
                        </button>
                    )}
                    <button className="btn-primary" onClick={() => navigate('/create-group')}>Create New Circle</button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {groups.map(group => (
                    <div key={group.id} className="auth-glass-card" style={{ padding: '2.5rem', cursor: 'pointer', transition: '0.3s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontWeight: 950, fontSize: '1.5rem', margin: 0 }}>{group.name}</h3>
                            <span className="material-symbols-rounded" style={{ color: '#276EF1' }}>chevron_right</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {group.members.map(member => (
                                <span key={member} style={{ background: '#F5F5F5', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 800, color: '#666' }}>{member}</span>
                            ))}
                        </div>
                        <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ margin: 0, fontWeight: 900, fontSize: '0.75rem', color: '#BBB' }}>SETTLEMENT</p>
                            <h4 style={{ margin: 0, fontWeight: 950, color: group.balance > 0 ? '#43A047' : '#E53935' }}>
                                {group.balance > 0 ? `Owed $${group.balance}` : `You owe $${Math.abs(group.balance)}`}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupsList;
