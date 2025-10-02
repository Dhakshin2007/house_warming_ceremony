import React from 'react';

const FamilyEnteringHouseAnimation: React.FC = () => {
    return (
        <div className="w-full max-w-lg mx-auto aspect-[16/10] relative overflow-hidden rounded-lg bg-amber-50 shadow-inner">
            <style>
                {`
                @keyframes familyWalk {
                    0% { transform: translateX(-100%); opacity: 1; }
                    70% { transform: translateX(170px); opacity: 1; }
                    90% { transform: translateX(210px); opacity: 1; }
                    100% { transform: translateX(210px); opacity: 0; }
                }

                @keyframes doorOpen {
                    0%, 55% { transform: rotateY(0deg); }
                    80%, 100% { transform: rotateY(-110deg); }
                }

                .animate-family-walk {
                    animation: familyWalk 8s ease-in-out 1s forwards;
                }

                .animate-door-open {
                    transform-origin: left;
                    animation: doorOpen 8s ease-in-out 1s forwards;
                }
                `}
            </style>

            {/* House and Decorations SVG */}
            <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full" aria-hidden="true">
                {/* Ground */}
                <line x1="0" y1="220" x2="400" y2="220" stroke="#c9a78d" strokeWidth="2" />
                
                {/* House outline */}
                <path d="M50 220 L 50 100 L 200 30 L 350 100 L 350 220" stroke="#4E342E" strokeWidth="3" fill="none" />
                
                {/* Toran (Door Garland) */}
                <g transform="translate(170, 100)">
                    <path d="M 0 0 C 15 15, 45 15, 60 0" fill="none" stroke="#228B22" strokeWidth="2" />
                    {/* Marigold flowers */}
                    <circle cx="0" cy="0" r="4" fill="#FF9933" stroke="#E68A00" />
                    <circle cx="30" cy="11" r="5" fill="#FF9933" stroke="#E68A00" />
                    <circle cx="60" cy="0" r="4" fill="#FF9933" stroke="#E68A00" />
                    {/* Mango leaves */}
                    <path d="M 10 3 C 10 10, 20 10, 20 3 Z" fill="#34A853" transform="rotate(20, 15, 6.5)" />
                    <path d="M 40 3 C 40 10, 50 10, 50 3 Z" fill="#34A853" transform="rotate(-20, 45, 6.5)" />
                </g>

                {/* Rangoli */}
                <g transform="translate(200, 230)" fill="none" stroke="#D32F2F" strokeWidth="1.5">
                    <circle cx="0" cy="0" r="8" />
                    <path d="M 0 -12 L 5 -5 L 12 0 L 5 5 L 0 12 L -5 5 L -12 0 L -5 -5 Z" />
                </g>

                {/* Door */}
                <g className="animate-door-open">
                    <rect x="175" y="140" width="50" height="80" fill="#FFF8E1" stroke="#4E342E" strokeWidth="2" />
                    <circle cx="215" cy="180" r="3" fill="#4E342E" />
                </g>

                {/* Window */}
                <rect x="250" y="130" width="60" height="50" fill="none" stroke="#4E342E" strokeWidth="2" />
                <line x1="280" y1="130" x2="280" y2="180" stroke="#4E342E" strokeWidth="2" />
                <line x1="250" y1="155" x2="310" y2="155" stroke="#4E342E" strokeWidth="2" />
            </svg>

            {/* Family SVG in Traditional Attire */}
            <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full text-stone-700 animate-family-walk">
                {/* Woman in Saree */}
                <g transform="translate(85, 180)" fill="#C62828">
                    <circle cx="0" cy="-20" r="7" />
                    <path d="M 0 -13 L -15 35 L 15 35 L 0 -13 Z" />
                    <path d="M -5 -13 C 5 -10, 10 0, 10 5 L 15 35 L 5 35 C 0 20, 0 5, -5 -13 Z" fill="#EF5350"/>
                </g>
                 {/* Man in Kurta */}
                 <g transform="translate(50, 178)" fill="#4E342E">
                    <circle cx="0" cy="-22" r="8" />
                    <path d="M -12 0 L -10 -15 L 10 -15 L 12 0 L 8 42 L -8 42 Z" />
                </g>
                {/* Kid */}
                <g transform="translate(120, 195)" fill="#0288D1">
                    <circle cx="0" cy="-14" r="5" />
                    <path d="M -6 0 L 0 -10 L 6 0 L 4 25 L -4 25 Z" />
                </g>
            </svg>
        </div>
    );
};

export default FamilyEnteringHouseAnimation;
