import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const GroupDetails = () => {
    const { id } = useParams();
    const [group] = useState({ id, name: 'Roommates', balance: -120.40 });
    const [expenses] = useState([
        { id: 1, title: 'Rent Payment', amount: 1500, paidBy: 'You', yourShare: 750, date: '2026-04-10' },
        { id: 2, title: 'Groceries', amount: 80, paidBy: 'John', yourShare: 40, date: '2026-04-12' },
        { id: 3, title: 'Electricity bill', amount: 120, paidBy: 'You', yourShare: 60, date: '2026-04-15' }
    ]);

    return (
        <div className="container animate-scale" style={{marginTop: '4rem'}}>
            <Link to="/groups" style={{textTransform: 'uppercase', fontWeight: 900, fontSize: '0.65rem', color: '#888', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Groups
            </Link>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid #EEE', paddingBottom: '2rem'}}>
                <div>
                    <h1 className="section-title">{group.name}</h1>
                    <div style={{display: 'flex', gap: '2rem', marginTop: '1rem'}}>
                        <div>
                            <p style={{fontSize: '0.65rem', textTransform: 'uppercase', color: '#888', fontWeight: 900}}>Group Balance</p>
                            <p style={{fontSize: '1.2rem', fontWeight: 900, color: group.balance < 0 ? '#E53935' : '#43A047'}}>
                                {group.balance < 0 ? `You owe $${Math.abs(group.balance).toFixed(2)}` : `You are owed $${group.balance.toFixed(2)}`}
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <Link to="/settlements" className="btn-cta" style={{background: '#000', color: '#FFF', border: '1px solid #000'}}>
                        <span>Settle Up</span>
                    </Link>
                    <button className="btn-cta">
                        <span>Add Expense</span>
                    </button>
                </div>
            </div>

            <div style={{marginTop: '3rem'}}>
                {expenses.map((exp, index) => (
                    <div key={exp._id || exp.id} className="expense-row animate-slide" style={{animationDelay: `${index * 0.05}s`}}>
                        <div style={{flex: 1}}>
                            <h4 style={{margin: 0, fontWeight: 800}}>{exp.title}</h4>
                            <p style={{margin: '0.2rem 0 0', fontSize: '0.7rem', color: '#888', fontWeight: 600}}>
                                Paid by <span style={{color: '#000'}}>{exp.paidBy}</span> on {exp.date}
                            </p>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <p style={{margin: 0, fontSize: '0.7rem', color: '#888', fontWeight: 700}}>YOU LENT / OWED</p>
                            <p style={{
                                margin: 0, 
                                fontWeight: 900, 
                                color: exp.paidBy === 'You' ? '#43A047' : '#E53935'
                            }}>
                                {exp.paidBy === 'You' ? `+$${(exp.amount - exp.yourShare).toFixed(2)}` : `-$${exp.yourShare.toFixed(2)}`}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupDetails;
