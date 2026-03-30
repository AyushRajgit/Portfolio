import React from "react";
import { codingprofile } from "../../Constant";
import { ExternalLink, Trophy } from 'lucide-react';

const CodingProfile = () => {
    const handleViewProfile = (link) => {
        window.open(link, "_blank");
    };
    
    return (
        <section id="codingprofile" className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2">
            
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">CODING PROFILE</h2>
                    <div className="w-34 h-1 bg-purple-500 mx-auto mt-4"></div>
                    <p className="text-gray-400 mt-4 text-lg font-semibold">
                        Showcasing my competitive programming journey and problem-solving skills across some top coding platforms
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 justify-items-center">
                    {codingprofile.map((profile) => (
                        <div key={profile.id} className="group w-full max-w-md flex flex-col border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_20px_1px_rgba(236,72,153,0.3)] hover:-translate-y-2 transition-all duration-300">

                            <div className="w-full p-4 pb-0">
                                <img src={profile.logo} alt={profile.title} className="w-full h-48 object-cover rounded-xl" />
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center justify-between w-full mb-4">
                                    <h1 className="text-2xl font-bold text-white mb-1">{profile.title}</h1>

                                    <div className="flex items-center text-white text-lg bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                                        <Trophy className="w-4 h-4 mr-2 text-pink-500" />
                                        <span className="text-white text-sm font-semibold">{profile.rank}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-4 flex-grow">{profile.description}</p>
                            </div>

                            <div className="mt-auto">
                                {/* Changed the gradient to from-purple-600 to-pink-500 to match the Contact section */}
                                <button onClick={() => handleViewProfile(profile.link)} className={`w-full bg-gradient-to-r ${profile.bgGradient || 'from-purple-600 to-pink-500'} text-white font-semibold py-4 px-6 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 flex items-center justify-center relative overflow-hidden`} >
                                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <span className="mr-2 relative z-10">View Profile</span>
                                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:scale-110 relative z-10" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default CodingProfile;
