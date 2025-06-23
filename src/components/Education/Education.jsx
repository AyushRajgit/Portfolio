import React from 'react';
import { education } from '../../Constant';

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 1 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >
            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transform transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? 'sm:ml-0' : 'sm:mr-0'} sm:ml-44 sm:mr-44 ml-8`}
            >
              {/* Now vertical layout inside card */}
              <div className="flex flex-col items-center text-center space-y-4">
                {/* School Logo */}
                <div className="w-24 h-20 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree and School */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-md sm:text-sm text-gray-300 mt-1">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>

                {/* Grade and Description */}
                <p className="text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="text-gray-400">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
