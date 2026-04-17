import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div className="expense-list-container">
            {expenses.length === 0 ? (
                <div style={{padding: '2rem', border: '1px dashed #DDD', textAlign: 'center', color: '#888'}}>
                    No transactions recorded yet.
                </div>
            ) : (
                expenses.map((expense, index) => (
                    <div 
                        key={expense._id} 
                        className="expense-row animate-slide" 
                        style={{animationDelay: `${index * 0.05}s`}}
                    >
                        <div className="expense-title">
                            {expense.title}
                        </div>
                        <div className="expense-category">
                            {expense.category}
                        </div>
                        <div className="expense-date" style={{color: '#888', fontSize: '0.8rem'}}>
                            {new Date(expense.date).toLocaleDateString()}
                        </div>
                        <div className="expense-amount">
                            -${expense.amount.toFixed(2)}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ExpenseList;
