import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Award } from 'lucide-react';
import { achievementsList } from '../../Constant'; 

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2">
        <div className="w-full max-w-7xl mx-auto">
            
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
                    A showcase of my competitive programming milestones and algorithmic problem-solving accolades, demonstrating my readiness to tackle complex challenges opportunities.
                </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 justify-items-center">
                {achievementsList.map((item) => (
                    <Tilt 
                        key={item.id}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={1000}
                        className="w-full max-w-md flex flex-col h-full"
                    >
                        <div className="group flex-grow flex flex-col border border-white/20 bg-gray-900 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-300">
                            
                            {/* Image Slide */}
                            <div className="w-full p-4 pb-0 relative">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-48 sm:h-56 object-cover rounded-xl border border-gray-800 group-hover:border-[#8245ec]/50 transition-colors duration-500" 
                                />
                                {/* Purple Badge Icon */}
                                <div className="absolute top-6 right-6 bg-[#8245ec] p-2 rounded-full shadow-lg shadow-[#8245ec]/40">
                                    <Award className="w-5 h-5 text-white" />
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
                ))}
            </div>
            
        </div>
    </section>
  );
};

export default Achievements;
