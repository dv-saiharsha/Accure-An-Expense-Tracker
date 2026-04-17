import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2000, prefix = "$", decimals = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out cubic function: f(t) = 1 - (1 - t)^3
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = easedProgress * end;
            
            setCount(currentCount);
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <span>
            {prefix}{count.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            })}
        </span>
    );
};

export default CountUp;
