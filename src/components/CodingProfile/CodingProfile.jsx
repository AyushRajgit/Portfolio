import React from "react";
import { codingprofile } from "../../Constant";
import { ExternalLink, Trophy, Star, Target } from 'lucide-react';

const CodingProfile = () => {
    const handleViewProfile = (link) => {
        window.open(link, "_blank");
    };
    
    return (
        <section id="codingprofile" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 ">

            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">CODING PROFILE</h2>
                <div className="w-36 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Showcasing my competitive programming journey and problem-solving skills across some top coding platforms
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10">
                {codingprofile.map((profile) => (
                    <div key={profile.id} className="w-full sm:w-[70%] border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 ">

                        {/* Profile Header */}
                        <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="w-full p-1" >
                                <img src={profile.logo} alt={profile.title} className="w-full h-49 object-cover rounded-lg" />
                            </div>
                        </div>

                        {/* Profile Details */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="flex items-center justify-between w-full mb-4">
                                <h1 className="text-2xl font-bold text-white mb-1">{profile.title}</h1>

                                <div className="flex items-center text-white text-lg">
                                    <Trophy className="w-4 h-4 mr-2 text-white" />
                                    <span className="text-white">{profile.rank}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4">{profile.description}</p>
                        </div>

                        <button onClick={() => handleViewProfile(profile.link)} className={`w-full bg-gradient-to-r ${profile.bgGradient} text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 flex items-center justify-center group-hover:scale-105 relative overflow-hidden`} >
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="mr-2 relative z-10">View Profile</span>
                            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:scale-110 relative z-10" />
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default CodingProfile;