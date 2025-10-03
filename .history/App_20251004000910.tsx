import React, { useState, useEffect } from 'react';
import LandingAnimation from './components/LandingAnimation';
import FloatingPetals from './components/FloatingPetals';
import Section from './components/Section';
import { CalendarIcon, ClockIcon, MapPinIcon, MailIcon, PhoneIcon, UtensilsIcon } from './components/Icons';
import FamilyEnteringHouseAnimation from './components/FamilyEnteringHouseAnimation';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Animation duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LandingAnimation />;
  }

  return (
    <div className="bg-[#FFF8E1] text-[#4E342E] min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <main className="relative z-10">
        <Header />
        <InvitationSection />
        <EventDetailsSection />
        <FamilySection />
        <BlessingsSection />
        <Footer />
      </main>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="py-20 md:py-28 text-center text-amber-100 bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(78, 52, 46, 0.8), rgba(78, 52, 46, 0.8)), url('https://i.postimg.cc/CxH97dqW/Whats-App-Image-2025-10-02-at-19-34-08-977bb1d6.jpg')`}}>
     <Section>
        <p className="text-xl md:text-2xl text-amber-300">Join us for the</p>
        <h1 className="font-display text-6xl md:text-8xl my-4 text-amber-200">Housewarming Ceremony - Kotha's'  Family</h1>
        <p className="text-xl md:text-2xl text-amber-300">of our new home</p>
     </Section>
  </header>
);

const InvitationSection: React.FC = () => (
    <Section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-5xl text-red-900 mb-6">With hearts full of joy...</h2>
        <p className="font-telugu text-xl md:text-2xl leading-loose text-stone-700">
            మేము, <span className="font-bold text-red-800">కొత్త రామమోహన్ & భవాని </span> మరియు మా ప్రియమైన కుమారుడు <span className="font-bold text-red-800">కొత్త నితిన్ భార్గవ్ </span>
            తో కలిసి ఆనందం మరియు ఆశలు, ఆకాంక్షలతో నిండిన మా నూతన గృహంలోకి అడుగు పెడుతున్నాము. ఈ మధురక్షణాన్ని, ప్రేమ, నవ్వులు, ఆప్యాయతలు, మీ అమూల్యమైన ఆశీస్సులతో మరింత శోభయమానంగా మార్చుకోవాలని మనస్ఫూర్తిగా కోరుతున్నాము. మీ రాక మాకు అపార ఆనందాన్ని అందిస్తూ చిరస్మరణీయంగా నిలుపుతుంది. 
        </p>


        <p className="font-telugu text-xl md:text-2xl leading-loose text-stone-700 mt-6">
            ఈ <span className="font-bold text-red-800">గృహప్రవేశ కార్యక్రమం</span> 
            <span className="font-bold text-red-800"> 11-10-2025 (11th October), శనివారం</span>, ఆశ్వయుజ బహుళ పంచమి,
            <span className="font-bold text-red-800"> రోహిణి నక్షత్రం</span>, 
            <span className="font-bold text-red-800"> వృషభ లగ్నం </span>లో, 
            <span className="font-bold text-red-800"> పుష్కరాంశ </span> యందు, 
            <span className="font-bold text-red-800"> రాత్రి 8:42 గంటలకు</span> నుండి జరుగును..
        <p className="font-telugu text-xl md:text-2xl leading-loose text-stone-700 mt-6">
            <span className="font-bold text-red-800">12-10-2025 (12th October), ఆదివారము,</span> ఉదయం 9:00 గంటలకు 
            <span className="font-bold text-red-800"> శ్రీ సత్యనారాయణ స్వామి వారి వ్రతము</span> తదుపరి.  
             <span className="font-bold text-red-800">మధ్యాహ్నం 12:00 గంటలనుండి </span> విందు ఏర్పాటు చేయుటమయినది.
        
        </p>

        <p>
            మీరు తప్పక విచ్చేసి మీ అభినందనలు, ఆశీస్సులు అందచేయవలసిందిగా కోరుతున్నాము</p>


            {/* <br /><br />
            మీ ఆశీర్వాదాలు, అభినందనలు మా గృహానికి <span className="font-bold text-red-800">శుభవైభవాన్ని</span>, 
            మా హృదయాలకు <span className="font-bold text-red-800">ఆనందాన్ని</span> అందించి,  */}
            {/* ఈ ప్రత్యేక దినాన్ని <span className="font-bold text-red-800">చిరస్మరణీయంగా</span> చేస్తుంది. */}
        </p>
    </Section>
);

