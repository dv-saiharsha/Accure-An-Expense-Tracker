import React from 'react';

const Success = () => {
    return (
        <div style={{ background: '#FFF', color: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="animate-scale">
                <span className="material-symbols-rounded" style={{ fontSize: '6rem', color: '#000', marginBottom: '2rem' }}>verified</span>
                <h1 style={{ fontSize: '5rem', fontWeight: 950, letterSpacing: '-4px', lineHeight: '0.9' }}>
                    Success <br /> Logged.
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#AAA', fontWeight: 600, marginTop: '2rem' }}>
                    Your data has been harmonized with the cloud.
                </p>
            </div>
        </div>
    );
};

export default Success;
