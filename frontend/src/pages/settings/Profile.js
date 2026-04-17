import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Premium User',
        currency: 'USD',
        avatar: 'JD',
        bankAccounts: [
            { id: 1, name: 'Chase Bank', balance: 4500.00, last4: '4242' },
            { id: 2, name: 'Zelle Pay', balance: 120.50, last4: '8810' }
        ]
    };

    const [isAddingBank, setIsAddingBank] = useState(false);

    return (
        <div className="container animate-scale" style={{marginTop: '4rem', maxWidth: '800px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem'}}>
                <div>
                     <span style={{textTransform: 'uppercase', fontWeight: 900, color: '#276EF1', letterSpacing: '2px', fontSize: '0.65rem'}}>Settings</span>
                     <h1 className="section-title" style={{marginTop: '0.5rem'}}>Account</h1>
                </div>
                <button className="btn-cta" style={{background: '#E53935'}} onClick={() => navigate('/login')}>Sign Out</button>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem'}}>
                {/* Left: User Card */}
                <div className="auth-glass-card" style={{padding: '2rem', textAlign: 'center'}}>
                    <div style={{width: '100px', height: '100px', background: '#000', color: '#FFF', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 950}}>
                        {user.avatar}
                    </div>
                    <h3 style={{margin: 0, fontWeight: 900}}>{user.name}</h3>
                    <p style={{color: '#888', fontWeight: 600, fontSize: '0.8rem'}}>{user.email}</p>
                    <div className="currency-badge" style={{marginTop: '1rem'}}>{user.role}</div>
                    
                    <div style={{marginTop: '2rem', textAlign: 'left'}}>
                        <p style={{fontSize: '0.65rem', fontWeight: 900, color: '#888', textTransform: 'uppercase'}}>Preferences</p>
                        <div style={{padding: '1rem', background: '#F9F9F9', borderRadius: '12px', marginTop: '0.5rem'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                                <span style={{fontWeight: 700, fontSize: '0.8rem'}}>Currency</span>
                                <span style={{fontWeight: 900, color: '#276EF1'}}>{user.currency}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Bank Management (Zelle Style) */}
                <div className="auth-glass-card" style={{padding: '2.5rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
                        <h3 style={{margin: 0, fontWeight: 900}}>Linked Accounts</h3>
                        <button className="btn-cta" style={{padding: '0.5rem 1rem'}} onClick={() => setIsAddingBank(!isAddingBank)}>
                             <span className="material-symbols-rounded">add</span>
                             <span>Connect Bank</span>
                        </button>
                    </div>

                    <div style={{display: 'grid', gap: '1.25rem'}}>
                        {user.bankAccounts.map(bank => (
                            <div key={bank.id} style={{padding: '1.5rem', background: '#F5F5F5', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1.5px solid transparent', transition: '0.2s'}} 
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#000'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                    <div style={{width: '44px', height: '44px', background: '#FFF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                         <span className="material-symbols-rounded" style={{color: '#276EF1'}}>account_balance</span>
                                    </div>
                                    <div>
                                        <h4 style={{margin: 0, fontWeight: 800}}>{bank.name}</h4>
                                        <p style={{margin: 0, fontSize: '0.7rem', color: '#888', fontWeight: 600}}>Account ends in {bank.last4}</p>
                                    </div>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontSize: '0.6rem', fontWeight: 900, color: '#888'}}>AVAILABLE</p>
                                    <h4 style={{margin: 0, fontWeight: 900}}>${bank.balance.toFixed(2)}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isAddingBank && (
                        <div className="animate-slide" style={{marginTop: '2rem', padding: '1.5rem', background: '#FDF7F7', borderRadius: '16px', border: '1.5px dashed #E53935'}}>
                            <p style={{margin: 0, fontWeight: 800, color: '#E53935', fontSize: '0.8rem'}}>Connecting to secure banking portal...</p>
                            <div className="float-field" style={{marginTop: '1rem'}}>
                                <input type="text" placeholder=" " />
                                <label>Routing Number</label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
