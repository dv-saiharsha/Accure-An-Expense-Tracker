import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
    const [name, setName] = useState('');
    const [members, setMembers] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Updated logic for group creation
            console.log("Creating group:", { name, members });
            // await axios.post('/api/groups', { name, members: members.split(",") });
            navigate('/groups');
        } catch (err) {
            console.error("Scale error:", err);
        }
    };

    return (
        <div className="container" style={{ marginTop: '8rem', maxWidth: '600px' }}>
            <h1 style={{ fontWeight: 950, fontSize: '3rem', letterSpacing: '-1.5px' }}>Forge New Circle</h1>
            <p style={{ color: '#888', fontWeight: 600, marginBottom: '3rem' }}>Combine forces with your closest allies.</p>
            
            <div className="auth-glass-card" style={{ padding: '3rem' }}>
                <form onSubmit={handleSubmit}>
                    <div className="float-field" style={{ marginBottom: '2rem' }}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" " required />
                        <label>Group Identity</label>
                    </div>
                    <div className="float-field" style={{ marginBottom: '3rem' }}>
                        <input type="text" value={members} onChange={(e) => setMembers(e.target.value)} placeholder=" " required />
                        <label>Invitee Emails (comma separated)</label>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Initialize Group
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateGroup;
