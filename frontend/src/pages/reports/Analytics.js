import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Analytics = () => {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Savings Rate',
            data: [1200, 1900, 1500, 2100, 2400, 3100],
            borderColor: '#276EF1',
            backgroundColor: 'rgba(39, 110, 241, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#FFF',
            pointBorderWidth: 3,
            pointBorderColor: '#276EF1',
        }]
    };

    const barData = {
        labels: ['Food', 'Rent', 'Travel', 'Sub', 'Gym', 'Other'],
        datasets: [{
            label: 'Monthly Burn',
            data: [450, 1200, 300, 150, 80, 220],
            backgroundColor: ['#000', '#276EF1', '#000', '#276EF1', '#000', '#276EF1'],
            borderRadius: 12,
        }]
    };

    const options = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { display: false }, ticks: { font: { weight: 700 } } },
            x: { grid: { display: false }, ticks: { font: { weight: 700 } } }
        }
    };

    return (
        <div className="container" style={{ marginTop: '8rem', paddingBottom: '10rem' }}>
            <div style={{ marginBottom: '4rem' }}>
                <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}>Insights</span>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2px', marginTop: '0.5rem' }}>Wealth Intelligence</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div className="auth-glass-card" style={{ padding: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontWeight: 900 }}>Capital Velocity</h3>
                        <span className="material-symbols-rounded" style={{ color: '#276EF1' }}>trending_up</span>
                    </div>
                    <Line data={lineData} options={options} />
                </div>

                <div className="auth-glass-card" style={{ padding: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontWeight: 900 }}>Expense Distribution</h3>
                        <span className="material-symbols-rounded" style={{ color: '#000' }}>pie_chart</span>
                    </div>
                    <Bar data={barData} options={options} />
                </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                {[
                    { label: 'Avg Monthly Spend', value: '$2,450', color: '#000' },
                    { label: 'Savings Efficiency', value: '34.2%', color: '#276EF1' },
                    { label: 'Burn Rate', value: '$82/day', color: '#000' },
                    { label: 'Projection (Next 30d)', value: '+$1,120', color: '#43A047' }
                ].map((stat, i) => (
                    <div className="auth-glass-card" key={i} style={{ padding: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.65rem', fontWeight: 900, color: '#888', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{stat.label}</p>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 950, color: stat.color }}>{stat.value}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Analytics;
