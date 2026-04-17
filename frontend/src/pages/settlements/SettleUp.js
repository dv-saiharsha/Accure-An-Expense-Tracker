import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettleUp = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [whoPaid, setWhoPaid] = useState('you'); // 'you' or 'them'

    const friends = [
        { id: 1, name: 'John Doe', amount: 45.00 },
        { id: 2, name: 'Jane Smith', amount: 25.50 }
    ];

    return (
        <div className="container animate-scale" style={{marginTop: '4rem', maxWidth: '600px'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                 <div style={{width: '64px', height: '64px', background: '#E8F5E9', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'}}>
                    <span className="material-symbols-rounded" style={{fontSize: '2.5rem', color: '#43A047'}}>payments</span>
                 </div>
                 <h1 className="section-title">Record a Payment</h1>
                 <p style={{color: '#888', fontWeight: 600}}>Select a friend to settle balances</p>
            </div>
            
            <div className="auth-glass-card" style={{marginTop: '2rem', minHeight: '400px'}}>
                {step === 1 && (
                    <div className="animate-slide">
                        <p style={{marginBottom: '1.5rem', fontWeight: 700, fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px'}}>Current Outstanding</p>
                        <div style={{display: 'grid', gap: '1rem'}}>
                            {friends.map(friend => (
                                <div key={friend.id} 
                                     onClick={() => { setSelectedFriend(friend); setStep(2); }}
                                     style={{padding: '1.25rem', border: '2px solid #F5F5F5', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                                     onMouseEnter={(e) => {
                                         e.currentTarget.style.borderColor = '#000';
                                         e.currentTarget.style.background = '#FAFAFA';
                                     }}
                                     onMouseLeave={(e) => {
                                         e.currentTarget.style.borderColor = '#F5F5F5';
                                         e.currentTarget.style.background = 'transparent';
                                     }}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                        <div style={{width: '44px', height: '44px', background: '#000', color: '#FFF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900}}>
                                            {friend.name.charAt(0)}
                                        </div>
                                        <div>
                                            <span style={{fontWeight: 800, display: 'block'}}>{friend.name}</span>
                                            <span style={{fontSize: '0.7rem', color: '#888', fontWeight: 600}}>Settlement Pending</span>
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'right'}}>
                                        <p style={{margin: 0, fontSize: '0.6rem', fontWeight: 900, color: '#888'}}>TOTAL OWE</p>
                                        <span style={{fontWeight: 900, color: '#E53935'}}>${friend.amount.toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-scale">
                        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
                            <div style={{width: '80px', height: '80px', background: '#F0F0F0', color: '#000', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 950, border: '4px solid #FFF', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
                                {selectedFriend.name.charAt(0)}
                            </div>
                            <h3 style={{margin: 0, fontWeight: 900, fontSize: '1.5rem'}}>Settle with {selectedFriend.name}</h3>
                            <p style={{color: '#888', fontWeight: 600}}>Enter the payment details</p>
                        </div>

                        <div className="float-field" style={{marginBottom: '2rem'}}>
                            <input type="number" defaultValue={selectedFriend.amount} placeholder=" " required />
                            <label>Amount (USD)</label>
                        </div>

                        <div style={{
                            display: 'flex', 
                            background: '#F5F5F5', 
                            padding: '0.4rem', 
                            borderRadius: '14px', 
                            position: 'relative',
                            marginBottom: '2.5rem'
                        }}>
                            <button 
                                onClick={() => setWhoPaid('you')}
                                style={{
                                    flex: 1, border: 'none', padding: '1rem', borderRadius: '10px', cursor: 'pointer',
                                    fontWeight: 900, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    transition: '0.3s', zIndex: 2,
                                    background: whoPaid === 'you' ? '#FFF' : 'transparent',
                                    color: whoPaid === 'you' ? '#000' : '#888',
                                    boxShadow: whoPaid === 'you' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                                }}>
                                <span className="material-symbols-rounded" style={{fontSize: '1.2rem'}}>person</span>
                                You paid him
                            </button>
                            <button 
                                onClick={() => setWhoPaid('them')}
                                style={{
                                    flex: 1, border: 'none', padding: '1rem', borderRadius: '10px', cursor: 'pointer',
                                    fontWeight: 900, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    transition: '0.3s', zIndex: 2,
                                    background: whoPaid === 'them' ? '#FFF' : 'transparent',
                                    color: whoPaid === 'them' ? '#000' : '#888',
                                    boxShadow: whoPaid === 'them' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                                }}>
                                <span className="material-symbols-rounded" style={{fontSize: '1.2rem'}}>group</span>
                                He paid you
                            </button>
                        </div>

                        <div style={{display: 'flex', gap: '1rem' }}>
                            <button className="btn-cta" style={{flex: 1, background: '#F5F5F5', color: '#000', border: 'none'}} onClick={() => setStep(1)}>
                                <span className="material-symbols-rounded">close</span>
                                <span>Cancel</span>
                            </button>
                            <button className="btn-cta" style={{flex: 2}} onClick={() => navigate('/dashboard')}>
                                <span className="material-symbols-rounded">verified</span>
                                <span>Save Settlement</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettleUp;