const EventDetailsSection: React.FC = () => (
    <Section className="py-16 px-6 bg-red-900/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl text-red-900 mb-12">Ceremonies</h2>
            
            {/* Event 1: Housewarming */}
            <div className="mb-12">
                <h3 className="font-display text-4xl text-red-800 mb-2">Gruhapravesam</h3>
                <p className="font-telugu text-2xl text-stone-700 mb-8">గృహప్రవేశం </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-800">
                    <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <CalendarIcon className="w-12 h-12 text-amber-600 mb-3" />
                        <h4 className="text-2xl font-bold mb-1">Date</h4>
                        <p className="text-lg">Saturday, 11th of October, 2025</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <ClockIcon className="w-12 h-12 text-amber-600 mb-3" />
                        <h4 className="text-2xl font-bold mb-1">Time</h4>
                        <p className="text-lg">08:42PM onwards</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <MapPinIcon className="w-12 h-12 text-amber-600 mb-3" />
                        <h4 className="text-2xl font-bold mb-1">Venue</h4>
                        <p className="text-lg">Sai Krishna Home , Near Gorantla-Kakani Road , Gorantla , Guntur</p>
                        <a href="https://maps.app.goo.gl/Uvsg3AJyijVXM1be9" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 transition-colors mt-2 underline">View on Map</a>
                    </div>
                </div>
            </div>

            <div className="w-32 h-1 bg-amber-300 mx-auto my-16 rounded-full"></div>

            {/* Event 2: Satyanarayana Swamy Vratham */}
            <div>
                <h3 className="font-display text-4xl text-red-800 mb-2">Sri Satyanarayana Swamy Vratham</h3>
                <p className="font-telugu text-2xl text-stone-700 mb-8">శ్రీ సత్యనారాయణ స్వామి వారి వ్రతము</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-800">
                     <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <CalendarIcon className="w-12 h-12 text-amber-600 mb-3" />
                        <h4 className="text-2xl font-bold mb-1">Date</h4>
                        <p className="text-lg">Sunday, 12th of October, 2025</p>
                    </div>
                     <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <ClockIcon className="w-12 h-12 text-amber-600 mb-3" />
                        <h4 className="text-2xl font-bold mb-1">Time</h4>
                        <p className="text-lg">9:00 AM onwards</p>
                    </div>
                     <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <UtensilsIcon className="w-12 h-12 text-amber-600 mb-3" />
                        <h4 className="text-2xl font-bold mb-1">Lunch</h4>
                        <p className="text-lg">12:00 PM onwards</p>
                    </div>
                </div>
                 <p className="text-lg mt-8 text-stone-700">The Vratham will be followed by lunch at our new home.</p>
            </div>
        </div>
    </Section>
);


const FamilySection: React.FC = () => (
    <Section className="py-16 px-6 text-center max-w-4xl mx-auto">
         <h2 className="font-display text-5xl text-red-900 mb-8">A Place to Call Home</h2>
         <p className="text-xl text-stone-700 mb-12">
            Our journey has led us to a new door, and we are eager to fill our home with love, laughter, and cherished memories with all of you.
         </p>
         <FamilyEnteringHouseAnimation />
    </Section>
);

const BlessingsSection: React.FC = () => (
    <Section className="py-16 px-6 text-center max-w-4xl mx-auto">
         <h2 className="font-display text-5xl text-red-900 mb-8">Blessings</h2>
        <blockquote className="relative p-8">
            <p className="text-2xl italic text-stone-700">"ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"</p>
            <p className="text-lg text-stone-600 mt-4">"Om, may all be happy, may all be free from illness."</p>
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-400 rounded-br-2xl"></div>
        </blockquote>
    </Section>
);

const Footer: React.FC = () => (
    <footer className="py-12 px-6 text-center bg-[#4E342E] text-amber-100">
        <Section>
            <p className="text-xl mb-4">For Your Assistance, feel free to reach out:</p>
            <div className="flex justify-center items-center space-x-6">
                <a href="tel:+917702632608" className="flex items-center space-x-2 hover:text-amber-300 transition-colors">
                    <PhoneIcon className="w-6 h-6" />
                    <span>Call 📞</span>
                </a>
                <a href="mailto:nitinbhargav2002@gmail.com" className="flex items-center space-x-2 hover:text-amber-300 transition-colors">
                    <MailIcon className="w-6 h-6" />
                    <span>Mail 📧</span>
                </a>
            </div>
            {/* <p className="mt-8 text-amber-300/70">Crafted with love for our new beginning.</p> */}
            <p className="mt-4 text-sm text-amber-300/70">
                With Best Wishes Crafted by <a href="https://dhakshin-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-200 transition-colors">Dhakshin Kotha 😉 ( Click Me !! )</a>
            </p>
        </Section>
    </footer>
);

export default App;