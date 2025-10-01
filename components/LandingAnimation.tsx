
import React from 'react';

const MandalaSVG: React.FC = () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 text-amber-300" style={{ filter: `drop-shadow(0 0 15px rgba(253, 224, 71, 0.7))`}}>
        <defs>
            <style>
                {`
                @keyframes draw {
                    from { stroke-dashoffset: 1000; }
                    to { stroke-dashoffset: 0; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
                }
                .mandala-path {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: draw 3s ease-in-out forwards;
                }
                .mandala-core {
                    animation: fadeIn 2s 1s ease-out forwards;
                    opacity: 0;
                }
                `}
            </style>
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="48" className="mandala-path" style={{animationDelay: '0s'}}/>
            <circle cx="50" cy="50" r="40" className="mandala-path" style={{animationDelay: '0.2s'}}/>
            <circle cx="50" cy="50" r="32" className="mandala-path" style={{animationDelay: '0.4s'}}/>
            {Array.from({ length: 12 }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 30}, 50, 50)`}>
                    <path d="M50 10 C 60 25, 60 35, 50 50 C 40 35, 40 25, 50 10 Z" className="mandala-path" style={{animationDelay: `${0.8 + i*0.1}s`}}/>
                </g>
            ))}
        </g>
        <circle cx="50" cy="50" r="8" fill="currentColor" className="mandala-core" />
    </svg>
);

const LandingAnimation: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-[#800000] flex flex-col justify-center items-center z-50 animate-fadeOut 4s forwards">
           <style>
               {`
               @keyframes fadeOut {
                   0%, 80% { opacity: 1; }
                   100% { opacity: 0; visibility: hidden; }
               }
               `}
           </style>
            <MandalaSVG />
            <p className="mt-6 text-xl md:text-2xl text-amber-200 animate-fadeIn 2s 2s forwards opacity-0">A new chapter begins...</p>
        </div>
    );
};

export default LandingAnimation;
