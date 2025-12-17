import React, { useEffect, useState } from 'react';

interface AnimatedTitleProps {
    text: string;
    className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay start

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative inline-block ${className}`}>
            <svg
                viewBox="0 0 600 100"
                className="w-full h-full overflow-visible"
                style={{ maxWidth: '100%', height: 'auto' }}
            >
                <defs>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d97706" /> {/* tiger */}
                        <stop offset="50%" stopColor="#ca8a04" /> {/* yellow-600 */}
                        <stop offset="100%" stopColor="#d97706" /> {/* tiger */}
                    </linearGradient>
                </defs>

                {/* Stroke Animation Layer */}
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="font-heading italic font-bold text-5xl md:text-8xl"
                    style={{
                        fill: 'none',
                        stroke: 'url(#textGradient)',
                        strokeWidth: '2px',
                        strokeDasharray: '1000',
                        strokeDashoffset: isVisible ? '0' : '1000',
                        transition: 'stroke-dashoffset 13s ease-in-out',
                    }}
                >
                    {text}
                </text>

                {/* Fill Animation Layer */}
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="font-heading italic font-bold text-5xl md:text-8xl"
                    style={{
                        fill: 'url(#textGradient)',
                        stroke: 'none',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 2s ease-in-out 2.5s', // Start fading in before stroke finishes
                    }}
                >
                    {text}
                </text>
            </svg>
        </div>
    );
};

export default AnimatedTitle;
