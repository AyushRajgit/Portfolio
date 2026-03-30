import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { achievementsList } from '../../Constant'; 

// Sub-component to handle individual card state (for the image slider)
const AchievementCard = ({ item }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault(); // Prevents page jump
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length);
    };

    return (
        <Tilt 
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            className="w-full max-w-md flex flex-col h-full"
        >
            <div className="group flex-grow flex flex-col border border-white/20 bg-gray-900 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-300">
                
                {/* Image Slider Section */}
                <div className="w-full p-4 pb-0 relative">
                    <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-gray-800 group-hover:border-[#8245ec]/50 transition-colors duration-500">
                        <img 
                            src={item.images[currentIndex]} 
                            alt={`${item.title} slide ${currentIndex + 1}`} 
                            className="w-full h-full object-cover transition-all duration-500" 
                        />
                        
                        {/* Only show arrows if there is more than 1 image */}
                        {item.images.length > 1 && (
                            <>
                                {/* Left Arrow */}
                                <button 
                                    onClick={prevImage} 
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#8245ec] text-white p-1.5 rounded-full backdrop-blur-sm transition-colors duration-300 z-10"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                
                                {/* Right Arrow */}
                                <button 
                                    onClick={nextImage} 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#8245ec] text-white p-1.5 rounded-full backdrop-blur-sm transition-colors duration-300 z-10"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                                    {item.images.map((_, index) => (
                                        <div 
                                            key={index} 
                                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-4 bg-[#8245ec]' : 'w-1.5 bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* Purple Trophy Icon */}
                    <div className="absolute top-6 right-6 bg-[#8245ec] p-2 rounded-full shadow-lg shadow-[#8245ec]/40 z-20">
                        <Trophy className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#8245ec] transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-[#8245ec] text-sm font-semibold mb-3">
                        {item.date}
                    </p>
                    <p className="text-gray-400 text-sm flex-grow leading-relaxed">
                        {item.description}
                    </p>
                </div>

            </div>
        </Tilt>
    );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2">
        <div className="w-full max-w-7xl mx-auto">
            
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
                    A showcase of my competitive programming milestones and algorithmic problem-solving accolades, demonstrating my readiness to tackle complex challenges in upcoming internship opportunities.
                </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 justify-items-center">
                {achievementsList.map((item) => (
                    <AchievementCard key={item.id} item={item} />
                ))}
            </div>
            
        </div>
    </section>
  );
};

export default Achievements;
