import React, { useState } from 'react';

const OnboardingModal = ({ onComplete }) => {
    const [step, setStep] = useState(1); // 1: Terms/Privacy, 2: Contacts
    const [accepted, setAccepted] = useState(false);

    const handleTermsAccept = () => {
        if (accepted) setStep(2);
    };

    const handleContactsResponse = (allowed) => {
        console.log("Contacts permission:", allowed);
        onComplete({ terms: true, contacts: allowed });
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
        }}>
            <div className="auth-glass-card" style={{ 
                maxWidth: '600px', width: '100%', padding: '3.5rem', background: '#FFF', 
                borderRadius: '40px', textAlign: 'center', animation: 'scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
            }}>
                {step === 1 ? (
                    <div>
                        <span className="material-symbols-rounded" style={{ fontSize: '4rem', color: '#276EF1', marginBottom: '1.5rem' }}>gavel</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 950, letterSpacing: '-1.5px' }}>Legal Alignment</h2>
                        <p style={{ color: '#888', fontWeight: 600, marginBottom: '2.5rem' }}>Before we initialize your ledger, please review our terms.</p>

                        <div style={{ 
                            background: '#FAFAFA', padding: '2rem', borderRadius: '24px', 
                            textAlign: 'left', maxHeight: '250px', overflowY: 'auto', 
                            border: '1px solid #EEE', marginBottom: '2.5rem', fontSize: '0.9rem', lineHeight: '1.6' 
                        }}>
                            <h4 style={{ fontWeight: 900, marginBottom: '1rem' }}>Non-Custodial Disclaimer</h4>
                            <p style={{ color: '#666', fontWeight: 500 }}>
                                Accure is a purely analytical ledger and social settlement tracker. 
                                <strong style={{ color: '#000' }}> We do not process payments, handle actual currency transfers, or store any sensitive banking credentials.</strong>
                            </p>
                            <p style={{ color: '#666', fontWeight: 500, marginTop: '1rem' }}>
                                Users are responsible for their own external bank transfers. Accure is not liable for any discrepancies in payments made outside of the platform notation system. 
                                Personal data shared is for social discovery only and is encrypted at rest.
                            </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', cursor: 'pointer' }} onClick={() => setAccepted(!accepted)}>
                            <div style={{ 
                                width: '24px', height: '24px', borderRadius: '6px', 
                                border: '2px solid #000', display: 'flex', alignItems: 'center', 
                                justifyContent: 'center', background: accepted ? '#000' : 'transparent',
                                transition: '0.2s'
                            }}>
                                {accepted && <span className="material-symbols-rounded" style={{ color: '#FFF', fontSize: '1rem' }}>check</span>}
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>I accept the Terms and Privacy Policy</span>
                        </div>

                        <button 
                            disabled={!accepted}
                            onClick={handleTermsAccept}
                            className="btn-primary" 
                            style={{ width: '100%', justifyContent: 'center', opacity: accepted ? 1 : 0.5 }}
                        >
                            Authorize & Continue
                        </button>
                    </div>
                ) : (
                    <div>
                        <span className="material-symbols-rounded" style={{ fontSize: '4rem', color: '#43A047', marginBottom: '1.5rem' }}>group_add</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 950, letterSpacing: '-1.5px' }}>Sync Connections</h2>
                        <p style={{ color: '#888', fontWeight: 600, marginBottom: '3rem' }}>Allow Accure to discover your contacts for seamless expense splitting.</p>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <button 
                                onClick={() => handleContactsResponse(true)}
                                className="btn-primary" 
                                style={{ width: '100%', justifyContent: 'center', height: '64px' }}
                            >
                                Allow Access
                            </button>
                            <button 
                                onClick={() => handleContactsResponse(false)}
                                style={{ 
                                    width: '100%', border: 'none', background: 'transparent', 
                                    fontWeight: 800, color: '#888', cursor: 'pointer', height: '54px' 
                                }}
                            >
                                Not Right Now (Can add later)
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <style>{`
                @keyframes scaleUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
            `}</style>
        </div>
    );
};

export default OnboardingModal;
