import React from 'react'
import { SkillsInfo } from "../../Constant";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <div id="skills" className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom">

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
          {/* Changed underline to pink */}
          <div className='w-24 h-1 bg-pink-500 mx-auto mt-4'></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 py-4">

          {SkillsInfo.map((category) => (
            <div key={category.title} className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(236,72,153,0.3)] flex flex-col h-full">
              {/* Added h-full and flex-col to make cards equal height automatically */}
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-8 text-center">{category.title}</h3>

              {/* Skill Items */}
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
                className="flex-grow flex items-center"
              >
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 w-full'>
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col xl:flex-row items-center justify-center gap-2 bg-transparent border-2 border-gray-700 rounded-xl py-3 px-2 text-center hover:border-pink-500 transition-colors duration-300">
                      <img src={skill.logo} alt={`${skill.name} logo`} className='w-7 h-7 object-contain' />
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Tilt>

            </div>
          ))}
          
        </div>
      </div>

    </div>
  )
}

export default Skills
