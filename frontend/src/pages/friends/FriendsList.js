import React, { useState, useEffect } from 'react';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                // Mocking data for now as per "Delight" requirement
                const mockFriends = [
                    { id: 1, username: 'Sarah Jenkins', email: 'sarah@accure.com', balance: 450, status: 'Active' },
                    { id: 2, username: 'Michael Ross', email: 'mike@accure.com', balance: -120, status: 'Active' },
                    { id: 3, username: 'Harvey Specter', email: 'harvey@accure.com', balance: 0, status: 'Away' }
                ];
                setFriends(mockFriends);
            } catch (err) {
                console.error("Error fetching friends:", err);
            }
        };
        fetchFriends();
    }, []);

    return (
        <div className="container" style={{ marginTop: '8rem' }}>
            <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Social Network</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', marginTop: '0.5rem' }}>Financial Circle</h1>
                </div>
                <button className="btn-primary">Add Contact</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {friends.map(friend => (
                    <div key={friend.id} className="auth-glass-card" style={{ padding: '2rem', transition: '0.3s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ 
                                width: '64px', height: '64px', borderRadius: '50%', background: '#000', color: '#FFF',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900
                            }}>
                                {friend.username[0]}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ margin: 0, fontWeight: 900 }}>{friend.username}</h3>
                                <p style={{ margin: 0, color: '#888', fontWeight: 600 }}>{friend.email}</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FAFAFA', padding: '1.5rem', borderRadius: '20px' }}>
                            <div>
                                <p style={{ margin: 0, fontSize: '0.65rem', fontWeight: 900, color: '#BBB' }}>SETTLEMENT STATUS</p>
                                <h4 style={{ margin: 0, fontWeight: 950, color: friend.balance > 0 ? '#43A047' : friend.balance < 0 ? '#E53935' : '#888' }}>
                                    {friend.balance > 0 ? `Owes you $${friend.balance}` : friend.balance < 0 ? `You owe $${Math.abs(friend.balance)}` : 'Diamond Clean'}
                                </h4>
                            </div>
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <span className="material-symbols-rounded" style={{ color: '#276EF1' }}>arrow_forward_ios</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;
