import React from 'react';
import { LeafIcon } from './Icons';

const EcoFriendlyLogo: React.FC = () => {
  return (
    <div 
      className="fixed bottom-4 right-4 z-20 flex items-center py-2 px-3 bg-green-100/80 text-green-800 rounded-full shadow-lg backdrop-blur-sm animate-fadeIn"
      style={{ animationDelay: '0.5s' }} // Delay to appear after page content is visible
      role="complementary" 
      aria-label="Save Paper, Save Trees reminder"
    >
      <LeafIcon className="w-5 h-5 mr-2" />
      <span className="text-xs font-semibold tracking-wide">Save Paper, Save Trees</span>
    </div>
  );
};

export default EcoFriendlyLogo;
