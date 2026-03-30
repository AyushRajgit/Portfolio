import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImg from '../../assets/profile_pic/ayush_pic(1).jpg';

const About = () => {
  return (
    <div id='about' className='py-4 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32'>

      {/* Added max-w-7xl and mx-auto for perfect alignment with other sections */}
      <div className='w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16'>

        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex flex-col items-center md:items-start'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ayush Raj
          </h2>

          {/* Skills heading with typing effect */}
          {/* Changed text color to pink */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-pink-500 leading-tight">
            <span className="text-white">I am a </span>
            <span>
              <Typewriter
                words={['Competitive Programmer', 'Web Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed max-w-2xl">
            I'm a Java enthusiast and competitive programmer.
            Currently, Knight @LeetCode, Specialist @Codeforces, 3★ @CodeChef.
            Exploring full-stack web development with MERN stack, building real-world projects, and actively seeking internship opportunities to apply my skills.
            Vice-President at DevUp Club, guided by the values of Lord Ram and Hanuman Ji, I strive for consistency, clarity, and continuous improvement.
          </p>

          {/* Resume Button */}
          {/* Replaced inline styles with Tailwind pink/rose gradients and glowing shadow */}
          <a
            href="https://drive.google.com/file/d/1t4eu356lJq8TtABle8lOROdXqC9YyAWB/view?usp=sharing"
            target='_blank'
            rel='noopener noreferrer'
            className="inline-block text-white py-3 px-8 rounded-full mt-2 text-lg font-bold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-pink-600 to-rose-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]"
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          {/* Changed border to pink */}
          <Tilt className="w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] border-4 border-pink-500 rounded-full flex-shrink-0"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
            {/* Fixed typo in drop-shadow rgba syntax and made it pink */}
            <img src={profileImg} alt="Ayush Raj"
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(236,72,153,0.5)]' />
          </Tilt>
        </div>
        
      </div>
    </div>
  )
}

export default About;
