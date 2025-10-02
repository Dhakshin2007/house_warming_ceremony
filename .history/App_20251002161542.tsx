import React, { useState, useEffect } from 'react';
import LandingAnimation from './components/LandingAnimation';
import FloatingPetals from './components/FloatingPetals';
import Section from './components/Section';
import { CalendarIcon, ClockIcon, MapPinIcon, MailIcon, PhoneIcon } from './components/Icons';

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
        <BlessingsSection />
        <RSVPSection />
        <Footer />
      </main>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="py-12 text-center bg-maroon-dark text-amber-100 bg-cover bg-center" style={{backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')`}}>
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
            మేము, <span className="font-bold text-red-800">Kotha Ramamoharao & Bhavani</span> మరియు మా ప్రియమైన కుమారుడు <span className="font-bold text-red-800">K Nitin Bhargav</span>తో కలిసి, ఆనందం మరియు ఆశలతో నిండిన మా కొత్త గృహంలోకి అడుగుపెడుతున్నాము. ఈ పుణ్యక్షణాన్ని ప్రేమ, నవ్వులు, ఆప్యాయతలు, అలాగే మీ అమూల్యమైన ఆశీస్సులతో మరింత శోభాయమానంగా మార్చుకోవాలని కోరుకుంటున్నాము.

గృహప్రవేశ మహోత్సవానికి మీ రాక మాకు అపార ఆనందాన్ని అందించడమే కాక, ఈ ప్రత్యేక దినాన్ని చిరస్మరణీయంగా నిలిపేస్తుంది. మీ సాన్నిధ్యం మా గృహానికి శుభవైభవాన్ని, మా హృదయాలకు సంతోషాన్ని ప్రసాదిస్తుంది.
        </p>
    </Section>
);

const EventDetailsSection: React.FC = () => (
    <Section className="py-16 px-6 bg-red-900/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl text-red-900 mb-10">Ceremony Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-800">
                <div className="flex flex-col items-center">
                    <CalendarIcon className="w-12 h-12 text-amber-600 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">Date</h3>
                    <p className="text-lg">Saturday, 11th of October, 2025</p>
                </div>
                <div className="flex flex-col items-center">
                    <ClockIcon className="w-12 h-12 text-amber-600 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">Time</h3>
                    <p className="text-lg">11:00 AM onwards</p>
                </div>
                <div className="flex flex-col items-center">
                    <MapPinIcon className="w-12 h-12 text-amber-600 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">Venue</h3>
                    <p className="text-lg">Sai Krishna Home , Near Gorantla-Kakani Road , Gorantla , Guntur</p>
                    <a href="https://maps.app.goo.gl/Uvsg3AJyijVXM1be9" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 transition-colors mt-2 underline">View on Map</a>
                </div>
            </div>
        </div>
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

const RSVPSection: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // IMPORTANT: Replace this with your own Formspree endpoint URL.
    // Go to formspree.io, create a new form, and paste the endpoint here.
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xblzyrkd';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                // FIX: Replace Object.hasOwn with a more compatible check for wider browser support.
                if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                    setError(data["errors"].map((error: { message: string }) => error.message).join(", "));
                } else {
                    setError('Oops! There was a problem submitting your form.');
                }
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section className="py-16 px-6 bg-red-900/5">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display text-5xl text-red-900 mb-8">RSVP</h2>
                {submitted ? (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                        <p className="font-bold">Thank you!</p>
                        <p>Your response has been recorded. We look forward to seeing you!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-left text-lg font-medium text-stone-700 mb-1">Full Name</label>
                            <input type="text" id="name" name="name" required className="w-full p-3 bg-white border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"/>
                        </div>
                        <div>
                           <label className="block text-left text-lg font-medium text-stone-700 mb-2">Will you be attending?</label>
                           <div className="flex justify-center gap-6">
                               <label className="flex items-center space-x-2 text-lg">
                                   <input type="radio" name="attending" value="Yes" required className="w-5 h-5 text-amber-600 focus:ring-amber-500"/>
                                   <span>Yes, with pleasure!</span>
                               </label>
                               <label className="flex items-center space-x-2 text-lg">
                                   <input type="radio" name="attending" value="No" className="w-5 h-5 text-amber-600 focus:ring-amber-500"/>
                                   <span>Sorry, can't make it.</span>
                               </label>
                           </div>
                        </div>
                        {error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4" role="alert">
                                <p>{error}</p>
                            </div>
                        )}
                        <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-3 bg-amber-600 text-white text-lg font-bold rounded-full hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-400/50 disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed">
                            {isSubmitting ? 'Sending...' : 'Send Response'}
                        </button>
                    </form>
                )}
            </div>
        </Section>
    );
};


const Footer: React.FC = () => (
    <footer className="py-12 px-6 text-center bg-[#4E342E] text-amber-100">
        <Section>
            <p className="text-xl mb-4">For any questions, feel free to reach out:</p>
            <div className="flex justify-center items-center space-x-6">
                <a href="tel:+917702632608" className="flex items-center space-x-2 hover:text-amber-300 transition-colors">
                    <PhoneIcon className="w-6 h-6" />
                    <span>+91 77026 32608</span>
                </a>
                <a href="mailto:nitinbhargav2002@gmail.com" className="flex items-center space-x-2 hover:text-amber-300 transition-colors">
                    <MailIcon className="w-6 h-6" />
                    <span>nitinbhargav2002@gmail.com</span>
                </a>
            </div>
            <p className="mt-8 text-amber-300/70">Crafted with love for our new beginning.</p>
        </Section>
    </footer>
);

export default App;