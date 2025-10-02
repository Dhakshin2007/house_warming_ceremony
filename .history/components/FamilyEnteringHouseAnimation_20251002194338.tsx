import React from 'react';

const FamilyEnteringHouseAnimation: React.FC = () => {
    return (
        <div className="w-full max-w-xl mx-auto aspect-[16/9] relative overflow-hidden rounded-lg bg-amber-50/50 shadow-inner">
            <style>
                {`
                @keyframes grihaPraveshLoop {
                    0% { transform: translateX(-110%); opacity: 0; }
                    15% { transform: translateX(-100%); opacity: 1; }
                    80% { transform: translateX(25%); opacity: 1; }
                    95%, 100% { transform: translateX(25%); opacity: 0; }
                }

                .animate-griha-pravesh-loop {
                    animation: grihaPraveshLoop 2s ease-in-out infinite;
                }
                `}
            </style>

            {/* House and Decorations SVG */}
            <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden="true">
                {/* Background */}
                <rect width="400" height="225" fill="#FEFBF3" />

                {/* Ground */}
                <path d="M0 215 H400" stroke="#D7CCC8" strokeWidth="2" />
                
                {/* House Structure */}
                <rect x="80" y="90" width="240" height="125" fill="#FFF8E1" stroke="#4E342E" strokeWidth="1.5" />
                <path d="M70 95 L200 40 L330 95 Z" fill="#26A69A" stroke="#4E342E" strokeWidth="1.5" />
                
                {/* Door */}
                <rect x="170" y="140" width="60" height="75" fill="#8D6E63" stroke="#4E342E" strokeWidth="2" />
                <circle cx="222" cy="178" r="2" fill="#4E342E" />

                {/* Toran (Door Garland) */}
                <path d="M170 140 C 180 150, 190 152, 200 152 S 220 150, 230 140" fill="none" stroke="#FF9800" strokeWidth="3" />
                <circle cx="170" cy="140" r="3" fill="#4CAF50" />
                <circle cx="230" cy="140" r="3" fill="#4CAF50" />
                <circle cx="200" cy="152" r="4" fill="#F44336" />

                {/* Windows */}
                <rect x="100" y="150" width="40" height="30" fill="#E0F7FA" stroke="#4E342E" strokeWidth="1" />
                <rect x="260" y="150" width="40" height="30" fill="#E0F7FA" stroke="#4E342E" strokeWidth="1" />

                {/* Sun */}
                <circle cx="350" cy="50" r="15" fill="#FFC107" />
            </svg>

            {/* Family Animation */}
            <div className="absolute inset-0 w-full h-full animate-griha-pravesh-loop">
                <svg viewBox="0 0 400 225" className="w-full h-full" aria-hidden="true">
                    {/* Family group */}
                    <g transform="translate(0, 155)">
                        {/* Father */}
                        <circle cx="40" cy="35" r="8" fill="#3F51B5"/>
                        <rect x="35" y="43" width="10" height="20" fill="#3F51B5"/>
                        {/* Mother */}
                        <circle cx="65" cy="35" r="8" fill="#E91E63"/>
                        <path d="M60 43 L 70 43 L 75 63 L 55 63 Z" fill="#E91E63" />
                        {/* Child */}
                        <circle cx="90" cy="45" r="6" fill="#00BCD4"/>
                        <rect x="86" y="51" width="8" height="15" fill="#00BCD4"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

// FIX: Add default export to make the component available for import.
// The component was also incomplete and has been finished.
export default FamilyEnteringHouseAnimation;